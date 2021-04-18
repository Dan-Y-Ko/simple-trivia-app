import styled from "styled-components/native";
import { Card, Paragraph } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { fonts } from "../../../../ui/theme/fonts";
import type { Theme } from "../../../../ui/theme";

export interface IconProps {
  correct: boolean;
  theme: Theme;
}

export const IconStyled = styled(MaterialCommunityIcons)`
  color: ${(props: IconProps) =>
    props.correct
      ? props.theme.colors.ui.success
      : props.theme.colors.ui.error};
`;

export const CardStyled = styled(Card)`
  margin: ${(props) => props.theme.space[2]};
`;

export const CardTitleStyled = styled(Card.Title).attrs({
  titleStyle: {
    fontFamily: fonts.heading,
    fontWeight: "700",
  },
})``;

export const CardContentStyled = styled(Card.Content)`
  flex-direction: row;
  align-items: center;
`;

export const CardTextStyled = styled(Paragraph)`
  margin-left: ${(props) => props.theme.space[2]};
  width: 90%;
  font-family: ${(props) => props.theme.fonts.body};
`;
