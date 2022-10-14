import type { SVGCoreAttributes } from "./attributes"
import type {
    // AriaAttributes,
    DOMAttributes,
    ClassAttributes,
} from "react"

/**
 * Base type for components in svg4react.
 *
 * FIXME: figure out how to omit `children`
 */
export interface ISVGProps<T extends SVGElement> extends
    SVGCoreAttributes,
    ClassAttributes<T>,
    // FIXME: uncomment before next stable release
    // AriaAttributes,
    DOMAttributes<T>
{}
