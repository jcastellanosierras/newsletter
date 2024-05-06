import WelcomeEmail from '@/emails/Welcome'
import { Resend } from 'resend'

export const resend = new Resend(import.meta.env.RESEND_API_KEY)
const audienceId = import.meta.env.RESEND_AUDIENCE_ID

if (!resend) {
  throw new Error('RESEND_API_KEY is required')
}

if (!audienceId) {
  throw new Error('RESEND_AUDIENCE_ID is required')
}

export const welcomeEmail = async (email: string) => {
  const { error } = await resend.emails.send({
    from: 'Jose <jose@josecastellano.net>',
    to: [email],
    subject: 'Hello World',
    react: WelcomeEmail({ url: `http://localhost:4321/gracias?email=${email}` })
  })

  if (error) {
    return false
  }

  return true
}

export const subscribeEmail = async (email: string) => {
  await resend.contacts.create({
    audienceId,
    email,
  })
}
