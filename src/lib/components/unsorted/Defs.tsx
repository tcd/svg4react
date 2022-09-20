import type { SVGProps } from "react"

/**
 * @public
 */
export interface DefsProps {
    defs: SVGProps<SVGLinearGradientElement>[]
}

/**
 * @public
 *
 * ## Reference
 *
 * - [MDN `<defs>`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/defs)
 */
export const Defs = (props: DefsProps): JSX.Element => {
    return (
        <defs {...props} >
        </defs>
    )
}
