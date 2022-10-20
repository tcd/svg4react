import noop from "lodash/noop"
import throttle from "lodash/throttle"
import { useEffect, useMemo } from "react"

export const useThrottledOnScroll = (callback: () => void, delay: number): void => {
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

export const flatten = (headings: TocItem[]): TocItem[] => {
    const itemsWithNode: TocItem[] = []

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
