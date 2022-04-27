/*Componente User (Componente para dados do usuário: nome, email e foto) */

import { Container, Email, Name, Avatar } from './styles'

export type UserProps = {
  name: string;
  email: string;
  picture: string;
}

type Props = {
  user: UserProps;
}

export function User({ user }: Props) {
  return (
    <Container>
      <Avatar
        source={{ uri: user.picture }}
      />

      <Name>{user.name}</Name>
      <Email>{user.email}</Email>
    </Container>
  )
}