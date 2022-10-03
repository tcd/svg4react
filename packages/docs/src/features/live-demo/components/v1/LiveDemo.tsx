import { useState } from "react"
import { Box, Paper, Switch, FormControlLabel, Stack, Divider } from "@mui/material"
import { LiveProvider, withLive } from "react-live"

import { DocsSx } from "@app/theme"
import { trimCode } from "@app/util"
import { Card, MarkdownDoc } from "@app/features/shared"
import { cleanCode, WithLiveProps } from "@app/features/live-demo"
import { LiveEditor } from "./LiveEditor"
import { LiveDemoError } from "./LiveDemoError"
import { LiveDemoPreview } from "./LiveDemoPreview"

import componentDocs from "@data/components.json"

export type CustomLiveDemoProps = {
    id: string
    title: string | React.ReactNode
    componentName?: Svg4ReactComponent
    /** The code that should be rendered, apart from the user's edits */
    code: string
    /** Accepts custom globals that the `code` can use */
    scope: Record<string, any>
    /**
     * Evaluate and mount the inline code.
     *
     * @default false
     */
    inline?: boolean
} & WithLiveProps

const _LiveDemo = (props: CustomLiveDemoProps): JSX.Element => {

    const {
        id,
        title,
        componentName = null,
        scope,
        inline = false,
    } = props

    let description: string = null

    const passedCode = trimCode(props?.code)

    const [showRaw, setShowRaw] = useState(false)

    const handleToggleRaw = () => {
        setShowRaw(!showRaw)
    }

    if (componentName !== null) {
        const doc = componentDocs.find(x => x?.component == componentName)
        if (doc) {
            description = doc.docComment
        }
    }

    return (
        <Card id={id} title={title} componentName={componentName}>

            {description &&
                <Box>
                    <MarkdownDoc content={description}/>
                    <Divider sx={{ my: 2 }} />
                </Box>
            }

            <Stack direction="row" sx={{ mb: 2 }}>
                <FormControlLabel
                    label="show raw output"
                    control={<Switch />}
                    checked={showRaw}
                    onChange={handleToggleRaw}
                />
            </Stack>

            <LiveProvider
                code={passedCode}
                scope={scope}
                noInline={!!!inline}
                transformCode={(code) => cleanCode(code)}
            >

                <Box sx={DocsSx.LiveDemo.container}>

                    <Paper {...DocsSx.LiveDemo.editor}>
                        <LiveEditor />
                    </Paper>

                    <Paper {...DocsSx.LiveDemo.preview}>
                        <LiveDemoPreview showRaw={showRaw} />
                        <LiveDemoError />
                    </Paper>

                </Box>

            </LiveProvider>

        </Card>
    )
}

export const LiveDemo = withLive(_LiveDemo)
