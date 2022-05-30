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
import { convertStylePropsString, Responsive } from 'types/responsive'

// export type BoxProps = ColorProps &
//   LayoutProps &
//   SpaceProps &
//   BorderProps &
//   PositionProps

export type BoxProps = {
  color?: Responsive<string>
  backgroundColor?: Responsive<string>
  width?: Responsive<string>
  height?: Responsive<string>
  minWidth?: Responsive<string>
  minHeight?: Responsive<string>
  display?: Responsive<string>
  // spaces
  margin?: Responsive<string>
  marginTop?: Responsive<string>
  marginRight?: Responsive<string>
  marginBottom?: Responsive<string>
  marginLeft?: Responsive<string>
  padding?: Responsive<string>
  paddingTop?: Responsive<string>
  paddingRight?: Responsive<string>
  paddingBottom?: Responsive<string>
  paddingLeft?: Responsive<string>
  border?: Responsive<string>
  overflow?: Responsive<string>
}

const Box = styled.div<BoxProps>`
  ${(props) => convertStylePropsString(props)}
`

export default Box
