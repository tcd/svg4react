import { Svg, Path } from "svg4react"
import { LiveDemo } from "@app/features/shared"
import styled from "@emotion/styled"

const headerProps = { text: "I\'m styled!" };

const code = `
const Header = styled.div\`
    color: palevioletred;
    font-size: 18px;
\`

render(<Header>{headerProps.text}</Header>)
`

export const TestPage = (_props: unknown): JSX.Element => {

    const scope = { styled, headerProps }

    return (
        <LiveDemo
            title="CSS"
            code={code}
            scope={scope}
            trimCode={false}
            noInline
        />
    )
}
