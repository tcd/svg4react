import noop from "lodash/noop"
import { useEffect, useState } from "react"
import { useMediaQuery, useTheme } from "@mui/material"
import { useLocation } from "react-router-dom"

import { MlxbThemeVars } from "@app/theme"

const mobileAdjust = parseInt(MlxbThemeVars.header.mobileHeight.slice(0, -2)) + 50
const desktopAdjust = parseInt(MlxbThemeVars.header.desktopHeight.slice(0, -2)) + 50

export const ScrollControl = (_props: unknown): JSX.Element => {

    // const [lastPage, setLastPage] = useState(null)
    const [headerHeight, setHeaderHeight] = useState(0)

    const { pathname, hash } = useLocation()

    const theme = useTheme()
    const onDesktop = useMediaQuery(theme.breakpoints.up(MlxbThemeVars.mobileBreakpoint))

    useEffect(() => {
        if (onDesktop) {
            setHeaderHeight(desktopAdjust)
        } else {
            setHeaderHeight(mobileAdjust)
        }
    }, [onDesktop])

    useEffect(() => {

        // const canControlScrollRestoration = "scrollRestoration" in window.history
        // if (canControlScrollRestoration) {
        //     window.history.scrollRestoration = "manual"
        // }

        if (!hash) {
            // console.warn("no hash")
            window.scrollTo(0, 0)
        } else {
            let retries = 0
            const id = hash.replace("#", "")
            // console.log({ hashId: id })
            const scroll = () => {
                retries += 0
                if (retries > 50) {
                    // console.warn("unable to scroll")
                    return
                }
                const $element = document.getElementById(id)
                if ($element) {
                    const targetY = $element.getBoundingClientRect().top - headerHeight
                    // setTimeout(() => element.scrollIntoView(), 0)
                    window.scrollTo({
                        left: 0,
                        top: targetY,
                        behavior: "auto",
                    })
                    // console.log("scrolled")
                } else {
                    setTimeout(scroll, 100)
                }
            }
            scroll()
        }
    }, [pathname, hash])

    return null
}
