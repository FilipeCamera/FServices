import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
`;
export const Background = styled.ImageBackground`
  width: 100%;
  height: 100%;
  align-items: center;
`;

export const LogoDesc = styled.Image`
  position: absolute;
  top: 50px;
  left: 25px;
  height: 62%;
`;

export const ButtonRegister = styled.TouchableOpacity`
  width: 80%;
  height: 50px;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 80px;
  background: #E5E5E5;
  border-radius: 10px;
`;

export const RegisterText = styled.Text`
  font-family: 'Cairo_600SemiBold';
  color: #404040;
  font-size: 15px;
`;

export const Button = styled.TouchableOpacity`
  width: 80%;
  height: 50px;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 20px;
  background: #416CD9;
  border-radius: 10px;
`;

export const ButtonText = styled.Text`
  font-family: 'Cairo_600SemiBold';
  color: #FFF;
  font-size: 15px;
`;

