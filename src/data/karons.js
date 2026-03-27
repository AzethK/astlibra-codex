const karons = [
  {
    name: "Magical Vision",
    description: "Allows you to see remaining enemy physical strength (HP)",
    cost: 1,
    mode: "BASIC",
    acquisition: "Starting Karon",
  },
  {
    name: "Breather",
    altName: "Auto Summon",
    description: "Slows down the speed of decreasing ST.",
    altDescription:
      "Randomly activates useable possession skills at a regular interval.",
    cost: 2,
    mode: "POSSESSION SKILL",
    acquisition: "Starting Karon",
  },
  {
    name: "Eliminate",
    description:
      "Increases ST consumption but your possession skills will eliminate enemy bullets when activated.",
    cost: 3,
    mode: "POSSESSION SKILL",
    acquisition: "Starting Karon",
  },
  {
    name: "Lion Heart",
    description: "Extends the range of your possession skills.",
    cost: 3,
    mode: "POSSESSION SKILL",
    acquisition: "Starting Karon",
  },
  {
    name: "Demon Rage",
    description:
      "Doubles damage caused by possession skills. Consumes twice as much ST.",
    cost: 6,
    mode: "POSSESSION SKILL",
    acquisition: "Starting Karon",
  },
  {
    name: "Chicken Heart",
    description: "Shortens the range of your possession skills.",
    cost: 3,
    mode: "POSSESSION SKILL",
    acquisition: "Starting Karon",
  },
  {
    name: "Energy Drain",
    description:
      "If an enemy attacks you during a possession skill, restore HP equal to one half of what the damage would be.",
    cost: 8,
    mode: "POSSESSION SKILL",
    acquisition: "Starting Karon",
  },
  {
    name: "Great Magic",
    description: "Significantly extends the time until ST begins to decrease.",
    cost: 4,
    mode: "POSSESSION SKILL",
    acquisition: "Starting Karon",
  },
  {
    name: "Bushido",
    description: "Increases ST, but lowers your HP",
    cost: 5,
    mode: "POSSESSION SKILL",
    acquisition: "Starting Karon",
  },
  {
    name: "Flawless",
    description:
      "Slightly increases ST consumption, but you won't be affected by any abnormal statuses while using possession skills.",
    cost: 6,
    mode: "POSSESSION SKILL",
    acquisition: "Starting Karon",
  },
  {
    name: "Full Burst",
    description:
      "Consume all ST when using a possession skill. In exchange, damage is increased in proportion to how much extra ST was used.",
    cost: 6,
    mode: "POSSESSION SKILL",
    acquisition: "Starting Karon",
  },
  {
    name: "Darkness",
    description:
      "When activating possession skills, consumes HP corresponding to the ST consumed, but skill power is greatly increased.",
    cost: 7,
    mode: "POSSESSION SKILL",
    acquisition: "Starting Karon",
  },
  {
    name: "Artisan",
    description:
      "The ST required to activate possession skills remains the same, but the actual ST consumed is reduced.",
    cost: 10,
    mode: "POSSESSION SKILL",
    acquisition: "Starting Karon",
  },
];

export default karons;
