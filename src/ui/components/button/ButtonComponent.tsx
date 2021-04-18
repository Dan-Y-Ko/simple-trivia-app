import React from "react";
import { Button } from "react-native-paper";

interface ButtonComponentProps {
  mode: "text" | "outlined" | "contained";
  onPress: () => void;
  style?: any;
  color: string;
  children: React.ReactNode;
}

const ButtonComponent = ({
  mode,
  onPress,
  children,
  style,
  color,
}: ButtonComponentProps): JSX.Element => (
  <Button mode={mode} onPress={onPress} style={style} color={color}>
    {children}
  </Button>
);

export default ButtonComponent;
