'use client'

import NavLink from "@/components/layout/NavLink"
import { NAV_LINKS } from "@/lib/constants"
import { motion } from "framer-motion"

const NavList = () => {

  const navLinkVariants = {
    hidden: {
      y: -42,
      opacity: 0,
    },
    visible: (index: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        delay: 0.3 + index * 0.15 //wait for the brand to animate plus the previous list elements
      }
    })
  }

  return (
    <ul className="hidden gap-4 md:flex lg:gap-7">
      {NAV_LINKS.map(({ name, url }, index) => (
        <motion.li
          key={index}
          initial="hidden"
          animate="visible"
          custom={index}
          variants={navLinkVariants}
        >
          <NavLink href={url}>{name}</NavLink>
        </motion.li >
      ))}
    </ul>
  )
}

export default NavList