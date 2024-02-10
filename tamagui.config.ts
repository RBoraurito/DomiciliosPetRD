import { config as configBase } from "@tamagui/config";
import { createTamagui, createTokens } from "tamagui";

export const tokens = createTokens({
  ...configBase.tokens,
  color: {
    ...configBase.tokens.color,
    primary50: "#faf7fc",
    primary100: "#f3eff8",
    primary200: "#e7ddf1",
    primary300: "#d6c2e5",
    primary400: "#bd9ed4",
    primary500: "#a076bf",
    primary600: "#8458a1",
    primary700: "#6c4685",
    primary800: "#613f75",
    primary900: "#4e345b",
    primary950: "#2e1939",
    secondary50: "#faf5f7",
    secondary100: "#f6edf1",
    secondary200: "#efdbe3",
    secondary300: "#e5c3d1",
    secondary400: "#d195ac",
    secondary500: "#bf7590",
    secondary600: "#aa5871",
    secondary700: "#91455b",
    secondary800: "#783c4c",
    secondary900: "#663543",
    secondary950: "#3c1b24",
  },
});

export const config = createTamagui(configBase);

export default config;

export type Conf = typeof config;

declare module "tamagui" {
  interface TamaguiCustomConfig extends Conf {}
}
