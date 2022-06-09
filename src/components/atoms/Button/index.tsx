import styled from 'styled-components'
import {
  Color,
  FontSize,
  LetterSpacing,
  LineHeight,
  Responsive,
  Space,
} from 'types'
import { toResponsiveToStyle } from 'utils/styles'

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
        backgroundColor: 'primary-dark',
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
        backgroundColor: 'secondary-dark',
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
        backgroundColor: 'danger-dark',
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
  ${({ variant, color, backgroundColor, pseudoClass }) => {
    if (variant && variants[variant]) {
      const styles = []
      !color &&
        styles.push(toResponsiveToStyle('color', variants[variant].color))
      !backgroundColor &&
        styles.push(
          toResponsiveToStyle(
            'background-color',
            variants[variant].backgroundColor,
          ),
        )
      !pseudoClass &&
        styles.push(
          `&:hover {
            ${toResponsiveToStyle(
              'background-color',
              variants[variant].pseudoClass.hover.backgroundColor,
            )}
          }`.replaceAll('\n', ''),
        )
      !pseudoClass &&
        styles.push(
          `&:disabled {
            ${toResponsiveToStyle(
              'background-color',
              variants[variant].pseudoClass.disabled.backgroundColor,
            )}
          }`.replaceAll('\n', ''),
        )
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
  &:hover {
    ${(props) =>
      toResponsiveToStyle(
        'background-color',
        props?.pseudoClass?.hover?.backgroundColor,
      )}
  }
  &:disabled {
    ${(props) =>
      toResponsiveToStyle(
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
  paddingLeft: 'space-2',
  paddingRight: 'space-2',
  paddingTop: 'space-1',
  paddingBottom: 'space-1',
  color: 'white',
  display: 'inline-block',
  textAlign: 'center',
  lineHeight: 'inherit',
  fontSize: 'inherit',
}

export default Button
