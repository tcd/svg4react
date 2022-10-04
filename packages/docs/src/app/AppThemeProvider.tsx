import { useSelector } from "react-redux"
import { CssBaseline, ThemeProvider } from "@mui/material"

import { Selectors } from "@app/state"
import {
    // DocsTheme,
    DocsThemeDark,
    DocsThemeLight,
} from "@app/theme"
import { CustomPropertySetter } from "./CustomPropertySetter"

export const AppThemeProvider = (props: { children: React.ReactNode }): JSX.Element => {

    const darkModeEnabled = useSelector(Selectors.Core.darkModeEnabled)

    const theme = darkModeEnabled ? DocsThemeDark : DocsThemeLight

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <CustomPropertySetter />
            {props?.children && props.children}
        </ThemeProvider>
    )
}
