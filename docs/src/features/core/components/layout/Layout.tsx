import { Outlet } from "react-router-dom"
import { Box } from "@mui/material"

import { SideNav } from "./side-nav"

export const Layout = (_props: unknown): JSX.Element => {
    return <SideNav />
    return (
        <Box>
            <Outlet />
        </Box>
    )
}
