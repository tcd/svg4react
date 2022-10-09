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
        if (vb.length === 1) { processedProps.viewBox = `0 0 ${vb[0]} ${vb[0]}` }
        if (vb.length === 2) { processedProps.viewBox = `0 0 ${vb[0]} ${vb[1]}` }
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
