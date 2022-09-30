import { useDispatch, useSelector } from "react-redux"
import {
    IconButton,
    useMediaQuery,
    useTheme,
} from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"

import { Actions, Selectors } from "@app/state"

// =============================================================================

export const AppHamburger = (_props: unknown): JSX.Element => {

    const dispatch = useDispatch()

    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.down("laptop"))

    const handleClick = () => {
        dispatch(Actions.Core.toggleDrawer())
    }

    if (matches) {
        return (
            <IconButton onClick={handleClick}>
                <MenuIcon />
            </IconButton>
        )
    }

    return <div />
}
