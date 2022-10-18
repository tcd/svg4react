import { Box } from "@mui/material"

import { DocsSx } from "@app/theme"
import { MarkdownSnippet } from "@app/features/shared/components/markdown/MarkdownSnippet"
import { DescriptionList, DescriptionListItem } from "@app/features/shared/components/DescriptionList"
import { PropNameCell, PropTypeCell } from "../shared"

const styles = DocsSx.PropsList.Cards.card

export const PropCard = ({ prop }: { prop: PropData }): JSX.Element => {

    const dlItems: DescriptionListItem[] = [
        {
            term: "Name",
            details: (
                <PropNameCell prop={prop} />
            ),
        },
        {
            term: "Type",
            details: (
                <PropTypeCell content={prop.type} />
            ),
        },
        {
            term: "Description",
            details: (
                <Box sx={styles.content}>
                    <MarkdownSnippet content={prop?.description} />
                </Box>
            ),
        },
    ]

    return (
        <DescriptionList items={dlItems} />
    )

    return (
        <Box sx={styles.root}>
            <Box sx={styles.header}>
                <PropNameCell prop={prop} />
                <PropTypeCell content={prop.type} />
            </Box>
            <Box sx={styles.content}>
                <MarkdownSnippet content={prop?.description} />
            </Box>
        </Box>
    )
}
