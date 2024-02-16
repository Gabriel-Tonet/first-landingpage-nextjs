import { SMTPClient } from 'emailjs';
import { NextResponse } from 'next/server';

export default async function (request) {
    const { messageBody } = request.body;

    const client = new SMTPClient({
        user: process.env.EMAIL,
        password: process.env.PASSWORD,
        host: 'smtp.gmail.com',
        ssl: true,
    });

    try {
        const message = await client.sendAsync({
            text: messageBody, // request.body.messageBody
            from: 'gabrieltonet98@gmail.com',
            to: 'gabrieltonet98@gmail.com',
            subject: 'Lead - Landingpage',
        });
    } catch (err) {
    }

    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
}