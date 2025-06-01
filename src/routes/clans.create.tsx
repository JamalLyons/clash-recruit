import { createFileRoute } from "@tanstack/react-router";
import {
  Container,
  Title,
  Paper,
  TextInput,
  Textarea,
  NumberInput,
  Button,
  Stack,
  Select,
  Skeleton,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { AuthRequired } from "../components/AuthRequired";

export const Route = createFileRoute("/clans/create")({
  component: RouteComponent,
});

function ClanFormSkeleton() {
  return (
    <Container size="sm" py="xl">
      <Paper p="xl" radius="md" withBorder>
        <Stack gap="xl">
          <Skeleton height={40} width="60%" />
          <Stack gap="md">
            <Skeleton height={36} />
            <Skeleton height={36} />
            <Skeleton height={100} />
            <Skeleton height={36} />
            <Skeleton height={36} />
            <Skeleton height={36} />
            <Skeleton height={36} />
          </Stack>
          <Skeleton height={40} />
        </Stack>
      </Paper>
    </Container>
  );
}

function RouteComponent() {
  const form = useForm({
    initialValues: {
      name: "",
      tag: "",
      description: "",
      level: 1,
      warFrequency: "always",
      requiredTrophies: 0,
      requiredTownHall: 1,
    },
    validate: {
      name: (value) =>
        value.length < 3 ? "Name must be at least 3 characters" : null,
      tag: (value) =>
        value.length < 2 ? "Tag must be at least 2 characters" : null,
      description: (value) =>
        value.length < 10 ? "Description must be at least 10 characters" : null,
    },
  });

  const handleSubmit = (values: typeof form.values) => {
    console.log(values);
    // TODO: Implement clan creation logic
  };

  return (
    <AuthRequired
      title="Create a Clan"
      message="You need to be logged in to create a clan."
      loadingComponent={<ClanFormSkeleton />}
    >
      <Container size="sm" py="xl">
        <Paper p="xl" radius="md" withBorder>
          <Stack gap="xl">
            <Title order={2} ta="center">
              Create Your Clan
            </Title>

            <form onSubmit={form.onSubmit(handleSubmit)}>
              <Stack gap="md">
                <TextInput
                  label="Clan Name"
                  placeholder="Enter your clan name"
                  required
                  {...form.getInputProps("name")}
                />

                <TextInput
                  label="Clan Tag"
                  placeholder="Enter your clan tag"
                  required
                  {...form.getInputProps("tag")}
                />

                <Textarea
                  label="Description"
                  placeholder="Tell us about your clan..."
                  required
                  minRows={4}
                  {...form.getInputProps("description")}
                />

                <NumberInput
                  label="Clan Level"
                  placeholder="Enter clan level"
                  min={1}
                  max={30}
                  required
                  {...form.getInputProps("level")}
                />

                <Select
                  label="War Frequency"
                  placeholder="Select war frequency"
                  data={[
                    { value: "always", label: "Always" },
                    { value: "twice", label: "Twice a Week" },
                    { value: "once", label: "Once a Week" },
                    { value: "never", label: "Never" },
                  ]}
                  required
                  {...form.getInputProps("warFrequency")}
                />

                <NumberInput
                  label="Required Trophies"
                  placeholder="Enter minimum trophies"
                  min={0}
                  required
                  {...form.getInputProps("requiredTrophies")}
                />

                <NumberInput
                  label="Required Town Hall"
                  placeholder="Enter minimum town hall level"
                  min={1}
                  max={16}
                  required
                  {...form.getInputProps("requiredTownHall")}
                />

                <Button
                  type="submit"
                  variant="filled"
                  color="orange"
                  size="md"
                  fullWidth
                >
                  Create Clan
                </Button>
              </Stack>
            </form>
          </Stack>
        </Paper>
      </Container>
    </AuthRequired>
  );
}
