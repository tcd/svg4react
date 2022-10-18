import { Fragment } from "react"
import {
    Box,
    Divider,
} from "@mui/material"

import { DocsSx } from "@app/theme"
import { PropCard } from "./PropCard"

export interface PropsCardProps {
    propData: PropData[]
}

export const PropsCard = (props: PropsCardProps): JSX.Element => {
    const {
        propData = [],
    } = props

    const $cards = propData.map((prop, i) => {
        return (
            <Fragment key={prop.name}>
                <PropCard key={prop.name} prop={prop} />
                {(i !== propData.length - 1) && <Divider sx={DocsSx.PropsList.Cards.divider} />}
            </Fragment>
        )
    })

    return (
        <Box sx={DocsSx.PropsList.Cards.root}>
            {$cards}
        </Box>
    )
}
