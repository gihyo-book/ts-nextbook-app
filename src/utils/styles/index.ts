import {
  spacings,
  fontSizes,
  letterSpacings,
  lineHeights,
  colors,
  FontSizes,
  LetterSpacings,
  Colors,
  Spacings,
} from './customProperties'
import type { ResponsiveProp, Responsive } from 'types'

const CUSTOM_PROPERTIES_PREFIX = '--gihyo-variables-'

type Keys =
  | keyof Spacings
  | keyof FontSizes
  | keyof LetterSpacings
  | keyof Colors
  | keyof lineHeights

export function getCustomPropertyVar(key: Keys) {
  return `var(${CUSTOM_PROPERTIES_PREFIX}${key})`
}

export function exportCustomProperies(): string {
  const customProperties: { [key: string]: string } = {
    ...spacings,
    ...fontSizes,
    ...letterSpacings,
    ...lineHeights,
    ...colors,
  }
  return Object.entries(customProperties)
    .map(([key, value]) => {
      return `${CUSTOM_PROPERTIES_PREFIX}${key}: ${value};`
    })
    .join('\n')
}

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
  const customProperties: { [key: string]: string } = {
    ...spacings,
    ...fontSizes,
    ...letterSpacings,
    ...lineHeights,
    ...colors,
  }

  if (customProperties[value as unknown as Keys]) {
    return `var(${CUSTOM_PROPERTIES_PREFIX}${value})`
  }

  return value
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
