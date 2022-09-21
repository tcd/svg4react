import { Outlet } from "react-router-dom"
import { Box, SxProps } from "@mui/material"

export const Layout = (_props: unknown): JSX.Element => {
    return (
        <Box sx={sx}>
            <Outlet />
        </Box>
    )
}

// =============================================================================

const sx: SxProps = {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
}
