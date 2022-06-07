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
import { toResponsiveToStyle } from 'utils/styles'

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

const Flex = styled(Box)<FlexProps>`
  ${(props) => toResponsiveToStyle('align-items', props.alignItems)}
  ${(props) => toResponsiveToStyle('align-content', props.alignContent)}
  ${(props) => toResponsiveToStyle('justify-content', props.justifyContent)}
  ${(props) => toResponsiveToStyle('justify-items', props.justifyItems)}
  ${(props) => toResponsiveToStyle('flex-wrap', props.flexWrap)}
  ${(props) => toResponsiveToStyle('flex-basis', props.flexBasis)}
  ${(props) => toResponsiveToStyle('flex-direction', props.flexDirection)}
  ${(props) => toResponsiveToStyle('flex-grow', props.flexGrow)}
  ${(props) => toResponsiveToStyle('flex-shrink', props.flexShrink)}
  ${(props) => toResponsiveToStyle('justify-self', props.justifySelf)}
  ${(props) => toResponsiveToStyle('align-self', props.alignSelf)}
  ${(props) => toResponsiveToStyle('order', props.order)}
`

Flex.defaultProps = {
  display: 'flex',
}

export default Flex
