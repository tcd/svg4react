import type { BreakpointsOptions } from "@mui/material"

// const BREAKPOINTS = [
//     600,
//     900,
//     1200,
//     1536,
// ]

export const breakpointsOptions: BreakpointsOptions = {
    keys: [
        "xs",
        "mobile",
        "tablet",
        "laptop",
        "desktop",
    ],
    values: {
        xs: 0,
        mobile:  0,
        tablet:  600,
        laptop:  900,
        desktop: 1200,
    },
}
