import type { SvgProps } from "./Svg.types"

const defaultProps: Partial<SvgProps> = {
    // @ts-ignore: next-line
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    // @ts-ignore: next-line
    xmlns: "http://www.w3.org/2000/svg",
}

const processSvgProps = (props: SvgProps): SvgProps => {

    const {
        size = null,
        vb = [],
        ...otherProps
    } = {
        ...defaultProps,
        ...props,
    }

    if (!otherProps.viewBox) {
        if (vb.length === 1) { otherProps.viewBox = `0 0 ${vb[0]} ${vb[0]}` }
        if (vb.length === 2) { otherProps.viewBox = `0 0 ${vb[0]} ${vb[1]}` }
    }

    if (size) {
        otherProps.width  = otherProps?.width ?? size
        otherProps.height = otherProps.height ?? size
    }

    return otherProps
}

export default processSvgProps
