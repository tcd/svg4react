import { RouteObject, useRoutes } from "react-router-dom"

import { Layout } from "@app/features/core"
import { NotFoundPage } from "@app/features/core"
import { HomePage } from "@app/features/core"
import { DrawtoExamples } from "@app/features/examples"

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
                    path: "examples",
                    children: [
                        { index: true, element: <NotFoundPage /> },
                        { path: "path", element: <DrawtoExamples /> },
                    ],
                },
                { path: "*", element: <NotFoundPage /> },
            ],
        },
        { path: "/*", element: <NotFoundPage /> },
    ]
}