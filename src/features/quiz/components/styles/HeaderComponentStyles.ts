import styled from "styled-components/native";
import { View } from "react-native";

interface TitleViewProps {
  height: string;
}

const TitleView = styled(View)`
  align-items: center;
  height: ${(props: TitleViewProps) => props.height}%;
  margin-top: ${(props) => props.theme.space[2]};
`;

export default TitleView;
