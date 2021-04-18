import styled from "styled-components/native";
import { View } from "react-native";
import { Card, Paragraph } from "react-native-paper";

import { fonts } from "../../../../ui/theme/fonts";

export const CardContainer = styled(View)`
  align-items: center;
`;

export const CardStyled = styled(Card)`
  height: 200px;
  width: 90%;
  margin-top: ${(props) => props.theme.space[2]};
  margin-bottom: ${(props) => props.theme.space[2]};
`;

export const CardTitle = styled(Card.Title).attrs({
  titleStyle: {
    fontFamily: fonts.heading,
    fontWeight: "700",
  },
})``;

export const CardText = styled(Paragraph)`
  font-family: ${(props) => props.theme.fonts.body};
`;
