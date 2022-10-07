import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/integration/react"

import { store, persistor } from "@app/state"
import { Router } from "@app/features/routing"
import { AppHelmet } from "./AppHelmet"
import { AppThemeProvider } from "./AppThemeProvider"

export const App = (_props: unknown): JSX.Element => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <AppHelmet />
                <AppThemeProvider>
                    <Router />
                </AppThemeProvider>
            </PersistGate>
        </Provider>
    )
}
