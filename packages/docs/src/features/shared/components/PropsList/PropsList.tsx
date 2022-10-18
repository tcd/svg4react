// import {
//     useTheme, useM
// } from "@mui/material"

import { useOnMobile } from "@app/features/shared/hooks"
import { PropsCard } from "./PropsCard"
import { PropsTable } from "./PropsTable"

export interface PropsListProps {
    propData: PropData[]
}

export const PropsList = (props: PropsListProps): JSX.Element => {
    const onMobile = useOnMobile()

    return onMobile ? <PropsCard {...props} /> : <PropsTable {...props} />
}
