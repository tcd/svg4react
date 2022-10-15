import type { RouteObject } from "react-router-dom"

// import { NotFoundPage } from "@app/features/core"
import {
    DrawCommandPage,
} from "./components"

export const corePackageRoutes: RouteObject = {
    path: "core",
    children: [
        // { index: true,         element: <NotFoundPage /> },
        { path: "DrawCommand", element: <DrawCommandPage /> },
    ],
}


export const corePackageSideNavItems: ILinkData[] = [
    { title: "DrawCommand", to: "/core/DrawCommand" },
]
