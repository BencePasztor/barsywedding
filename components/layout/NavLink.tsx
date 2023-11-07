import { ReactNode } from "react"
import Link, { LinkProps } from "next/link"
import { twMerge } from "tailwind-merge"

type NavLinkProps = {
    className?: string,
    children?: ReactNode
} & LinkProps

const NavLink = ({ className, children, ...restProps }: NavLinkProps) => {

    return (
        <Link className={twMerge(
            "relative after:absolute after:w-full after:h-0.5 after:left-0 after:-bottom-1 after:bg-primary-500 after:transition-transform after:origin-bottom-right after:hover:origin-bottom-left after:scale-x-0 hover:after:scale-x-100 after:duration-300",
            className
        )} {...restProps}>{children}</Link>
    )
}

export default NavLink