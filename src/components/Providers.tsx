import type { ReactNode } from "react";
import { createTheme, MantineProvider } from "@mantine/core";
import { ConvexAuthProvider } from "@convex-dev/auth/react";
import { ConvexReactClient } from "convex/react";

const theme = createTheme({
  fontFamily: "Inter, sans-serif",
  fontFamilyMonospace: "Monaco, Courier, monospace",
  headings: {
    fontFamily: "Inter, sans-serif",
  },
  primaryColor: "blue",
  primaryShade: 6,
});

const convex = new ConvexReactClient(import.meta.env.VITE_CONVEX_URL as string);

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ConvexAuthProvider client={convex}>
      <MantineProvider theme={theme} defaultColorScheme="dark">
        {children}
      </MantineProvider>
    </ConvexAuthProvider>
  );
}
