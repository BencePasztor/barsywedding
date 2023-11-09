'use client'

import { SubmitHandler } from "react-hook-form"
import { useZodForm } from "@/hooks/useZodForm"
import { contactSchema, Contact } from "@/schemas/contact"
import Input from '@/components/form/Input'
import DateInput from '@/components/form/DateInput'
import Textarea from '@/components/form/Textarea'
import { getFormattedDate } from '@/utils/date-utils'
import Button from '@/components/Button'
import Spinner from "@/components/Spinner"

type ContactFormProps = {
    successCallback?: () => void
}

const ContactForm = ({ successCallback }: ContactFormProps) => {
    
    const {
        register,
        handleSubmit,
        setError,
        formState: { isSubmitting, errors },
    } = useZodForm(contactSchema, { mode: "onBlur" })

    const submitHandler: SubmitHandler<Contact> = async (data) => {
        try {
            const response = await fetch('/api/contact', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            })

            const result = await response.json()

            if (!response.ok) {
                throw result
            }

            if(typeof successCallback === "function"){
                successCallback()
            }
        } catch (error: any) {
            setError("root.serverError", {
                type: "server",
                message: error?.message ?? 'Ismeretlen hiba történt, kérlek próbáld újra!'
            })
        }
    }

    return (
        <form onSubmit={handleSubmit(submitHandler)}>
            <Input id="contact_name" {...register("name")} error={errors?.name?.message} label="Név" required type="text" />
            <Input id="contact_email" {...register("email")} error={errors?.email?.message} label="E-mail" required type="email" />
            <Input id="contact_phone" {...register("phone")} error={errors?.phone?.message} label="Telefonszám" required type="text" />
            <Input id="contact_guests" {...register("guests")} error={errors?.guests?.message} label="Vendégek száma" required type="number" />
            <DateInput id="contact_date" {...register("date")} error={errors?.date?.message} label="Esküvő időpontja" required min={getFormattedDate(new Date())} />
            <Textarea id="contact_message" {...register("message")} error={errors?.message?.message} label="Üzenet" />
            {errors?.root?.serverError && <p className="text-center text-red-600 my-2.5">{errors.root?.serverError.message}</p>}
            <Button type="submit" disabled={isSubmitting} className="block w-full">{isSubmitting && <Spinner />}Küldés</Button>
        </form>
    )
}

export default ContactForm