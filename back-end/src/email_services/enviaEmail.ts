import { transportadorEmail } from './transportadorEmail'

export async function enviaEmail(to: string, subject: string, html: string) {
  try {
    await transportadorEmail.sendMail({
      from: process.env.EMAIL_USER,
      to,
      subject,
      html,
    })
    console.log(`E-mail enviado para ${to}`)
  } catch (err) {
    console.error('Erro ao enviar e-mail:', err)
    throw new Error('Erro ao enviar e-mail')
  }
}
