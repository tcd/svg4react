import { useSelector } from "react-redux"
import { Svg, Text, TSpan } from "svg4react"

import { Selectors } from "@app/state"
import { LiveDemo } from "@app/features/live-demo"

export const TSpanDemo = (_props: unknown): JSX.Element => {

    const scope = { Svg, Text, TSpan }
    const darkModeEnabled = useSelector(Selectors.Core.darkModeEnabled)

    return (
        <LiveDemo
            id="tspan-demo-1"
            title="Demo"
            code={code(darkModeEnabled)}
            scope={scope}
        />
    )
}

// =============================================================================

const code = (darkMode: boolean) => `
import { Svg, Text, TSpan } from "svg4react"

const styles = /*CSS*/\`
    text {
        font: italic 12px serif;
        fill: ${darkMode ? "white" : "black"}
    }
    tspan {
        font: bold 10px sans-serif;
        fill: red;
    }
\`

render(
    <Svg vb={[240,40]}>
        <style>{styles}</style>
        <Text coordinates={[10,30]}>
            You are
            <TSpan value="not" addSpace />
            a banana!
        </Text>
    </Svg>
)
`
