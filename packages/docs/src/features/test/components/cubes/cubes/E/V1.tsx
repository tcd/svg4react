import { Box, SxProps } from "@mui/material"
import {
    Path,
    Svg,
    DrawCommand,
    G,
} from "svg4react"

import "./e.scss"

// import { DebugPath as Path } from "./DebugPath"

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
            <Svg id="cube-1" vb={[100,110]} height="100%">
                <G>
                    <Path commands={pathData.top}   fill="indianred" />
                    <Path commands={pathData.left}  fill="sandybrown" />
                    <Path commands={pathData.right} fill="lightgoldenrodyellow" />
                </G>
            </Svg>
        </Box>
    )
}

// =============================================================================

type Side = "top" | "left" | "right"

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
