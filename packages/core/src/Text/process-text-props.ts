import type { TextProps } from "./Text.types"

export const processTextProps = (rawProps: TextProps): TextProps => {
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

    if (Array.isArray(shift) && shift.length === 2) {
        const [dx, dy] = shift
        props.dx = dx
        props.dy = dy
    }

    return props
}
