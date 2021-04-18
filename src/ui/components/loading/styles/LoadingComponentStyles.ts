import styled from "styled-components/native";
import { View } from "react-native";
import { ActivityIndicator } from "react-native-paper";

import colors from "../../../theme/colors";

export const LoadingContainerStyled = styled(View)`
  flex: 1;
  justify-content: center;
`;

export const LoadingSpinnerStyled = styled(ActivityIndicator).attrs({
  color: colors.brand.primary,
})``;
