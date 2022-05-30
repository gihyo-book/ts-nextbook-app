import styled from 'styled-components'
import { flexbox, FlexboxProps } from 'styled-system'
import Box, { BoxProps } from 'components/layout/Box'
import { convertStylePropsString } from 'types/responsive'

type FlexProps = BoxProps & FlexboxProps

const Flex = styled(Box)<FlexProps>`
  ${(props) => convertStylePropsString(props)}
  ${flexbox}
`

Flex.defaultProps = {
  display: 'flex',
}

export default Flex
