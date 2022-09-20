import type { SVGProps } from "react"
import { forwardRef } from "react"
// import { Box } from "@mui/material"
// import type { BoxProps } from "@mui/material"

/**
 * @public
 */
export const Svg = forwardRef<SVGSVGElement, SVGProps<SVGSVGElement>>(
    function Svg(props, ref) {
        return (
            <svg
                ref={ref}
                {...props}
            />
        )
    },
)
