import { useSelector } from "react-redux"
import { Box, Paper } from "@mui/material"
import ReactMarkdown from "react-markdown"

import { DocsSx } from "@app/theme"
import { Selectors } from "@app/state"
import { Page } from "@app/features/shared"
import changelogMarkdown from "../../../../../../CHANGELOG.md"

export const ChangelogPage = (_props: unknown): JSX.Element => {

    const darkModeEnabled = useSelector(Selectors.Core.darkModeEnabled)

    const markdownClassName = darkModeEnabled ? "markdown-body-dark" : "markdown-body-light"

    return (
        <Page title="Changelog">
            <Paper elevation={3} sx={DocsSx.Changelog.root}>
                <Box className={markdownClassName} >
                    <ReactMarkdown>
                        {changelogMarkdown}
                    </ReactMarkdown>
                </Box>
            </Paper>
        </Page>
    )
}
