import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Container,
  Title,
  Text,
  Button,
  Group,
  Stack,
  Card,
  SimpleGrid,
  rem,
  Badge,
  Box,
} from "@mantine/core";
import {
  IconUsers,
  IconChartBar,
  IconShieldCheck,
  IconSearch,
} from "@tabler/icons-react";
import { colors } from "../constants";
import { Carousel } from "@mantine/carousel";

const testimonials = [
  {
    id: 1,
    quote:
      "Found 20+ active members in just one week! This platform is a game-changer for clan recruitment.",
    author: "DragonSlayer99",
    role: "Clan Leader",
    clan: "Fire Dragons",
  },
  {
    id: 2,
    quote:
      "The smart matching system helped us find exactly the type of players we needed. Incredible!",
    author: "ThunderKing",
    role: "Co-Leader",
    clan: "Storm Riders",
  },
  {
    id: 3,
    quote:
      "Finally, a platform that understands what clan leaders need. The verification system is top-notch.",
    author: "ValkyrieQueen",
    role: "Leader",
    clan: "Viking Warriors",
  },
];

function HeroSection() {
  return (
    <Box
      style={{
        position: "relative",
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        background: `
          radial-gradient(ellipse at 20% 30%, #f9731633 0%, transparent 60%),
          radial-gradient(ellipse at 80% 20%, #a78bfa33 0%, transparent 60%),
          linear-gradient(120deg, ${colors.background} 60%, #1e293b 100%)
        `,
      }}
    >
      {/* Glowing Orbs */}
      <Box
        style={{
          position: "absolute",
          top: "10%",
          left: "10%",
          width: 300,
          height: 300,
          background: "#f97316",
          opacity: 0.15,
          filter: "blur(80px)",
          borderRadius: "50%",
          zIndex: 0,
        }}
      />
      <Box
        style={{
          position: "absolute",
          top: "20%",
          right: "10%",
          width: 250,
          height: 250,
          background: "#a78bfa",
          opacity: 0.12,
          filter: "blur(80px)",
          borderRadius: "50%",
          zIndex: 0,
        }}
      />
      <Container size="lg" style={{ position: "relative", zIndex: 1 }}>
        <Stack align="center" gap="xl" px="md">
          <Badge
            size="lg"
            radius="xl"
            style={{
              background: "linear-gradient(90deg, #a78bfa 0%, #f97316 100%)",
              color: "#fff",
              fontWeight: 700,
              fontSize: "clamp(14px, 2vw, 16px)",
              padding: "0.75rem 1.5rem",
              marginBottom: rem(16),
            }}
          >
            #1 Clash of Clans Recruitment Platform
          </Badge>
          <Title
            order={1}
            size="clamp(40px, 8vw, 64px)"
            ta="center"
            style={{
              color: colors.accent,
              fontWeight: 900,
              letterSpacing: -2,
              lineHeight: 1.1,
              textShadow: "0 4px 32px #f9731622, 0 1px 0 #fff2",
            }}
          >
            Build Your
            <br />
            Ultimate Clan
          </Title>
          <Text
            size="clamp(16px, 2vw, 22px)"
            ta="center"
            maw={800}
            style={{ color: colors.text }}
          >
            Connect with elite players, find your perfect clan, or recruit
            legendary warriors. The most powerful recruitment platform for Clash
            of Clans.
          </Text>
          <Group mt="md" wrap="wrap" justify="center">
            <Button
              component={Link}
              to="/search"
              size="md"
              variant="filled"
              color="orange"
              radius="md"
              leftSection={<IconSearch size={22} />}
              style={{
                fontWeight: 700,
                fontSize: "clamp(16px, 2vw, 18px)",
              }}
            >
              Find Your Clan
            </Button>
            <Button
              component={Link}
              to="/clans/create"
              size="md"
              variant="outline"
              color="orange"
              radius="md"
              leftSection={<IconUsers size={22} />}
              style={{
                fontWeight: 700,
                fontSize: "clamp(16px, 2vw, 18px)",
              }}
            >
              List Your Clan
            </Button>
          </Group>
        </Stack>
      </Container>
    </Box>
  );
}

