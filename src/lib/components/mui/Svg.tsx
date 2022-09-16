import { forwardRef } from "react"
import { Box } from "@mui/system"
import type { BoxProps } from "@mui/system"

export const Svg = forwardRef(
    function Svg(props: BoxProps<"svg">, ref) {
        return (
            <Box
                component="svg"
                ref={ref}
                {...props}
            />
        )
    },
)
