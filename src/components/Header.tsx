import { Link } from "@tanstack/react-router";
import { Button, Group, Container, Box, Loader } from "@mantine/core";
import { discordInvite } from "../constants";
import {
  Authenticated,
  Unauthenticated,
  AuthLoading,
  useConvexAuth,
} from "convex/react";
import { useAuthActions } from "@convex-dev/auth/react";

export function Header() {
  const { signOut } = useAuthActions();

  const authState = useConvexAuth();
  console.log(authState);

  return (
    <Box
      style={{
        background:
          "linear-gradient(90deg, rgba(15,23,42,0.85) 60%, rgba(249,115,22,0.10) 100%)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        padding: "1rem 0",
        boxShadow: "0 4px 24px 0 #0002",
        position: "sticky",
        top: 0,
        zIndex: 100,
        borderBottom: "none",
      }}
    >
      <Container size="lg">
        <Group justify="space-between">
          <Group>
            <Button
              component={Link}
              to="/"
              variant="subtle"
              color="gray"
              style={{ fontWeight: 700, fontSize: 18 }}
            >
              Home
            </Button>
            <Button
              component={Link}
              to={discordInvite}
              target="_blank"
              variant="subtle"
              color="gray"
              style={{ fontWeight: 700, fontSize: 18 }}
            >
              Our Discord
            </Button>
          </Group>
          <Group>
            <AuthLoading>
              <Loader size={"md"} color="orange" />
            </AuthLoading>
            <Unauthenticated>
              <Button
                component={Link}
                to="/sign-in"
                variant="filled"
                color="orange"
                style={{ fontWeight: 700, fontSize: 16 }}
              >
                Sign In
              </Button>
            </Unauthenticated>
            <Authenticated>
              <Button
                onClick={() => signOut()}
                variant="filled"
                color="orange"
                style={{ fontWeight: 700, fontSize: 16 }}
              >
                Sign Out
              </Button>
            </Authenticated>
          </Group>
        </Group>
      </Container>
    </Box>
  );
}
