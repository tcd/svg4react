import { useNavigate } from "react-router-dom"
import {
    List,
    Divider,
    ListItem,
    ListItemButton,
    ListItemText,
} from "@mui/material"

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

    const handleClick = () => {
        navigate(props.to)
    }

    return (
        <ListItem disablePadding>
            <ListItemButton onClick={handleClick}>
                <ListItemText primary={props.title} />
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
