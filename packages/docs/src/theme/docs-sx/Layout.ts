import type { Theme } from "@mui/material"

import { ThemeVars } from "@app/theme/variables"
import type { ISxProps as SxProps } from "@app/theme/helpers"

const { drawerWidth, headerHeight } = ThemeVars


// =============================================================================
// Shared
// =============================================================================

// const headerOpacity = 0.702

const _navBg = (theme: Theme, opacity = 0.702) => {
    const headerBgDark  = `rgba(25, 25, 25, ${opacity})`
    const headerBgLight = `rgba(255, 255, 255, ${opacity})`
    return {
        backgroundColor: "transparent",
        backdropFilter: "blur(10px)",
        background: theme.palette.mode === "dark" ? headerBgDark : headerBgLight,
    }
}

// =============================================================================
// Main
// =============================================================================

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

const headerSpacer: SxProps = (theme: Theme) => ({

    width: `calc(100% - ${drawerWidth}px)`,
    ml: `${drawerWidth}px`,

    [theme.breakpoints.down("laptop")]: {
        width: "100%",
        ml: "0px",
    },

    height: `${headerHeight}px`,
})

const header: SxProps = (theme: Theme) => ({
    ...headerSpacer(theme),
    ..._navBg(theme),

    display: "flex",
    flexFlow: "row nowrap",
})

const toolbar: SxProps = {
    width: "100%",

    px: 2,

    display: "flex",
    flexFlow: "row nowrap",
    justifyContent: "space-between",
    backgroundColor: "transparent",

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
    // background: "transparent",
    // backgroundColor: "transparent",
}

const mobileDrawer: SxProps = (theme: Theme) => ({
    // ..._navBg(theme, 0.9),
    background: "#121212",
    width: ThemeVars.drawerWidth + "px",
})

// =============================================================================
// All Together
// =============================================================================

export const Layout = {
    root,
    header,
    headerSpacer,
    toolbar,
    drawer,
    drawerHeader,
    drawerLogo,
    mobileDrawer,
    main,
}
