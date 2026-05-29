import { Resend } from 'resend';

const resend = new Resend('re_MtkvXPbd_AHSV6vQcvCytPcJwhKHEepk1');

(async function () {
  const { data, error } = await resend.emails.send({
    from: 'Marv <onbording@verd>',
    to: ['vickeyjay93@gmail.com'],
    subject: 'Hello World',
    html: '<strong>It works!</strong>',
  });

  if (error) {
    return console.error({ error });
  }

  console.log({ data });
})();