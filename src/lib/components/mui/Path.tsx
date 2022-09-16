import { forwardRef } from "react"
import { Box } from "@mui/system"
import type { BoxProps } from "@mui/system"

// export const Path = forwardRef<OverridableComponent<BoxTypeMap<{}, "path">>>(
export const Path = forwardRef(
    function Path(props: BoxProps<"path">, ref) {
        return (
            <Box
                component="path"
                ref={ref}
                {...props}
            />
        )
    },
)
