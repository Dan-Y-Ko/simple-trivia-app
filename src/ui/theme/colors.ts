export interface Colors {
  brand: {
    primary: string;
    secondary: string;
  };
  ui: {
    error: string;
    success: string;
  };
  bg: {
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
  },
  bg: {
    primary: "#FFFFFF",
    secondary: "#F1F1F1",
  },
};

export default colors;
