import { Path, PathProps } from "@src/lib/components"

const shared: Partial<PathProps> = {
    fill: "none",
    stroke: "indianred",
}

// Cubic Bézier curve with absolute coordinates
const pathProps_1: PathProps = {
    ...shared,
    id: "example-5a",
    commands: [
        { cmd: "M", args: [[10,90]] },
        { cmd: "C", args: [[30,90, 25,10, 50,10]] },
        { cmd: "S", args: [[70,90, 90,90]] },
    ],
}

// Cubic Bézier curve with relative  coordinates
const pathProps_2: PathProps = {
    ...shared,
    id: "example-5b",
    commands: [
        { cmd: "M", args: [[110,90]] },
        { cmd: "c", args: [[20,0, 15,-80, 40,-80]] },
        { cmd: "s", args: [[20,80, 40,80]] },
    ],
}

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/d#cubic_b%C3%A9zier_curve
 */
export const Example5 = (_props: unknown): JSX.Element => {
    return (
        <svg
            width="200px"
            height="100px"
            viewBox="0 0 200 100"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
        >
            <Path {...pathProps_1} />
            <Path {...pathProps_2} />
            <Extra />
        </svg>
    )
}

const Extra = () => (
    <>
        {/* Highlight the curve vertex and control points */}
        <g id="ControlPoints">
            {/* First cubic command control points */}
            <line x1="10" y1="90" x2="30" y2="90" stroke="lightgrey" />
            <circle cx="30" cy="90" r="1.5" />

            <line x1="50" y1="10" x2="25" y2="10" stroke="lightgrey" />
            <circle cx="25" cy="10" r="1.5" />

            {/* Second smooth command control points (the first one is implicit) */}
            <line
                x1="50"
                y1="10"
                x2="75"
                y2="10"
                stroke="lightgrey"
                strokeDasharray="2" />
            <circle cx="75" cy="10" r="1.5" fill="lightgrey" />

            <line x1="90" y1="90" x2="70" y2="90" stroke="lightgrey" />
            <circle cx="70" cy="90" r="1.5" />

            {/* curve vertex points */}
            <circle cx="10" cy="90" r="1.5" />
            <circle cx="50" cy="10" r="1.5" />
            <circle cx="90" cy="90" r="1.5" />
        </g>
        <use xlinkHref="#ControlPoints" x="100" />
    </>
)
