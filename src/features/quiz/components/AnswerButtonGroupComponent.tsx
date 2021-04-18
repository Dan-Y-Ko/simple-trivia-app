import React from "react";

import colors from "../../../ui/theme/colors";
import {
  ButtonGroupContainerStyled,
  ButtonComponentStyled,
} from "./styles/AnswerButtonGroupStyles";

interface AnswerButtonGroupComponentProps {
  handleAnswerPress: (i: number) => void;
}

const AnswerButtonGroupComponent = ({
  handleAnswerPress,
}: AnswerButtonGroupComponentProps): JSX.Element => {
  const ButtonArray = ["True", "False"];

  const setButtonColor = (button: string): string => {
    let color;

    if (button === "True") {
      color = colors.brand.primary;
    } else {
      color = colors.ui.error;
    }

    return color;
  };

  const renderButtonGroup = (): JSX.Element[] =>
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

  return (
    <ButtonGroupContainerStyled>
      {renderButtonGroup()}
    </ButtonGroupContainerStyled>
  );
};

export default AnswerButtonGroupComponent;
