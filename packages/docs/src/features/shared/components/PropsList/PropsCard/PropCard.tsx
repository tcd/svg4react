import {
    Card,
    CardHeader,
    CardContent,
    SxProps,
} from "@mui/material"

import { MarkdownSnippet } from "@app/features/shared/components/markdown/MarkdownSnippet"
import { PropNameCell, PropTypeCell } from "../shared"

const cardSx: SxProps = {
    "&:last-child td, &:last-child th": {
        border: 0,
    },
}

export const PropCard = ({ prop }: { prop: PropData }): JSX.Element => {
    return (
        <Card sx={cardSx}>
            <CardHeader
                disableTypography
                title={<PropNameCell prop={prop} />}
                subheader={<PropTypeCell content={prop.type} />}
            />
            <CardContent>
                <MarkdownSnippet content={prop?.description} />
            </CardContent>
        </Card>
    )
}
