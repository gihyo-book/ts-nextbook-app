import styled from 'styled-components'
import Box, { BoxProps } from 'components/layout/Box'
import { convertStylePropsString, Responsive } from 'utils/styles'

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
  ${(props) => convertStylePropsString(props)}
`

Flex.defaultProps = {
  display: 'flex',
}

export default Flex
