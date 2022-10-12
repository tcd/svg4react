import { Box } from "@mui/material"
import { Svg, Path, G, DrawCommand } from "svg4react"

import type { ISxProps as SxProps } from "@app/theme"

// const paths: Record<"top" | "middle" | "bottom", DrawCommand[]> = {
//     top: [
//         ["M", [[96, 0]]],
//         ["L", [[72,24]]],
//         ["C", [[68,28, 60,32, 56,32]]],
//         ["L", [[40,32]]],
//         ["C", [[36,32, 28,24, 24,24]]],
//         ["L", [[ 0,24]]],
//     ],
//     middle: [
//         ["M", [[56,32]]],
//         ["L", [[0, 32]]],
//     ],
//     bottom: [
//         ["M", [[96,64]]],
//         ["L", [[72,40]]],
//         ["C", [[68,36, 60,32, 56,32]]],
//         ["L", [[40,32]]],
//         ["C", [[36,32, 28,40, 24,40]]],
//         ["L", [[ 0,40]]],
//     ],
// }

const sx: SxProps = {
    "& svg": {
        border: "1px solid black",
    },
    "& line": {
        stroke: "#000",
        strokeLinecap: "round",
        "&.back": {
            strokeDasharray: "2,2",
        },
    },
    "& text": {
        fontSize: "6px",
        stroke: "#fff",
        fill: "#000",
        strokeWidth: 0.1,
    },
}

/**
 * [SVG Cube - Antonino Perricone (CodePen)](https://codepen.io/IorPerry/pen/memoZr?editors=1010)
 */
export const A = (_props: unknown): JSX.Element => {
    return (
        <Box sx={sx}>
            <Svg viewBox="-20 -20 40 40" size="200">
                <G>
                    <line x1="-15" y1="15"  x2="-5"  y2="5" className="back" />
                    <line x1="5"   y1="15"  x2="15"  y2="5"/>
                    <line x1="-15" y1="-5"  x2="-5"  y2="-15"/>
                    <line x1="5"   y1="-5"  x2="15"  y2="-15"/>
                    <line x1="-15" y1="15"  x2="5"   y2="15"/>
                    <line x1="-15" y1="-5"  x2="5"   y2="-5"/>
                    <line x1="-5"  y1="5"   x2="15"  y2="5" fill="back"/>
                    <line x1="-5"  y1="-15" x2="15"  y2="-15"/>
                    <line x1="-15" y1="15"  x2="-15" y2="-5"/>
                    <line x1="5"   y1="15"  x2="5"   y2="-5"/>
                    <line x1="-5"  y1="5"   x2="-5"  y2="-15" fill="back"/>
                    <line x1="15"  y1="5"   x2="15"  y2="-15"/>
                </G>
                <G>
                    <text x="-15" y="15">0</text>
                    <text x="5"   y="15">1</text>
                    <text x="-15" y="-5">2</text>
                    <text x="5"   y="-5">3</text>
                    <text x="-5"  y="5">4</text>
                    <text x="15"  y="5">5</text>
                    <text x="-5"  y="-15">6</text>
                    <text x="15"  y="-15">7</text>
                </G>
            </Svg>
        </Box>
    )
}
