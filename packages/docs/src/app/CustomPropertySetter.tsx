import { useEffect } from "react"
import { useTheme } from "@mui/material"

import { DarkPlusColors, LightPlusColors } from "@app/util"

const setThemeVars = (palette: Record<string, string>): void => {
    const root = document.querySelector(":root") as HTMLElement
    for (const [ key, value ] of Object.entries(palette)) {
        root.style.setProperty(`--dark-plus-${key}`, value)
    }
}

export const CustomPropertySetter = (_props: unknown): JSX.Element => {
    const theme = useTheme()

    useEffect(() => {
        if (theme.palette.mode === "dark") {
            setThemeVars(DarkPlusColors)
            // @ts-ignore: next-line
            // document.querySelector(":root").style.setProperty("--dark-mode-enabled", " ")
        } else {
            setThemeVars(LightPlusColors)
            // @ts-ignore: next-line
            // document.querySelector(":root").style.removeProperty("--dark-mode-enabled")
        }
        // const enabled = getComputedStyle(document.querySelector(":root")).getPropertyValue("--dark-mode-enabled")
        // console.log({ "--dark-mode-enabled": !!enabled })
    }, [theme])

    return (<></>)
}
