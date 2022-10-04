import { Box, Paper, Tab } from "@mui/material"
import {
    TabList,
    TabPanel,
    TabContext,
} from "@mui/lab"

import { DocsSx } from "@app/theme"
import { RawPreview } from "./RawPreview"
import { LivePreview } from "./LivePreview"

export type PreviewProps = {
    showRaw: boolean
    onChange: (show: boolean) => void
}

export const Preview = ({ showRaw, onChange }: PreviewProps): JSX.Element => {

    const value = showRaw ? "raw" : "render"

    const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
        onChange(newValue === "raw")
    }

    return (
        <Paper {...DocsSx.LiveDemo2.preview.root}>
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                    <TabList onChange={handleChange}>
                        <Tab label="Rendered" value="render" />
                        <Tab label="Raw"      value="raw" />
                    </TabList>
                </Box>
                <Paper {...DocsSx.LiveDemo2.preview.root}>
                    <TabPanel value="render">
                        <LivePreview />
                    </TabPanel>
                    <TabPanel value="raw">
                        <RawPreview />
                    </TabPanel>
                </Paper>
            </TabContext>
        </Paper>
    )
}

