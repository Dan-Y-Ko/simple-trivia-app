import styled from "styled-components/native";
import { View } from "react-native";

import TextComponent from "../../../../ui/components/typography/TextComponent";
import HeaderComponent from "../HeaderComponent";

export const QuizComponentContainerStyle = styled(View)`
  flex: 1;
  justify-content: center;
`;

export const HeaderComponentStyled = styled(HeaderComponent)`
  justify-content: flex-start;
`;

export const TitleText = styled(TextComponent)`
  margin-top: ${(props) => props.theme.space[2]};
  width: 90%;
  text-align: center;
`;

export const TextComponentStyled = styled(TextComponent)`
  text-align: center;
`;
