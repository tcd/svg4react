import merge from "lodash/merge"
import type { Theme } from "@mui/material"
import { createTheme } from "@mui/material"

import { docsThemeOptions, palettes } from "./mui"

// =============================================================================
// Default
// =============================================================================

export const DocsTheme: Theme = createTheme(docsThemeOptions)

export const DocsThemeLight: Theme = createTheme(merge({}, docsThemeOptions, { palette: palettes.light }))
export const DocsThemeDark:  Theme = createTheme(merge({}, docsThemeOptions, { palette: palettes.dark  }))
