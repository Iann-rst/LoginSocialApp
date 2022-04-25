/* Fazer login no app com a conta do google */
import React from 'react';

import { Container } from './styles';
import { Button } from '../Button';

export function Form() {
  return (
    <Container>
      <Button
        icon="google"
        title="Entrar com o Google"
      />
    </Container>
  )
}