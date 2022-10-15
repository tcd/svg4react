import { Stack } from "@mui/material"
import { Page, MarkdownSnippet, Card, PropsTable } from "@app/features/shared"
import { DRAW_ARGS_DATA } from "../DrawCommand/draw-args"
import markdown from "@app/data/markdown/DrawArgs.md"

export const DrawArgsPage = (_props: unknown): JSX.Element => {
    return (
        <Page title="DrawArgs">
            <Card title="DrawArgs">
                <Stack>
                    <MarkdownSnippet content={markdown} />
                    <PropsTable propData={DRAW_ARGS_DATA} />
                </Stack>
            </Card>
        </Page>
    )
}
