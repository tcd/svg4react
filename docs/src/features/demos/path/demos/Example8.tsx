import { Svg, Path } from "svg4react"
import { LiveDemo } from "@app/features/shared"

const code = `
// An open shape with the last point of the path different to the first one
const pathProps_a = {
    stroke: "indianred",
    commands: [
        [ "M", [[5,1]]         ],
        [ "l", [[-4,8], [8,0]] ],
    ],
}

// An open shape with the last point of the path matching the first one
const pathProps_b = {
    stroke: "indianred",
    commands: [
        [ "M", [[15,1]]                 ],
        [ "l", [[-4,8], [8,0], [-4,-8]] ],
    ],
}

const pathProps_c = {
    stroke: "indianred",
    commands: [
        [ "M", [[25,1]]        ],
        [ "l", [[-4,8], [8,0]] ],
        [ "Z", []              ],
    ],
}

render (
    <Svg size="500px" viewBox="0 0 50 25"
    >
        <Path {...pathProps_a} />
        <Path {...pathProps_b} />
        <Path {...pathProps_c} />
    </Svg>
)
`

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/d#closepath
 */
export const Example8 = (_props: unknown): JSX.Element => {

    const scope = { Svg, Path }

    return (
        <LiveDemo
            title="ClosePath"
            code={code}
            scope={scope}
        />
    )
}
