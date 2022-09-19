import { Path, PathProps } from "@src/lib/components"
import { ExampleCard } from "../ExampleCard"

const pathProps: PathProps = {
    id: "example-3",
    fill: "none",
    stroke: "indianred",
    commands: [
        ["M", [[ 10,10]]], ["h", [10]],
        ["m", [[  0,10]]], ["h", [10]],
        ["m", [[  0,10]]], ["h", [10]],
        ["M", [[ 40,20]]], ["h", [10]],
        ["m", [[  0,10]]], ["h", [10]],
        ["m", [[  0,10]]], ["h", [10]],
        ["m", [[  0,10]]], ["h", [10]],
        ["M", [[ 50,50]]], ["h", [10]],
        ["m", [[-20,10]]], ["h", [10]],
        ["m", [[-20,10]]], ["h", [10]],
        ["m", [[-20,10]]], ["h", [10]],
    ],
}

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/d#moveto_path_commands
 */
export const Example3 = (_props: unknown): JSX.Element => {
    return (
        <ExampleCard title="MoveTo (v1.5)" url="https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/d#moveto_path_commands">
            <svg
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
