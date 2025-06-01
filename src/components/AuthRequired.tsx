import { Link } from "@tanstack/react-router";
import { Container, Alert, Stack, Text, Button, Skeleton } from "@mantine/core";
import { IconAlertCircle } from "@tabler/icons-react";
import { Authenticated, Unauthenticated, AuthLoading } from "convex/react";

interface AuthRequiredProps {
  children: React.ReactNode;
  title?: string;
  message?: string;
  loadingComponent?: React.ReactNode;
}

export function AuthRequired({
  children,
  title = "Authentication Required",
  message = "You need to be logged in to access this page.",
  loadingComponent,
}: AuthRequiredProps) {
  return (
    <>
      <AuthLoading>
        {loadingComponent || (
          <Container size="sm" py="xl">
            <Stack gap="md">
              <Skeleton height={40} width="60%" />
              <Skeleton height={200} />
            </Stack>
          </Container>
        )}
      </AuthLoading>

      <Unauthenticated>
        <Container size="sm" py="xl">
          <Alert
            icon={<IconAlertCircle size={16} />}
            title={title}
            color="orange"
            variant="filled"
          >
            <Stack gap="md">
              <Text>{message}</Text>
              <Button
                component={Link}
                to="/sign-in"
                variant="light"
                color="orange"
                fullWidth
              >
                Sign In to Continue
              </Button>
            </Stack>
          </Alert>
        </Container>
      </Unauthenticated>

      <Authenticated>{children}</Authenticated>
    </>
  );
}
