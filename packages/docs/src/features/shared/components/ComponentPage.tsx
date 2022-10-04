import { Stack } from "@mui/material"

import { Page, Card, PropsTable, MarkdownDoc } from "@app/features/shared"
import { PropData } from "@data/props/props"
import componentDocs from "@data/components.json"

export interface ComponentPageProps {
    componentName: Svg4ReactComponent
    children: React.ReactNode
}

export const ComponentPage = (props: ComponentPageProps): JSX.Element => {

    const {
        componentName,
        children = undefined,
    } = props

    const pageTitle = `<${componentName}>`
    const propData = PropData[componentName]
    const description = componentDocs.find(x => x?.component == componentName).docComment

    return (
        <Page title={pageTitle}>
            <Stack spacing={4}>
                <Card title="Overview">
                    <MarkdownDoc content={description} />
                </Card>
                <Card title="Props">
                    <PropsTable propData={propData} />
                </Card>
                {children && children}
            </Stack>
        </Page>
    )
}

