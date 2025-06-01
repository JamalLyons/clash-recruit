import { useParams, createFileRoute, Link } from "@tanstack/react-router";
import {
  Container,
  Title,
  Paper,
  Stack,
  Text,
  Group,
  Badge,
  Button,
  Grid,
  Avatar,
  Box,
  Image,
  SimpleGrid,
  Card,
  Skeleton,
  Center,
} from "@mantine/core";
import {
  IconDisc,
  IconWorld,
  IconUsers,
  IconTrophy,
  IconSword,
  IconClock,
  IconCalendar,
  IconAlertCircle,
} from "@tabler/icons-react";
import { mockClans } from "../mockdata";
import { useState, useEffect } from "react";

export const Route = createFileRoute("/clan/$clanId")({
  component: RouteComponent,
});

function RouteComponent() {
  const { clanId } = useParams({ from: "/clan/$clanId" });
  const [isLoading, setIsLoading] = useState(true);
  const [clan, setClan] = useState<(typeof mockClans)[0] | undefined>(
    undefined,
  );

  const ClanSkeleton = () => (
    <Box style={{ minHeight: "100vh", color: "white" }}>
      {/* Banner Skeleton */}
      <Box
        style={{
          height: "200px",
          background: "linear-gradient(90deg, #1a1a1a 0%, #2a2a2a 100%)",
          position: "relative",
          overflow: "hidden",
          borderBottom: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        <Skeleton height="100%" />
        <Box
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            padding: "20px",
            background:
              "linear-gradient(0deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 100%)",
          }}
        >
          <Group justify="space-between" align="flex-end">
            <Group>
              <Skeleton height={64} circle />
              <div>
                <Skeleton height={32} width={200} mb={8} />
                <Group gap="xs">
                  <Skeleton height={24} width={100} />
                  <Skeleton height={24} width={150} />
                </Group>
              </div>
            </Group>
            <Group>
              <Skeleton height={36} width={120} />
              <Skeleton height={36} width={120} />
            </Group>
          </Group>
        </Box>
      </Box>

      <Container size="xl" py="xl">
        <Grid>
          <Grid.Col span={8}>
            <Stack gap="xl">
              <Paper p="md" style={{ background: "rgba(255,255,255,0.05)" }}>
                <Skeleton height={28} width={120} mb="md" />
                <Skeleton height={100} />
              </Paper>

              <Paper p="md" style={{ background: "rgba(255,255,255,0.05)" }}>
                <Skeleton height={28} width={150} mb="md" />
                <SimpleGrid cols={3}>
                  {[1, 2, 3].map((i) => (
                    <Card
                      key={i}
                      withBorder
                      style={{ background: "rgba(255,255,255,0.05)" }}
                    >
                      <Group>
                        <Skeleton height={24} circle />
                        <div>
                          <Skeleton height={16} width={80} mb={4} />
                          <Skeleton height={20} width={60} />
                        </div>
                      </Group>
                    </Card>
                  ))}
                </SimpleGrid>
              </Paper>

              <Paper p="md" style={{ background: "rgba(255,255,255,0.05)" }}>
                <Skeleton height={28} width={140} mb="md" />
                <Stack gap="md">
                  <Skeleton height={24} width="60%" />
                  <Skeleton height={24} width="40%" />
                  <SimpleGrid cols={2}>
                    {[1, 2, 3, 4].map((i) => (
                      <Skeleton key={i} height={24} width="80%" />
                    ))}
                  </SimpleGrid>
                </Stack>
              </Paper>
            </Stack>
          </Grid.Col>

          <Grid.Col span={4}>
            <Stack gap="xl">
              <Paper p="md" style={{ background: "rgba(255,255,255,0.05)" }}>
                <Skeleton height={28} width={120} mb="md" />
                <Group>
                  {[1, 2, 3].map((i) => (
                    <Skeleton key={i} height={24} width={80} />
                  ))}
                </Group>
              </Paper>

              <Paper p="md" style={{ background: "rgba(255,255,255,0.05)" }}>
                <Skeleton height={28} width={150} mb="md" />
                <Stack gap="xs">
                  {[1, 2, 3].map((i) => (
                    <Skeleton key={i} height={24} width="80%" />
                  ))}
                </Stack>
              </Paper>
            </Stack>
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );

  useEffect(() => {
    // Simulate API call
    const fetchClan = async () => {
      setIsLoading(true);
      // Simulate network delay
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const foundClan = mockClans.find((c) => c.id === clanId);
      setClan(foundClan);
      setIsLoading(false);
    };

    fetchClan();
  }, [clanId]);

  if (isLoading) {
    return <ClanSkeleton />;
  }

  if (!clan) {
    return (
      <Center h="100vh">
        <Stack align="center" gap="md">
          <IconAlertCircle size={64} color="red" />
          <Title order={1}>Clan Not Found</Title>
          <Text c="dimmed">
            The clan you're looking for doesn't exist or has been removed.
          </Text>
          <Button component={Link} to="/" variant="light">
            Return Home
          </Button>
        </Stack>
      </Center>
    );
  }

  return (
    <Box
      style={{
        minHeight: "100vh",
        color: "white",
      }}
    >
      {/* Clan Banner */}
      <Box
        style={{
          height: "200px",
          background: "linear-gradient(90deg, #1a1a1a 0%, #2a2a2a 100%)",
          position: "relative",
          overflow: "hidden",
          borderBottom: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        <Image
          src="https://placehold.co/1920x200/1a1a1a/2a2a2a"
          alt="Clan Banner"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        <Box
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            padding: "20px",
            background:
              "linear-gradient(0deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 100%)",
          }}
        >
          <Group justify="space-between" align="flex-end">
            <Group>
              <Avatar size="xl" radius="md" src="/clan_example_icon.png" />
              <div>
                <Title order={1} style={{ color: "white" }}>
                  {clan.name}
                </Title>
                <Group gap="xs">
                  <Badge size="lg" variant="filled">
                    Level {clan.level}
                  </Badge>
                  <Badge size="lg" variant="filled" color="blue">
                    War Record: {clan.warRecord}
                  </Badge>
                </Group>
              </div>
            </Group>
            <Group>
              <Button
                component={Link}
                to={clan.socialLinks.discord}
                variant="light"
                leftSection={<IconDisc size={16} />}
              >
                Join Discord
              </Button>
              <Button
                component={Link}
                to={clan.socialLinks.website}
                variant="light"
                leftSection={<IconWorld size={16} />}
              >
                Visit Website
              </Button>
            </Group>
          </Group>
        </Box>
      </Box>

      <Container size="xl" py="xl">
        <Grid>
          {/* Main Content */}
          <Grid.Col span={8}>
            <Stack gap="xl">
              {/* Clan Description */}
              <Paper p="md" style={{ background: "rgba(255,255,255,0.05)" }}>
                <Title order={3} mb="md">
                  About Us
                </Title>
                <Text>{clan.description}</Text>
              </Paper>

              {/* Clan Stats */}
              <Paper p="md" style={{ background: "rgba(255,255,255,0.05)" }}>
                <Title order={3} mb="md">
                  Clan Statistics
                </Title>
                <SimpleGrid cols={3}>
                  <Card
                    withBorder
                    style={{ background: "rgba(255,255,255,0.05)" }}
                  >
                    <Group>
                      <IconUsers size={24} />
                      <div>
                        <Text size="sm" c="dimmed">
                          Members
                        </Text>
                        <Text fw={500}>{clan.members.total}/50</Text>
                      </div>
                    </Group>
                  </Card>
                  <Card
                    withBorder
                    style={{ background: "rgba(255,255,255,0.05)" }}
                  >
                    <Group>
                      <IconTrophy size={24} />
                      <div>
                        <Text size="sm" c="dimmed">
                          CWL Rank
                        </Text>
                        <Text fw={500}>{clan.achievements.cwlRank}</Text>
                      </div>
                    </Group>
                  </Card>
                  <Card
                    withBorder
                    style={{ background: "rgba(255,255,255,0.05)" }}
                  >
                    <Group>
                      <IconSword size={24} />
                      <div>
                        <Text size="sm" c="dimmed">
                          War Win Streak
                        </Text>
                        <Text fw={500}>{clan.achievements.warWinStreak}</Text>
                      </div>
                    </Group>
                  </Card>
                </SimpleGrid>
              </Paper>

              {/* Requirements */}
              <Paper p="md" style={{ background: "rgba(255,255,255,0.05)" }}>
                <Title order={3} mb="md">
                  Requirements
                </Title>
                <Stack gap="md">
                  <Group>
                    <Text fw={500}>Town Hall Level:</Text>
                    <Text>TH{clan.requirements.thLevel}+</Text>
                  </Group>
                  <Text fw={500}>Hero Levels:</Text>
                  <SimpleGrid cols={2}>
                    <Group>
                      <Text>King:</Text>
                      <Text>{clan.requirements.heroLevels.king}+</Text>
                    </Group>
                    <Group>
                      <Text>Queen:</Text>
                      <Text>{clan.requirements.heroLevels.queen}+</Text>
                    </Group>
                    <Group>
                      <Text>Warden:</Text>
                      <Text>{clan.requirements.heroLevels.warden}+</Text>
                    </Group>
                    <Group>
                      <Text>Champion:</Text>
                      <Text>{clan.requirements.heroLevels.champion}+</Text>
                    </Group>
                  </SimpleGrid>
                  <Group>
                    <Text fw={500}>Minimum Clan Points:</Text>
                    <Text>{clan.requirements.minClanPoints}+</Text>
                  </Group>
                  <Group>
                    <Text fw={500}>Minimum War Stars:</Text>
                    <Text>{clan.requirements.minWarStars}+</Text>
                  </Group>
                </Stack>
              </Paper>
            </Stack>
          </Grid.Col>

          {/* Sidebar */}
          <Grid.Col span={4}>
            <Stack gap="xl">
              {/* Clan Tags */}
              <Paper p="md" style={{ background: "rgba(255,255,255,0.05)" }}>
                <Title order={3} mb="md">
                  Clan Tags
                </Title>
                <Group>
                  {clan.tags.map((tag: string) => (
                    <Badge key={tag} size="lg" variant="light">
                      {tag}
                    </Badge>
                  ))}
                </Group>
              </Paper>

              {/* Clan Info */}
              <Paper p="md" style={{ background: "rgba(255,255,255,0.05)" }}>
                <Title order={3} mb="md">
                  Clan Information
                </Title>
                <Stack gap="xs">
                  <Group>
                    <IconCalendar size={16} />
                    <Text>Founded: {clan.founded}</Text>
                  </Group>
                  <Group>
                    <IconUsers size={16} />
                    <Text>Location: {clan.location}</Text>
                  </Group>
                  <Group>
                    <IconClock size={16} />
                    <Text>War Frequency: {clan.warFrequency}</Text>
                  </Group>
                </Stack>
              </Paper>

              {/* Clan Rules */}
              <Paper p="md" style={{ background: "rgba(255,255,255,0.05)" }}>
                <Title order={3} mb="md">
                  Clan Rules
                </Title>
                <Stack gap="xs">
                  {clan.rules.map((rule: string) => (
                    <Group key={rule}>
                      <Text>•</Text>
                      <Text>{rule}</Text>
                    </Group>
                  ))}
                </Stack>
              </Paper>
            </Stack>
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
}
