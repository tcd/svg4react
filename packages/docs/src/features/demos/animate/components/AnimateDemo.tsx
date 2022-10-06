import { Svg, Animate, Rect } from "svg4react"

import { randomColor } from "@app/util"
import { LiveDemo } from "@app/features/live-demo"

export const AnimateDemo = (_props: unknown): JSX.Element => {

    return (
        <>
            <Svg vb={[10]}>
                <Rect size={[10]}>
                    {/* <Animate
                        attributeName="rx"
                        values="0;5;0"
                        dur="10s"
                        repeatCount="indefinite"
                    /> */}
                    <animate
                        attributeName="rx"
                        values="0;5;0"
                        dur="10s"
                        repeatCount="indefinite"
                    />
                </Rect>
            </Svg>
        </>
    )
}

// =============================================================================

// export const AnimateDemo = (_props: unknown): JSX.Element => {
//
//     const scope = { Svg, Animate, Rect }
//
//     return (
//         <LiveDemo
//             id="animate-demo-1"
//             title="Demo"
//             code={code}
//             scope={scope}
//         />
//     )
// }

// =============================================================================

const code = `
import { Svg, Circle, CircleProps } from "svg4react"

const circleProps: CircleProps = {
    coordinates: [50, 50],
    r: 50,
    fill: "${randomColor()}",
}

render(
    <Svg size="75%" vb={[100]}>
        <Circle {...circleProps} />
    </Svg>
)
`
