import React from "react";

import ButtonStyled from "./styles/ButtonComponentStyles";

interface ButtonComponentProps {
  mode: "text" | "outlined" | "contained";
  onPress: () => void;
  children: React.ReactNode;
  style?: any;
}

const ButtonComponent = ({
  mode,
  onPress,
  children,
  style,
}: ButtonComponentProps) => (
  <ButtonStyled mode={mode} onPress={onPress} style={style}>
    {children}
  </ButtonStyled>
);

export default ButtonComponent;
