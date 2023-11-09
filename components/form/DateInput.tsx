import { forwardRef } from 'react'
import Input, { InputProps } from '@/components/form/Input'

type DateInputProps = Omit<InputProps, "type">

const DateInput = forwardRef<HTMLInputElement, DateInputProps>(({ onClick, ...restProps }, ref) => {

    //Open the calendar on input click
    const clickHandler = (e: React.MouseEvent<HTMLInputElement>) => {
        if (e.currentTarget.getAttribute("type") === "date") {
            e.currentTarget.showPicker()
        }

        if (typeof onClick === "function") {
            onClick(e)
        }
    }

    return (
        <Input type="date" onClick={clickHandler} {...restProps} ref={ref} />
    )
})

export default DateInput