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
  top: 30px;
  left: 25px;
`;

export const ButtonRegister = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 35px;
`;

export const RegisterText = styled.Text`
  font-family: 'Cairo_600SemiBold';
  color: #FFFFFF;
  font-size: 15px;
  text-decoration: underline;
`;

export const Button = styled.TouchableOpacity`
  width: 80%;
  height: 50px;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 80px;
  background: #E5E5E5;
  border-radius: 5px;
`;

export const ButtonText = styled.Text`
  font-family: 'Cairo_600SemiBold';
  color: #404040;
  font-size: 15px;
`;

