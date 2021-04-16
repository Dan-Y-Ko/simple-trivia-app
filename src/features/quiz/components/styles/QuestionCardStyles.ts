import styled from "styled-components/native";
import { View } from "react-native";
import { Card } from "react-native-paper";

export const CardContainer = styled(View)`
  align-items: center;
`;

export const CardStyled = styled(Card)`
  height: 200px;
  width: 90%;
  margin-top: ${(props) => props.theme.space[2]};
  margin-bottom: ${(props) => props.theme.space[2]};
`;

export const CardTitle = styled(Card.Title)`
  font-family: ${(props) => props.theme.fonts.heading};
  font-weight: ${(props) => props.theme.fontWeights.bold};
`;
