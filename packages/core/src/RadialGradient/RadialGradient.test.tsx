import { test, render, screen } from "../utils/test-utils"

import RadialGradient from "./RadialGradient"

test("RadialGradient", () => {
    render(<RadialGradient
        id="myGradient"
        stops={[
            { offset: "10%", stopColor: "red"  },
            { offset: "95%", stopColor: "blue" },
        ]}
    />)
    // screen.debug()

    // fireEvent.click(screen.getByText("Load Greeting"))

    //     await waitFor(() => screen.getByRole("heading"))
    //
    //     expect(screen.getByRole("heading")).toHaveTextContent("hello there")
    //     expect(screen.getByRole("button")).toBeDisabled()
})
