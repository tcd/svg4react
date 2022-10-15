import type { RouteObject } from "react-router-dom"

import {
    GradientTextPage,
    LogosPage,
    MonacoPage,
    PreserveAspectRatioPage,
    TestPage,
    CircleMotionPage,
    BurgerPage,
    CubesPage,
} from "@app/features/test"

export const testRoutes: RouteObject = {
    path: "examples",
    children: [
        { index: true, element: <TestPage /> },
        { path: "logos", element: <LogosPage /> },
        { path: "monaco", element: <MonacoPage /> },
        { path: "preserve-aspect-ratio", element: <PreserveAspectRatioPage /> },
        { path: "gradient-text", element: <GradientTextPage /> },
        { path: "circle-motion", element: <CircleMotionPage /> },
        { path: "burger", element: <BurgerPage /> },
        { path: "cubes", element: <CubesPage /> },
    ],
}


export const testSideNavItems: ILinkData[] = [
    { title: "Test", to: "/examples/" },
    { title: "Logos", to: "/examples/logos" },
    { title: "Monaco", to: "/examples/monaco" },
    { title: "Preserve Aspect Ratio", to: "/examples/preserve-aspect-ratio" },
    { title: "Gradient Text", to: "/examples/gradient-text" },
    { title: "Circle Motion", to: "/examples/circle-motion" },
    { title: "Burger", to: "/examples/burger" },
    { title: "Cubes", to: "/examples/cubes" },
]
