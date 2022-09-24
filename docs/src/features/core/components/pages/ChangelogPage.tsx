import ReactMarkdown from "react-markdown"
import { Paper } from "@mui/material"

import { Page } from "@app/features/shared"
import changelogMarkdown from "../../../../../../CHANGELOG.md"

export const ChangelogPage = (_props: unknown): JSX.Element => {
    return (
        <Page title="Changelog">
            <Paper>
                <ReactMarkdown>
                    {changelogMarkdown}
                </ReactMarkdown>
            </Paper>
        </Page>
    )
}
