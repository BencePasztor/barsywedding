'use client'

import { motion } from "framer-motion"
import { forwardRef } from "react"
import ServiceIcon from "@/components/sections/services/ServiceIcon"

type ServiceItemProps = {
    title: string,
    description: string
}

const ServiceItem = forwardRef<HTMLLIElement, ServiceItemProps>(({ title, description, ...restProps }, ref) => {
    return (
        <li
            ref={ref}
            className="flex flex-col items-center px-4 py-8 text-center rounded-lg bg-cbg max-w-md lg:max-w-xs w-full"
            {...restProps}
        >
            <ServiceIcon />
            <h3 className="pb-2 my-4 text-2xl font-medium underline-pseudo">{title}</h3>
            <p className="text-sm">{description}</p>
        </li>
    )
})

ServiceItem.displayName = 'ServiceItem'

const MotionServiceItem = motion(ServiceItem)

MotionServiceItem.displayName = 'MotionServiceItem'

export default MotionServiceItem