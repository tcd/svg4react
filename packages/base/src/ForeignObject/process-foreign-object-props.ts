import type { ForeignObjectProps } from "./ForeignObject.types"

const processForeignObjectProps = (rawProps: ForeignObjectProps): ForeignObjectProps => {
    const {
        coords = [],
        size = [],
        ...processedProps
    } = rawProps

    if (Array.isArray(coords) && coords.length > 0) {
        const [x, y = x] = coords
        // @ts-ignore: next-line
        processedProps.x = x
        // @ts-ignore: next-line
        processedProps.y = y
    }

    if (Array.isArray(size) && size.length > 0) {
        const [width, height = width] = size
        // @ts-ignore: next-line
        processedProps.width = width
        // @ts-ignore: next-line
        processedProps.height = height
    }

    return processedProps
}

export default processForeignObjectProps
