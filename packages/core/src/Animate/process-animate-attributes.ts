import { AnimateProps } from "./Animate.types"

export const processAnimateProps = (rawProps: AnimateProps): AnimateProps => {
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
