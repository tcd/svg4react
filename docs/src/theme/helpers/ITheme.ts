import type { SxProps } from "@mui/material"
import { createTheme } from "@mui/material"

import { docsThemeOptions } from "../mui/theme-options"

const theme = createTheme(docsThemeOptions)
export type ITheme = typeof theme
export type ISxProps = SxProps<ITheme>

/**
 * [Material UI Breakpoint utilities](https://mui.com/material-ui/customization/breakpoints/#api)
 */
export const ThemeBreakpoints = theme.breakpoints

/**
 * [Material UI Palette utilities](https://mui.com/material-ui/customization/palette/)
 */
export const ThemePalette = theme.palette

