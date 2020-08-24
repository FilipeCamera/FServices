import React, { useState } from 'react';

import {
  Container,
  Title,
  Label,
  Categoria,
  Input,
  ButtonTags,
  TextTags,
  BoxValor,
  ValorInput,
  BoxCity,
  CityInput,
  Uf,
} from './styles';

import Tags from 'react-native-tags';

export default function Cadastrar() {
  const [categoria, setCategoria] = useState('Serviço Geral');
  const [uf, setUf] = useState('SP');
  return (
    <Container
      contentContainerStyle={{
        flexGrow: 1,
        alignItems: 'center',
        paddingBottom: 50,
      }}
    >
      <Title>Cadastrar</Title>
      <Label>Categoria:</Label>
      <Categoria selectedValue={categoria} mode="dropdown">
        <Categoria.Item label="Serviço Geral" value="Serviço Geral" />
        <Categoria.Item label="teste" value="teste" />
        <Categoria.Item label="teste" value="teste" />
      </Categoria>
      <Input placeholder="Nome" />
      <Input placeholder="Nome do serviço" />
      <Input placeholder="Whatsapp" />
      <Tags
        style={{ width: '90%', marginTop: 20 }}
        initialText=""
        textInputProps={{
          placeholder: 'Diga a sua experiência',
        }}
        initialTags={['Exemplo 1', 'Exemplo 2']}
        onChangeTags={(tags: any) => console.log(tags)}
        onTagPress={(index: any, tagLabel: any, event: any, deleted: any) =>
          console.log(
            index,
            tagLabel,
            event,
            deleted ? 'deleted' : 'not deleted'
          )
        }
        containerStyle={{ justifyContent: 'center' }}
        inputStyle={{ backgroundColor: 'white' }}
        renderTag={({ tag, index, onPress, deleteTagOnPress, readonly }) => (
          <ButtonTags key={`${tag}-${index}`} onPress={onPress}>
            <TextTags>{tag}</TextTags>
          </ButtonTags>
        )}
      />
      <Label>Valor do serviço:</Label>
      <BoxValor>
        <ValorInput placeholder="De" />
        <ValorInput placeholder="Até" />
      </BoxValor>
      <BoxCity>
        <CityInput placeholder="Cidade" />
        <Uf mode="dropdown" selectedValue={uf}>
          <Uf.Item label="SP" value="SP" />
          <Uf.Item label="RJ" value="RJ" />
          <Uf.Item label="BA" value="BA" />
          <Uf.Item label="MG" value="MG" />
          <Uf.Item label="BH" value="BH" />
          <Uf.Item label="SC" value="SC" />
          <Uf.Item label="PR" value="PR" />
          <Uf.Item label="BA" value="BA" />
          <Uf.Item label="MG" value="MG" />
          <Uf.Item label="BH" value="BH" />
        </Uf>
      </BoxCity>
    </Container>
  );
}
