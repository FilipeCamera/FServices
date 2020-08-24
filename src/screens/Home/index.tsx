import React from 'react';

import {
  Background,
  Container,
  LogoDesc,
  ButtonRegister,
  RegisterText,
  Button,
  ButtonText
} from './styles';

import {useNavigation} from '@react-navigation/native';

import backService from '../../assets/backService.jpg';
import descLogo from '../../assets/LogoDesc.png';

export default function Home() {
  const navigation = useNavigation();
  return (
    <Container>
      <Background source={backService}>
        <LogoDesc source={descLogo} />
        <ButtonRegister onPress={() => navigation.navigate('Cadastrar')}>
          <RegisterText>Cadastrar Serviço</RegisterText>
        </ButtonRegister>
        <Button onPress={() => navigation.navigate('Servicos')}>
          <ButtonText>Procurar Serviços</ButtonText>
        </Button>
      </Background>
    </Container>
  );
}
