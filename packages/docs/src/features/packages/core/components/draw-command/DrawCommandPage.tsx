import { Box, Typography } from "@mui/material"

import { Page, MarkdownDoc } from "@app/features/shared"

import markdown from "@app/data/markdown/DrawCommand.md"

export const DrawCommandPage = (_props: unknown): JSX.Element => {
    return (
        <Page title="DrawCommand">
            <MarkdownDoc content={markdown} />
        </Page>
    )
}
