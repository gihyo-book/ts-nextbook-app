import styled from '@xstyled/styled-components'
import {
  variant,
  typography,
  color,
  space,
  layout,
  TypographyProps,
  ColorProps,
  SpaceProps,
  LayoutProps, } from 'styled-system'

export type TextVariant =
  | 'extraSmall'
  | 'small'
  | 'medium'
  | 'mediumLarge'
  | 'large'
  | 'extraLarge'
export type TextProps = TypographyProps &
  ColorProps &
  SpaceProps &
  LayoutProps & { variant?: TextVariant | { [key: string]: TextVariant } }

const variants = {
  extraSmall: {
    fontSize: 0,
    letterSpacing: 0,
    lineHeight: 0,
  },
  small: {
    fontSize: 1,
    letterSpacing: 1,
    lineHeight: 1,
  },
  medium: {
    fontSize: 2,
    letterSpacing: 2,
    lineHeight: 2,
  },
  mediumLarge: {
    fontSize: 3,
    letterSpacing: 3,
    lineHeight: 3,
  },
  large: {
    fontSize: 4,
    letterSpacing: 4,
    lineHeight: 4,
  },
  extraLarge: {
    fontSize: 5,
    letterSpacing: 5,
    lineHeight: 5,
  },
}

/**
 * テキスト
 */
const Text = styled.span<TextProps>`
  ${variant({ variants })}
  ${typography}
  ${color}
  ${space}
  ${layout}
`

Text.defaultProps = {
  variant: 'medium',
  color: 'text',
}

export default Text
