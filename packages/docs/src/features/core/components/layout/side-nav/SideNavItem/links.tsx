import { useDispatch, useSelector } from "react-redux"
import {
    Collapse,
    Divider,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from "@mui/material"

import { DocsSx } from "@app/theme"
import { Actions, Selectors } from "@app/state"

import { SideNavItem_link } from "./link"
import { Chevron } from "./Chevron"

export const SideNavItem_links = (props: ILinksData): JSX.Element => {

    const {
        title,
        links = [],
        Icon,
    } = props

    const dispatch = useDispatch()

    const openSections = useSelector(Selectors.Core.openedDrawerSections)

    const sectionOpen = openSections.includes(title)

    const handleClick = () => {
        dispatch(Actions.Core.toggleDrawerSection(title))
    }

    const $links = links.map((link, index) => <SideNavItem_link key={index} {...link} />)

    return (
        <>
            <Divider />

            <ListItemButton dense onClick={handleClick} sx={DocsSx.Layout.Drawer.navItemWithChildren}>
                <ListItemIcon sx={DocsSx.Layout.Drawer.drawerIcon}>
                    <Icon sx={{ fontSize: "1rem" }}/>
                </ListItemIcon>
                <ListItemText primary={title} primaryTypographyProps={{ sx: DocsSx.Layout.Drawer.drawerTitle }} />
                <Chevron expanded={sectionOpen} />
            </ListItemButton>

            <Collapse in={sectionOpen} timeout="auto">
                <List dense disablePadding component="div" >
                    {$links}
                </List>
            </Collapse>
        </>
    )
}
