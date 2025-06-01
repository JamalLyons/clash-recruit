import { Link } from "@tanstack/react-router";
import {
  Button,
  Group,
  Container,
  Box,
  Loader,
  Menu,
  Avatar,
  Text,
  Burger,
  Drawer,
  Stack,
  ActionIcon,
} from "@mantine/core";
import { discordInvite } from "../constants";
import { Authenticated, Unauthenticated, AuthLoading } from "convex/react";
import { useAuthActions } from "@convex-dev/auth/react";
import {
  IconUser,
  IconUsers,
  IconSearch,
  IconPlus,
  IconLogout,
  IconSettings,
  IconBell,
} from "@tabler/icons-react";
import { useDisclosure } from "@mantine/hooks";

export function Header() {
  const { signOut } = useAuthActions();
  const [opened, { toggle }] = useDisclosure(false);

  const NavLinks = () => (
    <>
      <AuthLoading>
        <Loader size="md" color="orange" />
      </AuthLoading>

      <Unauthenticated>
        <Group>
          <Button
            component={Link}
            to={discordInvite}
            target="_blank"
            variant="subtle"
            color="gray"
            leftSection={<IconUsers size={18} />}
          >
            Join Discord
          </Button>
          <Button
            component={Link}
            to="/sign-in"
            variant="filled"
            color="orange"
            style={{ fontWeight: 600 }}
          >
            Get Started
          </Button>
        </Group>
      </Unauthenticated>

      <Authenticated>
        <Group>
          <Button
            component={Link}
            to="/search"
            variant="subtle"
            color="gray"
            leftSection={<IconSearch size={18} />}
          >
            Find Clans
          </Button>

          <Button
            component={Link}
            to="/clans/create"
            variant="subtle"
            color="gray"
            leftSection={<IconPlus size={18} />}
          >
            Create Clan
          </Button>

          <Button
            variant="subtle"
            color="gray"
            disabled
            leftSection={<IconBell size={18} />}
          >
            Notifications
          </Button>

          <Menu shadow="md" width={200}>
            <Menu.Target>
              <Button variant="subtle" color="gray">
                <Group gap={8}>
                  <Avatar size="sm" radius="xl" color="orange">
                    <IconUser size={16} />
                  </Avatar>
                  <Text size="sm" fw={500} visibleFrom="sm">
                    My Account
                  </Text>
                </Group>
              </Button>
            </Menu.Target>

            <Menu.Dropdown>
              <Menu.Item
                component={Link}
                to="/profile"
                leftSection={<IconUser size={16} />}
              >
                Profile
              </Menu.Item>
              <Menu.Item
                component={Link}
                to="/settings"
                leftSection={<IconSettings size={16} />}
              >
                Settings
              </Menu.Item>
              <Menu.Divider />
              <Menu.Item
                color="red"
                leftSection={<IconLogout size={16} />}
                onClick={() => signOut()}
              >
                Sign Out
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </Group>
      </Authenticated>
    </>
  );

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
          <Button
            component={Link}
            to="/"
            variant="subtle"
            color="gray"
            style={{ fontWeight: 700, fontSize: 20 }}
          >
            Clash Recruit
          </Button>

          <Group visibleFrom="md">
            <NavLinks />
          </Group>

          <Burger opened={opened} onClick={toggle} hiddenFrom="md" />
        </Group>
      </Container>

      <Drawer
        opened={opened}
        onClose={toggle}
        size="100%"
        padding="md"
        hiddenFrom="md"
        zIndex={1000}
      >
        <Stack>
          <NavLinks />
        </Stack>
      </Drawer>
    </Box>
  );
}
