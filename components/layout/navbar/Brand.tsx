import { motion } from "framer-motion"
import { forwardRef } from "react"
import Link from "next/link"
import Logo from "@/components/layout/Logo"

const Brand = forwardRef<HTMLAnchorElement>((props, ref) => {
    return (
        <Link {...props} ref={ref} href="/" aria-label="Főoldal"><Logo /></Link>
    )
})

const MotionBrand = motion(Brand)

export default MotionBrand