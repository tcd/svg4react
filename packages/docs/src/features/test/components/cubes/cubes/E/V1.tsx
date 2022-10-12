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
            <Svg
                id="cube-1"
                height="100%"
                // viewBox="-50 -50 100 100"
                vb={[100,110]}
            >
                <G>
                    {/* <Path className="cube-side-top"   commands={pathData[0]} /> */}
                    {/* <Path className="cube-side-left"  commands={pathData[1]} /> */}
                    {/* <Path className="cube-side-right" commands={pathData[3]} /> */}

                    <Path
                        // stroke="red"
                        fill="indianred"
                        commands={[
                            ["M", [[ 50,  0]]],
                            ["L", [[100, 25]]],
                            ["L", [[ 50, 50]]],
                            ["L", [[  0, 25]]],
                            ["L", [[ 50,  0]]],
                            ["Z", []],
                        ]}
                    />

                    <Path
                        // stroke="orange"
                        fill="sandybrown"
                        commands={[
                            ["M", [[ 0,   25]]],
                            ["L", [[ 0,   85]]],
                            ["L", [[50,  110]]],
                            ["L", [[50,   50]]],
                            ["L", [[ 0,   25]]],
                            ["Z", []],
                        ]}
                    />

                    <Path
                        // stroke="yellow"
                        fill="lightgoldenrodyellow"
                        commands={[
                            ["M", [[100,  25]]],
                            ["L", [[100,  85]]],
                            ["L", [[ 50, 110]]],
                            ["L", [[50,   50]]],
                            ["L", [[100,  25]]],
                            ["Z", []],
                        ]}
                    />
                </G>
            </Svg>
        </Box>
    )
}

// =============================================================================

const pathData: DrawCommand[][] = [
    [
        ["M", [[0, 24.5878]]],
        ["L", [[43.2009, 0]]],
        ["L", [[86.4018, 24.8176]]],
        ["L", [[43.2009, 49.6351]]],
        ["L", [[0, 24.5878]]],
        ["Z", []],
    ],
    [
        ["M", [[0, 24.5878]]],
        ["L", [[43.2009, 49.6351]]],
        ["V", [99.5]],
        ["L", [[0, 74.2229]]],
        ["V", [24.5878]],
        ["Z", []],
    ],
    [
        ["M", [[ 0, 24.5]]],
        ["L", [[43, 49.5]]],
        ["V", [50]],
        ["L", [[0, 25]]],
        ["V", [24.5]],
        ["Z", []],
    ],
    [
        ["M", [[43.2009, 49.6351]]],
        ["L", [[86.4019, 24.8176]]],
        ["V", [74.4527]],
        ["L", [[43.2009, 99.5]]],
        ["V", [49.6351]],
        ["Z", []],
    ],
]

// const _transformList = [
//     ["rotate",    [-10, 50, 100]],
//     ["translate", [-36, 45.5]],
//     ["skewX",     [40]],
//     ["scale",     [1, 0.5]],
// ]
