import { TableCell, TableRow } from "@mui/material"

import { MarkdownDoc } from "@app/features/shared/components/MarkdownDoc"
import { PropTypeCell } from "./PropTypeCell"
import { PropNameCell } from "./PropNameCell"

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
                <MarkdownDoc content={prop?.description} />
            </TableCell>
        </TableRow>
    )
}
