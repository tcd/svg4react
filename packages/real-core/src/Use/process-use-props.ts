import type { UseProps } from "./Use.types"

const processUseProps = (rawProps: UseProps): UseProps => {
    const {
        coords = [],
        size = [],
        ...processedProps
    } = rawProps

    if (Array.isArray(coords) && coords.length > 0) {
        const [x, y = x] = coords
        processedProps.x = x
        processedProps.y = y
    }

    if (Array.isArray(size) && size.length > 0) {
        const [width, height = width] = size
        processedProps.width  = width
        processedProps.height = height
    }

    return processedProps
}

export default processUseProps
