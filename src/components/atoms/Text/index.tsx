import styled from 'styled-components'
import type { Responsive } from 'types/styles'
import {
  toValue,
  Space,
  Color,
  FontSize,
  LetterSpacing,
  LineHeight,
} from 'utils/styles'

export type TextVariant =
  | 'extraSmall'
  | 'small'
  | 'medium'
  | 'mediumLarge'
  | 'large'
  | 'extraLarge'

export type TextProps = {
  variant?: TextVariant
  fontSize?: Responsive<FontSize>
  fontWeight?: Responsive<string>
  letterSpacing?: Responsive<LetterSpacing>
  lineHeight?: Responsive<LineHeight>
  textAlign?: Responsive<string>
  color?: Responsive<Color>
  backgroundColor?: Responsive<Color>
  width?: Responsive<string>
  height?: Responsive<string>
  minWidth?: Responsive<string>
  minHeight?: Responsive<string>
  display?: Responsive<string>
  border?: Responsive<string>
  overflow?: Responsive<string>
  margin?: Responsive<Space>
  marginTop?: Responsive<Space>
  marginRight?: Responsive<Space>
  marginBottom?: Responsive<Space>
  marginLeft?: Responsive<Space>
  padding?: Responsive<Space>
  paddingTop?: Responsive<Space>
  paddingRight?: Responsive<Space>
  paddingBottom?: Responsive<Space>
  paddingLeft?: Responsive<Space>
}

const variants = {
  extraSmall: {
    fontSize: 'extraSmall',
    letterSpacing: 0,
    lineHeight: 0,
  },
  small: {
    fontSize: 'small',
    letterSpacing: 1,
    lineHeight: 1,
  },
  medium: {
    fontSize: 'medium',
    letterSpacing: 2,
    lineHeight: 2,
  },
  mediumLarge: {
    fontSize: 'mediumLarge',
    letterSpacing: 3,
    lineHeight: 3,
  },
  large: {
    fontSize: 'large',
    letterSpacing: 4,
    lineHeight: 4,
  },
  extraLarge: {
    fontSize: 'extraLarge',
    letterSpacing: 5,
    lineHeight: 5,
  },
}

/**
 * テキスト
 */
const Text = styled.span<TextProps>`
  ${({ variant, fontSize, letterSpacing, lineHeight, theme }) => {
    if (variant && variants[variant]) {
      const styles = []
      !fontSize &&
        styles.push(toValue('font-size', variants[variant].fontSize, theme))
      !letterSpacing &&
        styles.push(
          toValue('letter-spacing', variants[variant].letterSpacing, theme),
        )
      !lineHeight &&
        styles.push(toValue('line-height', variants[variant].lineHeight, theme))
      return styles.join('\n')
    }
  }}
  ${(props) => toValue('font-size', props.fontSize, props.theme)}
  ${(props) => toValue('letter-spacing', props.letterSpacing, props.theme)}
  ${(props) => toValue('line-height', props.lineHeight, props.theme)}
  ${(props) => toValue('color', props.color, props.theme)}
  ${(props) => toValue('background-color', props.backgroundColor, props.theme)}
  ${(props) => toValue('width', props.width, props.theme)}
  ${(props) => toValue('height', props.height, props.theme)}
  ${(props) => toValue('min-width', props.minWidth, props.theme)}
  ${(props) => toValue('min-height', props.minHeight, props.theme)}
  ${(props) => toValue('display', props.display, props.theme)}
  ${(props) => toValue('border', props.border, props.theme)}
  ${(props) => toValue('overflow', props.overflow, props.theme)}
  ${(props) => toValue('margin', props.margin, props.theme)}
  ${(props) => toValue('margin-top', props.marginTop, props.theme)}
  ${(props) => toValue('margin-left', props.marginLeft, props.theme)}
  ${(props) => toValue('margin-bottom', props.marginBottom, props.theme)}
  ${(props) => toValue('margin-right', props.marginRight, props.theme)}
  ${(props) => toValue('padding', props.padding, props.theme)}
  ${(props) => toValue('padding-top', props.paddingTop, props.theme)}
  ${(props) => toValue('padding-left', props.paddingLeft, props.theme)}
  ${(props) => toValue('padding-bottom', props.paddingBottom, props.theme)}
  ${(props) => toValue('padding-right', props.paddingRight, props.theme)}
`

Text.defaultProps = {
  variant: 'medium',
  color: 'text',
}

export default Text
