import styled from "styled-components/native";
import { View } from "react-native";

const ButtonWrapperStyled = styled(View)`
  margin: ${(props) => props.theme.space[3]};
`;

export default ButtonWrapperStyled;
