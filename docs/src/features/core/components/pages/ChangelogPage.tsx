import ReactMarkdown from "react-markdown"
import { Box, Paper } from "@mui/material"

import { DocsSx } from "@app/theme"
import { Page } from "@app/features/shared"
import changelogMarkdown from "../../../../../../CHANGELOG.md"

export const ChangelogPage = (_props: unknown): JSX.Element => {
    return (
        <Page title="Changelog">
            <Paper
                id="changelog"
                elevation={3}
                sx={DocsSx.Changelog.root}
            >
                <Box className="markdown-body">
                    <ReactMarkdown>
                        {changelogMarkdown}
                    </ReactMarkdown>
                </Box>
            </Paper>
        </Page>
    )
}
