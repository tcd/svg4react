import { Svg, Path } from "svg4react"

import { randomColor } from "@app/util"
import { LiveDemo } from "@app/features/shared"

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/d#lineto_path_commands
 */
export const Example4 = (_props: unknown): JSX.Element => {

    const scope = { Svg, Path }

    return (
        <LiveDemo
            id="path-example-4"
            title="LineTo"
            code={code}
            scope={scope}
        />
    )
}

// =============================================================================

const code = `
import { Svg, Path, PathProps } from "svg4react"

const sharedProps: Partial<PathProps> = {
    fill: "none",
    stroke: "${randomColor()}",
}

// LineTo commands with absolute coordinates
const absoluteProps: PathProps = {
    ...sharedProps,
    commands: [
        ["M", [[10,10]]],
        ["L", [[90,90]]],
        ["V",      [10]],
        ["H",      [50]],
    ],
}

// LineTo commands with relative coordinates
const relativeProps: PathProps = {
    ...sharedProps,
    commands: [
        ["M", [[110,10]]],
        ["l", [[ 80,80]]],
        ["v",      [-80]],
        ["h",      [-40]],
    ],
}

render(
    <Svg
        size="100%"
        viewBox="0 0 200 100">
        <Path {...absoluteProps} />
        <Path {...relativeProps} />
    </Svg>
)
`
