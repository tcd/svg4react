import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from "@mui/material"

import { PropsTableRow } from "./PropsTableRow"

export interface PropsTableProps {
    propData: PropData[]
}

export const PropsTable = (props: PropsTableProps): JSX.Element => {
    const {
        propData = [],
    } = props

    const $rows = propData.map(prop => <PropsTableRow key={prop.name} prop={prop} />)

    return (
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Type</TableCell>
                        {/* <TableCell>Default</TableCell> */}
                        <TableCell>Description</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {$rows}
                </TableBody>
            </Table>
        </TableContainer>
    )
}
