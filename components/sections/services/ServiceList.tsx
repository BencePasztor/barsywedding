'use client'

import ServiceItem from "@/components/sections/services/ServiceItem"
import { SERVICES } from "@/lib/constants"
import { motion } from "framer-motion"

const ServiceList = () => {

    const serviceItemVariants = {
        hidden: {
            y: 42,
            opacity: 0,
            scale: 1.2,
        },
        visible: (index: number) => ({
            y: 0,
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.3,
                delay: index * 0.15
            }
        })
    }

    return (
        <motion.ul
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="flex lg:flex-row flex-col gap-8 lg:items-stretch items-center justify-center"
        >
            {SERVICES.map(({ title, description }, index) => (
                <ServiceItem
                    key={index}
                    title={title}
                    description={description}
                    variants={serviceItemVariants}
                    custom={index}
                />
            ))}
        </motion.ul>
    )
}

export default ServiceList