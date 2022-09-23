import {
    Page,
    Card,
    SvgEditor,
} from "@app/features/shared"

export const MonacoPage = (_props: unknown): JSX.Element => {
    return (
        <Page title="Monaco">
            <Card title="Monaco Editor">
                <SvgEditor
                    code={code}
                />
            </Card>
        </Page>
    )
}

// =============================================================================

const code = `
<Svg size="100px">
    <Circle
        cx={50}
        cy={50}
        r={50}
        fill="#00deaf"
    />
</Svg>
`.trim()
