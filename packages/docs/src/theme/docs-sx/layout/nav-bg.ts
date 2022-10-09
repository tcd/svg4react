import type { Theme } from "@mui/material"

// const headerOpacity = 0.702

export const _navBg = (theme: Theme, opacity = 0.702) => {
    const headerBgDark  = `rgba(25, 25, 25, ${opacity})`
    const headerBgLight = `rgba(255, 255, 255, ${opacity})`
    return {
        backgroundColor: "transparent",
        backdropFilter: "blur(10px)",
        background: theme.palette.mode === "dark" ? headerBgDark : headerBgLight,
    }
}
