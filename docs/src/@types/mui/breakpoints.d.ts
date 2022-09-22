export declare module "@mui/material/styles" {
    interface BreakpointOverrides {
        xs: true // need to keep `xs` for grid and other utilities.
        sm: false
        md: false
        lg: false
        xl: false
        mobile: true
        tablet: true
        laptop: true
        desktop: true
    }
}
