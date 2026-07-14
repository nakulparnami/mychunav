// Temporary hardcoded data. In Phase 2, this will be replaced with real
// database queries (via Prisma) — but every component that imports from
// here won't need to change, because the *shape* of the data stays the same.

export type RankedItem = {
  rank: number;
  name: string;
  votes: number;
};

export type Category = {
  slug: string;
  title: string;
  tagline: string;
  items: RankedItem[];
};

export const categories: Category[] = [
  {
    slug: "food",
    title: "Food",
    tagline: "Best biryani cities in India",
    items: [
      { rank: 1, name: "Hyderabad", votes: 18420 },
      { rank: 2, name: "Lucknow", votes: 15310 },
      { rank: 3, name: "Kolkata", votes: 11208 },
    ],
  },
  {
    slug: "movies",
    title: "Movies",
    tagline: "Most rewatched Bollywood films",
    items: [
      { rank: 1, name: "Dilwale Dulhania Le Jayenge", votes: 22190 },
      { rank: 2, name: "3 Idiots", votes: 19875 },
      { rank: 3, name: "Zindagi Na Milegi Dobara", votes: 14032 },
    ],
  },
  {
    slug: "sports",
    title: "Sports",
    tagline: "Greatest Indian cricketers",
    items: [
      { rank: 1, name: "Sachin Tendulkar", votes: 31204 },
      { rank: 2, name: "MS Dhoni", votes: 27650 },
      { rank: 3, name: "Virat Kohli", votes: 26011 },
    ],
  },
  {
    slug: "brands",
    title: "Brands",
    tagline: "Most trusted Indian brands",
    items: [
      { rank: 1, name: "Tata", votes: 20440 },
      { rank: 2, name: "Amul", votes: 17982 },
      { rank: 3, name: "Parle", votes: 12564 },
    ],
  },
  {
    slug: "cities",
    title: "Cities",
    tagline: "Best cities to live in India",
    items: [
      { rank: 1, name: "Bengaluru", votes: 16230 },
      { rank: 2, name: "Pune", votes: 13871 },
      { rank: 3, name: "Chandigarh", votes: 9902 },
    ],
  },
  {
    slug: "public-issues",
    title: "Public Issues",
    tagline: "Issues that matter most right now",
    items: [
      { rank: 1, name: "Air Pollution", votes: 24810 },
      { rank: 2, name: "Job Creation", votes: 21033 },
      { rank: 3, name: "Road Safety", votes: 15782 },
    ],
  },
];
