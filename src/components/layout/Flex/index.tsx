/* eslint-disable prettier/prettier */
import styled from 'styled-components'
import Box, { BoxProps } from 'components/layout/Box'
import type {
  Responsive,
  CSSPropertyAlignItems,
  CSSPropertyAlignContent,
  CSSPropertyJustifyContent,
  CSSPropertyJustifyItems,
  CSSPropertyFlexDirection,
  CSSPropertyJustifySelf,
  CSSPropertyFlexWrap,
  CSSPropertyAlignSelf,
} from 'types/styles'
import { toPropValue } from 'utils/styles'

type FlexProps = BoxProps & {
  alignItems?: Responsive<CSSPropertyAlignItems>
  alignContent?: Responsive<CSSPropertyAlignContent>
  justifyContent?: Responsive<CSSPropertyJustifyContent>
  justifyItems?: Responsive<CSSPropertyJustifyItems>
  flexWrap?: Responsive<CSSPropertyFlexWrap>
  flexBasis?: Responsive<string>
  flexDirection?: Responsive<CSSPropertyFlexDirection>
  flexGrow?: Responsive<string>
  flexShrink?: Responsive<string>
  justifySelf?: Responsive<CSSPropertyJustifySelf>
  alignSelf?: Responsive<CSSPropertyAlignSelf>
  order?: Responsive<string>
}

/**
 * Flexコンポーネント
 * flexboxの実現に利用する
 */
const Flex = styled(Box)<FlexProps>`
  ${(props) => toPropValue('align-items', props.alignItems, props.theme)}
  ${(props) => toPropValue('align-content', props.alignContent, props.theme)}
  ${(props) => toPropValue('justify-content', props.justifyContent, props.theme)}
  ${(props) => toPropValue('justify-items', props.justifyItems, props.theme)}
  ${(props) => toPropValue('flex-wrap', props.flexWrap, props.theme)}
  ${(props) => toPropValue('flex-basis', props.flexBasis, props.theme)}
  ${(props) => toPropValue('flex-direction', props.flexDirection, props.theme)}
  ${(props) => toPropValue('flex-grow', props.flexGrow, props.theme)}
  ${(props) => toPropValue('flex-shrink', props.flexShrink, props.theme)}
  ${(props) => toPropValue('justify-self', props.justifySelf, props.theme)}
  ${(props) => toPropValue('align-self', props.alignSelf, props.theme)}
  ${(props) => toPropValue('order', props.order, props.theme)}
`

Flex.defaultProps = {
  display: 'flex',
}

export default Flex
