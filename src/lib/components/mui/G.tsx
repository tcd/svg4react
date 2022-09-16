import { forwardRef } from "react"
import { Box } from "@mui/system"
import type { BoxProps } from "@mui/system"

export const G = forwardRef(
    function G(props: BoxProps<"g">, ref) {
        return (
            <Box
                component="g"
                ref={ref}
                {...props}
            />
        )
    },
)
