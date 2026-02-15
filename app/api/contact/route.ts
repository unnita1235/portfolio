import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    try {
        const { name, email, message } = await req.json();

        if (!name || !email || !message || !email.includes('@')) {
            return Response.json({ error: 'All fields required' }, { status: 400 });
        }

        await resend.emails.send({
            from: 'portfolio@yourdomain.com', // TODO: replace with verified Resend sender
            to: 'unnita1235@gmail.com',
            subject: `Portfolio contact from ${name}`,
            text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
        });

        return Response.json({ ok: true });
    } catch (error) {
        console.error('Email sending error:', error);
        return Response.json({ error: 'Failed to send' }, { status: 500 });
    }
}
