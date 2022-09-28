import styled from "@emotion/styled"

import { LiveDemo, Page } from "@app/features/shared"

export const TestPage = (_props: unknown): JSX.Element => {

    const scope = { styled, headerProps }

    return (
        <Page title="Test">
            <LiveDemo
                id="editor-test"
                title="CSS"
                code={code}
                scope={scope}
            />
        </Page>
    )
}

// =============================================================================

const headerProps = { text: "I\'m styled!" }

const code = `
const Header = styled.div\`
    color: palevioletred;
    font-size: 18px;
\`

render(<Header>{headerProps.text}</Header>)
`
