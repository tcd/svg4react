import { Path, PathProps } from "@src/lib/components"
import { ExampleCard } from "./ExampleCard"

const pathProps: PathProps = {
    id: "test-number-3",
    fill: "none",
    stroke: "indianred",
    commands: [
        { cmd: "M", args: [[ 10,10]] }, { cmd: "h", args: [10] },
        { cmd: "m", args: [[  0,10]] }, { cmd: "h", args: [10] },
        { cmd: "m", args: [[  0,10]] }, { cmd: "h", args: [10] },
        { cmd: "M", args: [[ 40,20]] }, { cmd: "h", args: [10] },
        { cmd: "m", args: [[  0,10]] }, { cmd: "h", args: [10] },
        { cmd: "m", args: [[  0,10]] }, { cmd: "h", args: [10] },
        { cmd: "m", args: [[  0,10]] }, { cmd: "h", args: [10] },
        { cmd: "M", args: [[ 50,50]] }, { cmd: "h", args: [10] },
        { cmd: "m", args: [[-20,10]] }, { cmd: "h", args: [10] },
        { cmd: "m", args: [[-20,10]] }, { cmd: "h", args: [10] },
        { cmd: "m", args: [[-20,10]] }, { cmd: "h", args: [10] },
    ],
}

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/d#moveto_path_commands
 */
export const Example3 = (_props: unknown): JSX.Element => {
    return (
        <ExampleCard title="MoveTo" url="https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/d#moveto_path_commands">
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
