import { Svg, Path } from "svg4react"
import { Box } from "@mui/material"

import { randomColor } from "@app/util"
import type { ISxProps as SxProps } from "@app/theme"
import { LiveDemo } from "@app/features/shared"

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/d#using_d_as_a_css_property
 */
export const Example2 = (_props: unknown): JSX.Element => {

    const scope = { Svg, Path }

    return (
        <Box sx={sx}>
            <LiveDemo
                title="CSS"
                code={code}
                scope={scope}
            />
        </Box>
    )
}

// =============================================================================

/**
 * This path is displayed on hover
 *
 * It's insane that this works.
 */
const sx: SxProps = {
    "& #css-example:hover": {
        "& path": {
            d: `path("M10,30 A20,20 0,0,1 50,30 A20,20 0,0,1 90,30 Q90,60 50,90 Q10,60 10,30 z M5,5 L90,90")`,
        },
    },
}

const code = `
import { Svg, Path, PathProps } from "svg4react"

const pathProps: PathProps = {
    fill: "none",
    stroke: "${randomColor()}",
    commands: [
        ["M", [[              10,30]]],
        ["A", [[20,20, 0,0,1, 50,30]]],
        ["A", [[20,20, 0,0,1, 90,30]]],
        ["Q", [[90,60,        50,90]]],
        ["Q", [[10,60,        10,30]]],
        ["Z", []                     ],
    ],
}

render(
    <Svg size="100%" viewBox="0 0 100 100" id="css-example">
        <Path {...pathProps} />
    </Svg>
)
`
