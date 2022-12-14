import { Stack } from "@mui/material"
import { Page, MarkdownDoc, Card, PropsTable } from "@app/features/shared"
import { DRAW_ARGS_DATA } from "./draw-args"
import markdown from "./DrawArgs.md"

export const DrawArgsPage = (_props: unknown): JSX.Element => {
    return (
        <Page title="DrawArgs">
            <Card title="DrawArgs">
                <Stack>
                    <MarkdownDoc content={markdown} />
                    <PropsTable propData={DRAW_ARGS_DATA} />
                </Stack>
            </Card>
        </Page>
    )
}
