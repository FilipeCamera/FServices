import styled from 'styled-components/native';

export const Container = styled.ScrollView``;

export const SearchBar = styled.TextInput`
  height: 40px;
  width: 90%;
  background: #F2F2F2;
  border-radius: 20px;
  border: 1px solid #C4C4C4;
  margin: 10px 0;
  padding-left: 20px;
  font-family: 'Cairo_400Regular';
  font-size: 15px;
  color: #808080;
`;

export const TagsView = styled.View`
  margin: 5px;
  padding: 5px;
  background: #808080;
  border-radius: 5px;
  flex-direction: row;
  align-items: center;
`;

export const TextTags = styled.Text`
  font-family: 'Cairo_400Regular';
  font-size: 15px;
  color: #fff;
`;

export const ButtonTag = styled.TouchableOpacity`
  margin-left: 8px;
`;