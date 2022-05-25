import styled from '@xstyled/styled-components'
import { grid, GridProps } from 'styled-system'
import Box, { BoxProps } from 'components/layout/Box'

const Grid = styled(Box)<GridProps & BoxProps>`
  ${grid}
`

Grid.defaultProps = {
  display: 'grid',
}

export default Grid
