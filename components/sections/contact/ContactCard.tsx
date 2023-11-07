import { ReactNode } from 'react'

type ContactCardProps = {
    children: ReactNode
}

const ContactCard = ({ children }: ContactCardProps) => {
    return (
        <div className="px-4 py-8 rounded-2xl border border-primary-500 max-w-xl w-full mx-auto">
            {children}
        </div>
    )
}

export default ContactCard