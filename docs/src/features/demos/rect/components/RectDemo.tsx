import { Svg, Rect } from "svg4react"

import { randomColor } from "@app/util"
import { LiveDemo } from "@app/features/shared"

const color = randomColor()

const code = `
// Simple rectangle
const squareProps = {
    width: "100px",
    height: "100px",
    fill: "${color}",
}

// Rounded corner rectangle
const roundedProps = {
    x: "120",
    rx: "15",
    width: "100px",
    height: "100px",
    fill: "${color}",
}

render(
    <Svg size="100%" viewBox="0 0 220 100">
        <Rect {...squareProps} />
        <Rect {...roundedProps} />
    </Svg>
)
`

export const RectDemo = (_props: unknown): JSX.Element => {

    const scope = {
        Svg,
        Rect,
    }

    return (
        <LiveDemo
            title="Rect Demo"
            componentName="Rect"
            code={code}
            scope={scope}
        />
    )
}
