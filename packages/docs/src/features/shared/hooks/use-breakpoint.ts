import { useMediaQuery, useTheme } from "@mui/material"
import { useEffect, useState } from "react"

type Breakpoint = "mobile" | "tablet" | "laptop" | "desktop"

const BreakpointColors: Record<Breakpoint, string> = {
    mobile: "green",
    tablet: "yellow",
    laptop: "orange",
    desktop: "red",
}

type BreakpointData = {
    breakpoint: Breakpoint
    color: string
}

export const useBreakpoint = (): BreakpointData => {

    const [breakpoint, setBreakpoint] = useState<Breakpoint>()

    const theme = useTheme()

    const onMobile  = useMediaQuery(theme.breakpoints.only("mobile"))
    const onTablet  = useMediaQuery(theme.breakpoints.only("tablet"))
    const onLaptop  = useMediaQuery(theme.breakpoints.only("laptop"))
    const onDesktop = useMediaQuery(theme.breakpoints.only("desktop"))

    useEffect(() => {
        if (onMobile) {
            setBreakpoint("mobile")
            // return
        }
        if (onTablet) {
            setBreakpoint("tablet")
            // return
        }
        if (onLaptop) {
            setBreakpoint("laptop")
            // return
        }
        if (onDesktop) {
            setBreakpoint("desktop")
            // return
        }
    }, [
        onMobile,
        onTablet,
        onLaptop,
        onDesktop,
    ])


    return {
        breakpoint,
        color: BreakpointColors[breakpoint],
    }
}
