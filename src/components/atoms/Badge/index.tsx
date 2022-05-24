import styled, {
  backgroundColor,
  BackgroundColorProps,
} from '@xstyled/styled-components'
import { getThemeValue, merge, warn, is, assign } from '@xstyled/util'

type BadgeProps = {
  content: string
  backgroundColor: string
}

const variant =
  ({ key = null, default: defaultValue, variants = {}, prop = 'variant' }) =>
  (props) => {
    const themeVariants = is(key) ? getThemeValue(props, key) : null
    const computedVariants = merge(assign({}, variants), themeVariants)
    const value = props[prop] !== undefined ? props[prop] : defaultValue
    const result = getThemeValue(props, value, computedVariants)
    warn(is(result), `variant "${value}" not found`)
    return result
  }

const BadgeWrapper = styled.div<BackgroundColorProps>`
  border-radius: 20px;
  height: 20px;
  min-width: 20px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  ${backgroundColor};
`

const BadgeText = styled.p`
  color: white;
  font-size: 11px;
  user-select: none;
`

/**
 * バッジ
 */
const Badge: React.FC<BadgeProps> = ({
  content,
  backgroundColor,
}: BadgeProps) => {
  return (
    <BadgeWrapper backgroundColor={backgroundColor}>
      <BadgeText>{content}</BadgeText>
    </BadgeWrapper>
  )
}

export default Badge
