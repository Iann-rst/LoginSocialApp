/* Componente para o Header da página SignIn */

import { Container, Title, SubTitle } from './styles';

export function Header() {
  return (
    <Container>
      <Title>
        Acessar {`\n`}
        sua conta
      </Title>

      <SubTitle>
        Utilize uma das opções {`\n`}
        para acessar mais rápido
      </SubTitle>
    </Container>
  )
}