function FeaturesSection() {
  return (
    <Box
      style={{
        position: "relative",
        zIndex: 1,
        padding: "clamp(40px, 10vw, 80px) 0",
      }}
    >
      {/* Glowing orb background */}
      <Box
        style={{
          position: "absolute",
          top: "10%",
          left: "5%",
          width: 180,
          height: 180,
          background: "#f97316",
          opacity: 0.1,
          filter: "blur(60px)",
          borderRadius: "50%",
          zIndex: 0,
        }}
      />
      <Container size="lg" style={{ position: "relative", zIndex: 1 }}>
        <Stack align="center" gap="xl">
          <Title
            order={2}
            ta="center"
            size="clamp(32px, 4vw, 38px)"
            style={{ fontWeight: 800, color: colors.text }}
          >
            Why Choose Clash Recruit?
          </Title>
          <Text
            size="clamp(16px, 2vw, 20px)"
            ta="center"
            maw={800}
            style={{ color: colors.text }}
          >
            The ultimate platform connecting Clash of Clans players and clans
            worldwide
          </Text>
          <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="xl" px="md">
            <Card
              withBorder
              p="xl"
              radius="lg"
              style={{
                background: "rgba(30,41,59,0.85)",
                boxShadow: "0 8px 32px 0 #0003",
                border: `1.5px solid ${colors.accent}22`,
                backdropFilter: "blur(8px)",
              }}
            >
              <Stack align="center" gap="md">
                <IconChartBar size={40} color={colors.accent} />
                <Title order={3} size="h4" style={{ fontWeight: 700 }}>
                  Smart Matching
                </Title>
                <Text ta="center" style={{ color: colors.text }}>
                  Advanced algorithms match players with clans based on
                  playstyle, activity, and goals.
                </Text>
              </Stack>
            </Card>
            <Card
              withBorder
              p="xl"
              radius="lg"
              style={{
                background: "rgba(30,41,59,0.85)",
                boxShadow: "0 8px 32px 0 #0003",
                border: `1.5px solid ${colors.accent}22`,
                backdropFilter: "blur(8px)",
              }}
            >
              <Stack align="center" gap="md">
                <IconUsers size={40} color={colors.accent} />
                <Title order={3} size="h4" style={{ fontWeight: 700 }}>
                  Elite Network
                </Title>
                <Text ta="center" style={{ color: colors.text }}>
                  Connect with top-tier clans and legendary players from around
                  the globe.
                </Text>
              </Stack>
            </Card>
            <Card
              withBorder
              p="xl"
              radius="lg"
              style={{
                background: "rgba(30,41,59,0.85)",
                boxShadow: "0 8px 32px 0 #0003",
                border: `1.5px solid ${colors.accent}22`,
                backdropFilter: "blur(8px)",
              }}
            >
              <Stack align="center" gap="md">
                <IconShieldCheck size={40} color={colors.accent} />
                <Title order={3} size="h4" style={{ fontWeight: 700 }}>
                  Verified Clans
                </Title>
                <Text ta="center" style={{ color: colors.text }}>
                  All clans are verified and rated by our community for quality
                  assurance.
                </Text>
              </Stack>
            </Card>
          </SimpleGrid>
        </Stack>
      </Container>
    </Box>
  );
}

