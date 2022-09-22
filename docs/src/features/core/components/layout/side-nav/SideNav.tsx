import { Outlet } from "react-router-dom"
import {
    Box,
    Drawer,
    AppBar,
    Toolbar,
    List,
    Typography,
} from "@mui/material"

import { SIDE_NAV_LINKS } from "@app/features/routing"
import { SideNavItem } from "./SideNavItem"

const drawerWidth = 240

export const SideNav = (_props: unknown): JSX.Element => {

    const $items = SIDE_NAV_LINKS.map((link, i) => <SideNavItem key={i} data={link} />)

    return (
        <Box sx={{ display: "flex" }}>
            <AppBar
                position="fixed"
                sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
            >
                <Toolbar>
                    <Typography variant="h6" noWrap component="div">
                        svg4react
                    </Typography>
                </Toolbar>
            </AppBar>
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
                <Toolbar />
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
