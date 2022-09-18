import { Path, PathProps } from "@src/lib/components"

const pathProps: PathProps = {
    id: "test-number-1",
    fill: "none",
    stroke: "red",
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
 * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/d#using_d_as_a_css_property
 */
export const Example2 = (_props: unknown): JSX.Element => {
    return (
        <svg
            // style={{ width: "100px", height: "100px" }}
            id="svg_css_ex1"
            width="100px"
            height="100px"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
        >
            <Path {...pathProps} />
        </svg>
    )
}