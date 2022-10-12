import type { SVGCoreAttributes, SVGPresentationAttributes } from "../types"
import processTransformProps from "./process-transform-list"

/**
 * Processing that can be applied to any component in svg4react.
 */
const processAllProps = <T = any>(rawProps: T): T => {
    const {
        // @ts-ignore: next-line
        transform = [],
        ...processedProps
    } = rawProps as SVGCoreAttributes & SVGPresentationAttributes

    // @ts-ignore: next-line
    processedProps.transform = processTransformProps(transform)

    return processedProps as unknown as T
}

export default processAllProps
