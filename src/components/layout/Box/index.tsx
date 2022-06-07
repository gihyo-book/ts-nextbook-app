import styled from 'styled-components'
import { Color, toResponsiveToStyle, Responsive, Space } from 'utils/styles'

export type BoxProps = {
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

const Box = styled.div<BoxProps>`
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

export default Box
