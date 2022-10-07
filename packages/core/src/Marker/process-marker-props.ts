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
        const [markerWidth, markerHeight = markerWidth] = markerSize
        processedProps.markerWidth = markerWidth
        processedProps.markerHeight = markerHeight
    }

    return processedProps
}
