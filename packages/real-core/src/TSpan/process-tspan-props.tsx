import type { TSpanProps } from "./TSpan.types"

const processTSpanProps = (rawProps: TSpanProps): TSpanProps => {
    const {
        value = undefined,
        coordinates = [],
        shift = [],
        ...props
    } = rawProps

    if (typeof(value) === "string") {
        props.children = <>{value}</>
    }

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

export default processTSpanProps
