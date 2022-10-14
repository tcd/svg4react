import { test, render, screen } from "../utils/test-utils"

import Svg from "./Svg"

test("Svg", () => {
    render(<Svg
        id="myGradient"
    />)
    screen.debug()

    // fireEvent.click(screen.getByText("Load Greeting"))

    //     await waitFor(() => screen.getByRole("heading"))
    //
    //     expect(screen.getByRole("heading")).toHaveTextContent("hello there")
    //     expect(screen.getByRole("button")).toBeDisabled()
})
