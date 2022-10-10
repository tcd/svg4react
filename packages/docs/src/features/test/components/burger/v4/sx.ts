import type { BoxProps, SxProps } from "@mui/material"

import { merge } from "@app/util"

const toUnits = (values: number[], unit: string, comma: boolean): string => {
    return values.map(x => `${x}${unit}`).join(`${comma ? "," : ""} `)
}

const px = (...values: number[]) => toUnits(values, "px", false)
const ms = (...values: number[]) => toUnits(values, "ms", true)

const BASE_DURATION = 0.5

const Vars = <const>{
    easing: {
        outer: "cubic-bezier(0.4, 0, 0.6, 1)",
        inner: "cubic-bezier(0.5, -0.1, 0.5, 1.1)",
    },
    color: "blue",
    strokeWidth: px(1.25),
    size: px(192),
    /**
     * When checked, `.top` and `.bottom` translate up & down this amount (respectively).
     */
    outerYTranslation: px( 18),
    iconXTranslation:  px(-66),
    /** `transition`; milliseconds */
    duration: {
        icon:  ms(BASE_DURATION * 1_000),
        outer: ms(BASE_DURATION * 1_000, BASE_DURATION * 1_000, BASE_DURATION * 500),
        inner: ms(BASE_DURATION * 600),
    },
    /** `transitionDelay`; milliseconds */
    delays: {
        unchecked: {
            outer: ms(0),
            inner: ms(BASE_DURATION * 300),
        },
        checked: {
            outer: ms(0, 0, BASE_DURATION * 500),
            inner: ms(0),
        },
    },
    stroke: {
        unchecked: {
            /** `stroke-dasharray` */
            array: {
                outer: px(16, 110.21),
                inner: px(16,  56.00),
            },
            /** `stroke-dashoffset` */
            offset: {
                outer: px(-86.21),
                inner: px(-32),
            },
        },
        checked: {
            /** `stroke-dasharray` */
            array: {
                outer: px(19.80, 110.21),
            },
            /** `stroke-dashoffset` */
            offset: {
                outer: px(-9.9),
                inner: px(16),
            },
        },
    },
}

type OuterTransition =
    | "stroke-dasharray"
    | "stroke-dashoffset"
    | "transform"

// =============================================================================
// Props
// =============================================================================

const svgProps: BoxProps<"svg"> = {
    // width: Vars.size,
    // height: Vars.size,
    viewBox: "0 16 32 32",
    x: 0,
    y: 0,
    width: "100%",
    height: "100%",
    // sx: {
    //     transform: "scale(1.0)",
    // },
}

// =============================================================================
// Sx
// =============================================================================

const wrapper: SxProps = {

    // display: "flex",
    // alignItems: "center",
    // justifyContent: "center",
    m: "0px",
    p: "0px",
    // width: Vars.size,
    // height: Vars.size,
    // transform: "scale(0.2)",

    "*": {
        boxSizing: "unset",
        cursor: "pointer",
    },

    "#icon": {
        filter: "url(\"#gooey\")",
    },

    "path": {
        fill:          "none",
        strokeLinecap: "round",
        stroke:        Vars.color,
        strokeWidth:   Vars.strokeWidth,
    },

    ".icon": {
        transform:  "translateX(0px)",
        transition: `all ${Vars.duration.icon} ${Vars.easing.outer}`,
    },

    ".top, .bottom": {
        transform:                "translateY(0px)",
        transitionProperty:       "stroke-dasharray, stroke-dashoffset, transform",
        transitionTimingFunction: Vars.easing.outer,
        transitionDuration:       Vars.duration.outer,                // "1000ms 1000ms 500ms"
        transitionDelay:          Vars.delays.unchecked.outer,        // "0ms",
        strokeDasharray:          Vars.stroke.unchecked.array.outer,  // "16px 110.21px",
        strokeDashoffset:         Vars.stroke.unchecked.offset.outer, // "-86.21px",
    },

    ".middle": {
        transition:       `all ${Vars.duration.inner} ${Vars.easing.inner}`,
        strokeDasharray:  Vars.stroke.unchecked.array.inner,  // "16px 56px",
        strokeDashoffset: Vars.stroke.unchecked.offset.inner, // "-32px",
        transitionDelay:  Vars.delays.unchecked.inner,        // "300ms",
    },
}

const _checked: SxProps = {
    ".icon": {
        transform: `translateX(${Vars.iconXTranslation})`, // "translateX(-66px)",
    },

    ".top, .bottom": {
        strokeDasharray:  Vars.stroke.checked.array.outer,  // "19.8px 110.21px",
        strokeDashoffset: Vars.stroke.checked.offset.outer, // "-9.9px",
        transitionDelay:  Vars.delays.checked.outer,        // "0ms, 0ms, 500ms",
    },

    ".top": {
        transform: `translateY(${Vars.outerYTranslation})`, // 18
    },

    ".bottom": {
        transform: `translateY(-${Vars.outerYTranslation})`, // -18
    },

    ".middle": {
        strokeDashoffset: Vars.stroke.checked.offset.inner, // "16px",
        transitionDelay: Vars.delays.checked.inner,         // "0ms",
    },
}

const checked = merge(wrapper, _checked)

export const V4 = {
    default: wrapper,
    checked: checked,
    svgProps,
}
