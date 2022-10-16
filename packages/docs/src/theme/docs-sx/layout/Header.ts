import type { Theme } from "@mui/material"

import { ThemeVars } from "@app/theme/variables"
import type { ISxProps as SxProps } from "@app/theme/helpers"
import { _navBg } from "./nav-bg"

const headerSpacer: SxProps = (theme: Theme) => ({

    width: `calc(100% - ${ThemeVars.drawerWidth})`,
    ml: ThemeVars.drawerWidth,

    [theme.breakpoints.down("laptop")]: {
        width: "100%",
        ml: "0px",
    },

    height: ThemeVars.headerHeight,
})

const headerRoot: SxProps = (theme: Theme) => ({
    ...headerSpacer(theme),
    ..._navBg(theme),

    display: "flex",
    flexFlow: "row nowrap",
})

const headerToolbar: SxProps = {
    width: "100%",

    px: 2,

    display: "flex",
    flexFlow: "row nowrap",
    justifyContent: "space-between",
    backgroundColor: "transparent",
}

// =============================================================================
// All Together
// =============================================================================

export const Header = {
    root: headerRoot,
    headerSpacer,
    toolbar: headerToolbar,
}
