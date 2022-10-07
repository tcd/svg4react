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

    width: `calc(100% - ${drawerWidth})`,
    ml: drawerWidth,

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

const mobileDrawer: SxProps = (theme: Theme) => ({
    // ..._navBg(theme, 0.9),
    background: theme.palette.mode === "dark" ? "#121212" : undefined,
    width: drawerWidth,
})

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

const navItemWithChildren: SxProps = {
    // minHeight: 48,
    // justifyContent: open ? "initial" : "center",
    justifyContent: "center",
    // px: 2.5,
    "& > svg.docs-nav-chevron": {
        color: theme => theme.palette.primary.main,
    },
    "&:hover > svg.docs-nav-chevron": {
        color: theme => theme.palette.mode == "dark" ? "white" : "#696969",
    },
}

const drawerIcon: SxProps = {
    minWidth: "1rem",
    mr: 1.5,
    color: (theme) => theme.palette.primary.main,
}

// =============================================================================
// All Together
// =============================================================================

export const Layout = {
    root,
    main,
    header,
    headerSpacer,
    toolbar,
    drawer,
    drawerHeader,
    drawerLogo,
    drawerIcon,
    mobileDrawer,
    navItemWithChildren,
}
