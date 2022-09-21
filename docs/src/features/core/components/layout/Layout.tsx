import { Outlet } from "react-router-dom"
import { Box } from "@mui/material"

export const Layout = (_props: unknown): JSX.Element => {
    return (
        <Box>
            <Outlet />
        </Box>
    )
}
