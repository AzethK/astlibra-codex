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
    name: "Cold Bullet",
    description:
      "Summons a stationary spirit to launch a concentrated attack on the ground in front of them.",
    image: BASE + "cold_bullet.png",
    acquisition: "Grow Tree - Chapter 1",
    element: "Water",
    st: 72,
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
    name: "Thunder Spear",
    description:
      "Turns into an electricity-discharging drill that charges at the enemy. Invincible while transforming. Can be used for emergency evasion.",
    image: BASE + "thunder_spear.png",
    acquisition: "Grow Tree - Chapter 1",
    element: "Dark",
    st: 100,
  },
  {
    name: "Moonlight",
    description:
      "This double-strike has a short range, but delivers a devastating attack.",
    image: BASE + "moonlight.png",
    acquisition: "Grow Tree - Chapter 1",
    element: "Light",
    st: 120,
  },
];

export default skills;
