import React from "react";
import { Button } from "react-native-paper";

interface ButtonComponentProps {
  mode: "text" | "outlined" | "contained";
  onPress: () => void;
  children: React.ReactNode;
  style?: any;
  color: string;
}

const ButtonComponent = ({
  mode,
  onPress,
  children,
  style,
  color,
}: ButtonComponentProps) => (
  <Button mode={mode} onPress={onPress} style={style} color={color}>
    {children}
  </Button>
);

export default ButtonComponent;
