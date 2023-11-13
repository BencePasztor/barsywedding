'use client'

import Image from 'next/image'
import { motion } from "framer-motion"
import SectionTitle from '@/components/SectionTitle'
import ProfileImage from "@/public/profile_placeholder.png"

const About = () => {

    const imageVariants = {
        hidden: {
            opacity: 0,
            x: -42
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.4,
                delay: 0.2
            }
        }
    }

    const textVariants = {
        hidden: {
            opacity: 0,
            x: 42
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.4,
            }
        }
    }

    return (
        <section id="about" className="p-4 my-8 scroll-m-4 overflow-hidden">
            <SectionTitle>Rólam</SectionTitle>
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                className="flex flex-wrap items-center justify-center gap-8"
            >
                {/* Image */}
                <motion.div variants={imageVariants} className="w-full max-w-xs overflow-hidden border-2 aspect-square border-primary-500">
                    <Image className="object-cover w-full h-full" src={ProfileImage} alt="Barsy Ágnes" />
                </motion.div>
                {/* Text */}
                <motion.div variants={textVariants} className="w-full max-w-xs">
                    <p><span className="text-primary-500">XY</span> vagyok, esküvői díszítéssel foglalkozom.<br />Mauris tempor aliquam convallis. Ut quis orci ultrices neque efficitur blandit id id ipsum. Cras luctus lacinia velit, id accumsan odio finibus ut. Suspendisse accumsan justo vel sem tristique condimentum. Proin sit amet semper massa, quis placerat sapien. Duis sed ullamcorper nulla. Vestibulum rutrum bibendum purus, ac mollis mi.</p>
                </motion.div>
            </motion.div>
        </section>
    )
}

export default About