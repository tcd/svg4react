import type { EllipseProps } from "./Ellipse.types"

const processEllipseProps = (rawProps: EllipseProps): EllipseProps => {
    const {
        coordinates = [],
        radius = [],
        ...processedProps
    } = rawProps

    if (Array.isArray(coordinates) && coordinates.length > 0) {
        const [cx, cy = cx] = coordinates
        processedProps.cx = cx
        processedProps.cy = cy
    }

    if (Array.isArray(radius) && radius.length > 0) {
        const [rx, ry = rx] = coordinates
        processedProps.rx = rx
        processedProps.ry = ry
    }

    return processedProps
}

export default processEllipseProps
