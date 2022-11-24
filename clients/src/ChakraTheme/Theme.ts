import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

export const theme = extendTheme(
  { config },
  {
    color: {
      mainColor: {
        500: "rgb(26, 115, 232)",
      },
      mainColorHover: {
        500: "#1a73e8",
      },
    },
    styles: {
      global: () => {
        body: {
          bg: "blackAlpha.200";
        }
      },
    },
  }
);
