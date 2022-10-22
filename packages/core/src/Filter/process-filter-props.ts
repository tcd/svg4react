import { FilterProps } from "./Filter.types"

const processFilterProps = (rawProps: FilterProps) => {
    const {
        coords = [],
        size   = [],
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

export default processFilterProps
