import { Path, PathProps, Circle } from "svg4react"

export interface DebugPathProps extends PathProps {
    debugColor?: string
}

export const DebugPath = (props: DebugPathProps): JSX.Element => {

    const {
        commands = [],
        debugColor = "white",
        ...otherProps
    } = props

    const $points = commands.filter(x => ["M", "L", "V", "H"].includes(x[0])).map(([_, commands], i) => {
        return (
            <Circle
                stroke="none"
                fill={debugColor}
                // @ts-ignore: next-line
                coordinates={commands[0]}
                key={i}
                r="1"
                id={`${commands[0]}`}
            />
        )
    })

    return (
        <>
            <Path commands={commands} {...otherProps} />
            {$points}
        </>
    )
}