function StatsSection() {
  const stats = {
    activeClans: 500,
    playersMatched: 1,
    successRate: 90,
    countries: 12,
  };

  return (
    <Box style={{ position: "relative", zIndex: 1, padding: "80px 0" }}>
      {/* Glowing orb background */}
      <Box
        style={{
          position: "absolute",
          bottom: "10%",
          right: "5%",
          width: 180,
          height: 180,
          background: "#a78bfa",
          opacity: 0.1,
          filter: "blur(60px)",
          borderRadius: "50%",
          zIndex: 0,
        }}
      />
      <Container size="lg" style={{ position: "relative", zIndex: 1 }}>
        <SimpleGrid cols={{ base: 1, sm: 2, md: 4 }} spacing="xl">
          <Card
            withBorder
            p="xl"
            radius="lg"
            style={{
              background: "rgba(30,41,59,0.85)",
              boxShadow: "0 8px 32px 0 #0003",
              border: `1.5px solid ${colors.accent}22`,
              backdropFilter: "blur(8px)",
              textAlign: "center",
            }}
          >
            <Title
              order={2}
              style={{ color: colors.accent, fontWeight: 900, fontSize: 40 }}
            >
              {stats.activeClans}+
            </Title>
            <Text size="lg" style={{ color: colors.text, fontWeight: 600 }}>
              Active Clans
            </Text>
          </Card>
          <Card
            withBorder
            p="xl"
            radius="lg"
            style={{
              background: "rgba(30,41,59,0.85)",
              boxShadow: "0 8px 32px 0 #0003",
              border: `1.5px solid ${colors.accent}22`,
              backdropFilter: "blur(8px)",
              textAlign: "center",
            }}
          >
            <Title
              order={2}
              style={{ color: colors.accent, fontWeight: 900, fontSize: 40 }}
            >
              {stats.playersMatched}K+
            </Title>
            <Text size="lg" style={{ color: colors.text, fontWeight: 600 }}>
              Players Matched
            </Text>
          </Card>
          <Card
            withBorder
            p="xl"
            radius="lg"
            style={{
              background: "rgba(30,41,59,0.85)",
              boxShadow: "0 8px 32px 0 #0003",
              border: `1.5px solid ${colors.accent}22`,
              backdropFilter: "blur(8px)",
              textAlign: "center",
            }}
          >
            <Title
              order={2}
              style={{ color: colors.accent, fontWeight: 900, fontSize: 40 }}
            >
              {stats.successRate}%
            </Title>
            <Text size="lg" style={{ color: colors.text, fontWeight: 600 }}>
              Success Rate
            </Text>
          </Card>
          <Card
            withBorder
            p="xl"
            radius="lg"
            style={{
              background: "rgba(30,41,59,0.85)",
              boxShadow: "0 8px 32px 0 #0003",
              border: `1.5px solid ${colors.accent}22`,
              backdropFilter: "blur(8px)",
              textAlign: "center",
            }}
          >
            <Title
              order={2}
              style={{ color: colors.accent, fontWeight: 900, fontSize: 40 }}
            >
              {stats.countries}
            </Title>
            <Text size="lg" style={{ color: colors.text, fontWeight: 600 }}>
              Countries
            </Text>
          </Card>
        </SimpleGrid>
      </Container>
    </Box>
  );
}

function TestimonialsSection() {
  return (
    <Box
      style={{
        position: "relative",
        zIndex: 1,
        padding: "80px 0",
        overflowX: "hidden",
      }}
    >
      {/* Glowing orb background */}
      <Box
        style={{
          position: "absolute",
          top: "15%",
          left: "50%",
          width: 200,
          height: 200,
          background: "#f97316",
          opacity: 0.08,
          filter: "blur(60px)",
          borderRadius: "50%",
          zIndex: 0,
          transform: "translateX(-50%)",
        }}
      />
      <Container
        size="lg"
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: "100%",
          padding: 0,
        }}
      >
        <Stack align="center" gap="xl" style={{ width: "100%" }}>
          <Title
            order={2}
            ta="center"
            style={{ fontWeight: 800, color: colors.text, fontSize: 38 }}
          >
            What Our Users Say
          </Title>
          <Carousel
            withIndicators
            height={300}
            slideSize={{ base: "100%", sm: "50%", md: "33.333333%" }}
            slideGap={{ base: "xl", sm: "md" }}
            emblaOptions={{ loop: true, align: "start", slidesToScroll: 1 }}
            style={{ width: "100%", maxWidth: "100vw" }}
          >
            {testimonials.map((testimonial) => (
              <Carousel.Slide
                key={testimonial.id}
                style={{ width: "100%", maxWidth: "100vw" }}
              >
                <Card
                  withBorder
                  p="xl"
                  radius="lg"
                  style={{
                    background: "rgba(30,41,59,0.85)",
                    boxShadow: "0 8px 32px 0 #0003",
                    border: `1.5px solid ${colors.accent}22`,
                    backdropFilter: "blur(8px)",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    width: "100%",
                    maxWidth: "100vw",
                    boxSizing: "border-box",
                  }}
                >
                  <Text
                    size="xl"
                    ta="center"
                    fs="italic"
                    style={{ color: colors.text, fontWeight: 500 }}
                  >
                    "{testimonial.quote}"
                  </Text>
                  <Stack align="center" gap="xs">
                    <Text fw={700} style={{ color: colors.accent }}>
                      {testimonial.author}
                    </Text>
                    <Text size="sm" style={{ color: colors.text }}>
                      {testimonial.role}
                    </Text>
                    <Text size="sm" style={{ color: colors.text }}>
                      {testimonial.clan}
                    </Text>
                  </Stack>
                </Card>
              </Carousel.Slide>
            ))}
          </Carousel>
        </Stack>
      </Container>
    </Box>
  );
}

