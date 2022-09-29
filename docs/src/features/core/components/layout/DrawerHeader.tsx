import { Box, ButtonBase } from "@mui/material"
import { useNavigate } from "react-router-dom"

import { DocsSx } from "@app/theme"
import { Logo } from "@app/features/shared"

export const DrawerHeader = (_props: unknown): JSX.Element => {

    const navigate = useNavigate()

    const handleClick = () => {
        navigate("/")
    }

    return (
        <ButtonBase sx={DocsSx.Layout.drawerHeader} onClick={handleClick}>
            <Box sx={DocsSx.Layout.drawerLogo}>
                <Logo />
            </Box>
            {/* <Typography>
                svg4react
            </Typography> */}
        </ButtonBase>
    )
}
