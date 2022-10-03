import { TableCell, TableRow } from "@mui/material"

import { MarkdownDoc } from "@app/features/shared/components/MarkdownDoc"
import { PropTypeCell } from "./PropTypeCell"

export const PropsTableRow = ({ prop }: { prop: PropData }): JSX.Element => {
    return (
        <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
            <TableCell>
                <code>{prop?.name}</code>
            </TableCell>
            <TableCell>
                <PropTypeCell content={prop.type} />
            </TableCell>
            {/* <TableCell>
                {prop?.default}
            </TableCell> */}
            <TableCell>
                <MarkdownDoc content={prop?.description} />
            </TableCell>
        </TableRow>
    )
}
