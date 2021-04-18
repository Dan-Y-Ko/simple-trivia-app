// example of a generic, custom re-usable text component
import styled from "styled-components/native";

import type { Theme } from "../../theme";

interface Variants {
  body: (theme: Theme) => string;
  label: (theme: Theme) => string;
  error: (theme: Theme) => string;
  [key: string]: (theme: Theme) => string;
}

interface StyledTextComponentProps {
  variant: string;
  theme: Theme;
}

// set default text styles to custom text component
const defaultTextStyles = (theme: Theme): string => `
  font-family: ${theme.fonts.body};
  font-weight: ${theme.fontWeights.regular};
  color: ${theme.colors.text.primary};
  flex-wrap: wrap;
  margin-top: 0px;
  margin-bottom: 0px;
`;

const body = (theme: Theme): string => `
    font-size: ${theme.fontSizes.body};
    font-family: ${theme.fonts.body};
`;

const error = (theme: Theme): string => `
    color: ${theme.colors.ui.error};
`;

const label = (theme: Theme): string => `
    font-family: ${theme.fonts.heading};
    font-size: ${theme.fontSizes.title};
    font-weight: ${theme.fontWeights.bold};
`;

const variants: Variants = {
  body,
  label,
  error,
};

/*  This would be called like so: <Text variant="body">
    theme and variant is being destructured from the props
    sets default styles as defined in the default text styles function
    the key in the variants object references the same function.
    Using variant=body as example, "body" would get sent into the styled component as the prop which returns
    variants[body]. The body key in the variants object refers to the body function
    which returns font-size: ${theme.fontSizes.body}.
    It also takes in the theme as well.
 */
const Text = styled.Text`
  ${({ theme }: { theme: Theme }) => defaultTextStyles(theme)}
  ${({ variant, theme }: StyledTextComponentProps) => variants[variant](theme)}
`;

export default Text;
