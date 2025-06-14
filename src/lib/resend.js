import { Resend } from 'resend';

export let resend = new Resend(import.meta.env.VITE_RESEND_API_KEY);
