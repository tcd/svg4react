import { useDispatch, useSelector } from "react-redux"
import {
    Drawer,
    List,
    useMediaQuery,
    useTheme,
} from "@mui/material"

import { DocsSx } from "@app/theme"
import { SIDE_NAV_LINKS } from "@app/features/routing"
import { SideNavItem } from "./SideNavItem"
import { DrawerHeader } from "./DrawerHeader"
import { Actions, Selectors } from "@app/state"

export const AppMobileDrawer = (_props: unknown): JSX.Element => {

    const dispatch = useDispatch()
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.down("laptop"))
    const drawerOpened = useSelector(Selectors.Core.drawerOpened)

    if (!matches) {
        return null
    }

    const handleClose = () => {
        dispatch(Actions.Core.closeDrawer())
    }

    const $items = SIDE_NAV_LINKS.map((link, i) => <SideNavItem key={i} data={link} />)

    return (
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
            <List sx={DocsSx.Layout.mobileDrawer}>
                {$items}
            </List>
        </Drawer>
    )
}
