import { V1_5 } from "@src/lib/helpers"

export type PathV1_5Props = {
    commands: V1_5.CmdProp[]
    id?: string
    // FIXME: add proper presentation attributes
    fill?: any
    stroke?: any
}

export const PathV1_5 = (props: PathV1_5Props): JSX.Element => {

    const {
        commands,
        ...otherProps
    } = props

    const d = V1_5.buildDrawing(commands)

    return (
        <path
            d={d}
            {...otherProps}
        />
    )
}
