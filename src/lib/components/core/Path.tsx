import type { SVGProps } from "react"
import { forwardRef } from "react"

/**
 * @public
 */
export const Path = forwardRef<SVGPathElement, SVGProps<SVGPathElement>>(
    function Path(props, ref) {
        return (
            <path
                ref={ref}
                {...props}
            />
        )
    },
)
