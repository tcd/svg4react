import { Drawer, List } from "@mui/material"

import { DocsSx } from "@app/theme"
import { SIDE_NAV_LINKS } from "@app/features/routing"
import { SideNavItem } from "./SideNavItem"
import { DrawerHeader } from "./DrawerHeader"
import { AppMobileDrawer } from "./AppMobileDrawer"

export const AppDrawer = (_props: unknown): JSX.Element => {

    const $items = SIDE_NAV_LINKS.map((link, i) => <SideNavItem key={i} data={link} />)

    return (
        <>
            <AppMobileDrawer />

            <Drawer
                sx={DocsSx.Layout.drawer}
                variant="permanent"
                anchor="left"
            >
                <DrawerHeader />
                <List>
                    {$items}
                </List>
            </Drawer>
        </>
    )
}
