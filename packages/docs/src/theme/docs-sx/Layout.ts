import type { Theme } from "@mui/material"

import { ThemeVars } from "@app/theme/variables"
import type { ISxProps as SxProps } from "@app/theme/helpers"

const { drawerWidth, headerHeight } = ThemeVars

const root: SxProps = {
    display: "flex",
}

const main: SxProps = {
    flexGrow: 1,
    p: 3,
}

// =============================================================================
// Header
// =============================================================================

const header: SxProps = (theme: Theme) => ({
    width: `calc(100% - ${drawerWidth}px)`,
    height: `${headerHeight}px`,

    ml: `${drawerWidth}px`,

    display: "flex",
    flexFlow: "row nowrap",

    [theme.breakpoints.down("laptop")]: {
        width: "100%",
        ml: "0px",
    },
})

const toolbar: SxProps = {
    width: "100%",

    px: 2,

    display: "flex",
    flexFlow: "row nowrap",
    justifyContent: "space-between",
}

// =============================================================================
// Drawer
// =============================================================================

const drawer: SxProps = (theme: Theme) => ({
    width: drawerWidth,
    flexShrink: 0,
    "& .MuiDrawer-paper": {
        width: drawerWidth,
        boxSizing: "border-box",
    },
    [theme.breakpoints.down("laptop")]: {
        width: "0px",
        display: "none",
    },
})

const drawerHeader: SxProps = {
    height: `${headerHeight}px`,
    pl: "11.6px",
    pr: "16px",

    display: "flex",
    // justifyContent: "space-around",
    justifyContent: "center",
    alignItems: "center",
}

const drawerLogo: SxProps = {
    width: "40px",
}

// =============================================================================
// All Together
// =============================================================================

export const Layout = {
    root,
    header,
    toolbar,
    drawer,
    drawerHeader,
    drawerLogo,
    main,
}
