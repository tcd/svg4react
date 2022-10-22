import type { Theme } from "@mui/material"

import { ThemeVars } from "@app/theme/variables"
import type { ISxProps as SxProps } from "@app/theme/helpers"
import { _navBg } from "./nav-bg"

const root: SxProps = (theme: Theme) => ({
    flexGrow: 1,
    // width: "100%",
    display: "flex",
    flexFlow: "row nowrap",
    // [theme.breakpoints.down("tablet")]: {
    //     width: "100%",
    // },
    // [theme.breakpoints.up("tablet")]: {
    //     display: "flex",
    //     flexFlow: "row nowrap",
    //     width: `calc(100% - ${ThemeVars.tocWidth})`,
    // },
})

const content: SxProps = (theme: Theme) => ({
    flexGrow: 1,
})

// =============================================================================
// All Together
// =============================================================================

export const Page = {
    root,
    content,
}
