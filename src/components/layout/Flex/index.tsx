import {
  flexboxes,
  FlexboxesProps,
  typography,
  TypoGraphyProps,
  sizing,
  SizingProps,
  backgroundColor,
  BackgroundColorProps
} from '@xstyled/styled-components'
import styled from '@xstyled/styled-components'
import Box, { BoxProps } from 'components/layout/Box'

type FlexProps = BoxProps &
  FlexboxesProps &
  SizingProps &
  BackgroundColorProps &
  TypoGraphyProps & {
    height?: string | number
  }

const Flex = styled(Box)<FlexProps>`
  ${flexboxes}
  ${backgroundColor}
  ${sizing}
  ${typography}
`

Flex.defaultProps = {
  display: 'flex',
}

export default Flex
