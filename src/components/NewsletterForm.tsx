
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export default function NewsletterForm() {
  return (
    <form method="post">
      <Input type='text' name='name' id='name' placeholder='Escribe tu nombre...' />
      <Input type='email' name='email' id='email' placeholder='Escribe tu email...' />
      <Button type='submit'>Suscribirme</Button>
    </form>
  )
}