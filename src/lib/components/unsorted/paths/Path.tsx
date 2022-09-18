import {
    CmdProp,
    buildDrawing,
} from "@src/lib/helpers"

export type PathProps = {
    id: string
    commands: CmdProp[]
    // FIXME: add proper presentation attributes
    fill?: any
    stroke?: any
}

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
