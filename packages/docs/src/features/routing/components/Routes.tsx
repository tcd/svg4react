import { RouteObject, useRoutes } from "react-router-dom"

import { CONFIG } from "@app/util"
import {
    Layout,
    ChangelogPage,
    HomePage,
    NotFoundPage,
} from "@app/features/core"
// import { PlaygroundPage } from "@app/features/playground"

import { testRoutes } from "@app/features/test"
import { corePackageRoutes } from "@app/features/packages/core"
import { basePackageRoutes } from "@app/features/packages/base"

export const Routes = (_props: unknown): JSX.Element => {
    return useRoutes(routes())
}

const routes = (): RouteObject[] => {

    const devRoutes: RouteObject[] = []

    if (CONFIG.env !== "production") {
        devRoutes.push(testRoutes)
    }

    return [
        {
            path: "/",
            element: <Layout />,
            children: [
                { index: true,       element: <HomePage />      },
                { path: "changelog", element: <ChangelogPage /> },
                // { path: "playground", element: <PlaygroundPage /> },
                ...[
                    basePackageRoutes,
                    corePackageRoutes,
                ],
                ...devRoutes,
                { path: "*", element: <NotFoundPage /> },
            ],
        },
        { path: "/*", element: <NotFoundPage /> },
    ]
}
