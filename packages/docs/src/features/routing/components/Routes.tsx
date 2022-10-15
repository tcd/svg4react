import { RouteObject, useRoutes } from "react-router-dom"

import { CONFIG } from "@app/util"
import {
    Layout,
    ChangelogPage,
    HomePage,
    NotFoundPage,
} from "@app/features/core"
import {
    AnimateMotionPage,
    AnimatePage,
    AnimateTransformPage,
    CirclePage,
    ClipPathPage,
    EllipsePage,
    ForeignObjectPage,
    LinearGradientPage,
    LinePage,
    MarkerPage,
    MaskPage,
    MPathPage,
    PathPage,
    PolygonPage,
    PolylinePage,
    RadialGradientPage,
    RectPage,
    StopPage,
    SvgPage,
    SymbolPage,
    TextPage,
    TextPathPage,
    TSpanPage,
    UsePage,
} from "@app/features/components"
// import { PlaygroundPage } from "@app/features/playground"

import { testRoutes } from "@app/features/test"
import { corePackageRoutes } from "@app/features/packages/core"

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
                { index: true,        element: <HomePage />       },
                { path: "changelog",  element: <ChangelogPage />  },
                // { path: "playground", element: <PlaygroundPage /> },
                {
                    path: "components",
                    children: [
                        { index: true,              element: <NotFoundPage />         },
                        { path: "Animate",          element: <AnimatePage />          },
                        { path: "AnimateMotion",    element: <AnimateMotionPage />    },
                        { path: "AnimateTransform", element: <AnimateTransformPage /> },
                        { path: "Circle",           element: <CirclePage />           },
                        { path: "ClipPath",         element: <ClipPathPage />         },
                        { path: "Ellipse",          element: <EllipsePage />          },
                        { path: "ForeignObject",    element: <ForeignObjectPage />    },
                        { path: "Line",             element: <LinePage />             },
                        { path: "LinearGradient",   element: <LinearGradientPage />   },
                        { path: "Mask",             element: <MaskPage />             },
                        { path: "Marker",           element: <MarkerPage />           },
                        { path: "MPath",            element: <MPathPage />            },
                        { path: "Path",             element: <PathPage />             },
                        { path: "Polygon",          element: <PolygonPage />          },
                        { path: "Polyline",         element: <PolylinePage />         },
                        { path: "RadialGradient",   element: <RadialGradientPage />   },
                        { path: "Rect",             element: <RectPage />             },
                        { path: "Stop",             element: <StopPage />             },
                        { path: "Svg",              element: <SvgPage />              },
                        { path: "Symbol",           element: <SymbolPage />           },
                        { path: "Text",             element: <TextPage />             },
                        { path: "TextPath",         element: <TextPathPage />         },
                        { path: "TSpan",            element: <TSpanPage />            },
                        { path: "Use",              element: <UsePage />              },
                    ],
                },
                ...[corePackageRoutes],
                ...devRoutes,
                { path: "*", element: <NotFoundPage /> },
            ],
        },
        { path: "/*", element: <NotFoundPage /> },
    ]
}
