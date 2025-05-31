import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useConvexAuth } from "convex/react";
import { useAuthActions } from "@convex-dev/auth/react";
import { Center, Text } from "@mantine/core";

export const Route = createFileRoute("/sign-in")({
  component: RouteComponent,
});

function RouteComponent() {
  const { isAuthenticated, isLoading } = useConvexAuth();
  const { signIn } = useAuthActions();
  const navigate = useNavigate();
  const [hasAttemptedSignIn, setHasAttemptedSignIn] = useState(false);

  useEffect(() => {
    if (!isLoading) {
      if (isAuthenticated) {
        navigate({ to: "/" });
      } else if (!hasAttemptedSignIn) {
        setHasAttemptedSignIn(true);
        void signIn("discord");
      }
    }
  }, [isAuthenticated, isLoading, signIn, navigate, hasAttemptedSignIn]);

  return (
    <Center h="100vh">
      <Text
        size="xl"
        fw={700}
        style={{
          animation: "pulse 2s ease-in-out infinite",
          background: "linear-gradient(45deg, #5865F2, #7289DA)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Redirecting you to Discord...
      </Text>
    </Center>
  );
}
