'use client'

import { motion } from "framer-motion"
import { forwardRef } from "react"
import { useSidebar } from "@/contexts/sidebar-context"
import { Menu } from "lucide-react"

const MenuButton = forwardRef<HTMLButtonElement>((props, ref) => {

    const { openSidebar } = useSidebar()

    return (
        <button
            ref={ref}
            type="button"
            aria-label="Menü megnyitása"
            onClick={openSidebar}
            className="inline-block p-1 transition-colors duration-300 rounded-full md:hidden hover:bg-gray-200"
            {...props} >
            <Menu size={28} />
        </button>
    )
})

const MotionMenuButton = motion(MenuButton)

export default MotionMenuButton