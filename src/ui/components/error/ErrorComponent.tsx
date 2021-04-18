import React from "react";

import TextComponent from "../typography/TextComponent";
import ErrorContainerStyled from "./styles/ErrorComponentStyles";

interface ErrorComponentProps {
  error: string;
}

const ErrorComponent = ({ error }: ErrorComponentProps): JSX.Element => (
  <ErrorContainerStyled>
    <TextComponent variant="error">{error}</TextComponent>
  </ErrorContainerStyled>
);

export default ErrorComponent;
