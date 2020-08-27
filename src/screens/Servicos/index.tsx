import React, { useState, useEffect } from 'react';

import { AdMobBanner } from 'expo-ads-admob';

import {
  Container,
  Scroll,
  BoxSearchFilter,
  SearchBar,
  ButtonFilter,
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
  BoxTagsFilter,
  TagsFilterButton,
} from './styles';

import { AntDesign, FontAwesome } from '@expo/vector-icons';

import * as Firebase from 'firebase';

import { getServicos } from '../../database/api';
import ModalFilter from '../../components/ModalFilter';

const Servicos: React.FC = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [categoria, setCategoria] = useState('');
  const [uf, setUf] = useState('');
  const [endereco, setEndereco] = useState('');
  const [textSearch, setTextSearch] = useState('');
  const [data, setData] = useState<Firebase.firestore.DocumentData[]>([]);
  const [dataFilter, setDataFilter] = useState<
    Firebase.firestore.DocumentData[]
  >([]);
  useEffect(() => {
    async function loadServico() {
      await getServicos(setDataFilter, setData);
    }
    loadServico();
    console.log(data);
  }, []);
  function search(e: String) {
    setDataFilter(
      data.filter((p) => p.nomeServico.toLowerCase().includes(e.toLowerCase()))
    );
  }
  return (
    <Container>
      <ModalFilter
        categoria={categoria}
        setCategoria={setCategoria}
        uf={uf}
        setUf={setUf}
        endereco={endereco}
        setEndereco={setEndereco}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
      <Scroll
        contentContainerStyle={{
          flexGrow: 1,
          backgroundColor: '#FFF',
          alignItems: 'center',
          paddingBottom: 80,
        }}
        showsVerticalScrollIndicator={false}
      >
        <BoxSearchFilter>
          <SearchBar
            value={textSearch}
            placeholder="Pesquisar..."
            onChangeText={(e) => {
              search(e);
              setTextSearch(e);
            }}
            clearTextOnFocus={true}
            onFocus={() => {
              setTextSearch('');
              search('');
            }}
          />
          <ButtonFilter onPress={() => setModalVisible(true)}>
            <AntDesign name="filter" size={20} color="#666666" />
          </ButtonFilter>
        </BoxSearchFilter>
        <BoxTagsFilter>
          <BoxTags>
            <TagsTitle>{categoria}</TagsTitle>
            {categoria !== '' ? (
              <TagsFilterButton onPress={() => setCategoria('')}>
                <AntDesign name="closecircleo" size={16} color='#FFF'/>
              </TagsFilterButton>
            ) : null}
          </BoxTags>
          <BoxTags>
            <TagsTitle>{endereco}</TagsTitle>
            {endereco !== '' ? (
              <TagsFilterButton onPress={() => setEndereco('')}>
                <AntDesign name="closecircleo" size={16} color='#FFF'/>
              </TagsFilterButton>
            ) : null}
          </BoxTags>
          <BoxTags>
            <TagsTitle>{uf}</TagsTitle>
            {uf !== '' ? (
              <TagsFilterButton onPress={() => setUf('')}>
                <AntDesign name="closecircleo" size={16} color='#FFF'/>
              </TagsFilterButton>
            ) : null}
          </BoxTags>
        </BoxTagsFilter>
        {dataFilter.map((item, index) => {
          return (
            <BoxCard key={index}>
              <CardTitle>{item.nomeServico}</CardTitle>
              <CardBoxName>
                <CardName>Nome:</CardName>
                <CardNameDesc>{item.nome}</CardNameDesc>
              </CardBoxName>
              <CardBoxPreco>
                <PrecoTitle>Valor do serviço:</PrecoTitle>
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
                {item.tagsData.map((item: any, index: any) => {
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
      </Scroll>
      <AdMobBanner
        bannerSize="fullBanner"
        adUnitID="ca-app-pub-3940256099942544/6300978111"
        servePersonalizedAds
        onDidFailToReceiveAdWithError={(e) => console.log(e)}
        style={{ position: 'absolute', bottom: 0, elevation: 5 }}
      />
    </Container>
  );
};

export default Servicos;
