import {
  Box,
  Container,
  Group,
  Text,
  Anchor,
  Divider,
  Stack,
  rem,
  ActionIcon,
  SimpleGrid,
} from "@mantine/core";
import { IconBrandDiscord, IconBrandTwitter } from "@tabler/icons-react";
import { discordInvite } from "../constants";

const socialLinks = [
  {
    icon: IconBrandTwitter,
    label: "Twitter",
    href: "https://x.com/codingwithjamal",
  },
  {
    icon: IconBrandDiscord,
    label: "Discord",
    href: discordInvite,
  },
];

export function Footer() {
  return (
    <Box
      component="footer"
      style={{
        background: "#0a0e1a",
        color: "#fff",
        borderTop: "1px solid #f97316",
        marginTop: rem(40),
        position: "relative",
        zIndex: 10,
      }}
      py={rem(32)}
    >
      <Container size="lg">
        <SimpleGrid cols={{ base: 1, sm: 3 }} spacing="xl">
          {/* Left: Logo, description, social */}
          <Stack gap="xs">
            <Group>
              <Box
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: rem(8),
                }}
              >
                <img
                  src="/icons8-clash-of-clans-barbarian-king-ios-17-filled-32.png"
                  alt="Clash Recruit Logo"
                  width={28}
                  height={28}
                  style={{ verticalAlign: "middle" }}
                />
                <Text fw={700} size="lg" span style={{ color: "#f97316" }}>
                  Clash <span style={{ color: "#e879f9" }}>Recruit</span>
                </Text>
              </Box>
            </Group>
            <Text c="dimmed" size="sm">
              The ultimate platform for Clash of Clans recruitment. Connect,
              compete, and conquer together.
            </Text>
            <Group mt="xs">
              {socialLinks.map((item) => (
                <ActionIcon
                  key={item.label}
                  component="a"
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  size="lg"
                  variant="filled"
                  radius="md"
                  style={{ background: "#181c2a" }}
                  aria-label={item.label}
                >
                  <item.icon size={22} color="#f97316" />
                </ActionIcon>
              ))}
            </Group>
          </Stack>

          {/* Center: Quick Links */}
          <Stack gap={4}>
            <Text fw={700} style={{ color: "#fbbf24" }}>
              Quick Links
            </Text>
            <Anchor href="#" c="gray.2" underline="never" size="sm">
              Find Clans
            </Anchor>
            <Anchor href="#" c="gray.2" underline="never" size="sm">
              List Your Clan
            </Anchor>
            <Anchor href="#" c="gray.2" underline="never" size="sm">
              How It Works
            </Anchor>
          </Stack>

          {/* Right: Support */}
          <Stack gap={4}>
            <Text fw={700} style={{ color: "#fde047" }}>
              Support
            </Text>
            <Anchor href="#" c="gray.2" underline="never" size="sm">
              About Us
            </Anchor>
            <Anchor href="#" c="gray.2" underline="never" size="sm">
              Contact
            </Anchor>
            <Anchor href="#" c="gray.2" underline="never" size="sm">
              Privacy Policy
            </Anchor>
            <Anchor href="#" c="gray.2" underline="never" size="sm">
              Terms of Service
            </Anchor>
          </Stack>
        </SimpleGrid>
        <Divider my="md" color="#f9731610" />
        <Text ta="center" size="xs" c="dimmed">
          © {new Date().getFullYear()} Clash Recruit. All rights reserved. Not
          affiliated with Supercell.
        </Text>
      </Container>
    </Box>
  );
}
