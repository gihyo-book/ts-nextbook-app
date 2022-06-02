type ResponsiveProp<T> = {
  base?: T
  sm?: T
  md?: T
  lg?: T
  xl?: T
}
export type Responsive<T> = T | ResponsiveProp<T>

export function convertStylePropsString(props: {
  [key: string]: Responsive<any>
}): string {
  const result = []
  for (const key in props) {
    if (
      typeof props[key] == 'string' ||
      typeof props[key] == 'number' ||
      typeof props[key] == 'boolean'
    ) {
      result.push(`${camelToKebabCase(key)}: ${props[key]};`)
    } else if (
      props[key] &&
      ('sm' in props[key] ||
        'md' in props[key] ||
        'lg' in props[key] ||
        'xl' in props[key] ||
        'base' in props[key])
    ) {
      const breakpoints: { [key: string]: string } = {
        sm: '40em',
        md: '52em',
        lg: '64em',
        xl: '80em',
      }
      const responsiveProp = props[key]
      for (const responsiveKey in responsiveProp) {
        if (responsiveKey === 'base') {
          result.push(
            `${camelToKebabCase(key)}: ${responsiveProp[responsiveKey]};`,
          )
        } else if (breakpoints[responsiveKey]) {
          const breakpoint = breakpoints[responsiveKey]
          const style = `${camelToKebabCase(key)}: ${
            responsiveProp[responsiveKey]
          };`
          result.push(`@media screen and (min-width: ${breakpoint}) {${style}}`)
        }
      }
    }
  }

  console.log(result)

  return result.join('\n')
}

function camelToKebabCase(str: string) {
  return str.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`)
}
