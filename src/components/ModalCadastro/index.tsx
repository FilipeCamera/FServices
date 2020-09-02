import React, { useState } from 'react';

import PublishBanner from '../PublishModal/PublishBanner';

import {
  Modal,
  Container,
  ShowIndicator,
  Title,
  Desc,
  Button,
  ButtonText,
} from './styles';

interface ModalCadProps {
  visible: Boolean;
  setVisible: any;
  completeRegister: Boolean;
  setCompleteRegister: any;
}

const ModalCadastro: React.FC<ModalCadProps> = ({
  visible,
  setVisible,
  completeRegister,
  setCompleteRegister
}) => {
  return (
    <Modal visible={visible} animationType="fade">
      <Container>
        <Title>Cadastro</Title>
        {completeRegister === true ? (
          <Desc>Cadastro feito com sucesso!</Desc>
        ) : (
          <ShowIndicator size="large" color="#416CD9" />
        )}
        <Button
          onPress={() => {
            PublishBanner();
            setVisible(false);
            setCompleteRegister(false);
          }}
        >
          <ButtonText>Ok</ButtonText>
        </Button>
      </Container>
    </Modal>
  );
};

export default ModalCadastro;
