import { Path, PathProps } from "svg4react"
import { ExampleCard } from "../ExampleCard"

// LineTo commands with absolute coordinates
const pathProps_1: PathProps = {
    id: "example-4a",
    fill: "none",
    stroke: "indianred",
    commands: [
        [ "M", [[10,10]] ],
        [ "L", [[90,90]] ],
        [ "V", [10]      ],
        [ "H", [50]      ],
    ],
}

// LineTo commands with relative coordinates
const pathProps_2: PathProps = {
    id: "example-4b",
    fill: "none",
    stroke: "indianred",
    commands: [
        [ "M", [[110,10]] ],
        [ "l", [[80,80]]  ],
        [ "v", [-80]      ],
        [ "h", [-40]      ],
    ],
}

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/d#lineto_path_commands
 */
export const Example4 = (_props: unknown): JSX.Element => {
    return (
        <ExampleCard title="LineTo" url="https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/d#lineto_path_commands">
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
