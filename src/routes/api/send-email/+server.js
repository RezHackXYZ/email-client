import { resend } from '$lib/resend.js';

export async function POST({ request }) {
    const { from, to, subject, html } = await request.json();

    try {
        const response = await resend.emails.send({ from, to, subject, html });
        return new Response(JSON.stringify({ success: true, response }), { status: 200 });
    } catch (err) {
        return new Response(JSON.stringify({ success: false, error: err.message }), { status: 500 });
    }
}