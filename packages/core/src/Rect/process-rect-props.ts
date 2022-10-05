import type { RectProps } from "./Rect.types"

export const processRectProps = (rawProps: RectProps): RectProps => {
    const {
        points = [],
        size = [],
        radius = [],
        ...props
    } = rawProps

    if (Array.isArray(points)) {
        const [x, y = x] = points
        props.x = x
        props.y = y
    }

    if (Array.isArray(size)) {
        const [width, height = width] = size
        props.width  = width
        props.height = height
    }

    if (Array.isArray(radius)) {
        const [rx, ry = rx] = radius
        props.rx = rx
        props.ry = ry
    }

    return props
}
