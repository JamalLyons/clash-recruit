import { createTheme, MantineProvider } from "@mantine/core";
import type { ReactNode } from "react";

const theme = createTheme({
  fontFamily: "Inter, sans-serif",
  fontFamilyMonospace: "Monaco, Courier, monospace",
  headings: {
    fontFamily: "Inter, sans-serif",
  },
  primaryColor: "blue",
  primaryShade: 6,
});

export function Providers({ children }: { children: ReactNode }) {
  return (
    <MantineProvider theme={theme} defaultColorScheme="dark">
      {children}
    </MantineProvider>
  );
}
