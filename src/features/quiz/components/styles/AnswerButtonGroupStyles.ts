import styled from "styled-components/native";
import { View } from "react-native";

import ButtonComponent from "../../../../ui/components/button/ButtonComponent";

export const ButtonGroupContainerStyled = styled(View)`
  flex-direction: row;
  justify-content: center;
`;

export const ButtonComponentStyled = styled(ButtonComponent)`
  width: ${(props) => props.theme.sizes[4]};
  margin: ${(props) => props.theme.space[2]};
`;
