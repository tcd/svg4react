import { Svg, Path, G, Line } from "svg4react"

import { randomColor } from "@app/util"
import { LiveDemo } from "@app/features/shared"

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/d#cubic_b%C3%A9zier_curve
 */
export const Example5 = (_props: unknown): JSX.Element => {

    const scope = { Svg, Path, Extra }

    return (
        <LiveDemo
            title="Cubic Bézier Curve"
            code={code}
            scope={scope}
        />
    )
}

// =============================================================================

const color = randomColor()

const code = `
import { Svg, Path, PathProps } from "svg4react"

// Cubic Bézier curve with absolute coordinates
const absoluteProps: PathProps = {
    fill: "none",
    stroke: "${color}",
    commands: [
        ["M", [[10,90]]              ],
        ["C", [[30,90, 25,10, 50,10]]],
        ["S", [[70,90, 90,90]]       ],
    ],
}

// Cubic Bézier curve with relative coordinates
const relativeProps: PathProps = {
    fill: "none",
    stroke: "${color}",
    commands: [
        ["M", [[110,90]]              ],
        ["c", [[20,0, 15,-80, 40,-80]]],
        ["s", [[20,80, 40,80]]        ],
    ],
}

render(
    <Svg size="100%" viewBox="0 0 200 100">
        <Path {...absoluteProps} />
        <Path {...relativeProps} />
        <Extra /> {/* don't worry about this */}
    </Svg>
)
`

const Extra = () => {
    const lineColor = "rgba(255,255,255,0.2)"
    const dotColor  = "lightgrey"
    return (
        <>
            {/* Highlight the curve vertex and control points */}
            <G id="ControlPoints">
                {/* First cubic command control points */}
                <Line coordinates={[10,90, 30,90]} stroke={lineColor} />
                <circle cx="30" cy="90" r="1.5" fill={dotColor} />

                <Line coordinates={[50,10, 25,10]} stroke={lineColor} />
                <circle cx="25" cy="10" r="1.5" fill={dotColor} />

                {/* Second smooth command control points (the first one is implicit) */}
                <Line coordinates={[50,10, 75,10]} stroke={lineColor} strokeDasharray="2" />
                <circle cx="75" cy="10" r="1.5" fill={dotColor} />

                <Line coordinates={[90,90, 70,90]} stroke={lineColor} />
                <circle cx="70" cy="90" r="1.5" fill={dotColor} />

                {/* curve vertex points */}
                <circle cx="10" cy="90" r="1.5" fill={dotColor} />
                <circle cx="50" cy="10" r="1.5" fill={dotColor} />
                <circle cx="90" cy="90" r="1.5" fill={dotColor} />
            </G>
            <use xlinkHref="#ControlPoints" x="100" />
        </>
    )
}
