// import { Box, Typography } from "@mui/material"

import { Page, MarkdownDoc, Card, PropsTable } from "@app/features/shared"
import markdown from "@app/data/markdown/DrawCommand.md"
import { DRAW_ARGS_DATA } from "./draw-args"
import { Stack } from "@mui/material"

export const DrawCommandPage = (_props: unknown): JSX.Element => {
    return (
        <Page title="DrawCommand">
            <Stack spacing={3}>
                <Card title="DrawCommand">
                    <MarkdownDoc content={markdown} noExternalLinks />
                </Card>
                <Card title="DrawArgs">
                    <PropsTable propData={DRAW_ARGS_DATA} />
                </Card>
            </Stack>
        </Page>
    )
}
