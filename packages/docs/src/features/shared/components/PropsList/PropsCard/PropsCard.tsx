import {
    Stack,
} from "@mui/material"

import { Card } from "@app/features/shared/components/Card"
import { PropCard } from "./PropCard"

export interface PropsCard {
    propData: PropData[]
}

export const PropsCard = (props: PropsCard): JSX.Element => {
    const {
        propData = [],
    } = props

    const $cards = propData.map(prop => <PropCard key={prop.name} prop={prop} />)

    return (
        <Card
            title="Props"
            id="props"
        >
            <Stack spacing={4}>
                {$cards}
            </Stack>
        </Card>
    )
}
