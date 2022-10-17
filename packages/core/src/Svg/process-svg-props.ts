import type { SvgProps } from "./Svg.types"
import { processAllProps } from "../utils"

const defaultProps: Partial<SvgProps> = {
    // @ts-ignore: next-line
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    // @ts-ignore: next-line
    xmlns: "http://www.w3.org/2000/svg",
}

const processSvgProps = (rawProps: SvgProps): SvgProps => {

    const {
        size = null,
        ...processedProps
    } = {
        ...defaultProps,
        ...rawProps,
    }

    if (size) {
        // @ts-ignore: next-line
        processedProps.width  = processedProps.width ?? size
        // @ts-ignore: next-line
        processedProps.height = processedProps.height ?? size
    }

    return processAllProps(processedProps)
}

export default processSvgProps
