import type { CircleProps } from "./Circle.types"
import { processAllProps } from "../utils"

const processCircleProps = (rawProps: CircleProps): CircleProps => {
    const {
        coordinates = [],
        ...processedProps
    } = rawProps

    if (Array.isArray(coordinates) && coordinates.length > 0) {
        const [cx, cy = cx] = coordinates
        processedProps.cx = cx
        processedProps.cy = cy
    }

    return processAllProps(processedProps)
}

export default processCircleProps
