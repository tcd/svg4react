import { ThemeVars } from "@app/theme/variables"

import { ISxProps as SxProps } from "@app/theme/helpers"

const { drawerWidth, headerHeight } = ThemeVars

const root: SxProps = {
    display: "flex",
}

const header: SxProps = {
    width: `calc(100% - ${drawerWidth}px)`,
    ml: `${drawerWidth}px`,
    height: `${headerHeight}px`,
}

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

const main: SxProps = {
    flexGrow: 1,
    p: 3,
}

// =============================================================================
// All Together
// =============================================================================

export const Layout = {
    root,
    header,
    drawer,
    drawerHeader,
    drawerLogo,
    main,
}
