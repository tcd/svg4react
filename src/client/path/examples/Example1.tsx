import { Path, PathProps } from "@src/lib/components"
import { ExampleCard } from "./ExampleCard"

const pathProps: PathProps = {
    id: "example-1",
    fill: "indianred",
    commands: [
        { cmd: "M", args: [[              10,30]] },
        { cmd: "A", args: [[20,20, 0,0,1, 50,30]] },
        { cmd: "A", args: [[20,20, 0,0,1, 90,30]] },
        { cmd: "Q", args: [[90,60,        50,90]] },
        { cmd: "Q", args: [[10,60,        10,30]] },
        { cmd: "Z", args: []                      },
    ],
}

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/d#example
 */
export const Example1 = (_props: unknown): JSX.Element => {
    return (
        <ExampleCard title="Example #1" url="https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/d#example">
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
