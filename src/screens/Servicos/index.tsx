import React, { useState, useEffect } from 'react';

import { AdMobBanner } from 'expo-ads-admob';

import {
  Container,
  SearchBar,
  TagsView,
  TextTags,
  ButtonTag,
  BoxCard,
  CardTitle,
  CardBoxName,
  CardName,
  CardNameDesc,
  CardBoxPreco,
  PrecoTitle,
  PrecoDesc,
  CardBoxLocation,
  LocationTitle,
  LocationDesc,
  CardBoxTags,
  BoxTags,
  TagsTitle,
  ButtonWhats,
  TextWhats,
} from './styles';

import { AntDesign, FontAwesome } from '@expo/vector-icons';

import * as Firebase from 'firebase';

import Tags from 'react-native-tags';

import { getServicos } from '../../database/api';

export default function Servicos() {
  const [filter, setFilter] = useState([]);
  const [data, setData] = useState<Firebase.firestore.DocumentData[]>([]);

  useEffect(() => {
    async function loadServico() {
      await getServicos(setData);
    }
    loadServico();
    console.log(data);
  }, []);

  return (
    <Container
      contentContainerStyle={{
        flexGrow: 1,
        backgroundColor: '#FFF',
        alignItems: 'center',
      }}
    >
      <Tags
        style={{ width: '90%', marginTop: 20, flexDirection: 'row' }}
        initialText=""
        textInputProps={{
          placeholder: 'Filtrar por',
        }}
        initialTags={filter}
        onChangeTags={(tags: any) => setFilter(tags)}
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
          <TagsView key={`${tag}-${index}`}>
            <TextTags>{tag}</TextTags>
            <ButtonTag onPress={onPress}>
              <AntDesign name="closecircleo" size={16} color="#FFF" />
            </ButtonTag>
          </TagsView>
        )}
      />
      <SearchBar placeholder="Pesquisar..." />
      <AdMobBanner
        bannerSize="fullBanner"
        adUnitID="ca-app-pub-3940256099942544/6300978111"
        servePersonalizedAds
        onDidFailToReceiveAdWithError={(e) => console.log(e)}
        style={{ position: 'absolute', bottom: 0 }}
      />
      {data.map((item, index) => {
        return (
          <BoxCard key={index}>
            <CardTitle>{item.nomeServico}</CardTitle>
            <CardBoxName>
              <CardName>Nome:</CardName>
              <CardNameDesc>{item.nome}</CardNameDesc>
            </CardBoxName>
            <CardBoxPreco>
              <PrecoTitle>Valor do servico:</PrecoTitle>
              <PrecoDesc>
                R${item.valorInicial} - R${item.valorFinal}
              </PrecoDesc>
            </CardBoxPreco>
            <CardBoxLocation>
              <LocationTitle>Localização:</LocationTitle>
              <LocationDesc>
                {item.cidade}, {item.uf}
              </LocationDesc>
            </CardBoxLocation>
            <CardBoxTags>
              {item.tagsData.map((item, index) => {
                return (
                  <BoxTags key={index}>
                    <TagsTitle>{item}</TagsTitle>
                  </BoxTags>
                );
              })}
            </CardBoxTags>
            <ButtonWhats>
              <FontAwesome name="whatsapp" size={25} color="#FFF" />
              <TextWhats>Chamar no Whatsapp</TextWhats>
            </ButtonWhats>
          </BoxCard>
        );
      })}
    </Container>
  );
}
