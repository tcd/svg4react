import { useState } from "react"
import { Svg, Text, Path, Defs } from "svg4react"

import { randomColor } from "@app/util"
import { LiveDemo } from "@app/features/live-demo"

export const TextPathDemo = (_props: unknown): JSX.Element => {

    const scope = { Svg, Text, Path, Defs, useState }

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
    Text,
    Path,
    Defs,
} from "svg4react"

const Demo = () => {

    const [showPath, setShowPath] = useState(true)

    return (
        <>
            <button onClick={() => setShowPath(!showPath)}>
                Toggle Path Visibility
            </button>

            <br />

            <Svg size="75%" vb={[100]}>
                {showPath ? (
                    <Defs>
                        <path
                            id="MyPath"
                            fill="none"
                            // stroke="${randomColor()}"
                            stroke="red"
                            d="M10,90 Q90,90 90,45 Q90,10 50,10 Q10,10 10,40 Q10,70 45,70 Q70,70 75,50"
                        />
                    </Defs>
                ) : (
                    <path
                        id="MyPath"
                        fill="none"
                        stroke="red"
                        d="M10,90 Q90,90 90,45 Q90,10 50,10 Q10,10 10,40 Q10,70 45,70 Q70,70 75,50"
                    />
                )}

                <Text>
                    <textPath href="#MyPath">Quick brown fox jumps over the lazy dog.</textPath>
                </Text>
            </Svg>
        </>
    )
}

render(
    <Demo />
)
`
