import { Svg, Path } from "svg4react"

import { randomColor } from "@app/util"
import { LiveDemo } from "@app/features/shared"

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/d#closepath
 */
export const Example8 = (_props: unknown): JSX.Element => {

    const scope = { Svg, Path }

    return (
        <LiveDemo
            id="path-example-8"
            title="ClosePath"
            code={code}
            scope={scope}
        />
    )
}

// =============================================================================

const code = `
import { Svg, Path, PathProps } from "svg4react"

const shared: Partial<PathProps> = {
    stroke: "${randomColor()}",
}

// An open shape with the last point of the path different to the first one
const openProps1: PathProps = {
    ...shared,
    commands: [
        ["M", [[5,1]]],
        ["l", [
            [-4,8],
            [8,0],
        ]],
    ],
}

// An open shape with the last point of the path matching the first one
const openProps2: PathProps = {
    ...shared,
    commands: [
        ["M", [[15,1]]],
        ["l", [
            [-4,8],
            [8,0],
            [-4,-8],
        ]],
    ],
}

// A closed shape with the last point of the path different to the first one
const closedProps: PathProps = {
    ...shared,
    commands: [
        ["M", [[25,1]]],
        ["l", [
            [-4,8],
            [8,0],
        ]],
        ["Z", []],
    ],
}

render(
    <Svg size="100%" viewBox="0 0 50 25">
        <Path {...openProps1}  />
        <Path {...openProps2}  />
        <Path {...closedProps} />
    </Svg>
)
`
