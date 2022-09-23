import { RouteObject, useRoutes } from "react-router-dom"

import { Layout } from "@app/features/core"
import { HomePage } from "@app/features/core"
import { NotFoundPage } from "@app/features/core"

import { CirclePage } from "@app/features/demos"
import { PathPage } from "@app/features/demos"
import { SvgPage } from "@app/features/demos"

import { TestPage } from "@app/features/test"
import { LogosPage } from "@app/features/test"

export const Routes = (_props: unknown): JSX.Element => {
    return useRoutes(routes())
}

const routes = (): RouteObject[] => {
    return [
        {
            path: "/",
            element: <Layout />,
            children: [
                { index: true, element: <HomePage /> },
                {
                    path: "demos",
                    children: [
                        { index: true,    element: <NotFoundPage /> },
                        { path: "svg",    element: <SvgPage />      },
                        { path: "path",   element: <PathPage />     },
                        { path: "circle", element: <CirclePage />   },
                    ],
                },
                {
                    path: "examples",
                    children: [
                        { index: true, element: <TestPage /> },
                        { path: "logos", element: <LogosPage />   },
                    ],
                },
                { path: "*", element: <NotFoundPage /> },
            ],
        },
        { path: "/*", element: <NotFoundPage /> },
    ]
}
