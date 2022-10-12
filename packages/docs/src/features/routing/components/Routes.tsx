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
import {
    DrawCommandPage,
} from "@app/features/packages/core"
import { TypesPage } from "@app/features/types"
import {
    GradientTextPage,
    LogosPage,
    MarkdownPage,
    MonacoPage,
    PreserveAspectRatioPage,
    TestPage,
    CircleMotionPage,
    BurgerPage,
    CubesPage,
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
                { path: "gradient-text", element: <GradientTextPage /> },
                { path: "circle-motion", element: <CircleMotionPage /> },
                { path: "burger", element: <BurgerPage /> },
                { path: "cubes", element: <CubesPage /> },
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
                {
                    path: "core",
                    children: [
                        { index: true,         element: <NotFoundPage /> },
                        { path: "DrawCommand", element: <DrawCommandPage /> },
                    ],
                },
                ...devRoutes,
                { path: "*", element: <NotFoundPage /> },
            ],
        },
        { path: "/*", element: <NotFoundPage /> },
    ]
}
