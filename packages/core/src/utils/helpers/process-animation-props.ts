import { SVGAnimationAttributes } from "../types"

const processAnimationProps = (rawProps: SVGAnimationAttributes): SVGAnimationAttributes => {
    const {
        values = [],
        keyTimes = [],
        keySplines = [],
        repeatCount = undefined,
        ...processedProps
    } = rawProps

    if (!!repeatCount) {
        // @ts-ignore: next-line
        processedProps.repeatCount = `${repeatCount}`
    }

    if (Array.isArray(values) && values.length > 0) {
        // @ts-ignore: next-line
        processedProps.values = values.join("; ")
    }

    if (Array.isArray(keyTimes) && keyTimes.length > 0) {
        // @ts-ignore: next-line
        processedProps.keyTimes = keyTimes.join("; ")
    }

    if (Array.isArray(keySplines) && keySplines.length > 0) {
        // @ts-ignore: next-line
        processedProps.keySplines = keySplines.join("; ")
    }

    return processedProps
}

export default processAnimationProps
