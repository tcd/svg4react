import {
    Stack,
} from "@mui/material"

import { PropCard } from "./PropCard"

export interface PropsCardProps {
    propData: PropData[]
}

export const PropsCard = (props: PropsCardProps): JSX.Element => {
    const {
        propData = [],
    } = props

    const $cards = propData.map(prop => <PropCard key={prop.name} prop={prop} />)

    return (
        <Stack spacing={4}>
            {$cards}
        </Stack>
    )

    // return (
    //     <Card
    //         title="Props"
    //         id="props"
    //     >
    //         <Stack spacing={4}>
    //             {$cards}
    //         </Stack>
    //     </Card>
    // )
}
