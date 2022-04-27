/* Fazer login no app com a conta do google */
import React, { useState } from 'react';

import { Container } from './styles';
import { Button } from '../Button';

import * as AuthSession from 'expo-auth-session';
import { View, Text } from 'react-native';

import { User, UserProps } from '../User';

//tipagem
type AuthResponse = {
  params: {
    access_token: string;
  };
  type: string;
}

export function Form() {

  const [userData, setUserData] = useState<UserProps>({} as UserProps);

  //Função para quando o usuário solicita a autenticação (entrar com o google)
  async function handleGoogleSignIn() {
    try {
      const CLIENT_ID = "258293910829-0d709k5knm6ohi9qbp70tkmajuf2g4lr.apps.googleusercontent.com"; //chave que me identifica no GCP
      const REDIRECT_URI = "https://auth.expo.io/@iannrst/loginSocialApp";//URL de redirecionamento 
      const SCOPE = encodeURI("profile email"); //o que eu quero acessar do usuário
      const RESPONSE_TYPE = "token";//o que eu quero da requisição (espero pegar o TOKEN)

      const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`

      //Pega o type e o access_token
      const { type, params } = await AuthSession.startAsync({ authUrl }) as AuthResponse;
      console.log(type, params);

      //Verifica se o type é success, se for busco as informações do usuario passando o access_token
      if (type === 'success') {
        const response = await fetch(`https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${params.access_token}`);
        const user = await response.json();
        setUserData(user)
      }

    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Container>
      <Button
        icon="google"
        title="Entrar com o Google"
        onPress={handleGoogleSignIn}
      />
      {/*Fazer o componente User*/}
      <User user={userData} />

    </Container>
  )
}