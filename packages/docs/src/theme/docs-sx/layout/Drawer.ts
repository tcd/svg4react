import type { Theme } from "@mui/material"

import { ThemeVars } from "@app/theme/variables"
import type { ISxProps as SxProps } from "@app/theme/helpers"

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
// Drawer
// =============================================================================

const mobileDrawer: SxProps = (theme: Theme) => ({
    ..._navBg(theme, 0.9),
    background: theme.palette.mode === "dark" ? "#121212" : undefined,
    width: ThemeVars.drawerWidth,
})

const desktopDrawer: SxProps = (theme: Theme) => ({
    width: ThemeVars.drawerWidth,
    flexShrink: 0,
    "& .MuiDrawer-paper": {
        width: ThemeVars.drawerWidth,
        boxSizing: "border-box",
        // background: theme.palette.mode === "dark" ? "#121212" : undefined,
    },
    [theme.breakpoints.down("laptop")]: {
        width: "0px",
        display: "none",
    },
})

const drawerHeader: SxProps = {
    height: ThemeVars.headerHeight,
    pl: "11.6px",
    pr: "16px",

    display: "flex",
    // justifyContent: "space-around",
    justifyContent: "center",
    alignItems: "center",
}

const drawerLogo: SxProps = {
    width: "40px",
    height: "64px",
    // background: "transparent",
    // backgroundColor: "transparent",
}

const navItemWithChildren: SxProps = {
    // minHeight: 48,
    // justifyContent: open ? "initial" : "center",
    justifyContent: "center",
    // px: 2.5,
    "& > svg.docs-nav-chevron": {
        color: (theme) => theme.palette.primary.main,
    },
    "&:hover > svg.docs-nav-chevron": {
        color: (theme) => theme.palette.mode == "dark" ? "white" : "#696969",
    },
}

/**
 * Title for dropdown list, not individual links.
 */
const drawerTitle: SxProps = {
    fontWeight: 500,
}

const drawerIcon: SxProps = {
    minWidth: "1rem",
    mr: 1.5,
    color: (theme) => theme.palette.primary.main,
}

// =============================================================================
// All Together
// =============================================================================

export const Drawer = {
    drawer: desktopDrawer,
    mobileDrawer,
    drawerHeader,
    drawerLogo,
    drawerIcon,
    navItemWithChildren,
    drawerTitle,
}
