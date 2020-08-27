import React from 'react';

import {
  Modal,
  Container,
  Categoria,
  Uf,
  Label,
  Button,
  ButtonText,
  BoxEndereco,
  InputEndereco,
} from './styles';

interface modalFilterProps {
  modalVisible: Boolean;
  categoria: String;
  endereco: String;
  uf: String;
  setModalVisible: any;
  setCategoria: any;
  setEndereco: any;
  setUf: any;
}

const ModalFilter: React.FC<modalFilterProps> = ({
  categoria,
  uf,
  endereco,
  modalVisible,
  setModalVisible,
  setCategoria,
  setEndereco,
  setUf,
}) => {
  return (
    <Modal visible={modalVisible} animationType="slide">
      <Container>
        <Label>Filtrar por:</Label>
        <Categoria
          selectedValue={categoria}
          mode="dropdown"
          onValueChange={(itemValue, itemIndex) => setCategoria(itemValue)}
        >
          <Categoria.Item
            label="Selecione..."
            value=""
          />
          <Categoria.Item
            label="Serviços Domésticos"
            value="Serviços Domésticos"
          />
          <Categoria.Item
            label="Design e Criação"
            value="Design e Criação"
          />
          <Categoria.Item
            label="Engenharia e Arquitetura"
            value="Engenharia e Arquitetura"
          />
          <Categoria.Item
            label="Transporte e Frete"
            value="Transporte e Frete"
          />
          <Categoria.Item label="Serviços Locais" value="Serviços Locais" />
          <Categoria.Item
            label="Fotografia e AudioVisual"
            value="Fotografia e AudioVisual"
          />
          <Categoria.Item label="Idiomas" value="Idiomas" />
          <Categoria.Item label="Moda e Beleza" value="Moda e Beleza" />
          <Categoria.Item
            label="Web, Mobile e Software"
            value="Web, Mobile e Software"
          />
          <Categoria.Item label="Outros" value="Outros" />
        </Categoria>
        <BoxEndereco>
          <InputEndereco
            value={endereco}
            placeholder="Cidade"
            onChangeText={(e) => setEndereco(e)}
          />
          <Uf
            mode="dropdown"
            selectedValue={uf}
            onValueChange={(itemValue, itemIndex) => setUf(itemValue)}
          >
            <Uf.Item label="RO" value="RO" />
            <Uf.Item label="AC" value="AC" />
            <Uf.Item label="AM" value="AM" />
            <Uf.Item label="RR" value="RR" />
            <Uf.Item label="PA" value="PA" />
            <Uf.Item label="AP" value="AP" />
            <Uf.Item label="TO" value="TO" />
            <Uf.Item label="MA" value="MA" />
            <Uf.Item label="PI" value="PI" />
            <Uf.Item label="CE" value="CE" />
            <Uf.Item label="RN" value="RN" />
            <Uf.Item label="PB" value="PB" />
            <Uf.Item label="PE" value="PE" />
            <Uf.Item label="AL" value="AL" />
            <Uf.Item label="SE" value="SE" />
            <Uf.Item label="BA" value="BA" />
            <Uf.Item label="MG" value="MG" />
            <Uf.Item label="ES" value="ES" />
            <Uf.Item label="RJ" value="RJ" />
            <Uf.Item label="SP" value="SP" />
            <Uf.Item label="PR" value="PR" />
            <Uf.Item label="SC" value="SC" />
            <Uf.Item label="RS" value="RS" />
            <Uf.Item label="MS" value="MS" />
            <Uf.Item label="MT" value="MT" />
            <Uf.Item label="GO" value="GO" />
            <Uf.Item label="DF" value="DF" />
          </Uf>
        </BoxEndereco>
        <Button onPress={() => setModalVisible(false)}>
          <ButtonText>Ok</ButtonText>
        </Button>
      </Container>
    </Modal>
  );
};

export default ModalFilter;
