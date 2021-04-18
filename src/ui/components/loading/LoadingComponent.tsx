import React from "react";

import {
  LoadingContainerStyled,
  LoadingSpinnerStyled,
} from "./styles/LoadingComponentStyles";

const LoadingComponent = (): JSX.Element => (
  <LoadingContainerStyled>
    <LoadingSpinnerStyled size={50} animating />
  </LoadingContainerStyled>
);

export default LoadingComponent;
