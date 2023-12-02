'use client'

import { forwardRef, ComponentPropsWithoutRef } from 'react'
import { twMerge } from 'tailwind-merge'
import clsx from 'clsx'
import Label from '@/components/form/Label'

export type TextareaProps = {
    id: string,
    label: string,
    error?: string
} & ComponentPropsWithoutRef<"textarea">

const TEXTAREA_CLASSES: Record<string, string> = {
    normal: "border-gray-400 focus:outline-primary-500 focus:border-primary-500",
    error: "border-red-400 focus:outline-red-500 focus:red-primary-500"
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(({ id, label, error, required, ...restProps }, ref) => {
    return (
        <div className="my-2.5">
            <Label
                error={error}
                required={required}
                htmlFor={id}
            >
                {label}
            </Label>
            <textarea
                id={id}
                ref={ref}
                required={required}
                aria-invalid={error ? 'true' : 'false'}
                className={twMerge(
                    clsx({
                        [TEXTAREA_CLASSES.normal]: !error,
                        [TEXTAREA_CLASSES.error]: error,
                    }),
                    "p-2.5 text-sm rounded-lg block border w-full"
                )}
                rows={4}
                {...restProps}
            >
            </textarea>
            {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
        </div>
    )
})

Textarea.displayName = 'Textarea'

export default Textarea