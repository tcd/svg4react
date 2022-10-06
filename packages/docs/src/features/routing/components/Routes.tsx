import { RouteObject, useRoutes } from "react-router-dom"

import { CONFIG } from "@app/util"
import {
    Layout,
    ChangelogPage,
    HomePage,
    NotFoundPage,
} from "@app/features/core"
import {
    AnimatePage,
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
                        { index: true,            element: <NotFoundPage />       },
                        { path: "Animate",        element: <AnimatePage />        },
                        { path: "Circle",         element: <CirclePage />         },
                        { path: "Ellipse",        element: <EllipsePage />        },
                        { path: "LinearGradient", element: <LinearGradientPage /> },
                        { path: "Line",           element: <LinePage />           },
                        { path: "Path",           element: <PathPage />           },
                        { path: "Polygon",        element: <PolygonPage />        },
                        { path: "Polyline",       element: <PolylinePage />       },
                        { path: "RadialGradient", element: <RadialGradientPage /> },
                        { path: "Rect",           element: <RectPage />           },
                        { path: "Stop",           element: <StopPage />           },
                        { path: "Svg",            element: <SvgPage />            },
                        { path: "Text",           element: <TextPage />           },
                    ],
                },
                ...devRoutes,
                { path: "*", element: <NotFoundPage /> },
            ],
        },
        { path: "/*", element: <NotFoundPage /> },
    ]
}
