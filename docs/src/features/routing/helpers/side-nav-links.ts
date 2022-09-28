export const SIDE_NAV_LINKS: (ILinkData | ILinksData)[] = [
    { title: "Home", to: "/" },
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
    {
        title: "Examples",
        links: [
            { title: "Test", to: "/examples/" },
            { title: "Logos", to: "/examples/logos" },
            { title: "Monaco", to: "/examples/monaco" },
        ],
    },
    { title: "Changelog", to: "/changelog" },
]
