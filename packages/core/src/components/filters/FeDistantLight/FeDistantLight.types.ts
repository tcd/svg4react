import { ISVGProps } from "../../../utils"

export type FeDistantLightAttributes = {
    /**
     * The direction angle for the light source on the XY plane (clockwise), in degrees from the x axis.
     *
     * @see [Filter Effects Module Level 1](https://drafts.fxtf.org/filter-effects/#element-attrdef-fedistantlight-azimuth)
     *
     * @default 0
     */
    azimuth?: number
    /**
     * The direction angle for the light source from the XY plane towards the Z-axis, in degrees.
     * Note that the positive Z-axis points towards the viewer of the content.
     *
     * @see [Filter Effects Module Level 1](https://drafts.fxtf.org/filter-effects/#element-attrdef-fedistantlight-elevation)
     *
     * @default 0
     */
    feDistantLight?: number
}

/**
 * @see [MDN - `<feDistantLight>`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feDistantLight)
 */
export type FeDistantLightProps =
    ISVGProps<SVGFEDistantLightElement>
    & FeDistantLightAttributes
