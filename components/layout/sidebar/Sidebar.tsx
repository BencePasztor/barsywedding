'use client'

import Link from "next/link"
import Logo from "@/components/layout/Logo"
import SidebarList from "./SidebarList"
import { useSidebar } from "@/contexts/sidebar-context"
import { X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const Sidebar = () => {

    const { isOpen, closeSidebar } = useSidebar()

    const backdropVariants = {
        open: {
            opacity: 100
        },
        closed: {
            opacity: 0
        }
    }

    const sidebarVariants = {
        open: {
            x: 0
        },
        closed: {
            x: "100%"
        }
    }

    return (
        <AnimatePresence>
            {isOpen && (
                <aside onClick={closeSidebar} className="fixed top-0 left-0 w-full h-full z-20">
                    {/* Backdrop */}
                    <motion.div
                        initial="closed"
                        exit="closed"
                        animate={isOpen ? "open" : "closed"}
                        variants={backdropVariants}
                        className="absolute w-full h-full top-0 left-0 bg-black/70">
                    </motion.div>

                    {/* Sidebar */}
                    <motion.nav
                        initial="closed"
                        exit="closed"
                        animate={isOpen ? "open" : "closed"}
                        variants={sidebarVariants}
                        transition={{ type: "spring", bounce: 0, duration: 0.35 }}
                        className="absolute top-0 right-0 w-full max-w-xs bg-cbg px-4 py-7 h-full flex flex-col items-center z-10">
                        {/* Close Button */}
                        <div className="flex justify-end w-full mb-2">
                            <button type="button" aria-label="Menü bezárása" className="p-1 rounded-full transition-colors duration-300 hover:bg-gray-200"><X /></button>
                        </div>
                        {/* Brand */}
                        <Link href="/" aria-label="Főoldal"><Logo /></Link>
                        {/* NavList */}
                        <SidebarList />
                    </motion.nav>
                </aside>
            )}
        </AnimatePresence>
    )
}

export default Sidebar