import React from "react"
import { render as rtlRender, screen } from "@testing-library/react"
import { Provider } from "react-redux"
import Gear from "../Gear"
import store from "../../store"

const render = (component) => rtlRender(
    <Provider store={store}>
        {component}
    </Provider>
)

test("Gear Component Mounts", () => {
    render(<Gear />)
    const h3element = screen.getAllByTestId("gear")
    expect(h3element).toBeInDocument
})