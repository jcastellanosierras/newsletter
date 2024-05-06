import { Html } from '@react-email/html';
import { Button } from '@react-email/button';
import { Preview } from '@react-email/preview';
import { Text } from '@react-email/text';

interface Props {
  url: string
}

function WelcomeEmail({ url }: Props) {
  return (
    <Html lang="es">
      <Preview>Confirma tu suscripción a la newsletter de Jose Castellano</Preview>

      <Text>Primero de todo, bienvenido!</Text>
      <Text>Te falta un paso para pertenecer a esta lista de correo.</Text>
      <Text>Pulsa en el botón de abajo, para confirmar tu suscripción y empezar a recibir correos de esta Newsletter.</Text>

      <Button href={url}>Confirma tu suscripción</Button>
    </Html>
  );
}

export default WelcomeEmail;