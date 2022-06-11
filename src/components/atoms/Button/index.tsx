import styled from 'styled-components'
import { Responsive } from 'types'
import {
  toValue,
  Color,
  FontSize,
  LetterSpacing,
  LineHeight,
  Space,
} from 'utils/styles'

export type ButtonVariant = 'primary' | 'secondary' | 'danger'

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant
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
  pseudoClass?: {
    hover?: {
      backgroundColor?: Responsive<Color>
    }
    disabled?: {
      backgroundColor?: Responsive<Color>
    }
  }
}

const variants = {
  primary: {
    color: 'white',
    backgroundColor: 'primary',
    border: 'none',
    pseudoClass: {
      hover: {
        backgroundColor: 'primaryDark',
      },
      disabled: {
        backgroundColor: 'primary',
      },
    },
  },
  secondary: {
    color: 'white',
    backgroundColor: 'secondary',
    border: 'none',
    pseudoClass: {
      hover: {
        backgroundColor: 'secondaryDark',
      },
      disabled: {
        backgroundColor: 'secondary',
      },
    },
  },
  danger: {
    color: 'white',
    backgroundColor: 'danger',
    border: 'none',
    pseudoClass: {
      hover: {
        backgroundColor: 'dangerDark',
      },
      disabled: {
        backgroundColor: 'danger',
      },
    },
  },
}

/**
 * ボタン
 */
const Button = styled.button<ButtonProps>`
  ${({ variant, color, backgroundColor, pseudoClass, theme }) => {
    if (variant && variants[variant]) {
      const styles = []
      !color &&
        styles.push(toValue('color', variants[variant].color.replace, theme))
      !backgroundColor &&
        styles.push(
          toValue('background-color', variants[variant].backgroundColor, theme),
        )
      !pseudoClass &&
        styles.push(
          `&:hover {
            ${toValue(
              'background-color',
              variants[variant].pseudoClass.hover.backgroundColor,
              theme,
            )}
          }`.replaceAll('\n', ''),
        )
      !pseudoClass &&
        styles.push(
          `&:disabled {
            ${toValue(
              'background-color',
              variants[variant].pseudoClass.disabled.backgroundColor,
              theme,
            )}
          }`.replaceAll('\n', ''),
        )
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
  &:hover {
    ${(props) =>
      toValue('background-color', props?.pseudoClass?.hover?.backgroundColor)}
  }
  &:disabled {
    ${(props) =>
      toValue(
        'background-color',
        props?.pseudoClass?.disabled?.backgroundColor,
      )}
  }
  cursor: pointer;
  outline: 0;
  text-decoration: 'none';
  opacity: ${({ disabled }) => (disabled ? '0.5' : '1')};
  border-radius: 4px;
  border: none;
`

Button.defaultProps = {
  variant: 'primary',
  paddingLeft: 2,
  paddingRight: 2,
  paddingTop: 1,
  paddingBottom: 1,
  color: 'white',
  display: 'inline-block',
  textAlign: 'center',
  lineHeight: 'inherit',
  fontSize: 'inherit',
}

export default Button
