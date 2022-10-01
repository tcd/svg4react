import { Box, Divider, Stack, Typography } from "@mui/material"

import { Card, PropsTable, MarkdownDoc } from "@app/features/shared"
import { PropData } from "@data/props"
import componentDocs from "@data/components.json"

export interface ComponentOverviewProps {
    componentName: Svg4ReactComponent
    propData?: PropData[]
}

export const ComponentOverview = ({ componentName, propData = [] }: ComponentOverviewProps): JSX.Element => {

    if (propData.length === 0) {
        propData = PropData[componentName]
    }
    const description = componentDocs.find(x => x?.component == componentName).docComment

    // return (
    //     <Card title={componentName}>
    //         <Box sx={{ mb: "100px" }}>
    //             <MarkdownDoc content={description} />
    //         </Box>
    //         <Box>
    //             <Typography variant="h4" gutterBottom>
    //                 Props
    //             </Typography>
    //             <Divider sx={{ width: "100%", mb: 4 }} />
    //             <PropsTable propData={componentProps} />
    //         </Box>
    //     </Card>
    // )

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
