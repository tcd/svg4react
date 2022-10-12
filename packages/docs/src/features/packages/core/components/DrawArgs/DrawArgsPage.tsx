// import { Box, Typography } from "@mui/material"

import { Page, MarkdownDoc, Card, PropsTable } from "@app/features/shared"
import markdown from "@app/data/markdown/DrawArgs.md"
import { DRAW_ARGS_DATA } from "../DrawCommand/draw-args"
import { Stack } from "@mui/material"

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
