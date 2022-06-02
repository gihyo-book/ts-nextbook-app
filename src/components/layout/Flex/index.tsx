import styled from 'styled-components'
import Box, { BoxProps } from 'components/layout/Box'
import { toResponsiveToStyle, Responsive } from 'utils/styles'

type FlexProps = BoxProps & {
  alignItems?: Responsive<string>
  alignContent?: Responsive<string>
  justifyContent?: Responsive<string>
  justifyItems?: Responsive<string>
  flexWrap?: Responsive<string>
  flexBasis?: Responsive<string>
  flexDirection?: Responsive<string>
  flexGrow?: Responsive<string>
  flexShrink?: Responsive<string>
  justifySelf?: Responsive<string>
  alignSelf?: Responsive<string>
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
