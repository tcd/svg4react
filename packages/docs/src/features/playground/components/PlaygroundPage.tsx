import { Typography } from "@mui/material"

import { Page, Card } from "@app/features/shared"
import { Playground } from "./playground"

export const PlaygroundPage = (_props: unknown): JSX.Element => {
    return (
        <Page title="Playground">

            <Card title="Playground" sx={{ mb: 4 }}>
                <Typography>
                    All components in <kbd>svg4react</kbd> are available in the editor below.
                    <br />
                    All exports in the package can also be accessed through the imported <kbd>svg4react</kbd> object.
                </Typography>
            </Card>

            <Playground />

        </Page>
    )
}
