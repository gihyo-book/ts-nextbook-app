import styled from 'styled-components'
import { flexbox, FlexboxProps } from 'styled-system'
import Box, { BoxProps } from 'components/layout/Box'

type FlexProps = BoxProps & FlexboxProps

const Flex = styled(Box)<FlexProps>`
  ${flexbox}
`

Flex.defaultProps = {
  display: 'flex',
}

export default Flex
