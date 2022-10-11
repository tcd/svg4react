import { Svg, Symbol, Path, Circle, Use } from "svg4react"

import { LiveDemo } from "@app/features/live-demo"

export const SymbolDemo = (_props: unknown): JSX.Element => {

    const scope = { Svg, Symbol, Path, Circle, Use }

    return (
        <LiveDemo
            id="symbol-demo-1"
            title="Symbol"
            code={code}
            scope={scope}
        />
    )
}

// =============================================================================

const code = `
import { Svg, Symbol, Path, Circle, Use } from "svg4react"

render(
    <Svg size="80%" vb={[80,20]}>
        {/* Our symbol in its own coordinate system */}
        <Symbol id="myDot" size={[10]} vb={[2]}>
            <Circle coordinates={[1]} r="1" />
        </Symbol>

        {/* A grid to materialize our symbol positioning */}
        <Path fill="none" stroke="pink" d="M0,10 h80 M10,0 v20 M25,0 v20 M40,0 v20 M55,0 v20 M70,0 v20" />

        {/* All instances of our symbol */}
        <Use href="#myDot" coords={[5]}    style={{ opacity: 1.0 }} />
        <Use href="#myDot" coords={[20,5]} style={{ opacity: 0.8 }} />
        <Use href="#myDot" coords={[35,5]} style={{ opacity: 0.6 }} />
        <Use href="#myDot" coords={[50,5]} style={{ opacity: 0.4 }} />
        <Use href="#myDot" coords={[65,5]} style={{ opacity: 0.2 }} />
    </Svg>
)
`
