import type { SVGCoreAttributes, SVGAttributes, VB } from "../types"
import buildViewBox from "./build-view-box"
import processTransformProps from "./process-transform-list"

/**
 * Processing that can be applied to any component in svg4react.
 */
const processAllProps = <T = any>(rawProps: T): T => {
    const {
        // @ts-ignore: next-line
        transform = [],
        vb = [],
        ...processedProps
    } = rawProps as SVGCoreAttributes & SVGAttributes & { vb: VB }

    // @ts-ignore: next-line
    processedProps.transform = processTransformProps(transform)
    // @ts-ignore: next-line
    processedProps.viewBox = buildViewBox(vb)

    return processedProps as unknown as T
}

export default processAllProps
