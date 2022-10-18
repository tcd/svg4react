import type { ReactNode } from "react"
import { Box } from "@mui/material"

import { DocsSx } from "@app/theme"
import { uniqueishId } from "@app/util"
import { None } from "./None"

export type DescriptionListItem = {
    /** Description Term */
    term: string | number
    /** Description Details */
    details: ReactNode
}

export type DescriptionListProps = {
    items: DescriptionListItem[]
}

/**
 * Description List component
 *
 * ```html
 * <!-- Description List -->
 * <dl>
 *     <dt>Description Term</dt>
 *     <dd>Description Details</dd>
 * </dl>
 * ```
 *
 * @see [mdn web docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dl)
 */
export const DescriptionList = ({ items }: DescriptionListProps): JSX.Element => {

    const id = uniqueishId()

    const itemElements = items.map(({ term, details }) => {
        return (
            <Box key={`description-list--${id}--${term}`} sx={DocsSx.DescriptionList.item}>
                <Box component="dt" sx={DocsSx.DescriptionList.dt}>
                    {term}
                </Box>
                <Box component="dd" sx={DocsSx.DescriptionList.dd}>
                    <>{!!details ? details : <None />}</>
                </Box>
            </Box>
        )
    })

    return (
        <Box component="dl" sx={DocsSx.DescriptionList.root}>
            {itemElements}
        </Box>
    )
}

