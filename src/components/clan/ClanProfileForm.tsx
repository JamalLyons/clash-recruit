import {
  TextInput,
  NumberInput,
  Button,
  Stack,
  Paper,
  Title,
  Text,
} from "@mantine/core";
import { useForm } from "@mantine/form";

interface ClanProfileFormData {
  name: string;
  level: number;
  warRecord: string;
  requirements: {
    thLevel: number;
    heroLevels: {
      king: number;
      queen: number;
      warden: number;
      champion: number;
    };
  };
  socialLinks: {
    discord: string;
    website: string;
  };
}

interface ClanProfileFormProps {
  initialData?: Partial<ClanProfileFormData>;
  onSubmit: (data: ClanProfileFormData) => void;
}

export function ClanProfileForm({
  initialData,
  onSubmit,
}: ClanProfileFormProps) {
  const form = useForm<ClanProfileFormData>({
    initialValues: {
      name: initialData?.name ?? "",
      level: initialData?.level ?? 1,
      warRecord: initialData?.warRecord ?? "0-0-0",
      requirements: {
        thLevel: initialData?.requirements?.thLevel ?? 1,
        heroLevels: {
          king: initialData?.requirements?.heroLevels?.king ?? 1,
          queen: initialData?.requirements?.heroLevels?.queen ?? 1,
          warden: initialData?.requirements?.heroLevels?.warden ?? 1,
          champion: initialData?.requirements?.heroLevels?.champion ?? 1,
        },
      },
      socialLinks: {
        discord: initialData?.socialLinks?.discord ?? "",
        website: initialData?.socialLinks?.website ?? "",
      },
    },
  });

  return (
    <Paper p="md" withBorder>
      <form onSubmit={form.onSubmit(onSubmit)}>
        <Stack gap="md">
          <Title order={3}>Clan Information</Title>

          <TextInput
            label="Clan Name"
            placeholder="Enter clan name"
            required
            {...form.getInputProps("name")}
          />

          <NumberInput
            label="Clan Level"
            placeholder="Enter clan level"
            min={1}
            required
            {...form.getInputProps("level")}
          />

          <TextInput
            label="War Record"
            placeholder="Wins-Losses-Draws"
            required
            {...form.getInputProps("warRecord")}
          />

          <Title order={3}>Requirements</Title>

          <NumberInput
            label="Minimum Town Hall Level"
            placeholder="Enter minimum TH level"
            min={1}
            max={16}
            required
            {...form.getInputProps("requirements.thLevel")}
          />

          <Text fw={500}>Hero Level Requirements</Text>

          <NumberInput
            label="King Level"
            placeholder="Enter minimum king level"
            min={1}
            max={100}
            {...form.getInputProps("requirements.heroLevels.king")}
          />

          <NumberInput
            label="Queen Level"
            placeholder="Enter minimum queen level"
            min={1}
            max={100}
            {...form.getInputProps("requirements.heroLevels.queen")}
          />

          <NumberInput
            label="Warden Level"
            placeholder="Enter minimum warden level"
            min={1}
            max={100}
            {...form.getInputProps("requirements.heroLevels.warden")}
          />

          <NumberInput
            label="Champion Level"
            placeholder="Enter minimum champion level"
            min={1}
            max={100}
            {...form.getInputProps("requirements.heroLevels.champion")}
          />

          <Title order={3}>Social Links</Title>

          <TextInput
            label="Discord Invite Link"
            placeholder="Enter Discord invite link"
            {...form.getInputProps("socialLinks.discord")}
          />

          <TextInput
            label="Website"
            placeholder="Enter clan website"
            {...form.getInputProps("socialLinks.website")}
          />

          <Button type="submit" mt="md">
            Save Changes
          </Button>
        </Stack>
      </form>
    </Paper>
  );
}
