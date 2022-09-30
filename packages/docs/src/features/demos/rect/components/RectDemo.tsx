import { Svg, Rect } from "svg4react"

import { randomColor } from "@app/util"
import { LiveDemo } from "@app/features/live-demo"

export const RectDemo = (_props: unknown): JSX.Element => {

    const scope = { Svg, Rect }

    return (
        <LiveDemo
            id="rect-demo-1"
            title="Rect Demo"
            componentName="Rect"
            code={code}
            scope={scope}
        />
    )
}

// =============================================================================

const color = randomColor()

const code = `
import { Svg, Rect, RectProps } from "svg4react"

// Simple rectangle
const squareProps: RectProps = {
    width: "100px",
    height: "100px",
    fill: "${color}",
}

// Rounded corner rectangle
const roundedProps: RectProps = {
    x: "120",
    rx: "15",
    width: "100px",
    height: "100px",
    fill: "${color}",
}

render(
    <Svg size="75%" vb={[220, 100]}>
        <Rect {...squareProps} />
        <Rect {...roundedProps} />
    </Svg>
)
`
