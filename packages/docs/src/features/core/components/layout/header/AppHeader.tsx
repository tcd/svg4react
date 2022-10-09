import { useDispatch, useSelector } from "react-redux"
import {
    AppBar,
    Toolbar,
    IconButton,
    // Typography,
    Stack,
} from "@mui/material"
import GitHubIcon from "@mui/icons-material/GitHub"

import { Actions, Selectors } from "@app/state"
import { DocsSx } from "@app/theme"
import { DarkModeSwitch } from "./DarkModeSwitch"
import { AppHamburger } from "./AppHamburger"

// =============================================================================

export const AppHeader = (_props: unknown): JSX.Element => {

    const dispatch = useDispatch()

    const darkModeEnabled = useSelector(Selectors.Core.darkModeEnabled)

    const handleDarkModeChange = () => {
        dispatch(Actions.Core.toggleDarkMode())
    }

    return (
        <AppBar
            elevation={0}
            position="fixed"
            sx={DocsSx.Layout.Header.root}
        >
            <Toolbar sx={DocsSx.Layout.Header.toolbar}>
                <AppHamburger />
                {/* <Typography variant="h6" noWrap component="div">
                    svg4react
                </Typography> */}
                <Stack direction="row" alignItems="center" spacing={2}>
                    <IconButton
                        LinkComponent="a"
                        href="https://github.com/tcd/svg4react"
                        sx={{
                            color: (theme) => theme.palette.mode === "dark" ? "#fff" : "#000",
                        }}
                    >
                        <GitHubIcon />
                    </IconButton>
                    <DarkModeSwitch
                        checked={darkModeEnabled}
                        onChange={handleDarkModeChange}
                    />
                </Stack>
            </Toolbar>
        </AppBar>
    )
}
