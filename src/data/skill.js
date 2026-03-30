const BASE = import.meta.env.BASE_URL + "assets/skills/";
const skills = [
  {
    name: "Fire Dragon",
    description:
      "Transforms into a small dragon and spits out powerful fireballs. Works well against ground enemies",
    image: BASE + "fire_dragon.png",
    acquisition: "Chapter 1",
    element: "fire",
    st: 90,
  },
  {
    name: "Soaring Bird",
    description:
      "Summons a fire bird to fly diagonally upwards. It covers a wide area of the sky.",
    image: BASE + "soaring_bird.png",
    acquisition: "Chapter 3",
    element: "fire",
    st: 126,
  },
  {
    name: "Cold Bullet",
    description:
      "Summons a stationary spirit to launch a concentrated attack on the ground in front of them.",
    image: BASE + "cold_bullet.png",
    acquisition: "Grow Tree - Chapter 1",
    element: "Water",
    st: 72,
  },
  {
    name: "Killer Shark",
    description:
      "Attacks above, and also strikes a broad area on the ground. Has a great number of uses.",
    image: BASE + "killer_shark.png",
    acquisition: "Grow Tree - Chapter 3",
    element: "Water",
    st: 135,
  },
  {
    name: "Heavenly Mountain",
    description:
      "Pierces the heavens with a pillar of rock. Most effective against enemies in the air.",
    image: BASE + "heavenly_mountain.png",
    acquisition: "Grow Tree - Chapter 1",
    element: "Earth",
    st: 81,
  },
  {
    name: "Stone Shield",
    description:
      "Summons a Shield that blocks ranged attacks. The Shield follows you around for a while.",
    image: BASE + "stone_shield.png",
    acquisition: "Grow Tree - Chapter 2",
    element: "Earth",
    st: 90,
  },
  {
    name: "Wind Tiger",
    description:
      "A tiger cloaked in wind delivers a vertically narrow, but horizontally wide attack.",
    image: BASE + "wind_tiger.png",
    acquisition: "Grow Tree - Chapter 2",
    element: "Wind",
    st: 99,
  },
  {
    name: "Sylphid",
    description:
      "Increases attack speed and movement speed for a time. The amount it increases depends on your magical power.",
    image: BASE + "sylphid.png",
    acquisition: "Grow Tree - Chapter 3",
    element: "Wind",
    st: 171,
  },
  {
    name: "Thunder Spear",
    description:
      "Turns into an electricity-discharging drill that charges at the enemy. Invincible while transforming. Can be used for emergency evasion.",
    image: BASE + "thunder_spear.png",
    acquisition: "Grow Tree - Chapter 1",
    element: "Dark",
    st: 90,
  },
  {
    name: "Lollipop",
    description:
      "Summons a demon which will follow you for a while. The demon will launch an attack for you at certain intervals.",
    image: BASE + "lollipop.png",
    acquisition: "Grow Tree - Chapter 3",
    element: "Dark",
    st: 144,
  },
  {
    name: "Moonlight",
    description:
      "This double-strike has a short range, but delivers a devastating attack.",
    image: BASE + "moonlight.png",
    acquisition: "Grow Tree - Chapter 1",
    element: "Holy",
    st: 108,
  },
];

export default skills;
