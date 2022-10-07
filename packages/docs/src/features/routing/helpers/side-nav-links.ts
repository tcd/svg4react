import CodeIcon from "@mui/icons-material/Code"
// import DataObjectIcon from "@mui/icons-material/DataObject"
// import HomeIcon from "@mui/icons-material/Home"
import ScienceIcon from "@mui/icons-material/Science"

import { CONFIG } from "@app/util"

export const SIDE_NAV_LINKS: (ILinkData | ILinksData)[] = [
    // {
    //     title: "root",
    //     Icon: HomeIcon,
    //     links: [
    //         { title: "Home", to: "/" },
    //         // { title: "Playground", to: "/playground" },
    //         { title: "Changelog", to: "/changelog" },
    //     ],
    // },
    {
        title: "Components",
        Icon: CodeIcon,
        links: [
            { title: "Animate",          to: "/components/Animate" },
            { title: "AnimateMotion",    to: "/components/AnimateMotion" },
            { title: "AnimateTransform", to: "/components/AnimateTransform" },
            { title: "Circle",           to: "/components/Circle" },
            { title: "Ellipse",          to: "/components/Ellipse" },
            { title: "Line",             to: "/components/Line" },
            { title: "LinearGradient",   to: "/components/LinearGradient" },
            { title: "Path",             to: "/components/Path" },
            { title: "Polygon",          to: "/components/Polygon" },
            { title: "Polyline",         to: "/components/Polyline" },
            { title: "RadialGradient",   to: "/components/RadialGradient" },
            { title: "Rect",             to: "/components/Rect" },
            { title: "Stop",             to: "/components/Stop" },
            { title: "Svg",              to: "/components/Svg" },
            { title: "Text",             to: "/components/Text" },
            // { title: "Use",              to: "/components/Use" },
        ],
    },
    ...(CONFIG.env !== "production" ? [
        {
            title: "Examples",
            Icon: ScienceIcon,
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
