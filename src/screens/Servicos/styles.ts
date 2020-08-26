import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const Scroll = styled.ScrollView``;

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

export const BoxCard = styled.View`
  width: 90%;
  flex-direction: column;
  align-items: center;
  background: #f2f2f2;
  border-radius: 10px;
  margin: 20px 0 10px;
  elevation: 1px;
`;

export const CardTitle = styled.Text`
  width: 90%;
  font-family: 'Cairo_700Bold';
  font-size: 16px;
  color: #4D4D4D;
  margin: 5px 0;
`;
export const CardBoxName = styled.View`
  width: 90%;
  flex-direction: row;
  align-items: center;
`;

export const CardName = styled.Text`
  font-family: 'Cairo_400Regular';
  font-size: 14px;
`;

export const CardNameDesc = styled.Text`
  font-family: 'Cairo_300Light';
  font-size: 14px;
  margin-left: 5px;
`;

export const CardBoxPreco = styled.View`
  width: 90%;
  flex-direction: row;
  align-items: center;
`;

export const CardBoxTags = styled.View`
  width: 90%;
  flex-direction: row;
  margin: 10px 0;
`;

export const PrecoTitle  = styled.Text`
  font-family: 'Cairo_400Regular';
  font-size: 14px;
`;

export const PrecoDesc  = styled.Text`
  font-family: 'Cairo_300Light';
  font-size: 14px;
  margin-left: 5px;
`;

export const CardBoxLocation  = styled.View`
  width: 90%;
  flex-direction: row;
  align-items: center;
`;

export const LocationTitle = styled.Text`
  font-family: 'Cairo_400Regular';
  font-size: 14px;
`;

export const LocationDesc = styled.Text`
  font-family: 'Cairo_300Light';
  font-size: 14px;
  margin-left: 5px;
`;

export const BoxTags = styled.View`
  background: #666666;
  border-radius: 5px;
  padding: 5px;
  margin-right: 5px;
`;

export const TagsTitle = styled.Text`
  color: #FFF;
  font-family: 'Cairo_400Regular';
  font-size: 14px;
`;

export const ButtonWhats = styled.TouchableOpacity`
  width: 90%;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  height: 46px;
  width: 90%;
  border-radius: 10px;
  background: #4A992E;
  margin: 10px 0;
`;


export const TextWhats = styled.Text`
  font-family: 'Cairo_400Regular';
  font-size: 15px;
  color: #FFF;
`;