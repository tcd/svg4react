import { RouteObject, useRoutes } from "react-router-dom"

// NOTE: I know these should be consolidated. Found this easier while still figuring out feature folder structure.

import { Layout } from "@app/features/core"
import { ChangelogPage } from "@app/features/core"
import { HomePage } from "@app/features/core"
import { NotFoundPage } from "@app/features/core"

import { CirclePage } from "@app/features/demos"
import { LinePage } from "@app/features/demos"
import { PathPage } from "@app/features/demos"
import { PolylinePage } from "@app/features/demos"
import { RectPage } from "@app/features/demos"
import { SvgPage } from "@app/features/demos"

import { TestPage } from "@app/features/test"
import { LogosPage } from "@app/features/test"
import { MonacoPage } from "@app/features/test"

export const Routes = (_props: unknown): JSX.Element => {
    return useRoutes(routes())
}

const routes = (): RouteObject[] => {
    return [
        {
            path: "/",
            element: <Layout />,
            children: [
                { index: true,       element: <HomePage />      },
                { path: "changelog", element: <ChangelogPage /> },
                {
                    path: "demos",
                    children: [
                        { index: true,      element: <NotFoundPage /> },
                        { path: "circle",   element: <CirclePage />   },
                        { path: "line",     element: <LinePage />     },
                        { path: "path",     element: <PathPage />     },
                        { path: "polyline", element: <PolylinePage /> },
                        { path: "rect",     element: <RectPage />     },
                        { path: "svg",      element: <SvgPage />      },
                    ],
                },
                {
                    path: "examples",
                    children: [
                        { index: true, element: <TestPage /> },
                        { path: "logos", element: <LogosPage /> },
                        { path: "monaco", element: <MonacoPage /> },
                    ],
                },
                { path: "*", element: <NotFoundPage /> },
            ],
        },
        { path: "/*", element: <NotFoundPage /> },
    ]
}
