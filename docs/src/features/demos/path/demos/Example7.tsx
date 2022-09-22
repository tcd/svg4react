import { Svg, G, Path } from "svg4react"
import { LiveDemo } from "@app/features/shared"

const code = `const pathProps_a = {
    stroke: "indianred",
    commands: [
        ["M", [[6,10]]                  ],
        ["A", [[6, 4, 10, 1, 0, 14,10]] ],
    ],
}

const pathProps_b = {
    stroke: "lime",
    commands: [
        ["M", [[6,10]] ],
        ["A", [[6, 4, 10, 1, 1, 14,10]] ],
    ],
}

const pathProps_c = {
    stroke: "rebeccapurple",
    commands: [
        ["M", [[6,10]] ],
        ["A", [[6, 4, 10, 0, 1, 14,10]] ],
    ],
}

const pathProps_d = {
    stroke: "violet",
    commands: [
        ["M", [[6,10]] ],
        ["A", [[6, 4, 10, 0, 0, 14,10]] ],
    ],
}

render (
    <Svg size="100px" viewBox="0 0 20 20">
        <G fill="none">
            <Path {...pathProps_a} />
            <Path {...pathProps_b} />
            <Path {...pathProps_c} />
            <Path {...pathProps_d} />
        </G>
    </Svg>
)`

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/d#elliptical_arc_curve
 */
export const Example7 = (_props: unknown): JSX.Element => {
    const scope = { Svg, Path, G }

    return (
        <LiveDemo
            title="Elliptical Arc Curve"
            code={code}
            scope={scope}
            noInline
            trimCode={false}
        />
    )
}
