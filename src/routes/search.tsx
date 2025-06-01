import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Container,
  Title,
  SimpleGrid,
  Card,
  Text,
  Group,
  Badge,
  Button,
  Stack,
  Avatar,
  TextInput,
  SegmentedControl,
  Skeleton,
  Center,
  Paper,
} from "@mantine/core";
import {
  IconUsers,
  IconTrophy,
  IconSearch,
  IconAlertCircle,
} from "@tabler/icons-react";
import { mockClans } from "../mockdata";
import { useState, useEffect } from "react";
import { AuthRequired } from "../components/AuthRequired";

export const Route = createFileRoute("/search")({
  component: RouteComponent,
});

function SearchSkeleton() {
  return (
    <Container
      fluid
      px="md"
      py="xl"
      style={{ minHeight: "calc(100vh - 60px)" }}
    >
      <Stack gap="xl" style={{ height: "100%" }}>
        <Center>
          <Skeleton height={40} width="60%" />
        </Center>

        <Paper p="md" withBorder>
          <Stack gap="md">
            <Skeleton height={36} width="100%" />
            <Skeleton height={20} width="40%" />
          </Stack>
        </Paper>

        <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="lg">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <Card key={i} withBorder shadow="sm" radius="md">
              <Stack gap="md">
                <Group>
                  <Skeleton height={48} width={48} circle />
                  <div style={{ flex: 1 }}>
                    <Skeleton height={24} width="60%" mb={8} />
                    <Group gap="xs">
                      <Skeleton height={20} width="40%" />
                      <Skeleton height={20} width="60%" />
                    </Group>
                  </div>
                </Group>

                <Skeleton height={40} width="100%" />

                <Group gap="xs">
                  <Group gap="xs">
                    <Skeleton height={16} width={16} circle />
                    <Skeleton height={16} width="40%" />
                  </Group>
                  <Group gap="xs">
                    <Skeleton height={16} width={16} circle />
                    <Skeleton height={16} width="40%" />
                  </Group>
                </Group>

                <Group gap="xs" mt="auto">
                  <Skeleton height={36} width="100%" />
                  <Skeleton height={36} width="100%" />
                </Group>
              </Stack>
            </Card>
          ))}
        </SimpleGrid>
      </Stack>
    </Container>
  );
}

function RouteComponent() {
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchType, setSearchType] = useState<"name" | "id">("name");
  const [filteredClans, setFilteredClans] = useState(mockClans);

  useEffect(() => {
    // Simulate API call
    const fetchClans = async () => {
      setIsLoading(true);
      // Simulate network delay
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setIsLoading(false);
    };

    fetchClans();
  }, []);

  useEffect(() => {
    const filtered = mockClans.filter((clan) => {
      if (!searchQuery) return true;

      return searchType === "name"
        ? clan.name.toLowerCase().includes(searchQuery.toLowerCase())
        : clan.id.toLowerCase().includes(searchQuery.toLowerCase());
    });

    setFilteredClans(filtered);
  }, [searchQuery, searchType]);

  const NoResults = () => (
    <Center h={400}>
      <Stack align="center" gap="md">
        <IconAlertCircle size={64} color="gray" />
        <Title order={2}>No Clans Found</Title>
        <Text c="dimmed">Try adjusting your search criteria</Text>
      </Stack>
    </Center>
  );

  return (
    <AuthRequired
      title="Search Clans"
      message="You need to be logged in to search for clans."
      loadingComponent={<SearchSkeleton />}
    >
      <Container
        fluid
        px="md"
        py="xl"
        style={{ minHeight: "calc(100vh - 60px)" }}
      >
        <Stack gap="xl" style={{ height: "100%" }}>
          <Center>
            <Title order={1} size="h1">
              Clan Search
            </Title>
          </Center>

          <Paper p="md" withBorder>
            <Stack gap="md">
              <Stack gap="md">
                <TextInput
                  placeholder="Search clans..."
                  value={searchQuery}
                  onChange={(event) =>
                    setSearchQuery(event.currentTarget.value)
                  }
                  leftSection={<IconSearch size={16} />}
                  size="md"
                />
                <SegmentedControl
                  value={searchType}
                  onChange={(value) => setSearchType(value as "name" | "id")}
                  data={[
                    { label: "Name", value: "name" },
                    { label: "Clan ID", value: "id" },
                  ]}
                  size="md"
                  fullWidth
                />
              </Stack>
              <Text size="sm" c="dimmed">
                {filteredClans.length} clans found
              </Text>
            </Stack>
          </Paper>

          {isLoading ? (
            <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="lg">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <Card key={i} withBorder shadow="sm" radius="md">
                  <Stack gap="md">
                    <Group>
                      <Skeleton height={48} width={48} circle />
                      <div style={{ flex: 1 }}>
                        <Skeleton height={24} width="60%" mb={8} />
                        <Group gap="xs">
                          <Skeleton height={20} width="40%" />
                          <Skeleton height={20} width="60%" />
                        </Group>
                      </div>
                    </Group>

                    <Skeleton height={40} width="100%" />

                    <Group gap="xs">
                      <Group gap="xs">
                        <Skeleton height={16} width={16} circle />
                        <Skeleton height={16} width="40%" />
                      </Group>
                      <Group gap="xs">
                        <Skeleton height={16} width={16} circle />
                        <Skeleton height={16} width="40%" />
                      </Group>
                    </Group>

                    <Group gap="xs" mt="auto">
                      <Skeleton height={36} width="100%" />
                      <Skeleton height={36} width="100%" />
                    </Group>
                  </Stack>
                </Card>
              ))}
            </SimpleGrid>
          ) : filteredClans.length === 0 ? (
            <NoResults />
          ) : (
            <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="lg">
              {filteredClans.map((clan) => (
                <Card key={clan.id} withBorder shadow="sm" radius="md">
                  <Stack gap="md">
                    <Group>
                      <Avatar
                        size="lg"
                        radius="md"
                        src="/clan_example_icon.png"
                      />
                      <div style={{ flex: 1 }}>
                        <Text fw={500} size="lg">
                          {clan.name}
                        </Text>
                        <Group gap="xs" wrap="wrap">
                          <Badge size="sm">Level {clan.level}</Badge>
                          <Badge size="sm" color="blue">
                            {clan.warRecord}
                          </Badge>
                        </Group>
                      </div>
                    </Group>

                    <Text lineClamp={2} size="sm" c="dimmed">
                      {clan.description}
                    </Text>

                    <Group gap="xs" wrap="wrap">
                      <Group gap="xs">
                        <IconUsers size={16} />
                        <Text size="sm">{clan.members.total}/50</Text>
                      </Group>
                      <Group gap="xs">
                        <IconTrophy size={16} />
                        <Text size="sm">{clan.achievements.cwlRank}</Text>
                      </Group>
                    </Group>

                    <Group gap="xs" mt="auto" wrap="wrap">
                      <Button
                        component={Link}
                        to={`/clan/${clan.id}`}
                        variant="light"
                        size="md"
                        fullWidth
                      >
                        View Clan
                      </Button>
                      <Button
                        component={Link}
                        to={clan.socialLinks.discord}
                        variant="outline"
                        size="md"
                        fullWidth
                      >
                        Join Discord
                      </Button>
                    </Group>
                  </Stack>
                </Card>
              ))}
            </SimpleGrid>
          )}
        </Stack>
      </Container>
    </AuthRequired>
  );
}
