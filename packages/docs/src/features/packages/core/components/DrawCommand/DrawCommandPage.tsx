import { Stack } from "@mui/material"
import { Page, MarkdownSnippet, Card, PropsTable } from "@app/features/shared"
import { DRAW_ARGS_DATA } from "./draw-args"
import markdown from "@app/data/markdown/DrawCommand.md"

export const DrawCommandPage = (_props: unknown): JSX.Element => {
    return (
        <Page title="DrawCommand">
            <Stack spacing={3}>
                <Card title="DrawCommand">
                    <MarkdownSnippet content={markdown} noExternalLinks />
                </Card>
                <Card title="DrawArgs">
                    <PropsTable propData={DRAW_ARGS_DATA} />
                </Card>
            </Stack>
        </Page>
    )
}
