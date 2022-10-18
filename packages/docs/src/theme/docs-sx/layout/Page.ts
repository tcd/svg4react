import type { Theme } from "@mui/material"

import { ThemeVars } from "@app/theme/variables"
import type { ISxProps as SxProps } from "@app/theme/helpers"
import { _navBg } from "./nav-bg"

const root: SxProps = (theme: Theme) => ({
    [theme.breakpoints.down("laptop")]: {
        width: "100%",
    },
    [theme.breakpoints.up("laptop")]: {
        display: "flex",
        flexFlow: "row nowrap",
        width: `calc(100% - ${ThemeVars.tocWidth})`,
    },
})

// =============================================================================
// All Together
// =============================================================================

export const Page = {
    root,
}
