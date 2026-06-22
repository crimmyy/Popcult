export type Category = {
  name: string;
  items: string[];
  image: string;
  imageAlt: string;
  imagePosition?: string;
};

export const categories: Category[] = [
  {
    name: "Anime",
    items: ["Merchandise", "Accessories", "Gifts"],
    image: "/images/anime.jpg",
    imageAlt: "Anime promotional graphic with illustrated characters",
    imagePosition: "center center",
  },
  {
    name: "Gundam",
    items: ["HG", "RG", "MG", "Tools"],
    image: "/images/gundam2.jpg",
    imageAlt: "Gundam model kit promotional graphic",
    imagePosition: "center center",
  },
  {
    name: "Sanrio",
    items: ["Plush", "Gifts", "Stationery"],
    image: "/images/sanrio2.jpg",
    imageAlt: "Sanrio character merchandise promotional graphic",
    imagePosition: "center center",
  },
  {
    name: "Anime Figures",
    items: ["Figures", "Statues", "Display"],
    image: "/images/figure.jpg",
    imageAlt: "Anime figure promotional graphic",
    imagePosition: "center center",
  },
  {
    name: "Plush",
    items: ["Character plush", "Gifts"],
    image: "/images/plush.jpg",
    imageAlt: "Character plush promotional graphic",
    imagePosition: "center center",
  },
  {
    name: "Collectibles",
    items: ["Blind boxes", "Display", "Merch"],
    image: "/images/collectible.jpg",
    imageAlt: "Pop culture collectible promotional graphic",
    imagePosition: "center center",
  },
];
