import type { CmdProp } from "@src/lib/helpers"
import { buildDrawing } from "@src/lib/helpers"

/**
 * @public
 */
export type PathProps = {
    commands: CmdProp[]
    id?: string
    // FIXME: add proper presentation attributes
    fill?: any
    stroke?: any
}

/**
 * @public
 */
export const Path = (props: PathProps): JSX.Element => {

    // const {
    //     id,
    //     commands,
    //     fill="none",
    //     stroke="black",
    // } = props

    const {
        commands,
        ...otherProps
    } = props

    const d = buildDrawing(commands)

    return (
        <path
            d={d}
            {...otherProps}
        />
    )
}
