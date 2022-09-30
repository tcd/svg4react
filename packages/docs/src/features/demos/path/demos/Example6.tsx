import {
    Svg,
    Path,
    Polyline,
    Circle,
    G,
} from "svg4react"

import { randomColor } from "@app/util"
import { LiveDemo } from "@app/features/live-demo"

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/d#quadratic_b%C3%A9zier_curve
 */
export const Example6 = (_props: unknown): JSX.Element => {

    const scope = { Svg, Path, Extra }

    return (
        <LiveDemo
            id="path-example-6"
            title="Quadratic Bézier Curve"
            code={code}
            scope={scope}
        />
    )
}

// =============================================================================

const code = `
import { Svg, Path, PathProps } from "svg4react"

// Quadratic Bézier curve with implicit repetition
const pathProps: PathProps = {
    fill: "none",
    stroke: "${randomColor()}",
    commands: [
        ["M", [[10,50]]],
        ["Q", [[
            25,25,
            40,50,
        ]]],
        ["t", [
            [30,0],
            [30,0],
            [30,0],
            [30,0],
            [30,0],
        ]],
    ],
}

render(
    <Svg size="100%" viewBox="0 0 200 100">
        <Path {...pathProps} />
        <Extra /> {/* don't worry about this */}
    </Svg>
)
`

const Extra = () => {
    const strokeColor = "rgba(255,255,255,0.2)"
    const dotColor = "lightgrey"
    return (
        <>
            {/* Highlight the curve vertex and control points */}
            <G>
                <Polyline
                    points={[[10, 50], [25, 25], [40,50]]}
                    stroke={strokeColor}
                    fill="none"
                />
                <Circle cx={25} cy={25} r={1.5} />

                {/* Curve vertex points */}
                <Circle cx={10} cy={50} r={1.5} />
                <Circle cx={40} cy={50} r={1.5} />

                <G id="SmoothQuadraticDown">
                    <Polyline
                        points={[[40,50], [55,75], [70,50]]}
                        stroke={strokeColor}
                        fill="none"
                        strokeDasharray="2"
                    />
                    <Circle cx={55} cy={75} r={1.5} fill={dotColor} />
                    <Circle cx={70} cy={50} r={1.5} />
                </G>

                <G id="SmoothQuadraticUp">
                    <Polyline
                        points={[[70,50], [85,25], [100,50]]}
                        stroke={strokeColor}
                        fill="none"
                        strokeDasharray="2"
                    />
                    <Circle cx={85} cy={25} r={1.5} fill={dotColor} />
                    <Circle cx={100} cy={50} r={1.5} />
                </G>

                <use xlinkHref="#SmoothQuadraticDown" x="60" />
                <use xlinkHref="#SmoothQuadraticUp"   x="60" />
                <use xlinkHref="#SmoothQuadraticDown" x="120" />
            </G>
        </>
    )
}
