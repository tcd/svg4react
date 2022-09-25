import merge from "lodash/merge"
import type { PaletteOptions } from "@mui/material"

// =============================================================================
// Base
// =============================================================================

const basePalette: PaletteOptions = {
    primary: {
        main: "#ffb13b",
    },
    secondary: {
        main: "#1976d2",
        light: "#42a5f5",
        dark: "#1565c0",
        // contrastText: "#fff",
    },
}

// =============================================================================
// Light
// =============================================================================

const _lightPalette: PaletteOptions = {
    mode: "light",
}

const lightPalette: PaletteOptions = merge({}, basePalette, _lightPalette)

// =============================================================================
// Dark
// =============================================================================

const _darkPalette: PaletteOptions = {
    mode: "dark",
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
