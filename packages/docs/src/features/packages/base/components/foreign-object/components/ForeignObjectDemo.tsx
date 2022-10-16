import { Svg, ForeignObject, Polygon } from "svg4react"

import { LiveDemo } from "@app/features/live-demo"

export const ForeignObjectDemo = (_props: unknown): JSX.Element => {

    const scope = { Svg, ForeignObject, Polygon }

    return (
        <LiveDemo
            id="foreign-object-demo-1"
            title="Demo"
            code={code}
            scope={scope}
        />
    )
}

// =============================================================================

const code = `
import { Svg, ForeignObject, Polygon } from "svg4react"

const styles = /*CSS*/\`
    color: white;
    font: 18px serif;
    height: 100px;
    overflowY: scroll;
\`

render(
    <Svg size="50%" vb={[200]}>
        <style>{styles}</style>

        <Polygon points={[[5,5], [195,10], [185,185], [10,195]]} />

        {/* Common use case: embed HTML text into SVG */}
        <foreignObject x="20" y="20" width="160" height="160">
            {/*
                In the context of SVG embedded in an HTML document, the XHTML
                namespace could be omitted, but it is mandatory in the
                context of an SVG document
            */}
            <div xmlns="http://www.w3.org/1999/xhtml">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mollis mollis
                mi ut ultricies. Nullam magna ipsum, porta vel dui convallis, rutrum
                imperdiet eros. Aliquam erat volutpat.
            </div>
        </foreignObject>
    </Svg>
)
`
