import React, {useState} from 'react';

import { Container, SearchBar, TagsView, TextTags, ButtonTag } from './styles';

import { AntDesign } from '@expo/vector-icons';

import Tags from 'react-native-tags';

export default function Servicos() {
  const [filter, setFilter] = useState([]);

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
              <AntDesign name='closecircleo' size={16} color='#FFF'/>
            </ButtonTag>
          </TagsView>
        )}
      />
      <SearchBar placeholder="Pesquisar..." />
    </Container>
  );
}
