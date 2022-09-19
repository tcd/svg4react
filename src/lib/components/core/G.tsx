import type { SVGProps } from "react"
import { forwardRef } from "react"

export const G = forwardRef<SVGGElement, SVGProps<SVGGElement>>(
    function G(props, ref) {
        return (
            <g
                ref={ref}
                {...props}
            />
        )
    },
)
