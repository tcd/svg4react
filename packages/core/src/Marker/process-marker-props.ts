import type { MarkerProps } from "./Marker.types"

export const processMarkerProps = (rawProps: MarkerProps): MarkerProps => {
    const {
        refXY = [],
        markerSize = [],
        ...processedProps
    } = rawProps

    if (Array.isArray(refXY) && refXY.length > 0) {
        const [refX, refY = refX] = refXY
        processedProps.refX = refX
        processedProps.refY = refY
    }

    if (Array.isArray(markerSize) && markerSize.length > 0) {
        const [width, height = width] = markerSize
        processedProps.markerWidth  = width
        processedProps.markerHeight = height
    }

    return processedProps
}
