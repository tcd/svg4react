import { forwardRef } from "react"

export const Path = forwardRef<SVGPathElement, React.SVGProps<SVGPathElement>>(
    function Path(props, ref) {
        return (
            <path
                ref={ref}
                {...props}
            />
        )
    },
)
