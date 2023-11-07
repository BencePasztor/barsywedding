import { ComponentPropsWithoutRef, ElementType } from 'react'
import { twMerge } from 'tailwind-merge'

export type ButtonVariant = "primary" | "secondary"

type ButtonProps<E extends ElementType> = {
    as?: E,
    variant?: ButtonVariant,
} & Omit<ComponentPropsWithoutRef<E>, "as" | "variant">

export const BUTTON_VARIANT_CLASSES: Record<string, string> = {
    primary: "bg-primary-500 hover:bg-primary-600 disabled:primary-200 disabled:text-primary-700 disabled:hover:bg-primary-500",
    secondary: "bg-secondary-500 hover:bg-secondary-600 disabled:secondary-200 disabled:text-secondary-700 disabled:hover:bg-secondary-500"
}

const Button = <E extends ElementType>({ as, variant = "primary", className, children, ...restProps }: ButtonProps<E>) => {
    const Element = as ?? "button"
    const variantClassName = BUTTON_VARIANT_CLASSES[variant] ?? BUTTON_VARIANT_CLASSES.primary

    return (
        <Element className={twMerge("py-2 px-6 rounded-md transition-colors text-white duration-300", variantClassName, className)} {...restProps}>{children}</Element>
    )
}

export default Button