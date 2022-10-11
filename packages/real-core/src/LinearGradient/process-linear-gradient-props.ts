import type { LinearGradientProps } from "./LinearGradient.types"

const processLinearGradientProps = (rawProps: LinearGradientProps): LinearGradientProps => {
    const {
        coordinates = [],
        ...processedProps
    } = rawProps

    if (Array.isArray(coordinates) && coordinates.length === 4) {
        const [x1, x2, y1, y2] = coordinates
        processedProps.x1 = x1
        processedProps.x2 = x2
        processedProps.y1 = y1
        processedProps.y2 = y2
    }

    return processedProps
}

export default processLinearGradientProps
