'use client'

import { motion } from "framer-motion"
import Image from 'next/image'
import HeroImage from "@/public/hero.png"
import Button from '@/components/Button'

const Hero = () => {

  const heroVariants = {
    hidden: {
      y: -42,
      opacity: 0,
    },
    visible: (index: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        delay: 0.9 + index * 0.2
      }
    })
  }

  return (
    <section id="hero" className="text-center lg:text-left flex lg:flex-row flex-col w-full max-w-[1112px] mx-auto items-center justify-center gap-x-10 gap-y-8 px-4 py-8 lg:mb-24 mb-16 overflow-hidden">
      <motion.div variants={heroVariants} initial="hidden" animate="visible" custom={0} className="w-full max-w-lg">
        <h1 className="mb-6 text-5xl font-bold leading-snug sm:text-6xl sm:leading-snug">Lorem Ipsum<br /> <span className="text-primary-500">Dolor</span> Sit Amet</h1>
        <p className="mb-6">Sed tristique lorem elementum arcu placerat, eu maximus justo lobortis. Integer accumsan nunc sapien, at malesuada sem scelerisque at. Vestibulum dictum faucibus lacus eu rutrum.</p>
        {/* TODO: Make this a link and point it to another section! */}
        <Button variant="secondary">Quisque</Button>
      </motion.div>
      <motion.div variants={heroVariants} initial="hidden" animate="visible" custom={1}>
        <Image src={HeroImage} alt="Feldíszített helyszín" />
      </motion.div>
    </section>
  )
}

export default Hero