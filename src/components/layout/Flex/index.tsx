import {
  flexboxes,
  FlexboxesProps,
  SizingProps,
} from '@xstyled/styled-components'
import styled from 'styled-components'
import Box, { BoxProps } from 'components/layout/Box'

type FlexProps = BoxProps &
  FlexboxesProps &
  SizingProps & {
    backgroundColor?: string
    height?: string | number
  }

const Flex = styled(Box)<FlexProps>`
  ${flexboxes}
`

Flex.defaultProps = {
  display: 'flex',
}

export default Flex
