import type { SVGProps } from "react"
import { forwardRef } from "react"

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
