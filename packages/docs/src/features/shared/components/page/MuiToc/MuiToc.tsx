/* eslint-disable react/no-danger */
import noop from "lodash/noop"
import throttle from "lodash/throttle"
import { useEffect, useMemo, useCallback, useRef, useState } from "react"

import { openLinkInNewTab } from "./open-link-in-new-tab"
import {
    Nav,
    NavLabel,
    NavList,
    NavItem,
} from "./styled"

function useThrottledOnScroll(callback: () => void, delay: number) {
    const throttledCallback = useMemo(() => (
        callback ? throttle(callback, delay) : noop
    ), [callback, delay])

    useEffect(() => {
        if (throttledCallback === noop) {
            return undefined
        }

        document.getElementById("root").addEventListener("scroll", throttledCallback)
        return () => {
            document.getElementById("root").removeEventListener("scroll", throttledCallback)
            // @ts-ignore: next-line
            throttledCallback?.cancel()
        }
    }, [throttledCallback])
}

function flatten(headings: TocItem[]) {
    const itemsWithNode: any[] = []

    headings.forEach((item) => {
        itemsWithNode.push(item)

        if (Array.isArray(item?.children) && item.children.length > 0) {
            item.children.forEach((subitem) => {
                itemsWithNode.push(subitem)
            })
        }
    })
    return itemsWithNode
}

export type TocItem = {
    text: string
    hash: string
    children?: any[]
}

export type MuiTocProps = {
    toc: TocItem[]
}

export const MuiToc = (props: MuiTocProps): JSX.Element => {
    const { toc } = props

    const items = useMemo(() => flatten(toc), [toc])
    // const items = toc
    const [activeState, setActiveState] = useState(null)
    const clickedRef = useRef(false)
    const unsetClickedRef = useRef(null)
    const findActiveIndex = useCallback(() => {
        const root = document.getElementById("root")
        // Don't set the active index based on scroll if a link was just clicked
        if (clickedRef.current) {
            return
        }

        let active
        for (let i = items.length - 1; i >= 0; i -= 1) {
            // No hash if we're near the top of the page
            // if (root.scrollTop < 200) {
            //     active = { hash: null }
            //     break
            // }

            const item = items[i]
            const node = document.getElementById(item.hash)

            if (!node) {
                // eslint-disable-next-line no-console
                console.error(`Missing node on the item ${JSON.stringify(item, null, 2)}`)
            }

            if (
                node &&
                node.offsetTop < (root.scrollTop + root.clientHeight / 8)
            ) {
                active = item
                break
            }
        }

        if (active && activeState !== active.hash) {
            setActiveState(active.hash)
        }
    }, [activeState, items])

    // Corresponds to 10 frames at 60 Hz
    useThrottledOnScroll((items.length > 0 ? findActiveIndex : null), 166)

    const handleClick = (hash: any) => (event: any) => {
        // Ignore click for new tab/new window behavior
        if (openLinkInNewTab(event)) {
            return
        }

        // Used to disable findActiveIndex if the page scrolls due to a click
        clickedRef.current = true
        unsetClickedRef.current = setTimeout(() => {
            clickedRef.current = false
        }, 1000)

        if (activeState !== hash) {
            setActiveState(hash)
        }
    }

    useEffect(() => () => {
        clearTimeout(unsetClickedRef.current)
    }, [])

    if (!(toc.length > 0)) {
        return null
    }

    return (
        <Nav>
            <NavLabel gutterBottom>Table of Contents</NavLabel>
            <NavList>
                {toc.map((item, i) => (
                    <NavItem
                        key={i}
                        display="block"
                        href={`#${item.hash}`}
                        underline="none"
                        onClick={handleClick(item.hash)}
                        // @ts-ignore: next-line
                        active={activeState === item.hash}
                        // secondary={secondary}
                    >
                        {item.text}
                    </NavItem>
                ))}
            </NavList>
        </Nav>
    )
}
