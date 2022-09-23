import styled from "@emotion/styled"

import { LiveDemo, Page } from "@app/features/shared"

export const TestPage = (_props: unknown): JSX.Element => {

    const scope = { styled, headerProps }

    return (
        <Page title="Test">
            <LiveDemo
                title="CSS"
                code={code}
                scope={scope}
                trimCode={false}
                noInline
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
