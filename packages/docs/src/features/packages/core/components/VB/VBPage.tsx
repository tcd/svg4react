import { Stack } from "@mui/material"
import { Page, MarkdownDoc, Card } from "@app/features/shared"
import markdown from "./vb.md"

export const VBPage = (_props: unknown): JSX.Element => {
    return (
        <Page title="VB">
            <Stack spacing={3}>
                <Card title="VB">
                    <MarkdownDoc content={markdown} />
                </Card>
            </Stack>
        </Page>
    )
}
