import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { Box, ButtonBase } from "@mui/material"

import { DocsSx } from "@app/theme"
import { Actions } from "@app/state"
import { Logo } from "@app/features/shared"

export const DrawerHeader = (_props: unknown): JSX.Element => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleClick = () => {
        dispatch(Actions.Core.closeDrawer())
        navigate("/")
    }

    return (
        <ButtonBase sx={DocsSx.Layout.Drawer.drawerHeader} onClick={handleClick}>
            <Box sx={DocsSx.Layout.Drawer.drawerLogo}>
                <Logo />
            </Box>
            {/* <Typography>
                svg4react
            </Typography> */}
        </ButtonBase>
    )
}
