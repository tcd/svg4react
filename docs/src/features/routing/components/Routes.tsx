import { RouteObject, useRoutes } from "react-router-dom"

// NOTE: I know these should be consolidated. Found this easier while still figuring out feature folder structure.

import { Layout } from "@app/features/core"
import { ChangelogPage } from "@app/features/core"
import { HomePage } from "@app/features/core"
import { NotFoundPage } from "@app/features/core"

import { CirclePage } from "@app/features/demos"
import { LinearGradientPage } from "@app/features/demos"
import { LinePage } from "@app/features/demos"
import { PathPage } from "@app/features/demos"
import { PolylinePage } from "@app/features/demos"
import { RectPage } from "@app/features/demos"
import { SvgPage } from "@app/features/demos"

import { PlaygroundPage } from "@app/features/playground"

import { TestPage } from "@app/features/test"
import { LogosPage } from "@app/features/test"
import { MonacoPage } from "@app/features/test"
import { CONFIG } from "@app/util"

export const Routes = (_props: unknown): JSX.Element => {
    return useRoutes(routes())
}

const routes = (): RouteObject[] => {

    const devRoutes: RouteObject[] = []
    if (CONFIG.env !== "production") {
        devRoutes.push({
            path: "examples",
            children: [
                { index: true, element: <TestPage /> },
                { path: "logos", element: <LogosPage /> },
                { path: "monaco", element: <MonacoPage /> },
            ],
        })
    }

    return [
        {
            path: "/",
            element: <Layout />,
            children: [
                { index: true,        element: <HomePage />       },
                { path: "changelog",  element: <ChangelogPage />  },
                { path: "playground", element: <PlaygroundPage /> },
                {
                    path: "demos",
                    children: [
                        { index: true,             element: <NotFoundPage />       },
                        { path: "circle",          element: <CirclePage />         },
                        { path: "linear-gradient", element: <LinearGradientPage /> },
                        { path: "line",            element: <LinePage />           },
                        { path: "path",            element: <PathPage />           },
                        { path: "polyline",        element: <PolylinePage />       },
                        { path: "rect",            element: <RectPage />           },
                        { path: "svg",             element: <SvgPage />            },
                    ],
                },
                ...devRoutes,
                { path: "*", element: <NotFoundPage /> },
            ],
        },
        { path: "/*", element: <NotFoundPage /> },
    ]
}
