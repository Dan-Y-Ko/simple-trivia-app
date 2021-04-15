import colors, { Colors } from "./colors";
import space, { Space } from "./spacing";
import sizes, { Sizes } from "./size";
import {
  fonts,
  fontWeights,
  fontSizes,
  FontWeights,
  FontSizes,
  Fonts,
} from "./fonts";

export interface Theme {
  colors: Colors;
  space: Space;
  sizes: Sizes;
  fonts: Fonts;
  fontSizes: FontSizes;
  fontWeights: FontWeights;
}

const theme: Theme = {
  colors,
  space,
  sizes,
  fonts,
  fontSizes,
  fontWeights,
};

export default theme;
