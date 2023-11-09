export const getCopyrightYear = () => {
    const startYear = 2023
    const currentYear = new Date().getFullYear()
    return startYear < currentYear ? `${startYear}-${currentYear}` : `${startYear}`
}

export const getFormattedDate = (date: Date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
}