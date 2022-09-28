import { Svg, Path } from "svg4react"

import { Page } from "@app/features/shared"
import { LiveDemo } from "@app/features/live-demo"

export const MonacoPage = (_props: unknown): JSX.Element => {

    const scope = { Svg, Path }

    return (
        <Page title="Monaco">
            <LiveDemo
                id="editor-test"
                title="Test"
                scope={scope}
                code={code_original}
            />
            {/* <Card title="Monaco TSX">
                <TsxEditor code={code_original}/>
            </Card> */}
        </Page>
    )
}

// =============================================================================

const code_original = `
import { Svg, Path, PathProps } from "svg4react"

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

const css_type = `
import { Property } from "csstype"

let viz: Property.Isolation = ""

console.log(viz)
`
