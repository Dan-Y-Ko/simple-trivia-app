import React from "react";

import TitleView from "./styles/HeaderComponentStyles";

interface HeaderComponentProps {
  children: React.ReactNode;
  height: string;
}

const HeaderComponent = ({ children, height }: HeaderComponentProps) => (
  <TitleView height={height}>{children}</TitleView>
);

export default HeaderComponent;
