import React from "react";

import colors from "../../../ui/theme/colors";
import {
  ButtonComponentStyled,
  ButtonGroupContainer,
} from "./styles/AnswerButtonGroupStyles";

interface AnswerButtonGroupProps {
  handleAnswerPress: (i: number) => void;
}

const AnswerButtonGroup = ({ handleAnswerPress }: AnswerButtonGroupProps) => {
  const ButtonArray = ["True", "False"];

  const setButtonColor = (button: string) => {
    let color;

    if (button === "True") {
      color = colors.brand.primary;
    } else {
      color = colors.ui.error;
    }

    return color;
  };

  const renderButtonGroup = () =>
    ButtonArray.map((button, i) => (
      <ButtonComponentStyled
        key={button}
        mode="contained"
        color={setButtonColor(button)}
        onPress={() => handleAnswerPress(i)}
      >
        {button}
      </ButtonComponentStyled>
    ));

  return <ButtonGroupContainer>{renderButtonGroup()}</ButtonGroupContainer>;
};

export default AnswerButtonGroup;
