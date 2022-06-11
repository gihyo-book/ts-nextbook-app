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
import { toValue } from 'utils/styles'

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
  ${(props) => toValue('align-items', props.alignItems, props.theme)}
  ${(props) => toValue('align-content', props.alignContent, props.theme)}
  ${(props) => toValue('justify-content', props.justifyContent, props.theme)}
  ${(props) => toValue('justify-items', props.justifyItems, props.theme)}
  ${(props) => toValue('flex-wrap', props.flexWrap, props.theme)}
  ${(props) => toValue('flex-basis', props.flexBasis, props.theme)}
  ${(props) => toValue('flex-direction', props.flexDirection, props.theme)}
  ${(props) => toValue('flex-grow', props.flexGrow, props.theme)}
  ${(props) => toValue('flex-shrink', props.flexShrink, props.theme)}
  ${(props) => toValue('justify-self', props.justifySelf, props.theme)}
  ${(props) => toValue('align-self', props.alignSelf, props.theme)}
  ${(props) => toValue('order', props.order, props.theme)}
`

Flex.defaultProps = {
  display: 'flex',
}

export default Flex