function DemoSection() {
  return (
    <Box style={{ position: "relative", zIndex: 1, padding: "80px 0" }}>
      {/* Glowing orb background */}
      <Box
        style={{
          position: "absolute",
          top: "20%",
          right: "10%",
          width: 200,
          height: 200,
          background: "#a78bfa",
          opacity: 0.08,
          filter: "blur(60px)",
          borderRadius: "50%",
          zIndex: 0,
        }}
      />
      <Container size="lg" style={{ position: "relative", zIndex: 1 }}>
        <Stack align="center" gap="xl">
          <Title
            order={2}
            ta="center"
            style={{ fontWeight: 800, color: colors.text, fontSize: 38 }}
          >
            See It In Action
          </Title>
          <Text
            size="lg"
            ta="center"
            maw={600}
            style={{ color: colors.text, fontSize: 20 }}
          >
            Watch how Clash Recruit helps you find the perfect clan or recruit
            the best players
          </Text>
          <Card
            withBorder
            radius="lg"
            style={{
              background: "rgba(30,41,59,0.85)",
              boxShadow: "0 8px 32px 0 #0003",
              border: `1.5px solid ${colors.accent}22`,
              backdropFilter: "blur(8px)",
              width: "100%",
              maxWidth: 800,
              overflow: "hidden",
            }}
          >
            <Box
              style={{
                position: "relative",
                paddingTop: "56.25%", // 16:9 aspect ratio
                width: "100%",
              }}
            >
              <iframe
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  border: "none",
                }}
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?modestbranding=1&rel=0"
                title="Clash Recruit Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </Box>
          </Card>
        </Stack>
      </Container>
    </Box>
  );
}

function CTASection() {
  return (
    <Box style={{ position: "relative", zIndex: 1, padding: "80px 0" }}>
      {/* Glowing orb background */}
      <Box
        style={{
          position: "absolute",
          bottom: "10%",
          left: "10%",
          width: 180,
          height: 180,
          background: "#f97316",
          opacity: 0.1,
          filter: "blur(60px)",
          borderRadius: "50%",
          zIndex: 0,
        }}
      />
      <Container size="lg" style={{ position: "relative", zIndex: 1 }}>
        <Stack align="center" gap="xl">
          <Title
            order={2}
            ta="center"
            style={{ fontWeight: 800, color: colors.text, fontSize: 38 }}
          >
            Ready to Join the Community?
          </Title>
          <Text
            size="lg"
            ta="center"
            maw={600}
            style={{ color: colors.text, fontSize: 20 }}
          >
            Start your journey today and connect with thousands of Clash of
            Clans players.
          </Text>
          <Button
            size="lg"
            variant="filled"
            color="orange"
            style={{ fontWeight: 700, fontSize: 18 }}
          >
            Create Your Profile
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}

function Index() {
  return (
    <div style={{ overflowX: "hidden" }}>
      <HeroSection />
      <FeaturesSection />
      <StatsSection />
      <TestimonialsSection />
      <DemoSection />
      <CTASection />
    </div>
  );
}

export const Route = createFileRoute("/")({
  component: Index,
});
