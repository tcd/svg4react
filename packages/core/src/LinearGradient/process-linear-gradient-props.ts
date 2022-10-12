import type { LinearGradientProps } from "./LinearGradient.types"
import { processAllProps } from "../utils"

const processLinearGradientProps = (rawProps: LinearGradientProps): LinearGradientProps => {
    const {
        coordinates = [],
        ...processedProps
    } = rawProps

    if (Array.isArray(coordinates) && coordinates.length === 4) {
        const [x1, y1, x2, y2] = coordinates
        processedProps.x1 = x1
        processedProps.y1 = y1
        processedProps.x2 = x2
        processedProps.y2 = y2
    }

    return processAllProps(processedProps)
}

export default processLinearGradientProps
