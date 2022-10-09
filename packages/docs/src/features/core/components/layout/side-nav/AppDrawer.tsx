import { useDispatch, useSelector } from "react-redux"
import { Drawer, List, useMediaQuery, useTheme } from "@mui/material"

import { DocsSx } from "@app/theme"
import { Actions, Selectors } from "@app/state"
import { SIDE_NAV_LINKS } from "@app/features/routing"
import { SideNavItem } from "./SideNavItem"
import { DrawerHeader } from "./DrawerHeader"

export const AppDrawer = (_props: unknown): JSX.Element => {

    const dispatch = useDispatch()
    const theme = useTheme()
    const onMobile = useMediaQuery(theme.breakpoints.down("laptop"))
    const drawerOpened = useSelector(Selectors.Core.drawerOpened)

    const handleClose = () => {
        dispatch(Actions.Core.closeDrawer())
    }

    const $items = SIDE_NAV_LINKS.map((link, i) => <SideNavItem key={i} data={link} />)

    return (
        <>
            <Drawer
                sx={DocsSx.Layout.Drawer.drawer}
                variant="permanent"
                anchor="left"
            >
                <DrawerHeader />
                <List dense disablePadding>
                    {$items}
                </List>
            </Drawer>

            {onMobile && (
                <Drawer
                    anchor="left"
                    open={drawerOpened}
                    onClose={handleClose}
                    PaperProps={{
                        sx: {
                            // background: "transparent",
                            // backgroundColor: "transparent",
                            backgroundImage: "none",
                        },
                    }}
                >
                    <DrawerHeader />
                    <List dense disablePadding sx={DocsSx.Layout.Drawer.mobileDrawer}>
                        {$items}
                    </List>
                </Drawer>
            )}
        </>
    )
}
