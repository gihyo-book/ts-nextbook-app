import styled from 'styled-components'
import type {
  Color,
  Responsive,
  Space,
  FontSize,
  LetterSpacing,
  LineHeight,
} from 'types/styles'
import { getCustomPropertyVar, toResponsiveToStyle } from 'utils/styles'

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
  // spaces
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
    fontSize: getCustomPropertyVar('font-size-1'),
    letterSpacing: getCustomPropertyVar('letter-spacing-1'),
    lineHeight: getCustomPropertyVar('line-height-1'),
  },
  small: {
    fontSize: getCustomPropertyVar('font-size-2'),
    letterSpacing: getCustomPropertyVar('letter-spacing-2'),
    lineHeight: getCustomPropertyVar('line-height-2'),
  },
  medium: {
    fontSize: getCustomPropertyVar('font-size-3'),
    letterSpacing: getCustomPropertyVar('letter-spacing-3'),
    lineHeight: getCustomPropertyVar('line-height-3'),
  },
  mediumLarge: {
    fontSize: getCustomPropertyVar('font-size-4'),
    letterSpacing: getCustomPropertyVar('letter-spacing-4'),
    lineHeight: getCustomPropertyVar('line-height-4'),
  },
  large: {
    fontSize: getCustomPropertyVar('font-size-5'),
    letterSpacing: getCustomPropertyVar('letter-spacing-5'),
    lineHeight: getCustomPropertyVar('line-height-5'),
  },
  extraLarge: {
    fontSize: getCustomPropertyVar('font-size-6'),
    letterSpacing: getCustomPropertyVar('letter-spacing-6'),
    lineHeight: getCustomPropertyVar('line-height-6'),
  },
}

/**
 * テキスト
 */
const Text = styled.span<TextProps>`
  ${({ variant, fontSize, letterSpacing, lineHeight }) => {
    if (variant && variants[variant]) {
      const styles = []
      !fontSize && styles.push(`font-size: ${variants[variant].fontSize};`)
      !letterSpacing &&
        styles.push(`letter-spacing: ${variants[variant].letterSpacing};`)
      !lineHeight &&
        styles.push(`line-height: ${variants[variant].lineHeight};`)
      return styles.join('\n')
    }
  }}
  ${(props) => toResponsiveToStyle('font-size', props.fontSize)}
  ${(props) => toResponsiveToStyle('letter-spacing', props.letterSpacing)}
  ${(props) => toResponsiveToStyle('line-height', props.lineHeight)}
  ${(props) => toResponsiveToStyle('color', props.color)}
  ${(props) => toResponsiveToStyle('background-color', props.backgroundColor)}
  ${(props) => toResponsiveToStyle('width', props.width)}
  ${(props) => toResponsiveToStyle('height', props.height)}
  ${(props) => toResponsiveToStyle('min-width', props.minWidth)}
  ${(props) => toResponsiveToStyle('min-height', props.minHeight)}
  ${(props) => toResponsiveToStyle('display', props.display)}
  ${(props) => toResponsiveToStyle('border', props.border)}
  ${(props) => toResponsiveToStyle('overflow', props.overflow)}
  ${(props) => toResponsiveToStyle('margin', props.margin)}
  ${(props) => toResponsiveToStyle('margin-top', props.marginTop)}
  ${(props) => toResponsiveToStyle('margin-left', props.marginLeft)}
  ${(props) => toResponsiveToStyle('margin-bottom', props.marginBottom)}
  ${(props) => toResponsiveToStyle('margin-right', props.marginRight)}
  ${(props) => toResponsiveToStyle('padding', props.padding)}
  ${(props) => toResponsiveToStyle('padding-top', props.paddingTop)}
  ${(props) => toResponsiveToStyle('padding-left', props.paddingLeft)}
  ${(props) => toResponsiveToStyle('padding-bottom', props.paddingBottom)}
  ${(props) => toResponsiveToStyle('padding-right', props.paddingRight)}
`

Text.defaultProps = {
  variant: 'medium',
  color: 'text',
}

export default Text
