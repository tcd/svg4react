import type {
    ThemeOptions,
} from "@mui/material"

import { componentOverrides } from "./components"
import { breakpointsOptions } from "./breakpoints"
import { fontFamily } from "@app/theme/variables/typography"

// =============================================================================
// Theme
// =============================================================================

export const docsThemeOptions: ThemeOptions = {
    breakpoints: breakpointsOptions,
    components: componentOverrides,
    typography: {
        code: {
            fontFamily: fontFamily.monospace,
            fontWeight: 400,
        },
    },
    palette: {
        primary: {
            main: "#ffb13b",
        },
        secondary: {
            main: "#1976d2",
            light: "#42a5f5",
            dark: "#1565c0",
            contrastText: "#fff",
        },
    },
}
