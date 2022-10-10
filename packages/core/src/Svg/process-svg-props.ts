import type { SvgProps } from "./Svg.types"

const defaultProps: Partial<SvgProps> = {
    // @ts-ignore: next-line
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    // @ts-ignore: next-line
    xmlns: "http://www.w3.org/2000/svg",
}

const processSvgProps = (rawProps: SvgProps): SvgProps => {

    const {
        size = null,
        vb = [],
        ...processedProps
    } = {
        ...defaultProps,
        ...rawProps,
    }

    if (!processedProps.viewBox) {
        if (Array.isArray(vb) && vb.length > 0) {
            const [width, height = width] = vb
            processedProps.viewBox = `0 0 ${width} ${height}`
        }
    }

    if (size) {
        // @ts-ignore: next-line
        processedProps.width  = processedProps.width ?? size
        // @ts-ignore: next-line
        processedProps.height = processedProps.height ?? size
    }

    return processedProps
}

export default processSvgProps
