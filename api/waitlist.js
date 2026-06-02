import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { email } = req.body;
  if (!email) return res.status(400).json({ error: 'Email is required' });

  const { data, error } = await resend.emails.send({
    from: 'Marv from Verd <marv@verdfinance.com>',
    to: [email],
    subject: "You're on the Verd waitlist!",
    html: `
    <div style="font-family: sans-serif; max-width: 500px; margin: 0 auto; padding: 40px 20px; background-color: #ffffff;">
      <h1 style="color: #4F46E5; font-size: 28px; margin-bottom: 8px;">Verd</h1>
      <h2 style="font-size: 22px; color: #111827; margin-bottom: 12px;">You're on the list!</h2>
      <p style="font-size: 16px; color: #6B7280; line-height: 1.6;">
        Hey there, thanks for joining the <strong>Verd</strong> waitlist. 
        We're building something special — a DeFi-powered system that helps 
        your money grow and compound.
      </p>
      <p style="font-size: 16px; color: #6B7280; line-height: 1.6;">
        We'll reach out as soon as we're ready to launch. Stay tuned.
      </p>
      <a href="https://verdfinance.com" 
         style="display: inline-block; margin-top: 24px; padding: 12px 24px; 
                background-color: #4F46E5; color: #ffffff; text-decoration: none; 
                border-radius: 8px; font-size: 16px;">
        Visit Verd
      </a>
      <p style="margin-top: 40px; font-size: 13px; color: #9CA3AF;">
        You're receiving this because you signed up at verdfinance.com. <br/>
        © 2025 Verd. All rights reserved.
      </p>
    </div>
    `,
  });

  if (error) return res.status(400).json({ error });
  res.status(200).json({ message: 'Email sent!', data });
}