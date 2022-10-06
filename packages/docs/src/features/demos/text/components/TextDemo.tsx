import { Svg, Text } from "svg4react"

import { randomColor } from "@app/util"
import { LiveDemo } from "@app/features/live-demo"

export const TextDemo = (_props: unknown): JSX.Element => {

    const scope = { Svg, Text }

    return (
        <LiveDemo
            id="text-demo-1"
            title="Demo"
            code={code}
            scope={scope}
        />
    )
}

// =============================================================================

const code = `
import { Svg, Text } from "svg4react"

const styles = \`
    .small {
        font: italic 13px sans-serif;
    }
    .heavy {
        font: bold 30px sans-serif;
    }
    /* Note that the color of the text is set with the fill property, the color property is for HTML only */
    .Rrrrr {
        font: italic 40px serif;
        fill: red;
    }
\`

render(
    <Svg vb={[240,80]}>
        <style>{styles}</style>
        <Text coordinates={[20,35]} className="small">My</Text>
        <Text coordinates={[40,35]} className="heavy">cat</Text>
        <Text coordinates={[55]}    className="small">is</Text>
        <Text coordinates={[65,65]} className="Rrrrr">Grumpy!</Text>
    </Svg>
)
`
