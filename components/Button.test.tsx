import '@testing-library/jest-dom'
import { render, screen } from "@testing-library/react"
import Button, { BUTTON_VARIANT_CLASSES } from "./Button"

describe("Button", () => {
    it("should render the element", () => {
        render(<Button data-testid="button">Test</Button>)
        const component = screen.getByTestId("button")
        expect(component).toBeInTheDocument()
    })

    it("should render a button element by default", () => {
        render(<Button data-testid="button">Test</Button>)
        const component = screen.getByTestId("button")
        expect(component.tagName.toLowerCase()).toBe("button")
    })

    it("should show the text we pass as it's child", () => {
        render(<Button data-testid="button">Test</Button>)
        const component = screen.getByTestId("button")
        expect(component).toHaveTextContent("Test")
    })

    it("should render the primary variant by default", () => {
        render(<Button data-testid="button">Test</Button>)
        const component = screen.getByTestId("button")
        expect(component).toHaveClass(BUTTON_VARIANT_CLASSES.primary)
    })

    it("should render the tag we pass as it's 'as' property", () => {
        render(<Button data-testid="button" as="a">Anchor</Button>)
        const component = screen.getByTestId("button")
        expect(component.tagName.toLowerCase()).toBe("a")
    })

    it("should render the correct variant classes", () => {
        render(<Button data-testid="button" variant="secondary">Anchor</Button>)
        const component = screen.getByTestId("button")
        expect(component).toHaveClass(BUTTON_VARIANT_CLASSES.secondary)
    })
})