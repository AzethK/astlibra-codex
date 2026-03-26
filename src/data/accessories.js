const BASE = import.meta.env.BASE_URL + "assets/accessories/";
const accessories = [
  {
    name: "Wooden Ring",
    description:
      "An unusual wooden ring. Given power by the wishes it carries.",
    image: BASE + "wooden_ring.png",
    stats: { agility: 5 },
    acquisition: "Starting weapon",
  },
  {
    name: "Lollipop",
    description:
      "A sweet candy you hold in your hand to lick. It strangely never runs out, but has traces where someone has licked it.",
    image: BASE + "lollipop.png",
    stats: {
      maxhp: 100,
      defense: 30,
      bleedres: 50,
      effect: "Defeating Enemies Recovers HP",
    },
    acquisition: "Starting weapon",
  },
];

export default accessories;
