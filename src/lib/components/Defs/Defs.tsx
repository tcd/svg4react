import type { DefsProps } from "./Defs.types"

/**
 * @public
 *
 * ## Reference
 *
 * - [MDN `<defs>`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/defs)
 */
const Defs = (props: DefsProps): JSX.Element => {
    return (
        <defs {...props} >
        </defs>
    )
}

export default Defs
