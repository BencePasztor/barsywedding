import { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'
import clsx from 'clsx'

type LabelProps = {
    htmlFor: string,
    children: ReactNode,
    className?: string,
    error?: string | boolean,
    required?: boolean
}

const Label = ({ htmlFor, children, className, error, required }: LabelProps) => {
    return (
        <label className={twMerge(
            "font-medium text-sm block mb-1",
            clsx({
                "text-red-600": error,
                "after:content-['_*'] after:text-red-600": required
            }),
            className
        )} htmlFor={htmlFor}>{children}</label>
    )
}

export default Label