import nodemailer from 'nodemailer'
import { MailAdapter, SendMailData } from "../mail-adapter"

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "1ecf4dccf7a4a0",
    pass: "c43c72a4f7dc4b"
  }
});

export class NodemailerMailAdapter implements MailAdapter {


  async sendmail ({subject, body}: SendMailData) {
    await transport.sendMail({
      from: 'Equipe Feedget <oi@feedget.com>',
      to: 'Leandro Guina <guina86@gmail.com>',
      subject,
      html: body
    })
  }
}