// import CastleIcon from "@mui/icons-material/Castle"
// import AnimationIcon from "@mui/icons-material/Animation"
import CodeIcon from "@mui/icons-material/Code"
import DataObjectIcon from "@mui/icons-material/DataObject"
import DescriptionIcon from "@mui/icons-material/Description"
// import HomeIcon from "@mui/icons-material/Home"
import ScienceIcon from "@mui/icons-material/Science"
// import TerminalIcon from "@mui/icons-material/Terminal"

import { testSideNavItems } from "@app/features/test"
import {
    basePackageSideNavItems,
    corePackageSideNavItems,
} from "@app/features/packages"

import { CONFIG } from "@app/util"

export const SIDE_NAV_LINKS: (ILinkData | ILinksData)[] = [
    {
        title: "root",
        Icon: null,
        links: [
            // { title: "Home", to: "/", Icon: HomeIcon },
            // { title: "Playground", to: "/playground", Icon: CastleIcon },
            // { title: "Playground", to: "/playground", Icon: TerminalIcon },
            { title: "Changelog", to: "/changelog", Icon: DescriptionIcon },
        ],
    },
    // {
    //     title: "Animation",
    //     Icon: AnimationIcon,
    //     links: [
    //         { title: "Animate",          to: "/components/Animate" },
    //         { title: "AnimateMotion",    to: "/components/AnimateMotion" },
    //         { title: "AnimateTransform", to: "/components/AnimateTransform" },
    //     ],
    // },
    {
        title: "Components",
        Icon: CodeIcon,
        links: basePackageSideNavItems,
    },
    {
        // title: "Component API",
        title: "Types",
        Icon: DataObjectIcon,
        links: corePackageSideNavItems,
    },
    ...(CONFIG.env !== "production" ? [
        {
            title: "Examples",
            Icon: ScienceIcon,
            links: testSideNavItems,
        },
    ] : []),
]
