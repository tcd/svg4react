import merge from "lodash/merge"
import type { PaletteOptions } from "@mui/material"

import { ThemeVars } from "@app/theme/variables"

// =============================================================================
// Base
// =============================================================================

const basePalette: PaletteOptions = {
    primary: {
        main: ThemeVars.DocsColors.puke,
    },
    secondary: {
        // light: "#42a5f5",
        main: "#1976d2",
        // dark: "#1565c0",
        // contrastText: "#fff",
    },
}

// =============================================================================
// Light
// =============================================================================

const _lightPalette: PaletteOptions = {
    mode: "light",
    background: {
        default: "#fafafa", // from mui-treasury
    },
}

const lightPalette: PaletteOptions = merge({}, basePalette, _lightPalette)

// =============================================================================
// Dark
// =============================================================================

const _darkPalette: PaletteOptions = {
    mode: "dark",
    background: {
        default: "#000",
    },
}

const darkPalette: PaletteOptions = merge({}, basePalette, _darkPalette)

// =============================================================================
// All Together
// =============================================================================

export const palettes = <const>{
    base: basePalette,
    light: lightPalette,
    dark: darkPalette,
}
