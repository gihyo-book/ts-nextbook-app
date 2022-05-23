import styled from 'styled-components'
import {
  space,
  layout,
  color,
  border,
  position,
  ColorProps,
  LayoutProps,
  SpaceProps,
  BorderProps,
  PositionProps,
} from 'styled-system'

export type BoxProps = ColorProps &
  LayoutProps &
  SpaceProps &
  BorderProps &
  PositionProps

const Box = styled.div<BoxProps>`
  ${space}
  ${layout}
  ${color}
  ${border}
  ${position}
`

export default Box
