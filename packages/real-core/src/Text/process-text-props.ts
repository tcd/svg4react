import type { TextProps } from "./Text.types"

const processTextProps = (rawProps: TextProps): TextProps => {
    const {
        coordinates = [],
        shift = [],
        ...props
    } = rawProps

    if (Array.isArray(coordinates) && coordinates.length > 0) {
        const [x, y = x] = coordinates
        props.x = x
        props.y = y
    }

    if (Array.isArray(shift) && shift.length > 0) {
        const [dx, dy = dx] = shift
        props.dx = dx
        props.dy = dy
    }

    return props
}

export default processTextProps
