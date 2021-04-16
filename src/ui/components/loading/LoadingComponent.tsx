import React from "react";

import {
  LoadingContainer,
  LoadingSpinner,
} from "./styles/LoadingComponentStyles";

const LoadingComponent = () => (
  <LoadingContainer>
    <LoadingSpinner size={50} animating />
  </LoadingContainer>
);

export default LoadingComponent;
