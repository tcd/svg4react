import { Svg, Path } from "svg4react"
import { LiveDemo } from "@app/features/shared"

const code = `// LineTo commands with absolute coordinates
const pathProps_1 = {
    fill: "none",
    stroke: "indianred",
    commands: [
        ["M", [[10,10]]],
        ["L", [[90,90]]],
        ["V",      [10]],
        ["H",      [50]],
    ],
}

// LineTo commands with relative coordinates
const pathProps_2 = {
    fill: "none",
    stroke: "indianred",
    commands: [
        ["M", [[110,10]]],
        ["l", [[ 80,80]]],
        ["v",      [-80]],
        ["h",      [-40]],
    ],
}

render (
    <Svg
        width="200px"
        height="100px"
        viewBox="0 0 200 100"
    >
        <Path {...pathProps_1} />
        <Path {...pathProps_2} />
    </Svg>
)`

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/d#lineto_path_commands
 */
export const Example4 = (_props: unknown): JSX.Element => {

    const scope = { Svg, Path }

    return (
        <LiveDemo
            title="LineTo"
            code={code}
            scope={scope}
            noInline
            trimCode={false}
        />
    )
}
