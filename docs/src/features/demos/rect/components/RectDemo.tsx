import { Svg, Rect } from "svg4react"

import { randomColor } from "@app/util"
import { LiveDemo } from "@app/features/shared"

const code = `
// Simple rectangle
const squareProps = {
    width: "100px",
    height: "100px",
    fill: "${randomColor()}",
}
// Rounded corner rectangle
const roundedProps = {
    x: "120",
    rx: "15",
    width: "100px",
    height: "100px",
    fill: "${randomColor()}",
}

render(
    <Svg size="200px" viewBox="0 0 220 100">
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
