'use client'

import ContactForm from '@/components/sections/contact/ContactForm'
import SuccessMessage from '@/components/sections/contact/SuccessMessage'
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"

const ContactFormAnimated = () => {

    const [submitted, setSubmitted] = useState(false)

    const presenceVariants = {
        visible: {
            opacity: 1,
            y: 0
        },
        hidden: {
            opacity: 0,
            y: -10
        }
    }

    return (
        <AnimatePresence mode="wait">
            {/* Form */}
            {!submitted && (
                <motion.div key="form" variants={presenceVariants} initial="visible" exit="hidden">
                    <ContactForm successCallback={() => { setSubmitted(true) }} />
                </motion.div>
            )}
            {/* Success Message */}
            {submitted && (
                <motion.div key="success" variants={presenceVariants} initial="hidden" animate="visible" exit="hidden">
                    <SuccessMessage />
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default ContactFormAnimated