import { useSelector } from "react-redux"
import { CssBaseline, ThemeProvider } from "@mui/material"

import { Selectors } from "@app/state"
import {
    // DocsTheme,
    DocsThemeDark,
    DocsThemeLight,
} from "@app/theme"

export const AppThemeProvider = (props: { children: React.ReactNode }): JSX.Element => {

    const darkModeEnabled = useSelector(Selectors.Core.darkModeEnabled)

    const theme = darkModeEnabled ? DocsThemeDark : DocsThemeLight
    console.log(theme)

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {props?.children && props.children}
        </ThemeProvider>
    )
}
