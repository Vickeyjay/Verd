import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const AUDIENCE_ID = process.env.RESEND_AUDIENCE_ID;

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { email } = req.body;
  if (!email) return res.status(400).json({ error: 'Email is required' });

  // 1. Check if email already exists in Resend Audience
  const contactsRes = await fetch(`https://api.resend.com/audiences/${AUDIENCE_ID}/contacts`, {
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
    },
  });

  const contactsData = await contactsRes.json();

  if (!contactsRes.ok) return res.status(400).json({ error: 'Could not verify email.' });

  const alreadySubscribed = contactsData?.data?.some(
    (contact) => contact.email.toLowerCase() === email.toLowerCase()
  );

  if (alreadySubscribed) {
    return res.status(409).json({ error: 'This email is already on the waitlist!' });
  }

  // 2. Add contact to Resend Audience
  await fetch(`https://api.resend.com/audiences/${AUDIENCE_ID}/contacts`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, unsubscribed: false }),
  });

  // 3. Send confirmation email
  const { data, error } = await resend.emails.send({
    from: 'Marv from Verd <marv@verdfinance.com>',
    to: [email],
    subject: "You're on the Verd waitlist!",
    html: `
        <div style="margin:0;padding:0;font-family:Arial,Helvetica,sans-serif;">
    <table width="100%" cellpadding="0" cellspacing="0" border="0" style="padding:30px 0;">
        <tr>
            <td align="center">
                <table width="600" cellpadding="0" cellspacing="0" border="0"
                    style="border-radius:12px;overflow:hidden;background-color:#f5f5f5;">
                    <tr>
                        <td>
                            <img src="https://verdfinance.com/verd-mail.png" alt="Verd" width="600"
                                style="display:block;width:100%;max-width:600px;border:0;">
                        </td>
                    </tr>
                    <tr>
                        <td style="padding:40px 40px 20px 40px;color:#4b4b4b;font-size:18px;line-height:1.9;">
                            <p style="margin:0 0 25px 0;">Hi there,<br>Welcome to Verd.</p>
                            <p style="margin:0 0 25px 0;">We're building a simpler way to save and grow your money through stable digital assets, without the complexity that often comes with crypto.</p>
                            <p style="margin:0 0 25px 0;">You've successfully joined the waitlist and we'll keep you updated as we get closer to launch.</p>
                            <p style="margin:0 0 25px 0;">In the meantime, follow us on our social platforms to stay up to date with our progress and be the first to hear about new updates.</p>
                            <p style="margin:0;">Thanks for being early.<br>The Verd Team 💚</p>
                        </td>
                    </tr>
                    <tr>
                        <td align="center" style="padding:25px 20px 15px 20px;">
                            <a href="https://www.linkedin.com/company/verd-finance/" style="text-decoration:none;margin:0 8px;">
                                <img src="https://verdfinance.com/linkedin-mail.png" alt="LinkedIn" width="28" style="display:inline-block;border:0;">
                            </a>
                            <a href="https://x.com/verdfinance" style="text-decoration:none;margin:0 8px;">
                                <img src="https://verdfinance.com/x-mail.png" alt="X" width="28" style="display:inline-block;border:0;">
                            </a>
                            <a href="https://www.instagram.com/verdfinance?igsh=NmUzMDExZ2xzdHR4" style="text-decoration:none;margin:0 8px;">
                                <img src="https://verdfinance.com/insta-mail.png" alt="Instagram" width="28" height="30" style="display:inline-block;border:0;">
                            </a>
                            <a href="https://www.facebook.com/share/1Gfsy99SZP/" style="text-decoration:none;margin:0 8px;">
                                <img src="https://verdfinance.com/facebook-mail.png" alt="Facebook" width="28" style="display:inline-block;border:0;">
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td align="center" style="padding:0 40px 35px 40px;color:#7a7a7a;font-size:12px;line-height:1.8;">
                            <p style="margin:0;">You're receiving this email because you signed up for our waitlist.</p>
                            <p style="margin:0;">If you no longer wish to receive these emails,
                                <a href="#" style="color:#28a745;text-decoration:none;">please unsubscribe here</a>
                            </p>
                            <p style="margin-top:8px;">Copyright © 2026 Verd. All rights reserved.</p>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</div>
    `,
  });

  if (error) return res.status(400).json({ error });
  res.status(200).json({ message: 'Email sent!', data });
}