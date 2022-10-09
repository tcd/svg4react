import { useDispatch } from "react-redux"
import { useLocation, useNavigate } from "react-router-dom"
import { ListItemButton, ListItemText } from "@mui/material"

import type { ISxProps as SxProps } from "@app/theme"
import { Actions } from "@app/state"

export const SideNavItem_link = (props: ILinkData): JSX.Element => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const location = useLocation()

    const handleClick = () => {
        dispatch(Actions.Core.closeDrawer())
        navigate(props.to)
    }

    const active = props.to == location.pathname

    const sx: SxProps = {
        color: active
            ? (theme) => theme.palette.primary.main
            : (theme) => theme.palette.mode === "dark" ? "#b2bac2" : "#3E5060",
        marginLeft: theme => `calc(1rem + ${theme.spacing(1.5)})`,
    }

    return (
        <ListItemButton selected={active} dense onClick={handleClick}>
            <ListItemText
                primary={props.title}
                primaryTypographyProps={{ sx }}
            />
        </ListItemButton>
    )
}
