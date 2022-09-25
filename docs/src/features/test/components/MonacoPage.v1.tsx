import { Svg, Path, PathProps } from "svg4react"

import { Page, Card, LiveDemo } from "@app/features/shared"

export const MonacoPage = (_props: unknown): JSX.Element => {

    const scope = { Svg, Path }

    return (
        <Page title="Monaco">
            <Card title="Monaco Editor">
                <LiveDemo
                    title="CSS"
                    code={code_ts}
                    scope={scope}
                />
            </Card>
        </Page>
    )
}

// =============================================================================

const code_render = `
render(
    <Svg size="100%" viewBox="0 0 100 100">
        <Path {...pathProps} />
    </Svg>
)
`

// /**
//  * @type {import("webpack").Configuration}
//  */
const code_original = `
/**
 * @type {PathProps}
 */
const pathProps = {
    fill: "none",
    stroke: "indianred",
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
    <Svg size="100%" viewBox="0 0 100 100">
        <Path {...pathProps} />
    </Svg>
)
`

// -----------------------------------------------------------------------------

// /**
//  * @type {import("webpack").Configuration}
//  */
const code_jsdoc = `
/**
 * @type {PathProps}
 */
const pathProps = {
    fill: "none",
    stroke: "indianred",
    commands: [
        ["M", [[              10,30]]],
        ["A", [[20,20, 0,0,1, 50,30]]],
        ["A", [[20,20, 0,0,1, 90,30]]],
        ["Q", [[90,60,        50,90]]],
        ["Q", [[10,60,        10,30]]],
        ["Z", []                     ],
    ],
}
`

// /**
//  * @type {import("webpack").Configuration}
//  */
const code_ts = `
const pathProps: PathProps = {
    fill: "none",
    stroke: "indianred",
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
    <Svg size="100%" viewBox="0 0 100 100">
        <Path {...pathProps} />
    </Svg>
)
`
