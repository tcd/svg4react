import { Box } from "@mui/material"

import { DocsSx } from "@app/theme"
import { Logo } from "@app/features/shared"

export const DrawerHeader = (_props: unknown): JSX.Element => {
    return (
        <Box sx={DocsSx.Layout.drawerHeader}>
            <Box sx={DocsSx.Layout.drawerLogo}>
                <Logo />
            </Box>
            {/* <Typography>
                svg4react
            </Typography> */}
        </Box>
    )
}
