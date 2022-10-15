import { Stack } from "@mui/material"
import { Page, MarkdownSnippet, Card } from "@app/features/shared"
import markdown from "./vb.md"

export const VBPage = (_props: unknown): JSX.Element => {
    return (
        <Page title="VB">
            <Stack spacing={3}>
                <Card title="VB">
                    <MarkdownSnippet content={markdown} noExternalLinks />
                </Card>
            </Stack>
        </Page>
    )
}
