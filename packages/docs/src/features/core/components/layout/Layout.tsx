import { Outlet } from "react-router-dom"
import {
    Box,
    Drawer,
    Toolbar,
    List,
    // Divider,
} from "@mui/material"

import { DocsSx } from "@app/theme"
import { SIDE_NAV_LINKS } from "@app/features/routing"
import { SideNavItem } from "./SideNavItem"
import { DrawerHeader } from "./DrawerHeader"
import { AppHeader } from "./AppHeader"


export const Layout = (_props: unknown): JSX.Element => {

    const $items = SIDE_NAV_LINKS.map((link, i) => <SideNavItem key={i} data={link} />)

    return (
        <Box sx={DocsSx.Layout.root}>
            <AppHeader />
            <Drawer
                sx={DocsSx.Layout.drawer}
                variant="permanent"
                anchor="left"
            >
                {/* <Toolbar /> */}
                <DrawerHeader />
                {/* <Divider /> */}
                <List>
                    {$items}
                </List>
            </Drawer>
            <Box component="main" sx={DocsSx.Layout.main}>
                <Toolbar sx={DocsSx.Layout.header} />
                <Outlet />
            </Box>
        </Box>
    )
}
