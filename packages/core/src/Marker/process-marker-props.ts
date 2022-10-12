import type { MarkerProps } from "./Marker.types"
import { processAllProps } from "../utils"

const processMarkerProps = (rawProps: MarkerProps): MarkerProps => {
    const {
        refXY = [],
        size = [],
        ...processedProps
    } = rawProps

    if (Array.isArray(refXY) && refXY.length > 0) {
        const [refX, refY = refX] = refXY
        processedProps.refX = refX
        processedProps.refY = refY
    }

    if (Array.isArray(size) && size.length > 0) {
        const [width, height = width] = size
        processedProps.markerWidth  = width
        processedProps.markerHeight = height
    }

    return processAllProps(processedProps)
}

export default processMarkerProps
