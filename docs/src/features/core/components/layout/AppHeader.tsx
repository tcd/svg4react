import {
    AppBar,
    Toolbar,
    Typography,
} from "@mui/material"

import { DocsSx } from "@app/theme"

// =============================================================================

export const AppHeader = (_props: unknown): JSX.Element => {
    return (
        <AppBar
            elevation={0}
            position="fixed"
            sx={DocsSx.Layout.header}
        >
            <Toolbar>
                <Typography variant="h6" noWrap component="div">
                    svg4react
                </Typography>
            </Toolbar>
        </AppBar>
    )
}
