import { Box } from "@mui/material"
import {
    Defs,
    LinearGradient,
    Path,
    RadialGradient,
    Symbol,
    Svg,
    Use,
    DrawCommand,
} from "svg4react"

import "./d.scss"

/**
 * [Cube stack animation - Adrien](https://codepen.io/gingifruden/pen/pojPGNR)
 */
export const D = (_props: unknown): JSX.Element => {
    return (
        <Box sx={{ height: "600px", display: "flex", flexFlow: "column wrap" }}>

            <Box sx={{ height: "300px" }} />

            <Box sx={{ position: "relative" }}>

                {/* Cube 1 */}
                <Svg className="cube" vb={[87,100]} width="87" height="100">
                    <Use href="#cube-blueprint" />
                </Svg>

                {/* Cube 2 */}
                <Svg className="cube" vb={[87,100]} width="87" height="100">
                    <Use href="#cube-blueprint" />
                </Svg>

                {/* Cube 3 */}
                <Svg className="cube" vb={[87,100]} width="87" height="100">
                    <Use href="#cube-blueprint" />
                </Svg>

                <Svg>
                    <Defs>

                        <Symbol id="cube-blueprint" size={[87,100]} vb={[87,100]}>
                            <Path commands={pathData[0]} fill="#A69CE7"/>
                            <Path commands={pathData[1]} fill="#A69CE7"/>
                            <Path commands={pathData[1]} fill="url(#paint0_radial)" fillOpacity="0.3" className="light" />
                            <Path commands={pathData[2]} fill="url(#paint1_linear)" fillOpacity="0.3"/>
                            <Path commands={pathData[3]} fill="#A69CE7"/>
                            <Path commands={pathData[3]} fill="black"               fillOpacity="0.2"/>
                        </Symbol>

                        <RadialGradient
                            id="paint0_radial"
                            cx="0"
                            cy="0"
                            r="1"
                            gradientUnits="userSpaceOnUse"
                            gradientTransform="translate(22 37.5) rotate(90) scale(48.5 43.417)"
                            stops={[
                                { offset: "0", stopColor: "white", stopOpacity: "1" },
                                { offset: "1", stopColor: "white", stopOpacity: "0" },
                            ]}
                        />

                        <LinearGradient
                            id="paint1_linear"
                            gradientUnits="userSpaceOnUse"
                            coordinates={[0.5, 24.5, 43, 49.5]}
                            stops={[
                                { offset: "0",        stopColor: "white", stopOpacity: "0" },
                                { offset: "0.520833", stopColor: "white", stopOpacity: "1" },
                                { offset: "1",        stopColor: "white", stopOpacity: "0" },
                            ]}
                        />

                    </Defs>
                </Svg>
            </Box>
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
