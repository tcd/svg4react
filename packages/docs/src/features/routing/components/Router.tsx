import {
    BrowserRouter as ReactRouter,
} from "react-router-dom"

import { Routes } from "./Routes"
import { ScrollToTop } from "./ScrollToTop"

export const Router = (_props: unknown): JSX.Element => {
    return (
        <ReactRouter>
            <Routes />
            <ScrollToTop />
        </ReactRouter>
    )
}
