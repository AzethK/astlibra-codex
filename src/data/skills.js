const BASE = import.meta.env.BASE_URL + "assets/skills/";
const BASE_ELEMENT = import.meta.env.BASE_URL + "assets/elements/";
const skills = [
  {
    name: "Fire Dragon",
    description:
      "Transforms into a small dragon and spits out powerful fireballs. Works well against ground enemies",
    image: BASE + "fire_dragon.png",
    acquisition: "Chapter 1",
    element: BASE_ELEMENT + "fire.png",
    st: 90,
  },
  {
    name: "Soaring Bird",
    description:
      "Summons a fire bird to fly diagonally upwards. It covers a wide area of the sky.",
    image: BASE + "soaring_bird.png",
    acquisition: "Grow Tree",
    element: BASE_ELEMENT + "fire.png",
    st: 126,
  },
  {
    name: "Berserk",
    description:
      "Increases the power of physical attacks for a time. The amount it increases depends on your magical power.",
    image: BASE + "berserk.png",
    acquisition: "Grow Tree",
    element: BASE_ELEMENT + "fire.png",
    st: 189,
  },
  {
    name: "Blaze",
    description:
      "Spews a short range, fan-shaped fire breath. The angle changes with each breath, but it's powerful.",
    image: BASE + "blaze.png",
    acquisition: "Grow Tree",
    element: BASE_ELEMENT + "fire.png",
    st: 234,
  },
  {
    name: "Cold Bullet",
    description:
      "Summons a stationary spirit to launch a concentrated attack on the ground in front of them.",
    image: BASE + "cold_bullet.png",
    acquisition: "Grow Tree",
    element: BASE_ELEMENT + "water.png",
    st: 72,
  },
  {
    name: "Killer Shark",
    description:
      "Attacks above, and also strikes a broad area on the ground. Has a great number of uses.",
    image: BASE + "killer_shark.png",
    acquisition: "Grow Tree",
    element: BASE_ELEMENT + "water.png",
    st: 135,
  },
  {
    name: "Turtle Shield",
    description:
      "Increases defensive power for a time. The amount it increases depends on your magical power.",
    image: BASE + "turtle_shield.png",
    acquisition: "Grow Tree",
    element: BASE_ELEMENT + "water.png",
    st: 171,
  },
  {
    name: "Mermaid Bubble",
    description:
      "Fires huge bubbles that can eliminate enemy bullets. The bubbles shrink when hit by an enemy or enemy bullet.",
    image: BASE + "mermaid_bubble.png",
    acquisition: "Grow Tree",
    element: BASE_ELEMENT + "water.png",
    st: 225,
  },
  {
    name: "Heavenly Mountain",
    description:
      "Pierces the heavens with a pillar of rock. Most effective against enemies in the air.",
    image: BASE + "heavenly_mountain.png",
    acquisition: "Grow Tree",
    element: BASE_ELEMENT + "earth.png",
    st: 81,
  },
  {
    name: "Stone Shield",
    description:
      "Summons a Shield that blocks ranged attacks. The Shield follows you around for a while.",
    image: BASE + "stone_shield.png",
    acquisition: "Grow Tree",
    element: BASE_ELEMENT + "earth.png",
    st: 90,
  },
  {
    name: "Assassin",
    description:
      "Dash behind an enemy and strike. Only the spear's tip can hit, but it's powerful.",
    image: BASE + "assassin.png",
    acquisition: "Grow Tree",
    element: BASE_ELEMENT + "earth.png",
    st: 180,
  },
  {
    name: "Circle of Disaster",
    description:
      "Generates a large circle of rocks that will converge at the center. It can be powerful if all the rocks hit the target.",
    image: BASE + "circle_of_disaster.png",
    acquisition: "Grow Tree",
    element: BASE_ELEMENT + "earth.png",
    st: 216,
  },
  {
    name: "Wind Tiger",
    description:
      "A tiger cloaked in wind delivers a vertically narrow, but horizontally wide attack.",
    image: BASE + "wind_tiger.png",
    acquisition: "Grow Tree",
    element: BASE_ELEMENT + "wind.png",
    st: 99,
  },
  {
    name: "Sylphid",
    description:
      "Increases attack speed and movement speed for a time. The amount it increases depends on your magical power.",
    image: BASE + "sylphid.png",
    acquisition: "Grow Tree",
    element: BASE_ELEMENT + "wind.png",
    st: 171,
  },
  {
    name: "Random Shots",
    description:
      "Can target anything on screen to attack, and always hits. If there are fewer enemies, the attack is more concentrated.",
    image: BASE + "random_shots.png",
    acquisition: "Grow Tree",
    element: BASE_ELEMENT + "wind.png",
    st: 180,
  },
  {
    name: "Whirlwind",
    description:
      "Attacks at a fixed distance. It is difficult to determine where it hits, but it's very powerful.",
    image: BASE + "whirlwind.png",
    acquisition: "Grow Tree",
    element: BASE_ELEMENT + "wind.png",
    st: 243,
  },
  {
    name: "Thunder Spear",
    description:
      "Turns into an electricity-discharging drill that charges at the enemy. Invincible while transforming. Can be used for emergency evasion.",
    image: BASE + "thunder_spear.png",
    acquisition: "Grow Tree",
    element: BASE_ELEMENT + "dark.png",
    st: 90,
  },
  {
    name: "Lollipop",
    description:
      "Summons a demon which will follow you for a while. The demon will launch an attack for you at certain intervals.",
    image: BASE + "lollipop.png",
    acquisition: "Grow Tree",
    element: BASE_ELEMENT + "dark.png",
    st: 144,
  },
  {
    name: "Thunderbolt",
    description:
      "Although its path is erratic, it generates thunderbolts that penetrate the enemy and hit far and wide.",
    image: BASE + "thunderbolt.png",
    acquisition: "Grow Tree",
    element: BASE_ELEMENT + "dark.png",
    st: 180,
  },
  {
    name: "Moonlight",
    description:
      "This double-strike has a short range, but delivers a devastating attack.",
    image: BASE + "moonlight.png",
    acquisition: "Grow Tree",
    element: BASE_ELEMENT + "holy.png",
    st: 108,
  },
  {
    name: "Unicorn",
    description:
      "Summons a monster at a fixed location, which attacks a broad area with great power for a brief period.",
    image: BASE + "unicorn.png",
    acquisition: "Grow Tree",
    element: BASE_ELEMENT + "holy.png",
    st: 117,
  },
  {
    name: "Angel",
    description:
      "Summons a holy spirit which will follow you for a while. It fires penetrating lasers at regular intervals.",
    image: BASE + "angel.png",
    acquisition: "Grow Tree",
    element: BASE_ELEMENT + "holy.png",
    st: 180,
  },
  {
    name: "Sword Waltz",
    description:
      "Slices through enemies with its sword dance. The range is particular, but it covers a wide area and hits hard.",
    image: BASE + "sword_waltz.png",
    acquisition: "Grow Tree",
    element: BASE_ELEMENT + "holy.png",
    st: 207,
  },
];

export default skills;
