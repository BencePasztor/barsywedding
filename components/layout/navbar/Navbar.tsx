'use client'

import NavList from "@/components/layout/navbar/NavList"
import MenuButton from "@/components/layout/navbar/MenuButton"
import Brand from "@/components/layout/navbar/Brand"

const Navbar = () => {

  const brandVariants = {
    hidden: {
      x: -42,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.3
      }
    }
  }

  const menuButtonVariants = {
    hidden: {
      x: 42,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        delay: 0.3 //wait for the brand to animate
      }
    }
  }

  return (
    <nav className="flex items-center justify-between w-full max-w-screen-xl p-4 mx-auto overflow-hidden">
      <Brand initial="hidden" animate="visible" variants={brandVariants} />
      {/* visible on > md */}
      <NavList />
      {/* visible on < md */}
      <MenuButton initial="hidden" animate="visible" variants={menuButtonVariants} />
    </nav>
  )
}

export default Navbar