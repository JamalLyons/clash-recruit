import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { Providers } from "../components/Providers";
import { Footer } from "../components/Footer";
import { Button, Group, Container, Box } from "@mantine/core";
import { Header } from "../components/Header";
import { colors } from "../constants";

export const Route = createRootRoute({
  loader: async () => {
    console.log("root route loader");
  },
  component: () => (
    <div
      style={{
        backgroundColor: colors.background,
        minHeight: "100vh",
        color: colors.text,
        backgroundImage: `
        radial-gradient(circle at 15% 50%, ${colors.accent}15 0%, transparent 25%),
        radial-gradient(circle at 85% 30%, ${colors.accent}10 0%, transparent 25%)
      `,
      }}
    >
      <Providers>
        <Header />
        <Outlet />
        <Footer />
      </Providers>
      <TanStackRouterDevtools />
    </div>
  ),
});
