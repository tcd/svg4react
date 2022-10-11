import type { RectProps } from "./Rect.types"

const processRectProps = (rawProps: RectProps): RectProps => {
    const {
        points = [],
        size   = [],
        radius = [],
        ...processedProps
    } = rawProps

    if (Array.isArray(points) && points.length > 0) {
        const [x, y = x] = points
        processedProps.x = x
        processedProps.y = y
    }

    if (Array.isArray(size) && size.length > 0) {
        const [width, height = width] = size
        processedProps.width  = width
        processedProps.height = height
    }

    if (Array.isArray(radius) && radius.length > 0) {
        const [rx, ry = rx] = radius
        processedProps.rx = rx
        processedProps.ry = ry
    }

    return processedProps
}

export default processRectProps
