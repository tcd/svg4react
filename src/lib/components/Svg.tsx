import { forwardRef } from "react"
// import { Box } from "@mui/material"
// import type { BoxProps } from "@mui/material"

export const Svg = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
    function Svg(props, ref) {
        return (
            <svg
                ref={ref}
                {...props}
            />
        )
    },
)
