'use client'

import Navbar from "@/components/layout/navbar/Navbar"
import { useEffect, useState } from "react"
import { twMerge } from "tailwind-merge"
import clsx from "clsx"

enum HeaderState {
  STATIC,
  STICKY,
  HIDDEN
}

const Header = () => {
  const [headerState, setHeaderState] = useState(HeaderState.STATIC)

  useEffect(() => {
    let prevScrollY = 0

    // Show, Hide or Fix the Header based on scroll position
    const scrollHandler = () => {
      const isScrollingDown = prevScrollY < window.scrollY
      const scrollY = window.scrollY
      prevScrollY = window.scrollY

      if (isScrollingDown) {
        setHeaderState(HeaderState.HIDDEN)
      } else if (scrollY !== 0) {
        setHeaderState(HeaderState.STICKY)
      } else {
        setHeaderState(HeaderState.STATIC)
      }

    }

    // Hide the Header if the scroll position matches the position of the currently viewed target(href)
    const scrollEndHandler = () => {
      if (window.location.hash) {
        // Element with current location hash
        const element = document.getElementById(window.location.hash.slice(1))

        // Return if there is no element with this hash
        if (element) {

          const elementTop = Math.floor(element.getBoundingClientRect().top)
          const elementScrollMarginTop = Math.floor(parseInt(getComputedStyle(element).scrollMarginTop))

          // If the element is at the top of the screen, hide the Header
          if (elementTop === elementScrollMarginTop) {
            setHeaderState(HeaderState.HIDDEN)
          }
        }
      }
    }

    window.addEventListener("scroll", scrollHandler)
    window.addEventListener("scrollend", scrollEndHandler)
    return () => {
      window.removeEventListener("scroll", scrollHandler)
      window.removeEventListener("scroll", scrollEndHandler)
    }
  }, [])

  const headerClasses = clsx({
    "drop-shadow-md": headerState === HeaderState.STICKY,
    "-translate-y-full": headerState === HeaderState.HIDDEN,
  })

  return (
    <header className={twMerge("sticky top-0 transition-all duration-300 bg-cbg z-10", headerClasses)}>
      <Navbar />
    </header>
  )
}

export default Header