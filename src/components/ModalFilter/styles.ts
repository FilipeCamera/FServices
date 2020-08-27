import styled from 'styled-components/native';

export const Modal = styled.Modal`
  background: #fff;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Categoria = styled.Picker`
  width: 90%;
  height: 60px;
  background: #f2f2f2;
  color: #808080;
  margin: 10px 0 0;
`;

export const Uf = styled.Picker`
  width: 30%;
  height: 60px;
  background: #f2f2f2;
  color: #808080;
`;

export const Button = styled.TouchableOpacity`
  background: #416CD9;
  width: 60px;
  height: 60px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  font-family: 'Cairo_600SemiBold';
  color: #FFF;
`;

export const Label = styled.Text`
  font-family: 'Cairo_600SemiBold';
  font-size: 18px;
  color: #141414;
`;

export const BoxEndereco = styled.View`
  width: 90%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 10px 0 20px;
`;

export const InputEndereco = styled.TextInput`
  background: #f2f2f2;
  width: 65%;
  height: 60px;
  color: #808080;
  padding-left: 10px;
`;
