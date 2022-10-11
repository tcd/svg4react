import { Svg, MPath, G, Rect, Path, Circle, AnimateMotion } from "svg4react"

import { randomColor } from "@app/util"
import { LiveDemo } from "@app/features/live-demo"

export const MPathDemo = (_props: unknown): JSX.Element => {

    const scope = { Svg, MPath, G, Rect, Path, Circle, AnimateMotion }

    return (
        <LiveDemo
            id="mpath-demo-1"
            title="Demo"
            code={code}
            scope={scope}
        />
    )
}

// =============================================================================

const color = randomColor()
// const color = "blue"

const code = `
import { Svg, MPath, G, Rect, Path, Circle, AnimateMotion } from "svg4react"

render(
    <Svg size="75%" vb={[500,300]}>
        <Rect
            points={[1]}
            size={[498,298]}
            fill="none"
            stroke="${color}"
            strokeWidth="2"
        />

        {/* Draw the outline of the motion path in blue, along with three small circles at the start, middle and end. */}
        <Path
            id="path1"
            d="M100,250 C 100,50 400,50 400,250"
            fill="none"
            stroke="${color}"
            strokeWidth="7.06"
        />
        <G fill="${color}">
            <Circle coordinates={[100,250]} r="17.64" />
            <Circle coordinates={[250,100]} r="17.64" />
            <Circle coordinates={[400,250]} r="17.64" />
        </G>

        {/*
            Here is a triangle which will be moved about the motion path.
            It is defined with an upright orientation with the base of
            the triangle centered horizontally just above the origin.
        */}
        <Path
            d="M-25,-12.5 L25,-12.5 L 0,-87.5 z"
            fill="yellow"
            stroke="red"
            strokeWidth="7.06"
        >
            {/* Define the motion path animation */}
            <AnimateMotion dur="6s" repeatCount="indefinite" rotate="auto">
                <MPath href="#path1" />
            </AnimateMotion>
        </Path>
    </Svg>
)
`

// =============================================================================

const Demo = () => {
    return (
        <Svg size="300px" vb={[500,300]}>
            <Rect
                points={[1]}
                size={[498,298]}
                fill="none"
                stroke="blue"
                strokeWidth="2"
            />

            {/* Draw the outline of the motion path in blue, along with three small circles at the start, middle and end. */}
            <Path
                id="path1"
                d="M100,250 C 100,50 400,50 400,250"
                fill="none"
                stroke="blue"
                strokeWidth="7.06"
            />
            <G fill="blue">
                <Circle coordinates={[100,250]} r="17.64" />
                <Circle coordinates={[250,100]} r="17.64" />
                <Circle coordinates={[400,250]} r="17.64" />
            </G>

            {/*
                Here is a triangle which will be moved about the motion path.
                It is defined with an upright orientation with the base of
                the triangle centered horizontally just above the origin.
            */}
            <Path
                d="M-25,-12.5 L25,-12.5 L 0,-87.5 z"
                fill="yellow"
                stroke="red"
                strokeWidth="7.06"
            >
                {/* Define the motion path animation */}
                <AnimateMotion dur="6s" repeatCount="indefinite" rotate="auto">
                    <MPath href="#path1" />
                </AnimateMotion>
            </Path>
        </Svg>
    )
}
