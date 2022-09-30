import { CONFIG } from "@app/util"

export const SIDE_NAV_LINKS: (ILinkData | ILinksData)[] = [
    {
        title: "root",
        links: [
            { title: "Home", to: "/" },
            { title: "Changelog", to: "/changelog" },
            { title: "Playground", to: "/playground" },
        ],
    },
    {
        title: "Components",
        links: [
            { title: "Circle",         to: "/demos/circle" },
            { title: "Line",           to: "/demos/line" },
            { title: "LinearGradient", to: "/demos/linear-gradient" },
            { title: "Path",           to: "/demos/path" },
            { title: "Polyline",       to: "/demos/polyline" },
            { title: "Rect",           to: "/demos/rect" },
            { title: "Svg",            to: "/demos/svg" },
        ],
    },
    ...(CONFIG.env !== "production" ? [
        {
            title: "Examples",
            links: [
                { title: "Test", to: "/examples/" },
                { title: "Logos", to: "/examples/logos" },
                { title: "Monaco", to: "/examples/monaco" },
            ],
        },
    ] : []),
]
