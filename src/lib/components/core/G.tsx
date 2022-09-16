import { forwardRef } from "react"

export const G = forwardRef<SVGGElement, React.SVGProps<SVGGElement>>(
    function G(props, ref) {
        return (
            <g
                ref={ref}
                {...props}
            />
        )
    },
)
