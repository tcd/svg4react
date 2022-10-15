import { Stack } from "@mui/material"
import { Page, MarkdownSnippet, Card } from "@app/features/shared"
import markdown from "./length.md"

export const LengthPage = (_props: unknown): JSX.Element => {
    return (
        <Page title="Length">
            <Stack spacing={3}>
                <Card title="Length">
                    <MarkdownSnippet content={markdown} noExternalLinks />
                </Card>
            </Stack>
        </Page>
    )
}
