import { BrowserRouter as Router } from "react-router-dom"
import { CssBaseline, ThemeProvider } from "@mui/material"

import { DocsTheme } from "@app/theme"
import { Routes } from "@app/features/routing"

export const App = (_props: unknown): JSX.Element => {
    return (
        <ThemeProvider theme={DocsTheme}>
            <Router>
                <CssBaseline />
                <Routes />
            </Router>
        </ThemeProvider>
    )
}
