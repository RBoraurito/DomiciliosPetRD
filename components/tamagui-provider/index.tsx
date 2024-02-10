import "@/tamagui-web.css";

import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useColorScheme } from "react-native";
import { TamaguiProvider } from "tamagui";

import { config } from "../../tamagui.config";
import { ReactNode } from "react";

export function UIProvider({ children }: { children: ReactNode }) {
  const colorScheme = useColorScheme();

  return (
    // add this
    <TamaguiProvider config={config} defaultTheme={colorScheme as string}>
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        {children}
      </ThemeProvider>
    </TamaguiProvider>
  );
}
