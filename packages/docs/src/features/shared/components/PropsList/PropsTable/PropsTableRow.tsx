import { TableCell, TableRow } from "@mui/material"

import { MarkdownSnippet } from "@app/features/shared/components/markdown/MarkdownSnippet"
import { PropNameCell, PropTypeCell } from "../shared"

export const PropsTableRow = ({ prop }: { prop: PropData }): JSX.Element => {
    return (
        <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
            <TableCell>
                <PropNameCell prop={prop} />
            </TableCell>
            <TableCell>
                <PropTypeCell content={prop.type} />
            </TableCell>
            {/* <TableCell>
                {prop?.default}
            </TableCell> */}
            <TableCell>
                <MarkdownSnippet content={prop?.description} />
            </TableCell>
        </TableRow>
    )
}
