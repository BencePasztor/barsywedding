import { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

type SectionTitleProps = {
    children?: ReactNode,
    className?: string
}

const SectionTitle = ({ children, className }: SectionTitleProps) => {
    return (
        <h2 className={twMerge("text-center mb-8 font-medium text-4xl", className)}>{children}</h2>
    )
}

export default SectionTitle