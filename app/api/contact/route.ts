import { type NextRequest, NextResponse } from 'next/server'
import { contactSchema } from '@/schemas/contact'
import { Resend } from "resend"

export const POST = async (request: NextRequest) => {
    try {
        const data = await request.json()
        const parseResult = await contactSchema.safeParseAsync(data)

        // Return in case of error
        if (!parseResult.success) {
            return NextResponse.json({
                message: "Invalid Request",
                issues: parseResult.error.format()
            }, { status: 400 })
        }

        // Send email
        const resend = new Resend(process.env.RESEND_KEY)

        const emailResult = await resend.emails.send({
            from: "onboarding@resend.dev",
            to: process.env.EMAIL_TO!,
            reply_to: parseResult.data.email,
            subject: "Ajánlatkérés",
            html: `<p>Név:${parseResult.data.name}</p>
                   <p>E-mail: ${parseResult.data.email}</p>
                   <p>Telefonszám: ${parseResult.data.phone}</p>
                   <p>Vendégek száma: ${parseResult.data.guests}</p>
                   <p>Esküvő időpontja: ${parseResult.data.date}</p>
                   <p>Üzenet: ${parseResult.data.message}</p>`,
        })

        if (emailResult.error) {
            return NextResponse.json({ message: "Internal Server Error" }, { status: 500 })
        }

        return NextResponse.json({ message: "Success" }, { status: 201 })
    } catch (error) {
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 })
    }
}