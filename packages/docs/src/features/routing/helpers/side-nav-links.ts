import { CONFIG } from "@app/util"

export const SIDE_NAV_LINKS: (ILinkData | ILinksData)[] = [
    // {
    //     title: "root",
    //     links: [
    //         { title: "Home", to: "/" },
    //         // { title: "Playground", to: "/playground" },
    //         { title: "Changelog", to: "/changelog" },
    //     ],
    // },
    {
        title: "Components",
        links: [
            { title: "Circle",         to: "/components/circle" },
            { title: "Ellipse",        to: "/components/ellipse" },
            { title: "Line",           to: "/components/line" },
            { title: "LinearGradient", to: "/components/linear-gradient" },
            { title: "Path",           to: "/components/path" },
            { title: "Polygon",        to: "/components/polygon" },
            { title: "Polyline",       to: "/components/polyline" },
            { title: "Rect",           to: "/components/rect" },
            { title: "Stop",           to: "/components/stop" },
            { title: "Svg",            to: "/components/svg" },
        ],
    },
    ...(CONFIG.env !== "production" ? [
        {
            title: "Examples",
            links: [
                { title: "Test", to: "/examples/" },
                { title: "Logos", to: "/examples/logos" },
                { title: "Monaco", to: "/examples/monaco" },
                { title: "Markdown", to: "/examples/markdown" },
                { title: "Preserve Aspect Ratio", to: "/examples/preserve-aspect-ratio" },
            ],
        },
    ] : []),
]
