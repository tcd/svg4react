import "jsdom-global/register"
import React, { FC, ReactElement } from "react"
import { render, RenderOptions } from "@testing-library/react"

const Wrapper: FC<{children: React.ReactNode}> = ({ children }) => {
    return (
        <svg>
            {children && children}
        </svg>
    )
}

const customRender = (
    ui: ReactElement,
    options?: Omit<RenderOptions, "wrapper">,
) => render(ui, { wrapper: Wrapper, ...options })

export * from "@testing-library/react"
export { test, describe } from "mocha"
export { customRender as render }
