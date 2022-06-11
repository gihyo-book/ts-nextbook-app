/* eslint-disable @typescript-eslint/ban-types */
import { theme } from 'themes'
import type { ResponsiveProp, Responsive } from 'types'

export type AppTheme = typeof theme
type SpaceThemeKeys = keyof typeof theme.space
type ColorThemeKeys = keyof typeof theme.colors
type FontSizeThemeKeys = keyof typeof theme.fontSizes
type LetterSpacingThemeKeys = keyof typeof theme.letterSpacings
type LineHeightThemeKeys = keyof typeof theme.lineHeights

export type Space = SpaceThemeKeys | (string & {})
export type Color = ColorThemeKeys | (string & {})
export type FontSize = FontSizeThemeKeys | (string & {})
export type LetterSpacing = LetterSpacingThemeKeys | (string & {})
export type LineHeight = LineHeightThemeKeys | (string & {})

/**
 * Responsive型のCSSのテキストに変換
 * @param propKey CSSプロパティ
 * @param prop Responsive型
 * @returns CSSのテキスト
 */
export function toValue<T>(
  propKey: string,
  prop?: Responsive<T>,
  theme?: AppTheme,
) {
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
        // デフォルトのスタイル
        result.push(
          `${propKey}: ${toThemeValueIfNeeded(
            propKey,
            prop[responsiveKey],
            theme,
          )};`,
        )
      } else if (
        responsiveKey === 'sm' ||
        responsiveKey === 'md' ||
        responsiveKey === 'lg' ||
        responsiveKey === 'xl'
      ) {
        // メディアクエリでのスタイル
        const breakpoint = breakpoints[responsiveKey]
        const style = `${propKey}: ${toThemeValueIfNeeded(
          propKey,
          prop[responsiveKey],
          theme,
        )};`
        result.push(`@media screen and (min-width: ${breakpoint}) {${style}}`)
      }
    }
    return result.join('\n')
  }

  return `${propKey}: ${toThemeValueIfNeeded(propKey, prop, theme)};`
}

/**
 * 必要であればCSSカスタムプロパティの値に変換
 * @param value CSSプロパティ
 * @returns CSSプロパティの値 or CSSカスタムプロパティの値
 */
function toThemeValueIfNeeded<T>(propKey: string, value: T, theme?: AppTheme) {
  const spaceKeys = new Set([
    'margin',
    'margin-top',
    'margin-left',
    'margin-bottom',
    'margin-right',
    'padding',
    'padding-top',
    'padding-left',
    'padding-bottom',
    'padding-right',
  ])
  const colorKeys = new Set(['color', 'background-color'])
  const fontSizeKeys = new Set(['font-size'])
  const lineSpacingKeys = new Set(['letter-spacing'])
  const lineHeightKeys = new Set(['line-height'])

  if (theme && spaceKeys.has(propKey) && isSpaceThemeKeys(value, theme)) {
    return theme.space[value]
  } else if (
    theme &&
    colorKeys.has(propKey) &&
    isColorThemeKeys(value, theme)
  ) {
    return theme.colors[value]
  } else if (
    theme &&
    fontSizeKeys.has(propKey) &&
    isFontSizeThemeKeys(value, theme)
  ) {
    return theme.fontSizes[value]
  } else if (
    theme &&
    lineSpacingKeys.has(propKey) &&
    isLetterSpacingThemeKeys(value, theme)
  ) {
    return theme.letterSpacings[value]
  } else if (
    theme &&
    lineHeightKeys.has(propKey) &&
    isLineHeightThemeKeys(value, theme)
  ) {
    return theme.lineHeights[value]
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

function isSpaceThemeKeys(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  prop: any,
  theme: AppTheme,
): prop is SpaceThemeKeys {
  return Object.keys(theme.space).filter((key) => key == prop).length > 0
}

function isColorThemeKeys(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  prop: any,
  theme: AppTheme,
): prop is ColorThemeKeys {
  return Object.keys(theme.colors).filter((key) => key == prop).length > 0
}

function isFontSizeThemeKeys(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  prop: any,
  theme: AppTheme,
): prop is FontSizeThemeKeys {
  return Object.keys(theme.fontSizes).filter((key) => key == prop).length > 0
}

function isLetterSpacingThemeKeys(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  prop: any,
  theme: AppTheme,
): prop is LetterSpacingThemeKeys {
  return (
    Object.keys(theme.letterSpacings).filter((key) => key == prop).length > 0
  )
}

function isLineHeightThemeKeys(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  prop: any,
  theme: AppTheme,
): prop is LineHeightThemeKeys {
  return Object.keys(theme.lineHeights).filter((key) => key == prop).length > 0
}
