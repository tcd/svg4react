import { RouteObject, useRoutes } from "react-router-dom"

import { CONFIG } from "@app/util"
import {
    Layout,
    ChangelogPage,
    HomePage,
    NotFoundPage,
} from "@app/features/core"
import {
    CirclePage,
    EllipsePage,
    LinearGradientPage,
    LinePage,
    PathPage,
    PolygonPage,
    PolylinePage,
    RadialGradientPage,
    RectPage,
    StopPage,
    SvgPage,
    TextPage,
} from "@app/features/demos"
// import { PlaygroundPage } from "@app/features/playground"
import { TypesPage } from "@app/features/types"
import {
    LogosPage,
    MarkdownPage,
    MonacoPage,
    PreserveAspectRatioPage,
    TestPage,
} from "@app/features/test"

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
                { path: "markdown", element: <MarkdownPage /> },
                { path: "preserve-aspect-ratio", element: <PreserveAspectRatioPage /> },
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
                // { path: "playground", element: <PlaygroundPage /> },
                { path: "types",      element: <TypesPage />      },
                {
                    path: "components",
                    children: [
                        { index: true,             element: <NotFoundPage />       },
                        { path: "circle",          element: <CirclePage />         },
                        { path: "ellipse",         element: <EllipsePage />        },
                        { path: "linear-gradient", element: <LinearGradientPage /> },
                        { path: "line",            element: <LinePage />           },
                        { path: "path",            element: <PathPage />           },
                        { path: "polygon",         element: <PolygonPage />        },
                        { path: "polyline",        element: <PolylinePage />       },
                        { path: "radial-gradient", element: <RadialGradientPage /> },
                        { path: "rect",            element: <RectPage />           },
                        { path: "stop",            element: <StopPage />           },
                        { path: "svg",             element: <SvgPage />            },
                        { path: "text",            element: <TextPage />           },
                    ],
                },
                ...devRoutes,
                { path: "*", element: <NotFoundPage /> },
            ],
        },
        { path: "/*", element: <NotFoundPage /> },
    ]
}
