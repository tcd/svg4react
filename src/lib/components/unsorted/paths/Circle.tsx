import type { SVGProps } from "react"

import type { CircleAttributes } from "@types"
export type CircleProps = Omit<SVGProps<SVGCircleElement>, keyof CircleAttributes> & CircleAttributes


export const Circle = (props: CircleProps): JSX.Element => {
    return (
        <circle {...props} />
    )
}

// let example = () => {
//     return <Circle
//         cx={2}
//         cy={0}
//         r={0}
//     />
// }
