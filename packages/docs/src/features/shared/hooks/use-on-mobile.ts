import { useMediaQuery, useTheme } from "@mui/material"

export const useOnMobile = (): boolean => {
    const theme = useTheme()
    const onMobile = useMediaQuery(theme.breakpoints.down("tablet"))
    return onMobile
}
