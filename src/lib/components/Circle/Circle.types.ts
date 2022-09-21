import type { SVGProps } from "react"

import type { CircleAttributes } from "svg4react"

/**
 * @public
 */
export type CircleProps =
    Omit<SVGProps<SVGCircleElement>, keyof CircleAttributes>
    & CircleAttributes
