import { ThemeVars } from "@app/theme/variables"

import { ISxProps as SxProps } from "@app/theme/helpers"

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

const header: SxProps = {
    width: `calc(100% - ${drawerWidth}px)`,
    height: `${headerHeight}px`,

    ml: `${drawerWidth}px`,

    display: "flex",
    flexFlow: "row nowrap",
}

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

const drawer: SxProps = {
    width: drawerWidth,
    flexShrink: 0,
    "& .MuiDrawer-paper": {
        width: drawerWidth,
        boxSizing: "border-box",
    },
}

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
