import "jsdom-global/register"
import { test } from "mocha"
import { render } from "@testing-library/react"

import RadialGradient from "./RadialGradient"

test("radial gradient renders", async () => {
    render(<RadialGradient
        id="myGradient"
        stops={[
            { offset: "10%", stopColor: "red"  },
            { offset: "95%", stopColor: "blue" },
        ]}
    />)

    // fireEvent.click(screen.getByText("Load Greeting"))

//     await waitFor(() => screen.getByRole("heading"))
//
//     expect(screen.getByRole("heading")).toHaveTextContent("hello there")
//     expect(screen.getByRole("button")).toBeDisabled()
})
