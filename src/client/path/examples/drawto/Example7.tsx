import { Path, PathProps } from "@src/lib/components"
import { ExampleCard } from "../ExampleCard"

const pathProps_a: PathProps = {
    id: "example-7a",
    fill: "none",
    stroke: "indianred",
    commands: [
        ["M", [[6,10]]                  ],
        ["A", [[6, 4, 10, 1, 0, 14,10]] ],
    ],
}

const pathProps_b: PathProps = {
    id: "example-7b",
    fill: "none",
    stroke: "lime",
    commands: [
        ["M", [[6,10]] ],
        ["A", [[6, 4, 10, 1, 1, 14,10]] ],
    ],
}

const pathProps_c: PathProps = {
    id: "example-7c",
    fill: "none",
    stroke: "rebeccapurple",
    commands: [
        ["M", [[6,10]] ],
        ["A", [[6, 4, 10, 0, 1, 14,10]] ],
    ],
}

const pathProps_d: PathProps = {
    id: "example-7c",
    fill: "none",
    stroke: "violet",
    commands: [
        ["M", [[6,10]] ],
        ["A", [[6, 4, 10, 0, 0, 14,10]] ],
    ],
}

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/d#elliptical_arc_curve
 */
export const Example7 = (_props: unknown): JSX.Element => {
    return (
        <ExampleCard title="Elliptical Arc Curve" url="https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/d#elliptical_arc_curve">
            <svg
                width="100px"
                height="100px"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
            >
                <Path {...pathProps_a} />
                <Path {...pathProps_b} />
                <Path {...pathProps_c} />
                <Path {...pathProps_d} />
            </svg>
        </ExampleCard>
    )
}
