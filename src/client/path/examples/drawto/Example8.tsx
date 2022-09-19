import { Path, PathProps } from "@src/lib/components"
import { ExampleCard } from "../ExampleCard"

// An open shape with the last point of
// the path different to the first one
const pathProps_a: PathProps = {
    id: "example-8a",
    stroke: "indianred",
    commands: [
        [ "M", [[5,1]]         ],
        [ "l", [[-4,8], [8,0]] ],
    ],
}

// An open shape with the last point of
// the path matching the first one
const pathProps_b: PathProps = {
    id: "example-8b",
    stroke: "indianred",
    commands: [
        [ "M", [[15,1]]                 ],
        [ "l", [[-4,8], [8,0], [-4,-8]] ],
    ],
}

const pathProps_c: PathProps = {
    id: "example-8c",
    stroke: "indianred",
    commands: [
        [ "M", [[25,1]]        ],
        [ "l", [[-4,8], [8,0]] ],
        [ "Z", []              ],
    ],
}

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/d#closepath
 */
export const Example8 = (_props: unknown): JSX.Element => {
    return (
        <ExampleCard title="ClosePath (v1.5)" url="https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/d#closepath">
            <svg
                width="200px"
                height="200px"
                viewBox="0 -1 30 11"
                xmlns="http://www.w3.org/2000/svg"
            >
                <Path {...pathProps_a} />
                <Path {...pathProps_b} />
                <Path {...pathProps_c} />
            </svg>
        </ExampleCard>
    )
}
