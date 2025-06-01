export const mockClanData = {
  name: "127.0.0.1",
  level: 1,
  warRecord: "3-1-0",
  description:
    "A competitive war clan focused on excellence and teamwork. We participate in regular wars and clan war leagues, always striving for victory while maintaining a friendly and supportive environment.",
  founded: "May 2025",
  location: "International",
  language: "English",
  warFrequency: "Always",
  clanPoints: 4500,
  members: {
    total: 45,
    th14: 5,
    th13: 8,
    th12: 12,
    th11: 15,
    th10: 5,
  },
  requirements: {
    thLevel: 10,
    heroLevels: {
      king: 30,
      queen: 30,
      warden: 30,
      champion: 30,
    },
    minClanPoints: 2000,
    minWarStars: 100,
  },
  achievements: {
    cwlRank: "Master II",
    warWinStreak: 15,
    bestWarWinStreak: 25,
    totalWars: 200,
  },
  socialLinks: {
    discord: "?link=discord",
    website: "?link=website",
  },
  tags: [
    "War Clan",
    "Competitive",
    "International",
    "English Speaking",
    "CWL Focused",
  ],
  rules: [
    "Must participate in wars when opted in",
    "Minimum 1000 donations per season",
    "No rushed bases",
    "Must be active in clan chat",
    "Must join Discord server",
  ],
};

// Create multiple mock clans for demonstration
export const mockClans = [{ ...mockClanData, id: "127001" }];
