export interface Colors {
  brand: {
    primary: string;
    secondary: string;
  };
  ui: {
    error: string;
    success: string;
    disabled: string;
  };
  bg: {
    primary: string;
    secondary: string;
  };
  text: {
    primary: string;
    secondary: string;
  };
}

const colors: Colors = {
  brand: {
    primary: "#2182BD",
    secondary: "#5282BD",
  },
  ui: {
    error: "#D0421B",
    success: "#046d70",
    disabled: "#9C9C9C",
  },
  bg: {
    primary: "#FFFFFF",
    secondary: "#F1F1F1",
  },
  text: {
    primary: "#262626",
    secondary: "#757575",
  },
};

export default colors;
