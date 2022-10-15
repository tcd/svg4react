import type { RouteObject } from "react-router-dom"

// import { NotFoundPage } from "@app/features/core"
import {
    DrawArgsPage,
    DrawCommandPage,
    LengthPage,
    VBPage,
} from "./components"

export const corePackageRoutes: RouteObject = {
    path: "core",
    children: [
        // { index: true,         element: <NotFoundPage /> },
        { path: "DrawArgs", element: <DrawArgsPage /> },
        { path: "DrawCommand", element: <DrawCommandPage /> },
        { path: "Length", element: <LengthPage /> },
        { path: "VB", element: <VBPage /> },
    ],
}

export const corePackageSideNavItems: ILinkData[] = [
    { title: "DrawArgs", to: "/core/DrawArgs" },
    { title: "DrawCommand", to: "/core/DrawCommand" },
    { title: "Length", to: "/core/Length" },
    { title: "VB", to: "/core/VB" },
]
