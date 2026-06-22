export type Category = {
  name: string;
  description: string;
  items: string[];
  image: string;
  imageAlt: string;
  imagePosition?: string;
};

export const categories: Category[] = [
  {
    name: "Anime",
    description: "Series merchandise, accessories, and fan-favorite finds.",
    items: ["Merchandise", "Accessories", "Gifts"],
    image: "/images/figure.jpg",
    imageAlt: "Anime figure promotional graphic",
    imagePosition: "center top",
  },
  {
    name: "Gundam",
    description: "Model kits, tools, and builds for every experience level.",
    items: ["HG", "RG", "MG", "Tools"],
    image: "/images/gundam2.jpg",
    imageAlt: "Gundam model kit promotional graphic",
    imagePosition: "center center",
  },
  {
    name: "Sanrio",
    description: "Plush, stationery, gifts, and character goods.",
    items: ["Plush", "Gifts", "Stationery"],
    image: "/images/sanrio2.jpg",
    imageAlt: "Sanrio character merchandise promotional graphic",
    imagePosition: "center center",
  },
  {
    name: "Anime Figures",
    description: "Figures, statues, and display-ready collectibles.",
    items: ["Figures", "Statues", "Display"],
    image: "/images/figure.jpg",
    imageAlt: "Anime figure promotional graphic",
    imagePosition: "center center",
  },
  {
    name: "Plush",
    description: "Soft character favorites and giftable discoveries.",
    items: ["Character plush", "Gifts"],
    image: "/images/plush.jpg",
    imageAlt: "Character plush promotional graphic",
    imagePosition: "center center",
  },
  {
    name: "Collectibles",
    description: "Blind boxes, display pieces, and pop culture merchandise.",
    items: ["Blind boxes", "Display", "Merch"],
    image: "/images/collectible.jpg",
    imageAlt: "Pop culture collectible promotional graphic",
    imagePosition: "center center",
  },
];
