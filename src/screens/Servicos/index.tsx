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
  ShowIndicator
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

  async function filterData(categoria: String, uf: String, endereco: String) {
    const newData = data.filter((obj) => {
      if (
        (categoria != '' && endereco != '') ||
        (categoria != '' && uf != '')
      ) {
        return (
          (obj.categoria.toLowerCase() == categoria.toLowerCase() &&
            obj.cidade.toLowerCase() == endereco.toLowerCase()) ||
          (obj.categoria.toLowerCase() == categoria.toLowerCase() &&
            obj.uf.toLowerCase() == uf.toLowerCase())
        );
      }
      return (
        obj.categoria.toLowerCase() == categoria.toLowerCase() ||
        obj.cidade.toLowerCase() == endereco.toLowerCase() ||
        obj.uf.toLowerCase() == uf.toLowerCase()
      );   
    });
    setDataFilter(newData);
    console.log(newData);
  }

  function closeCategoria(
    categoria: String,
    uf: String,
    endereco: String
  ) {
    setCategoria('');
  }

  function closeEndereco(
    categoria: String,
    uf: String,
    endereco: String
  ) {
    setEndereco('');
  }

  function closeUf(categoria: String, uf: String, endereco: String) {
    setUf('');
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
        filterData={filterData}
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
              <TagsFilterButton
                onPress={() => closeCategoria(categoria, endereco, uf)}
              >
                <AntDesign name="closecircleo" size={16} color="#FFF" />
              </TagsFilterButton>
            ) : null}
          </BoxTags>
          <BoxTags>
            <TagsTitle>{endereco}</TagsTitle>
            {endereco !== '' ? (
              <TagsFilterButton
                onPress={() => closeEndereco(categoria, endereco, uf)}
              >
                <AntDesign name="closecircleo" size={16} color="#FFF" />
              </TagsFilterButton>
            ) : null}
          </BoxTags>
          <BoxTags>
            <TagsTitle>{uf}</TagsTitle>
            {uf !== '' ? (
              <TagsFilterButton
                onPress={() => closeUf(categoria, endereco, uf)}
              >
                <AntDesign name="closecircleo" size={16} color="#FFF" />
              </TagsFilterButton>
            ) : null}
          </BoxTags>
        </BoxTagsFilter>
        {dataFilter.length ? dataFilter.map((item, index) => {
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
        }) : <ShowIndicator size='large' color='#416CD9'/>}
      </Scroll>
      <AdMobBanner
        bannerSize="fullBanner"
        adUnitID="ca-app-pub-4288571417280592/4063638057"
        servePersonalizedAds
        onDidFailToReceiveAdWithError={(e) => console.log(e)}
        style={{ position: 'absolute', bottom: 0, elevation: 5 }}
      />
    </Container>
  );
};

export default Servicos;
