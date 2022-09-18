import { Path, PathProps } from "@src/lib/components"
import { ExampleCard } from "./ExampleCard"

// LineTo commands with absolute coordinates
const pathProps_1: PathProps = {
    id: "example-4a",
    fill: "none",
    stroke: "indianred",
    commands: [
        { cmd: "M", args: [[10,10]] },
        { cmd: "L", args: [[90,90]] },
        { cmd: "V", args: [10] },
        { cmd: "H", args: [50] },
    ],
}

// LineTo commands with relative coordinates
const pathProps_2: PathProps = {
    id: "example-4b",
    fill: "none",
    stroke: "indianred",
    commands: [
        { cmd: "M", args: [[110,10]] },
        { cmd: "l", args: [[80,80]] },
        { cmd: "v", args: [-80] },
        { cmd: "h", args: [-40] },
    ],
}

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/d#lineto_path_commands
 */
export const Example4 = (_props: unknown): JSX.Element => {
    return (
        <ExampleCard title="LineTo">
            <svg
                width="200px"
                height="100px"
                viewBox="0 0 200 100"
                xmlns="http://www.w3.org/2000/svg"
            >
                <Path {...pathProps_1} />
                <Path {...pathProps_2} />
            </svg>
        </ExampleCard>
    )

}
