import type { StopAttributes } from "@src/lib/types"

export type StopProps = Omit<React.SVGProps<SVGStopElement>, keyof StopAttributes> & StopAttributes

/**
 * @see [MDN `<stop>`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/stop)
 */
export const Stop = (props: StopProps): JSX.Element => {
    return (
        <stop {...props}/>
    )
}