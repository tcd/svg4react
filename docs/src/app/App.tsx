import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/integration/react"
import { BrowserRouter as Router } from "react-router-dom"
import { CssBaseline, ThemeProvider } from "@mui/material"

import { DocsTheme } from "@app/theme"
import { store, persistor } from "@app/state"
import { Routes } from "@app/features/routing"
import { AppHelmet } from "./AppHelmet"

export const App = (_props: unknown): JSX.Element => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <ThemeProvider theme={DocsTheme}>
                    <CssBaseline />
                    <AppHelmet />
                    <Router>
                        <Routes />
                    </Router>
                </ThemeProvider>
            </PersistGate>
        </Provider>
    )
}
