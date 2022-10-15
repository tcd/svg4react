import { Outlet } from "react-router-dom"
import { Box, Toolbar } from "@mui/material"

import { DocsSx } from "@app/theme"
import { AppHeader } from "./header"
import { AppDrawer } from "./side-nav"

export const Layout = (_props: unknown): JSX.Element => {

    return (
        <Box sx={DocsSx.Layout.Layout.root}>

            <AppHeader />

            <AppDrawer />

            <Box id="svg4react__main" component="main" sx={DocsSx.Layout.Layout.main}>
                <Toolbar sx={DocsSx.Layout.Header.headerSpacer} />
                <Outlet />
            </Box>

        </Box>
    )
}
