import styled from "styled-components/native";
import { View } from "react-native";

const ScoreContainer = styled(View)`
  align-items: center;
  margin-top: ${(props) => props.theme.space[2]};
`;

export default ScoreContainer;
