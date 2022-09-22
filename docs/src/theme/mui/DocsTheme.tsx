import type {
    Theme,
    ThemeOptions,
} from "@mui/material"
import { createTheme } from "@mui/material"

import { componentOverrides } from "./components"

// =============================================================================
// Theme
// =============================================================================

const themeOptions: ThemeOptions = {
    components: componentOverrides,
    palette: {
        primary: {
            main: "#ffb13b",
        },
    },
}

export const DocsTheme: Theme = createTheme(themeOptions)
