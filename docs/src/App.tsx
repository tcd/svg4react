import { BrowserRouter as Router } from "react-router-dom"
import { CssBaseline } from "@mui/material"

import { Routes } from "@app/features/routing"

export const App = (_props: unknown): JSX.Element => {
    return (
        <>
            <Router>
                <CssBaseline />
                <Routes />
            </Router>
        </>
    )
}
