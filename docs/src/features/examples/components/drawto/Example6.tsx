import {
    Path,
    PathProps,
    Circle,
    G,
} from "svg4react"
import { ExampleCard } from "../ExampleCard"

// Quadratic Bézier curve with implicit repetition
const pathProps: PathProps = {
    id: "example-6",
    fill: "none",
    stroke: "indianred",
    commands: [
        [ "M", [[10,50]] ],
        [
            "Q", [[
                25,25,
                40,50,
            ]],
        ],
        [
            "t", [
                [30,0],
                [30,0],
                [30,0],
                [30,0],
                [30,0],
            ],
        ],
    ],
}

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/d#quadratic_b%C3%A9zier_curve
 */
export const Example6 = (_props: unknown): JSX.Element => {
    return (
        <ExampleCard title="Quadratic Bézier Curve" url="https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/d#quadratic_b%C3%A9zier_curve">
            <svg
                width="200px"
                height="100px"
                viewBox="0 0 200 100"
                xmlns="http://www.w3.org/2000/svg"
            >
                <Path {...pathProps} />


                {/* Highlight the curve vertex and control points */}
                <G>
                    <polyline
                        points="10,50 25,25 40,50"
                        stroke="rgba(255,255,255,0.2)"
                        fill="none"
                    />
                    <Circle cx={25} cy={25} r={1.5} />

                    {/* Curve vertex points */}
                    <Circle cx={10} cy={50} r={1.5} />
                    <Circle cx={40} cy={50} r={1.5} />

                    <G id="SmoothQuadraticDown">
                        <polyline
                            points="40,50 55,75 70,50"
                            stroke="rgba(255,255,255,0.2)"
                            strokeDasharray="2"
                            fill="none"
                        />
                        <Circle cx={55} cy={75} r={1.5} fill="lightgrey" />
                        <Circle cx={70} cy={50} r={1.5} />
                    </G>

                    <G id="SmoothQuadraticUp">
                        <polyline
                            points="70,50 85,25 100,50"
                            stroke="rgba(255,255,255,0.2)"
                            strokeDasharray="2"
                            fill="none"
                        />
                        <Circle cx={85} cy={25} r={1.5} fill="lightgrey" />
                        <Circle cx={100} cy={50} r={1.5} />
                    </G>

                    <use xlinkHref="#SmoothQuadraticDown" x="60" />
                    <use xlinkHref="#SmoothQuadraticUp" x="60" />
                    <use xlinkHref="#SmoothQuadraticDown" x="120" />
                </G>
            </svg>
        </ExampleCard>
    )
}
