/* eslint-disable prettier/prettier */
import styled from 'styled-components'
import Box, { BoxProps } from 'components/layout/Box'
import type { CSSPropertyGridArea, CSSPropertyGridAutoFlow, CSSPropertyGridColumn, CSSPropertyGridRow, Responsive } from 'types/styles'
import { toValue } from 'utils/styles'

type GridProps = BoxProps & {
  gridGap?: Responsive<string>
  gridColumnGap?: Responsive<string>
  gridRowGap?: Responsive<string>
  gridColumn?: Responsive<CSSPropertyGridColumn>
  gridRow?: Responsive<CSSPropertyGridRow>
  gridAutoFlow?: Responsive<CSSPropertyGridAutoFlow>
  gridAutoColumns?: Responsive<string>
  gridAutoRows?: Responsive<string>
  gridTemplateColumns?: Responsive<string>
  gridTemplateRows?: Responsive<string>
  gridTemplateAreas?: Responsive<CSSPropertyGridArea>
  gridArea?: Responsive<string>
}

/**
 * Gridコンポーネント
 * gridレイアウトの実現に利用する
 */
const Grid = styled(Box)<GridProps>`
  ${(props) => toValue('grid-gap', props.gridGap, props.theme)}
  ${(props) => toValue('grid-column-gap', props.gridColumnGap, props.theme)}
  ${(props) => toValue('grid-row-gap', props.gridRowGap, props.theme)}
  ${(props) => toValue('grid-row', props.gridRow, props.theme)}
  ${(props) => toValue('grid-auto-flow', props.gridAutoFlow, props.theme)}
  ${(props) => toValue('grid-auto-columns', props.gridAutoColumns, props.theme)}
  ${(props) => toValue('grid-auto-rows', props.gridAutoRows, props.theme)}
  ${(props) => toValue('grid-template-columns', props.gridTemplateColumns, props.theme)}
  ${(props) => toValue('grid-template-rows', props.gridTemplateRows, props.theme)}
  ${(props) => toValue('grid-template-tows', props.gridTemplateRows, props.theme)}
  ${(props) => toValue('grid-template-areas', props.gridTemplateAreas, props.theme)}
  ${(props) => toValue('grid-area', props.gridArea, props.theme)}
`

Grid.defaultProps = {
  display: 'grid',
}

export default Grid
