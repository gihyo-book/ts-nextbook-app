import styled, {
  color,
  border,
  typography,
  layout,
  space,
  ColorProps,
  TypographyProps,
  BorderProps,
  BorderRadiusProps,
  LayoutProps,
  SpaceProps,
  SizingProps,
} from '@xstyled/styled-components'
import { getThemeValue, merge, warn, is, assign, Props } from '@xstyled/util'

// これxstyled v1にあった関数をそのまま持ってきてる
// Props type https://github.com/gregberge/xstyled/blob/main/packages/util/src/types.ts
const variant: any =
  ({
    key = null,
    default: defaultValue,
    variants = {},
    prop = 'variant',
  }: {
    key?: string | null
    default?: string | null
    variants: { [key: string]: any }
    prop?: string
  }) =>
  (props: Props) => {
    const themeVariants = is(key) ? getThemeValue(props, key) : null
    const computedVariants = merge(assign({}, variants), themeVariants)
    const value = props[prop] !== undefined ? props[prop] : defaultValue
    const result = getThemeValue(props, value, computedVariants)
    warn(is(result), `variant "${value}" not found`)
    return result
  }

export type ButtonVariant = 'primary' | 'secondary' | 'danger'

export type ButtonProps = ColorProps &
  TypographyProps &
  BorderProps &
  BorderRadiusProps &
  LayoutProps &
  SpaceProps &
  SizingProps &
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
