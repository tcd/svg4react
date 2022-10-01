import { Outlet } from "react-router-dom"
import { Box, Toolbar } from "@mui/material"

import { DocsSx } from "@app/theme"
import { AppHeader } from "./header"
import { AppDrawer } from "./side-nav"

export const Layout = (_props: unknown): JSX.Element => {

    return (
        <Box sx={DocsSx.Layout.root}>

            <AppHeader />

            <AppDrawer />

            <Box component="main" sx={DocsSx.Layout.main}>
                <Toolbar sx={DocsSx.Layout.header} />
                <Outlet />
            </Box>

        </Box>
    )
}
