import { componentToString } from "@app/util"
import { Highlight } from "./Highlight"

export const RenderRaw = ({ children }: { children: React.ReactElement }): JSX.Element => {
    const exampleOutput = componentToString(children)
    return (
        <Highlight content={exampleOutput} />
    )
}
