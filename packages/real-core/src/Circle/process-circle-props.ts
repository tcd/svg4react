import type { CircleProps } from "./Circle.types"

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

    return processedProps
}

export default processCircleProps
