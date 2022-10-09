import { AnimateProps } from "./Animate.types"

const processAnimateProps = (rawProps: AnimateProps): AnimateProps => {
    const {
        repeatCount = undefined,
        ...processedProps
    } = rawProps

    if (!!repeatCount) {
        // @ts-ignore: next-line
        processedProps.repeatCount = `${repeatCount}`
    }

    return processedProps
}

export default processAnimateProps
