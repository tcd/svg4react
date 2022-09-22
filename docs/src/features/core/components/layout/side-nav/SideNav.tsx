import { Outlet } from "react-router-dom"
import {
    Box,
    Drawer,
    AppBar,
    Toolbar,
    List,
    Typography,
    Divider,
} from "@mui/material"

import { SIDE_NAV_LINKS } from "@app/features/routing"
import { SideNavItem } from "./SideNavItem"
import { SideNavHeader } from "./SideNavHeader"

const drawerWidth = 240

export const SideNav = (_props: unknown): JSX.Element => {

    const $items = SIDE_NAV_LINKS.map((link, i) => <SideNavItem key={i} data={link} />)

    return (
        <Box sx={{ display: "flex" }}>
            <Header />
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    "& .MuiDrawer-paper": {
                        width: drawerWidth,
                        boxSizing: "border-box",
                    },
                }}
                variant="permanent"
                anchor="left"
            >
                {/* <Toolbar /> */}
                <SideNavHeader />
                <Divider />
                <List>
                    {$items}
                </List>
            </Drawer>
            <Box
                component="main"
                sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
            >
                <Toolbar />
                <Outlet />
            </Box>
        </Box>
    )
}

// =============================================================================

export const Header = (_props: unknown): JSX.Element => {
    return (
        <AppBar
            elevation={0}
            position="fixed"
            sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
        >
            <Toolbar>
                <Typography variant="h6" noWrap component="div">
                    svg4react
                </Typography>
            </Toolbar>
        </AppBar>
    )
}
