import styled from "styled-components/native";
import { View } from "react-native";
import { ActivityIndicator } from "react-native-paper";

import colors from "../../../theme/colors";

export const LoadingContainer = styled(View)`
  flex: 1;
  justify-content: center;
`;

export const LoadingSpinner = styled(ActivityIndicator).attrs({
  color: colors.brand.primary,
})``;
