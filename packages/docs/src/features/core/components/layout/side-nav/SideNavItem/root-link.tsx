import { useDispatch } from "react-redux"
import { useLocation, useNavigate } from "react-router-dom"
import { Divider, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"

import type { ISxProps as SxProps } from "@app/theme"
import { Actions } from "@app/state"

export const SideNavItem_rootLink = (props: ILinkData): JSX.Element => {

    const {
        title,
        to,
        Icon,
    } = props

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const location = useLocation()

    const handleClick = () => {
        dispatch(Actions.Core.closeDrawer())
        navigate(to)
    }

    const active = to == location.pathname

    const sx: SxProps = {
        color: active
            ? (theme) => theme.palette.primary.main
            : (theme) => theme.palette.mode === "dark" ? "#fff" : "#3E5060",
        // marginLeft: theme => `calc(1rem + ${theme.spacing(1.5)})`,
    }

    return (
        <>
            <Divider />
            <ListItemButton dense onClick={handleClick}>
                <ListItemIcon sx={{ minWidth: "1rem", mr: 1.5, color: theme => theme.palette.primary.main }}>
                    <Icon sx={{ fontSize: "1rem" }}/>
                </ListItemIcon>
                <ListItemText
                    primary={title}
                    primaryTypographyProps={{ sx }}
                />
            </ListItemButton>
        </>
    )
}
