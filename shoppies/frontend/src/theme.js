import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

const fonts = { mono: `'Menlo', monospace` };

const breakpoints = createBreakpoints({
  sm: "40em",
  md: "52em",
  lg: "64em",
  xl: "80em",
});

const theme = extendTheme({
  colors: {
    black: "#16161D",
    beige: {
      50: "#fbf6e6",
      100: "#ece5c5",
      200: "#e0d4a2",
      300: "#d2c27c",
      400: "#c6b158",
      500: "#ac983e",
      600: "#877631",
      700: "#605422",
      800: "#3a3313",
      900: "#141100",
    },
    brown: {
      50: "#ffefe6",
      100: "#e9d5c8",
      200: "#d6bba8",
      300: "#c5a087",
      400: "#b38466",
      500: "#996b4c",
      600: "#78533a",
      700: "#573b29",
      800: "#352316",
      900: "#180a00",
    },
    red: {
      50: "#ffeae5",
      100: "#f3c7c0",
      200: "#e5a39a",
      300: "#d97f72",
      400: "#cd5c4b",
      500: "#b44332",
      600: "#8d3326",
      700: "#65241b",
      800: "#3f140e",
      900: "#1d0300",
    },
    green: {
      50: "#edf6e9",
      100: "#d6ded1",
      200: "#bdc6b7",
      300: "#a4af9b",
      400: "#8a9880",
      500: "#717f67",
      600: "#58634f",
      700: "#3e4637",
      800: "#252b1f",
      900: "#0a1000",
    },
    navy: {
      50: "#edf2fc",
      100: "#d3d7e1",
      200: "#b7bdc8",
      300: "#9ba2b1",
      400: "#7e889a",
      500: "#646e81",
      600: "#4e5665",
      700: "#373d49",
      800: "#20252d",
      900: "#080c16",
    },
    blue: {
      50: "#e7f2ff",
      100: "#c8d5eb",
      200: "#a6b9d8",
      300: "#849dc7",
      400: "#6282b7",
      500: "#48689d",
      600: "#38517b",
      700: "#273a59",
      800: "#152338",
      900: "#020c19",
    },
  },
  fonts,
  breakpoints,
});

export default theme;
