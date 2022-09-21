import type { ThemeOptions, SxProps } from "@mui/material"
import { createTheme } from "@mui/material"

const options: ThemeOptions = {}

const theme = createTheme(options)
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

