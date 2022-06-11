/* eslint-disable prettier/prettier */
import styled from 'styled-components'
import type { Responsive } from 'types/styles'
import { toValue, Color, Space } from 'utils/styles'

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

/**
 * Boxコンポーネント
 * レイアウトの調整に利用する
 */
const Box = styled.div<BoxProps>`
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
`

export default Box
