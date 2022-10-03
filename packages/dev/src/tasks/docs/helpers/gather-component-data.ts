import { ProjectParser } from "typedoc-json-parser"

import { gatherPropsData } from "./gather-props-data.js"

export const gatherComponentData = (project: ProjectParser, component: string): ComponentData => {
    const componentData = project.functions.find((x) => x.name === component)
    // console.log(JSON.stringify(componentData, undefined, 4))

    const docComment = componentData.signatures[0].comment.description ?? ""

    const propParam = componentData.signatures[0].parameters.find(x => x.name === "props")
    const props = gatherPropsData(project, propParam)
    console.log(props)

    return {
        component,
        docComment,
        // props,
    }
}
