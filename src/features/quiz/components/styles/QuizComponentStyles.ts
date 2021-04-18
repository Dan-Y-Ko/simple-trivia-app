import styled from "styled-components/native";
import { View } from "react-native";

import TextComponent from "../../../../ui/components/typography/TextComponent";
import HeaderComponent from "../HeaderComponent";

export const HeaderComponentStyled = styled(HeaderComponent)`
  justify-content: flex-start;
`;

export const TitleTextStyled = styled(TextComponent)`
  margin-top: ${(props) => props.theme.space[2]};
  width: 80%;
  text-align: center;
`;

export const QuizComponentContainerStyled = styled(View)`
  flex: 1;
  justify-content: center;
`;

export const TextComponentStyled = styled(TextComponent)`
  text-align: center;
`;
