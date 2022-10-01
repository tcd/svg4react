import { Page } from "@app/features/shared"

import componentDocs from "@data/components.json"
import { MarkdownDoc } from "@app/features/shared"

export const MarkdownPage = (_props: unknown): JSX.Element => {
    const input = JSON.stringify(componentDocs[0].docComment)
    return (
        <Page title="Markdown">
            <MarkdownDoc content={input}/>
        </Page>
    )
}
