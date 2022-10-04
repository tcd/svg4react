import { Stack } from "@mui/material"

import { Card, PropsTable, MarkdownDoc } from "@app/features/shared"
import { PropData } from "@data/props/props"
import componentDocs from "@data/components.json"

export interface ComponentOverviewProps {
    componentName: Svg4ReactComponent
}

export const ComponentOverview = ({ componentName}: ComponentOverviewProps): JSX.Element => {

    const propData = PropData[componentName]
    const description = componentDocs.find(x => x?.component == componentName).docComment

    return (
        <Stack spacing={4}>
            <Card title="Overview">
                <MarkdownDoc content={description} />
            </Card>
            <Card title="Props">
                <PropsTable propData={propData} />
            </Card>
        </Stack>
    )
}
