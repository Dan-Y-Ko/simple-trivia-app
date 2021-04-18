import styled from "styled-components/native";
import { View } from "react-native";
import { Card, Paragraph } from "react-native-paper";

export const CardContainerStyled = styled(View)`
  align-items: center;
`;

export const CardStyled = styled(Card)`
  height: 200px;
  width: 90%;
  margin-top: ${(props) => props.theme.space[2]};
  margin-bottom: ${(props) => props.theme.space[2]};
`;

export const CardTextContainerStyled = styled(View)`
  align-items: center;
`;

export const CardTextStyled = styled(Paragraph)`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.title};
  padding: ${(props) => props.theme.space[1]};
`;
