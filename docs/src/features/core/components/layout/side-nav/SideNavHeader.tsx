import { Box, Typography } from "@mui/material"

import type { ISxProps as SxProps } from "@app/theme"
import { Logo } from "@app/features/shared"

export const SideNavHeader = (_props: unknown): JSX.Element => {
    return (
        <Box sx={sx}>
            <Box sx={logoWrapperSx}>
                <Logo />
            </Box>
            {/* <Typography>
                svg4react
            </Typography> */}
        </Box>
    )
}

// =============================================================================

const sx: SxProps = {
    height: "64px",
    pl: "11.6px",
    pr: "16px",

    display: "flex",
    // justifyContent: "space-around",
    justifyContent: "center",
    alignItems: "center",
}

const logoWrapperSx: SxProps = {
    width: "40px",
}
