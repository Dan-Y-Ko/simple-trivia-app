export interface Fonts {
  body: string;
  heading: string;
}

export interface FontWeights {
  regular: number;
  medium: number;
  bold: number;
}

export interface FontSizes {
  caption: string;
  button: string;
  body: string;
  title: string;
}

export const fonts: Fonts = {
  body: "Oswald_400Regular",
  heading: "Lato_400Regular",
};

export const fontWeights: FontWeights = {
  regular: 400,
  medium: 500,
  bold: 700,
};

export const fontSizes: FontSizes = {
  caption: "12px",
  button: "14px",
  body: "16px",
  title: "20px",
};
