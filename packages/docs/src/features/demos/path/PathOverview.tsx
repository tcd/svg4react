import { Card, MarkdownDoc } from "@app/features/shared"
import componentDocs from "@data/components.json"

export const PathOverview = (_props: unknown): JSX.Element => {

    const doc = componentDocs.find(x => x?.component == "Path").docComment

    return (
        <Card title="<Path>" componentName="Path" suffix="">
            <MarkdownDoc content={doc}/>
        </Card>
    )
}
