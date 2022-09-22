import { ThemeVars } from "@app/theme/variables"

import { ISxProps as SxProps } from "@app/theme/helpers"

const { drawerWidth } = ThemeVars

const root: SxProps = {
    display: "flex",
}

const header: SxProps = {
    width: `calc(100% - ${drawerWidth}px)`,
    ml: `${drawerWidth}px`,
}

const drawer: SxProps = {
    width: drawerWidth,
    flexShrink: 0,
    "& .MuiDrawer-paper": {
        width: drawerWidth,
        boxSizing: "border-box",
    },
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
    main,
}
