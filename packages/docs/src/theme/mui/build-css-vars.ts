import type { CSSObject, Theme } from "@mui/material"
import {
    DarkPlusColors,
    LightPlusColors,
} from "@app/util"

const cssVarsForCodePalette = (mode: "light" | "dark") => {
    const palette = mode === "dark" ? DarkPlusColors : LightPlusColors
    const result: any = {}
    for (const [key, value] of Object.entries(palette)) {
        result[`--dark-plus-${key}`] = value
    }
    return result
}

export const buildCssVars = (theme: Theme): CSSObject => {
    const vars = cssVarsForCodePalette(theme.palette.mode)

    vars["--mui-palette-primary-main"] = theme.palette.primary.main
    vars["--mui-palette-secondary-main"] = theme.palette.secondary.main

    const manual = {
        colorScheme: theme.palette.mode,
        "--theme-mode": theme.palette.mode,
        // NOTE: MUI won't let you set an empty variable (which is usually what you want)
        "--dark-mode-enabled-mui": theme.palette.mode === "dark" ? "initial" : undefined,
    }

    return { ...vars, ...manual }
}
