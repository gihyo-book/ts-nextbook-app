import styled from 'styled-components'
import {
  variant,
  color,
  border,
  typography,
  layout,
  space,
  ColorProps,
  TypographyProps,
  BorderProps,
  LayoutProps,
  SpaceProps,
} from 'styled-system'

export type ButtonVariant = 'primary' | 'secondary' | 'danger'

export type ButtonProps = ColorProps &
  TypographyProps &
  BorderProps &
  LayoutProps &
  SpaceProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: ButtonVariant
  }

const variants = {
  primary: {
    color: 'white',
    backgroundColor: 'primary',
    border: 'none',
    '&:hover': {
      backgroundColor: 'primaryDark',
    },
    '&:disabled': {
      backgroundColor: 'primary',
    },
  },
  secondary: {
    color: 'white',
    backgroundColor: 'secondary',
    border: 'none',
    '&:hover': {
      backgroundColor: 'secondaryDark',
    },
    '&:disabled': {
      backgroundColor: 'secondary',
    },
  },
  danger: {
    color: 'white',
    backgroundColor: 'danger',
    border: 'none',
    '&:hover': {
      backgroundColor: 'dangerDark',
    },
    '&:disabled': {
      backgroundColor: 'danger',
    },
  },
}

/**
 * ボタン
 */
const Button = styled.button<ButtonProps>`
  ${variant({ variants })}
  ${color}
  ${typography}
  ${border}
  ${layout}
  ${space}
  cursor: pointer;
  outline: 0;
  text-decoration: 'none';
  opacity: ${({ disabled }) => (disabled ? '0.5' : '1')};
`

Button.defaultProps = {
  variant: 'primary',
  px: 2,
  py: 1,
  color: 'white',
  borderRadius: 4,
  display: 'inline-block',
  textAlign: 'center',
  lineHeight: 'inherit',
  fontSize: 'inherit',
}

export default Button
