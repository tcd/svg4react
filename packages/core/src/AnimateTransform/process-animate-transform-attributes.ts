import { AnimateTransformProps } from "./AnimateTransform.types"

const processAnimateTransformProps = (rawProps: AnimateTransformProps): AnimateTransformProps => {
    const {
        repeatCount = undefined,
        ...processedProps
    } = rawProps

    if (!!repeatCount) {
        // FIXME: is this necessary?
        // @ts-ignore: next-line
        processedProps.repeatCount = `${repeatCount}`
    }

    return processedProps
}

export default processAnimateTransformProps
