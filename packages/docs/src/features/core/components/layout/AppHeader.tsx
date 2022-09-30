import { useDispatch, useSelector } from "react-redux"
import {
    AppBar,
    Toolbar,
    Typography,
} from "@mui/material"

import { Actions, Selectors } from "@app/state"
import { DocsSx } from "@app/theme"
import { DarkModeSwitch } from "./DarkModeSwitch"

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
            sx={DocsSx.Layout.header}
        >
            <Toolbar sx={DocsSx.Layout.toolbar}>
                <div />
                {/* <Typography variant="h6" noWrap component="div">
                    svg4react
                </Typography> */}
                <DarkModeSwitch
                    checked={darkModeEnabled}
                    onChange={handleDarkModeChange}
                />
            </Toolbar>
        </AppBar>
    )
}
