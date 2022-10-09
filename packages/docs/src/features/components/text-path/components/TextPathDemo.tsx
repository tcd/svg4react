import { useState } from "react"
import { Svg, TextPath, Text, Path, Defs } from "svg4react"

import { LiveDemo } from "@app/features/live-demo"

export const TextPathDemo = (_props: unknown): JSX.Element => {

    const scope = { Svg, TextPath, Text, Path, Defs, useState }

    return (
        <LiveDemo
            id="text-path-demo-1"
            title="Demo"
            code={code}
            scope={scope}
        />
    )
}

// =============================================================================

const code = `
import { useState } from "react"
import {
    Svg,
    TextPath,
    Text,
    Path,
    Defs,
    DrawCommand,
} from "svg4react"

const pathData: DrawCommand[] = [
    ["M", [[10,90 ]]],
    ["Q", [[90,90, 90,45]]],
    ["Q", [[90,10, 50,10]]],
    ["Q", [[10,10, 10,40]]],
    ["Q", [[10,70, 45,70]]],
    ["Q", [[70,70, 75,50]]],
]

const Demo = () => {

    const [showPath, setShowPath] = useState(true)

    const $path = (
        <Path
            id="MyPath"
            fill="none"
            stroke="red"
            commands={pathData}
        />
    )

    return (
        <>
            <button onClick={() => setShowPath(!showPath)}>
                Toggle Path Visibility
            </button>

            <Svg size="75%" vb={[100]}>
                {showPath ? $path : <Defs>{$path}</Defs>}

                <Text>
                    <TextPath href="#MyPath">
                        Quick brown fox jumps over the lazy dog.
                    </TextPath>
                </Text>
            </Svg>
        </>
    )
}

render(
    <Demo />
)
`
