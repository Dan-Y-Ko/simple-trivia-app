import styled from "styled-components/native";
import { View } from "react-native";

interface TitleViewStyledProps {
  height: string;
}

const TitleViewStyled = styled(View)`
  align-items: center;
  height: ${(props: TitleViewStyledProps) => props.height}%;
  margin-top: ${(props) => props.theme.space[2]};
`;

export default TitleViewStyled;
