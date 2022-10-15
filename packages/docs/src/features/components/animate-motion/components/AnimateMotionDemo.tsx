import { Svg, AnimateMotion, Path, Circle, DrawCommand } from "svg4react"

import { randomColor } from "@app/util"
import { LiveDemo } from "@app/features/live-demo"

export const AnimateMotionDemo = (_props: unknown): JSX.Element => {

    const scope = { Svg, AnimateMotion, Path, Circle }

    return (
        <LiveDemo
            id="animate-motion-demo-1"
            title="Demo"
            code={code}
            scope={scope}
        />
    )
}

// =============================================================================

const code = `
import { Svg, AnimateMotion, Path, Circle, DrawCommand } from "svg4react"

const path: DrawCommand[] = [
    ["M", [[20,50]]],
    ["C", [
        [ 20,-50, 180,150, 180,50],
        [180,-50,  20,150,  20,50],
    ]],
    ["Z", []],
]

render(
    <Svg size="80%" vb={[200,100]}>
        <Path
            fill="none"
            stroke="red"
            commands={path}
        />
        <Circle r="5" fill="${randomColor()}">
            <AnimateMotion
                dur="7s"
                repeatCount="indefinite"
                path="M20,50 C20,-50 180,150 180,50 C180-50 20,150 20,50 z"
            />
        </Circle>
    </Svg>
)
`

// =============================================================================

export const _AnimateMotionDemo = (_props: unknown): JSX.Element => {

    const path: DrawCommand[] = [
        ["M", [[20,50]]],
        ["C", [
            [ 20,-50, 180,150, 180,50],
            [180,-50,  20,150,  20,50],
        ]],
        ["Z", []],
    ]

    return (
        <Svg size="80%" vb={[200,100]}>
            <Path
                fill="none"
                stroke="lightgrey"
                commands={path}
            />

            <Circle r="5" fill="red">
                <AnimateMotion
                    dur="7s"
                    repeatCount="indefinite"
                    path="M20,50 C20,-50 180,150 180,50 C180-50 20,150 20,50 z"
                />
            </Circle>
        </Svg>
    )
}
