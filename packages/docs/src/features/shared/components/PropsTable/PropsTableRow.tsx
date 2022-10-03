import isString from "lodash/isString"
import { Box, TableCell, TableRow } from "@mui/material"

import { MarkdownDoc } from "@app/features/shared/components/MarkdownDoc"

import { PropTypeCell } from "./PropTypeCell"

export const PropsTableRow = ({ prop }: { prop: PropData }): JSX.Element => {

    // const $type = isString(prop?.type) ? <kbd>{prop?.type}</kbd> : prop?.type
    const $type = isString(prop?.type) ? <PropTypeCell content={prop.type} /> : prop?.type

    return (
        <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
            <TableCell>
                <code>{prop?.name}</code>
            </TableCell>
            <TableCell>
                {$type}
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
