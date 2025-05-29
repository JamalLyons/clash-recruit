import { Link } from "@tanstack/react-router";
import { Button, Group, Container, Box } from "@mantine/core";

export function Header() {
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
              to="/about"
              variant="subtle"
              color="gray"
              style={{ fontWeight: 700, fontSize: 18 }}
            >
              About
            </Button>
          </Group>
          <Group>
            <Button
              variant="outline"
              color="orange"
              style={{ fontWeight: 700, fontSize: 16 }}
            >
              Sign In
            </Button>
            <Button
              variant="filled"
              color="orange"
              style={{ fontWeight: 700, fontSize: 16 }}
            >
              Sign Up
            </Button>
          </Group>
        </Group>
      </Container>
    </Box>
  );
}
