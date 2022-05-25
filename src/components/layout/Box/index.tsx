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
  SizingProps,
} from '@xstyled/styled-components'
import styled from '@xstyled/styled-components'

export type BoxProps = ColorProps &
  LayoutProps &
  SpaceProps &
  BorderProps &
  PositionProps &
  SizingProps & {
    height?: number | string
    width?: number | string
  }

const Box = styled.div<BoxProps>`
  ${space}
  ${layout}
  ${color}
  ${border}
  ${position}
`

export default Box
