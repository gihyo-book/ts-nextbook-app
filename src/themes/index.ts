import { defaultTheme, ThemeProvider } from '@xstyled/styled-components'

import breakpoints from './breakpoints'
//import colors from './colors'
import fontSizes from './fontSizes'
import letterSpacings from './letterSpacings'
import lineHeights from './lineHeights'
import space from './space'

export const theme = {
  ...defaultTheme,
  fontSizes,
  colors:{
    ...defaultTheme.colors,
    primary: '#3f51b5',
    primaryDark: '#2c387e',
    primaryLight: '#6573c3',
    secondary: '#f50057',
    secondaryDark: '#ab003c',
    secondaryLight: '#f73378',
    border: '#cdced2',
    danger: '#ed1c24',
    dangerDark: '#a50d12',
    gray: '#6b6b6b',
    black: '#000000',
    white: '#ffffff',
  }
} as const
