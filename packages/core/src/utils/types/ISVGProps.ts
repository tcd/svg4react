import type { SVGCoreAttributes } from "./attributes"
import type {
    AriaAttributes,
    DOMAttributes,
    ClassAttributes,
} from "react"

export interface ISVGProps<T extends SVGElement> extends
    SVGCoreAttributes,
    ClassAttributes<T>,
    AriaAttributes,
    DOMAttributes<T>
{}
