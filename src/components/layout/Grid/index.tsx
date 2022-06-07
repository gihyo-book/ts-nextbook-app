/* eslint-disable prettier/prettier */
import styled from 'styled-components'
import Box, { BoxProps } from 'components/layout/Box'
import type { CSSPropertyGridArea, CSSPropertyGridAutoFlow, CSSPropertyGridColumn, CSSPropertyGridRow, Responsive } from 'types/styles'
import { toResponsiveToStyle } from 'utils/styles'

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

const Grid = styled(Box)<GridProps>`
  ${(props) => toResponsiveToStyle('grid-gap', props.gridGap)}
  ${(props) => toResponsiveToStyle('grid-column-gap', props.gridColumnGap)}
  ${(props) => toResponsiveToStyle('grid-row-gap', props.gridRowGap)}
  ${(props) => toResponsiveToStyle('grid-row', props.gridRow)}
  ${(props) => toResponsiveToStyle('grid-auto-flow', props.gridAutoFlow)}
  ${(props) => toResponsiveToStyle('grid-auto-columns', props.gridAutoColumns)}
  ${(props) => toResponsiveToStyle('grid-auto-rows', props.gridAutoRows)}
  ${(props) => toResponsiveToStyle('grid-template-columns', props.gridTemplateColumns)}
  ${(props) => toResponsiveToStyle('grid-template-rows', props.gridTemplateRows)}
  ${(props) => toResponsiveToStyle('grid-template-tows', props.gridTemplateRows)}
  ${(props) => toResponsiveToStyle('grid-template-areas', props.gridTemplateAreas)}
  ${(props) => toResponsiveToStyle('grid-area', props.gridArea)}
`

Grid.defaultProps = {
  display: 'grid',
}

export default Grid
