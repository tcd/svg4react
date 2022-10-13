import { Box, SxProps } from "@mui/material"
import {
    AnimateMotion,
    AnimateTransform,
    Defs,
    DrawCommand,
    G,
    Path,
    Svg,
    Symbol,
    Use,
} from "svg4react"

import "./e.scss"

// import { DebugPath } from "@app/features/shared"

const rootSx: SxProps = {
    height: "400px",
    display: "flex",
    flexFlow: "column nowrap",
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "papayawhip",
}

const _wrapperSx: SxProps = {
    position: "relative",
    width: "200px",
    height: "200px",
    "&:nth-of-type(1)": { backgroundColor: "indianred" },
    "&:nth-of-type(2)": { backgroundColor: "seagreen"  },
    "&:nth-of-type(3)": { backgroundColor: "royalblue" },
}

export const E = (_props: unknown): JSX.Element => {
    return (
        <Box id="cubes-e-v1" sx={rootSx}>
            {/* @ts-ignore: next-line */}
            <Svg id="cube-1" vb={[100,110]} height="100%" overflow="hidden">
                <Defs>
                    {/* @ts-ignore: next-line */}
                    <Symbol id="cube-blueprint" vb={[100,110]} size={["100%"]}>
                        <G>
                            <Path commands={pathData.top}   fill="indianred" />
                            <Path commands={pathData.left}  fill="sandybrown" />
                            <Path commands={pathData.right} fill="lightgoldenrodyellow" />
                        </G>
                    </Symbol>
                </Defs>

                <Path
                    id="cube-motion-path"
                    // stroke="white"
                    fill="transparent"
                    commands={motionPath_v1}
                />

                <Use
                    // @ts-ignore: next-line
                    size={["50px"]}
                    href="#cube-blueprint"
                >
                    {/* <AnimateTransform
                        attributeName="transform"
                        type="rotate"
                        from="0 60 70"
                        to="360 60 70"
                        dur="5s"
                        repeatCount="indefinite"
                    /> */}
                    <AnimateMotion
                        dur="3s"
                        repeatCount="indefinite"
                    >
                        <mpath href="#cube-motion-path" />
                    </AnimateMotion>
                </Use>
            </Svg>
        </Box>
    )
}

// =============================================================================

type Side = "top" | "left" | "right"

const motionPath_v1: DrawCommand[] = [
    ["M", [[25, -60]]],
    ["v", [180]],
    // ["Z", []],
]

const motionPath_v2: DrawCommand[] = [
    ["M", [[25,0]]],
    ["v", [150]],
    ["h", [150]],
    ["v", [-200]],
    ["h", [-200]],
    ["Z", []],
]

const pathData: Record<Side, DrawCommand[]> = {
    top: [
        ["M", [[ 50,  0]]],
        ["L", [[100, 25]]],
        ["L", [[ 50, 50]]],
        ["L", [[  0, 25]]],
        ["L", [[ 50,  0]]],
        ["Z", []],
    ],
    left: [
        ["M", [[ 0,   25]]],
        ["L", [[ 0,   85]]],
        ["L", [[50,  110]]],
        ["L", [[50,   50]]],
        ["L", [[ 0,   25]]],
        ["Z", []],
    ],
    right: [
        ["M", [[100,  25]]],
        ["L", [[100,  85]]],
        ["L", [[ 50, 110]]],
        ["L", [[50,   50]]],
        ["L", [[100,  25]]],
        ["Z", []],
    ],
}

// const _transformList = [
//     ["rotate",    [-10, 50, 100]],
//     ["translate", [-36, 45.5]],
//     ["skewX",     [40]],
//     ["scale",     [1, 0.5]],
// ]
