import { z } from "zod"
import { getFormattedDate } from "@/utils/date-utils"

export const contactSchema = z.object({
    name: z
        .string()
        .trim()
        .min(1, "A név megadása kötelező"),
    email: z
        .string()
        .trim()
        .min(1, "Az e-mail cím megadása kötelező.")
        .email("Érvénytelen e-mail cím")
        .max(191, "Az e-mail maximum 191 karakter hosszú lehet"),
    phone: z
        .string()
        .trim()
        .min(1, "A telefonszám megadása kötelező")
        .regex(/^(06|\+36|36)\d{8,9}$/, "Érvénytelen telefonszám"),
    guests: z
        .coerce
        .number({ required_error: "A vendégek számának megadása kötelező" })
        .positive("A vendégek számának megadása kötelező"),
    date: z
        .string()
        .trim()
        .min(1, "A dátum megadása kötelező")
        //Convert to date for format checking
        .pipe(z
            .coerce
            .date({ invalid_type_error: "Érvénytelen dátum" })
            .min(new Date(new Date().setHours(0, 0, 0, 0)), "Érvénytelen dátum")
        )
        //Convert back to formatted string
        .transform(date => getFormattedDate(date)),
    message: z
        .string()
        .trim()
})

export type Contact = z.infer<typeof contactSchema>