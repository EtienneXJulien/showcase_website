'use server'

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(formData: FormData) {
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const subject = formData.get('subject') as string;
    const message = formData.get('message') as string;

    try {
        await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: 'team.itsquare@outlook.com',
            subject: `Contact Form: ${subject}`,
            html: `
                <h2>Nouveau message de contact</h2>
                <p><strong>Nom:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Sujet:</strong> ${subject}</p>
                <p><strong>Message:</strong></p>
                <p>${message.replace(/\n/g, '<br>')}</p>
            `
        });

        return { success: true };
    } catch (error) {
        console.error('Error sending email:', error);
        return { success: false, error: 'Failed to send email' };
    }
}
