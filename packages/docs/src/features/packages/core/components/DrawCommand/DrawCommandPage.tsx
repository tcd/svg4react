import { Stack } from "@mui/material"
import { Page, MarkdownDoc, Card } from "@app/features/shared"
import markdown from "./DrawCommand.md"

export const DrawCommandPage = (_props: unknown): JSX.Element => {
    return (
        <Page title="DrawCommand">
            <Stack spacing={3}>
                <Card title="DrawCommand">
                    <MarkdownDoc content={markdown} />
                </Card>
            </Stack>
        </Page>
    )
}
