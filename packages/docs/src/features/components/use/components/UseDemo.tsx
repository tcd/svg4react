import { Svg, Circle, Use } from "svg4react"

import { LiveDemo } from "@app/features/live-demo"

export const UseDemo = (_props: unknown): JSX.Element => {

    const scope = { Svg, Circle, Use }

    return (
        <LiveDemo
            id="use-demo-1"
            title="Demo"
            code={code}
            scope={scope}
        />
    )
}

// =============================================================================

const code = `
import { Svg, Circle, Use } from "svg4react"

render(
    <Svg size="75%" vb={[30,10]}>
        <Circle id="myCircle" coordinates={[5]} r="4" stroke="blue" />
        <Use href="#myCircle" x="10" fill="blue" />
        <Use href="#myCircle" x="20" fill="white" stroke="red" />
        {/*
            stroke="red" will be ignored here, as stroke was already set on myCircle.
            Most attributes (except for x, y, width, height and href) do not override those set in the ancestor.
            That's why the circles have different x positions, but the same stroke value.
        */}
    </Svg>
)
`
