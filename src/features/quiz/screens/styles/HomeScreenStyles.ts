import styled from "styled-components/native";
import { View } from "react-native";

import ButtonComponent from "../../../../ui/components/button/ButtonComponent";

export const HomeScreenWrapper = styled(View)`
  height: 100%;
`;

export const Title = styled(View)`
  align-items: center;
  height: 33%;
`;

export const Body = styled(View)`
  align-items: center;
  justify-content: space-between;
  height: 33%;
`;

export const QuizButtoWrapper = styled(View)`
  align-items: center;
  justify-content: flex-end;
  height: 33%;
`;

export const StartQuizButton = styled(ButtonComponent)`
  width: 90%;
  margin-bottom: 25px;
`;
