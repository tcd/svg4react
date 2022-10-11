
const gaussianBlur: React.SVGProps<SVGFEGaussianBlurElement> = {
    in: "SourceGraphic",
    result: "blur",
    stdDeviation: "3",
}

const colorMatrix: React.SVGProps<SVGFEColorMatrixElement> = {
    in: "blur",
    mode: "matrix",
    result: "gooey",
    // values: `
    //     1 0 0 0 0
    //     0 1 0 0 0
    //     0 0 1 0 0
    //     0 0 0 18 -7
    // `,
    values: [
        1, 0, 0,  0,  0,
        0, 1, 0,  0,  0,
        0, 0, 1,  0,  0,
        0, 0, 0, 18, -7,
    ].join(" "),
}

const blend: React.SVGProps<SVGFEBlendElement> = {
    in2: "gooey",
    in: "SourceGraphic",
    result: "mix",
}


/**
 * ```svg
 * <defs>
 *     <filter id="gooey">
 *         <feGaussianBlur
 *             in="SourceGraphic"
 *             result="blur"
 *             stdDeviation="3"
 *         />
 *         <feColorMatrix
 *             in="blur"
 *             mode="matrix"
 *             values="
 *                 1 0 0 0 0
 *                 0 1 0 0 0
 *                 0 0 1 0 0
 *                 0 0 0 18 -7
 *             "
 *             result="gooey"
 *         />
 *         <feBlend
 *             in2="gooey"
 *             in="SourceGraphic"
 *             result="mix"
 *         />
 *     </filter>
 * </defs>
 * ```
 */
export const gooey = {
    id: "gooey",
    gaussianBlur,
    colorMatrix,
    blend,
}
