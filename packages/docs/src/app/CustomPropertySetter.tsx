import { useEffect } from "react"
import { useTheme } from "@mui/material"

export const CustomPropertySetter = (_props: unknown): JSX.Element => {
    const theme = useTheme()

    useEffect(() => {
        if (theme.palette.mode === "dark") {
            // @ts-ignore: next-line
            document.querySelector(":root").style.setProperty("--dark-mode-enabled", " ")
        } else {
            // @ts-ignore: next-line
            document.querySelector(":root").style.removeProperty("--dark-mode-enabled")
        }
        // const enabled = getComputedStyle(document.querySelector(":root")).getPropertyValue("--dark-mode-enabled")
        // console.log({ "--dark-mode-enabled": !!enabled })
    }, [theme])

    return (<></>)
}
