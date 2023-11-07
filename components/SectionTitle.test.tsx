import '@testing-library/jest-dom'
import { render, screen } from "@testing-library/react"
import SectionTitle from "./SectionTitle"

describe("SectionTitle", () => {
    it("should render an h2 element", () => {
        render(<SectionTitle>Testing</SectionTitle>)
        const titleElement = screen.getByRole("heading", {
            level: 2
        })
        expect(titleElement).toBeInTheDocument()
    })

    it("should show the text we pass as it's child", () => {
        render(<SectionTitle>Testing</SectionTitle>)
        const titleElement = screen.getByRole("heading", {
            level: 2
        })
        expect(titleElement).toHaveTextContent("Testing")
    })
})