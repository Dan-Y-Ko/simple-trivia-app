import React from "react";

import TitleViewStyled from "./styles/HeaderComponentStyles";

interface HeaderComponentProps {
  children: React.ReactNode;
  height: string;
}

const HeaderComponent = ({
  children,
  height,
}: HeaderComponentProps): JSX.Element => (
  <TitleViewStyled height={height}>{children}</TitleViewStyled>
);

export default HeaderComponent;
