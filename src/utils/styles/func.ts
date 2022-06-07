import type { ResponsiveProp, Responsive, Color, Space } from './types'

export function toResponsiveToStyle<T>(propKey: string, prop?: Responsive<T>) {
  if (prop === undefined) return undefined

  if (isResponsivePropType(prop)) {
    const breakpoints: { [key: string]: string } = {
      sm: '40em',
      md: '52em',
      lg: '64em',
      xl: '80em',
    }
    const result = []
    for (const responsiveKey in prop) {
      if (responsiveKey === 'base') {
        result.push(`${propKey}: ${toStyleValue(prop[responsiveKey])};`)
      } else if (
        responsiveKey === 'sm' ||
        responsiveKey === 'md' ||
        responsiveKey === 'lg' ||
        responsiveKey === 'xl'
      ) {
        const breakpoint = breakpoints[responsiveKey]
        const style = `${propKey}: ${toStyleValue(prop[responsiveKey])};`
        result.push(`@media screen and (min-width: ${breakpoint}) {${style}}`)
      }
    }
    return result.join('\n')
  }

  return `${propKey}: ${toStyleValue(prop)};`
}

function toStyleValue<T>(value: T) {
  if (isColor(value)) {
    return `var(--color-${camelToKebabCase(value)})`
  } else if (isSpace(value)) {
    return `var(--size-${value})`
  }

  return value
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function isColor(color: any): color is Color {
  return (
    color === 'primary' ||
    color === 'primaryDark' ||
    color === 'primaryLight' ||
    color === 'secondary' ||
    color === 'secondaryDark' ||
    color === 'secondaryLight' ||
    color === 'border' ||
    color === 'danger' ||
    color === 'dangerDark' ||
    color === 'gray' ||
    color === 'black' ||
    color === 'white'
  )
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function isSpace(space: any): space is Space {
  return (
    space === 'space-1' ||
    space === 'space-2' ||
    space === 'space-3' ||
    space === 'space-4'
  )
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function isResponsivePropType<T>(prop: any): prop is ResponsiveProp<T> {
  return (
    prop &&
    (prop.base !== undefined ||
      prop.sm !== undefined ||
      prop.md !== undefined ||
      prop.lg !== undefined ||
      prop.xl !== undefined)
  )
}

function camelToKebabCase(str: string) {
  return str.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`)
}
