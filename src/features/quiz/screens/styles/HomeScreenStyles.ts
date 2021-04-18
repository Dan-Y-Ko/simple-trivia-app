import styled from "styled-components/native";
import { View } from "react-native";

import ButtonComponent from "../../../../ui/components/button/ButtonComponent";
import TextComponent from "../../../../ui/components/typography/TextComponent";

export const TitleTextStyled = styled(TextComponent)`
  margin-top: ${(props) => props.theme.space[2]};
`;

export const BodyStyled = styled(View)`
  align-items: center;
  justify-content: space-between;
  height: 33%;
`;

export const QuizButtoWrapperStyled = styled(View)`
  align-items: center;
  justify-content: flex-end;
  height: 33%;
`;

export const StartQuizButtonStyled = styled(ButtonComponent)`
  width: 90%;
  margin-bottom: ${(props) => props.theme.space[4]};
`;
