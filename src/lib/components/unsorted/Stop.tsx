import type { SVGProps } from "react"

import type { StopAttributes } from "@src/lib/types"

/**
 * @public
 */
export type StopProps = Omit<SVGProps<SVGStopElement>, keyof StopAttributes> & StopAttributes

/**
 * @public
 *
 * @see [MDN `<stop>`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/stop)
 */
export const Stop = (props: StopProps): JSX.Element => {
    return (
        <stop {...props}/>
    )
}
