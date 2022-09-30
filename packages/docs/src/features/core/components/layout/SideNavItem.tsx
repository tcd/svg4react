import { useLocation, useNavigate } from "react-router-dom"
import {
    List,
    Divider,
    ListItem,
    ListItemButton,
    ListItemText,
} from "@mui/material"

import type { ISxProps as SxProps } from "@app/theme"

export interface SideNavItemProps {
    data: ILinkData | ILinksData
}

export const SideNavItem = ({ data }: SideNavItemProps): JSX.Element => {

    if (isLink(data)) {
        return <SideNavItem_link {...data} />
    }

    if (isLinks(data)) {
        return <SideNavItem_links {...data} />
    }

    return null
}


// =============================================================================

const isLink = (arg: any): arg is ILinkData => {
    return (!!arg?.to)
}

const isLinks = (arg: any): arg is ILinksData => {
    return (!!arg?.links)
}

// =============================================================================

const SideNavItem_link = (props: ILinkData): JSX.Element => {

    const navigate = useNavigate()
    const location = useLocation()

    const handleClick = () => {
        navigate(props.to)
    }

    const active = props.to == location.pathname

    const sx: SxProps = {
        color: active ? (theme) => theme.palette.secondary.main : undefined
    }

    return (
        <ListItem disablePadding>
            <ListItemButton onClick={handleClick}>
                <ListItemText primary={props.title} primaryTypographyProps={{ sx }} />
            </ListItemButton>
        </ListItem>
    )
}

const SideNavItem_links = (props: ILinksData): JSX.Element => {

    const $links = props.links.map((link, index) => <SideNavItem_link key={index} {...link} />)

    return (
        <>
            <Divider />
            <List>
                {$links}
            </List>
        </>
    )
}
