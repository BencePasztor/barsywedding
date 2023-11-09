'use client'

import { ReactNode } from 'react'
import { motion } from "framer-motion"
import BorderImage from "@/public/contact_border.png"
import Image from 'next/image'

type ContactCardProps = {
    children: ReactNode
}

const ContactCard = ({ children }: ContactCardProps) => {

    const cardVariant = {
        hidden: {
            opacity: 0,
            y: 42
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.4,
            }
        }
    }

    return (
        <motion.div variants={cardVariant} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }} className="relative w-full max-w-md mx-auto lg:max-w-xl">
            <Image aria-hidden="true" className="absolute hidden -translate-y-1/2 md:block top-1/2 -z-10 -left-44" src={BorderImage} alt="Virágok" />
            <div className="px-4 py-8 border bg-cbg rounded-2xl border-primary-500 min-h-0 md:min-h-[450px]">
                {children}
            </div>
            <Image aria-hidden="true" className="absolute hidden -translate-y-1/2 md:block -scale-x-100 -scale-y-100 top-1/2 -z-10 -right-44" src={BorderImage} alt="Virágok" />
        </motion.div>
    )
}

export default ContactCard