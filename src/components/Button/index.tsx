import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { Container, Title } from './styles';
import { FontAwesome5 } from '@expo/vector-icons';

interface Props extends TouchableOpacityProps {
  title: string;
  icon: React.ComponentProps<typeof FontAwesome5>["name"];
}

export function Button({ title, icon, ...rest }: Props) {
  return (
    <Container {...rest}>
      <FontAwesome5
        name={icon}
        color="#FFF"
        size={24}
      />
      <Title>
        {title}
      </Title>
    </Container>
  );
}