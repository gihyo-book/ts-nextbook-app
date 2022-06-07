import styled from 'styled-components'

type BadgeProps = {
  content: string
  backgroundColor: string
}

const BadgeWrapper = styled.div<{ backgroundColor: string }>`
  border-radius: 20px;
  height: 20px;
  min-width: 20px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ backgroundColor }) => backgroundColor};
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
