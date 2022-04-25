import { Keyboard, KeyboardAvoidingView, Text, TouchableWithoutFeedback } from 'react-native';
import { Container } from './styles';

/* Components */
import { Header } from '../../components/Header';

export function SignIn() {
  return (
    <Container>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView behavior="position" enabled>
          <>
            <Header />
          </>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </Container>
  )
}