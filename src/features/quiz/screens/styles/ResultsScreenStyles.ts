import styled from "styled-components/native";
import { View } from "react-native";

const ButtonWrapper = styled(View)`
  margin: ${(props) => props.theme.space[3]};
`;

export default ButtonWrapper;
