import { getCopyrightYear, getFormattedDate } from "./date-utils"

describe("getCopyrightYear", () => {
    it("should return '2023' if the current year is 2023", () => {
        jest.useFakeTimers();
        jest.setSystemTime(new Date(2023, 0, 1));

        const copyRightYear = getCopyrightYear()
        expect(copyRightYear).toBe('2023')
    })

    it("should return '2023-2024' if the current year is 2024", () => {
        jest.useFakeTimers();
        jest.setSystemTime(new Date(2024, 0, 1));

        const copyRightYear = getCopyrightYear()
        expect(copyRightYear).toBe('2023-2024')
    })
})

describe("getFormattedYear", () => {
    it("should return the date in the current format", () => {
        const testDate = new Date(2023, 0, 1)
        const formattedDate = getFormattedDate(testDate)
        expect(formattedDate).toBe("2023-01-01")
    })
})