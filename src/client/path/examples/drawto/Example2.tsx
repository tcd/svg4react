import { Path, PathProps } from "@src/lib/components"
import { ExampleCard } from "../ExampleCard"

const pathProps: PathProps = {
    id: "example-2",
    fill: "none",
    stroke: "indianred",
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
 * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/d#using_d_as_a_css_property
 */
export const Example2 = (_props: unknown): JSX.Element => {
    return (
        <ExampleCard title="CSS (v1.5)" url="https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/d#using_d_as_a_css_property">
            <svg
                id="svg_css_ex1"
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
