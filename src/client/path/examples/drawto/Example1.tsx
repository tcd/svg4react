import { Path, PathProps } from "@src/lib/components"
import { ExampleCard } from "../ExampleCard"

const pathProps: PathProps = {
    id: "example-1.",
    fill: "indianred",
    commands: [
        ["M", [[              10,30]]],
        ["A", [[20,20, 0,0,1, 50,30]]],
        ["A", [[20,20, 0,0,1, 90,30]]],
        ["Q", [[90,60,        50,90]]],
        ["Q", [[10,60,        10,30]]],
        ["Z", []                     ],
    ],
}

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/d#example
 */
export const Example1 = (_props: unknown): JSX.Element => {
    return (
        <ExampleCard title="Example #1 (v1.5)" url="https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/d#example">
            <svg
                // style={{ width: "100px", height: "100px" }}
                width="100px"
                height="100px"
                viewBox="0 0 100 100"
                xmlns="http://www.w3.org/2000/svg"
            >
                <Path {...pathProps} />
            </svg>
        </ExampleCard>
    )
}
