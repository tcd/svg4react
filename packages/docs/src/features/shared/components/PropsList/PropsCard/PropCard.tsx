import { Box } from "@mui/material"

import { DocsSx } from "@app/theme"
import { MarkdownSnippet } from "@app/features/shared/components/markdown/MarkdownSnippet"
import { DescriptionList, DescriptionListItem } from "@app/features/shared/components/DescriptionList"
import { PropNameCell, PropTypeCell } from "../shared"

export const PropCard = ({ prop }: { prop: PropData }): JSX.Element => {

    const dlItems: DescriptionListItem[] = [
        {
            term: "Name",
            details: (
                <PropNameCell
                    prop={prop}
                    sx={DocsSx.PropsList.Cards.card.title}
                />
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
                <Box sx={DocsSx.PropsList.Cards.card.content}>
                    <MarkdownSnippet content={prop?.description} />
                </Box>
            ),
        },
    ]

    return (
        <Box sx={DocsSx.PropsList.Cards.card.root}>
            <DescriptionList items={dlItems} />
        </Box>
    )

    return (
        <Box sx={DocsSx.PropsList.Cards.card.root}>
            <Box sx={DocsSx.PropsList.Cards.card.header}>
                <PropNameCell prop={prop} />
                <PropTypeCell content={prop.type} />
            </Box>
            <Box sx={DocsSx.PropsList.Cards.card.content}>
                <MarkdownSnippet content={prop?.description} />
            </Box>
        </Box>
    )
}
