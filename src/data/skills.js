const BASE = import.meta.env.BASE_URL + "assets/skills/";
const BASE_ELEMENT = import.meta.env.BASE_URL + "assets/elements/";
const skills = [
  {
    name: "Fire Dragon",
    description:
      "Transforms into a small dragon and spits out powerful fireballs. Works well against ground enemies",
    altName: "Petit Fire",
    altDescription:
      "Shoots fire bullets at high speed, aimed squarely at the front. The bullets are small but explode on impact.",
    image: BASE + "fire_dragon.png",
    acquisition: "Chapter 1",
    element: BASE_ELEMENT + "fire.png",
    st: 90,
    atlSt: 225,
  },
  {
    name: "Soaring Bird",
    description:
      "Summons a fire bird to fly diagonally upwards. It covers a wide area of the sky.",
    altName: "Phoenix",
    altDescription:
      "Soars above and explodes across a broad area when it reaches its peak.",
    image: BASE + "soaring_bird.png",
    acquisition: "Grow Tree",
    element: BASE_ELEMENT + "fire.png",
    st: 126,
    altSt: 270,
  },
  {
    name: "Berserk",
    description:
      "Increases the power of physical attacks for a time. The amount it increases depends on your magical power.",
    altName: "Fire Shower",
    altDescription:
      "Summons a fire spirit which will follow you for a while. Generates a rain of fire from its hands.",
    image: BASE + "berserk.png",
    acquisition: "Grow Tree",
    element: BASE_ELEMENT + "fire.png",
    st: 189,
    altSt: 360,
  },
  {
    name: "Blaze",
    description:
      "Spews a short range, fan-shaped fire breath. The angle changes with each breath, but it's powerful.",
    altName: "Furious Dragon",
    altDescription:
      "Launches flames with the same trajectory as Blaze. It easily hits enemies on the ground and sets the area on fire.",
    image: BASE + "blaze.png",
    acquisition: "Grow Tree",
    element: BASE_ELEMENT + "fire.png",
    st: 234,
    altSt: 288,
  },
  {
    name: "Fire Rondo",
    description:
      "Summons the Great Witch Lieselotte to launch a powerful, fiery explosion.",
    altName: "Pumpkin Bomb",
    altDescription:
      "A giant fire-filled pumpkin falls from the sky. Inflicts damage quickly.",
    image: BASE + "fire_rondo.png",
    acquisition: "Grow Tree",
    element: BASE_ELEMENT + "fire.png",
    st: 297,
    altSt: 342,
  },
  {
    name: "Cold Bullet",
    description:
      "Summons a stationary spirit to launch a concentrated attack on the ground in front of them.",
    altName: "Hip Attack",
    altDescription:
      "A water spirit hurls itself at the enemy. The range is short and narrow, but the attack is powerful.",
    image: BASE + "cold_bullet.png",
    acquisition: "Grow Tree",
    element: BASE_ELEMENT + "water.png",
    st: 72,
    altSt: 315,
  },
  {
    name: "Killer Shark",
    description:
      "Attacks above, and also strikes a broad area on the ground. Has a great number of uses.",
    altName: "Jaws",
    altDescription:
      "Attacks in a straight line. It appears quickly and is very easy to use.",
    image: BASE + "killer_shark.png",
    acquisition: "Grow Tree",
    element: BASE_ELEMENT + "water.png",
    st: 135,
    altSt: 288,
  },
  {
    name: "Turtle Shield",
    description:
      "Increases defensive power for a time. The amount it increases depends on your magical power.",
    altName: "Turtle Reflect",
    altDescription:
      "Summons a huge mirror which deflects enemy bullets. Its use time is increased by magic.",
    image: BASE + "turtle_shield.png",
    acquisition: "Grow Tree",
    element: BASE_ELEMENT + "water.png",
    st: 171,
    altSt: 315,
  },
  {
    name: "Mermaid Bubble",
    description:
      "Fires huge bubbles that can eliminate enemy bullets. The bubbles shrink when hit by an enemy or enemy bullet.",
    altName: "Bubble Princess",
    altDescription:
      "Summons a water spirit which will follow you for a while. Fires bubbles at regular intervals that can eliminate enemy bullets.",
    image: BASE + "mermaid_bubble.png",
    acquisition: "Grow Tree",
    element: BASE_ELEMENT + "water.png",
    st: 225,
    altSt: 495,
  },
  {
    name: "War God's Iron-Cutting Flash",
    description:
      "Summons the God of War, Geraldine, to attack all enemies on screen.",
    altName: "War God's Boisterous Dance",
    altDescription:
      "Attacks the entire screen after cutting down enemies in your path. Has high burst power and a long invincibility period.",
    image: BASE + "war_gods_iron_cutting_flash.png",
    acquisition: "Grow Tree",
    element: BASE_ELEMENT + "water.png",
    st: 405,
    altSt: 450,
  },
  {
    name: "Heavenly Mountain",
    description:
      "Pierces the heavens with a pillar of rock. Most effective against enemies in the air.",
    altName: "Collapsing Mountain",
    altDescription:
      "Attacks in front with a series of wide range, up-and-down attacks. More powerful if the target is hit by the tips of the rocks.",
    image: BASE + "heavenly_mountain.png",
    acquisition: "Grow Tree",
    element: BASE_ELEMENT + "earth.png",
    st: 81,
    altSt: 252,
  },
  {
    name: "Stone Shield",
    description:
      "Summons a Shield that blocks ranged attacks. The Shield follows you around for a while.",
    altName: "Boulder Shield",
    altDescription:
      "A large stone appears that prevents enemy bullets. It will follow you for a while and offer superior protection.",
    image: BASE + "stone_shield.png",
    acquisition: "Grow Tree",
    element: BASE_ELEMENT + "earth.png",
    st: 90,
    altSt: 180,
  },
  {
    name: "Assassin",
    description:
      "Dash behind an enemy and strike. Only the spear's tip can hit, but it's powerful.",
    altName: "Spear Dance",
    altDescription:
      "Summons a shadow that attacks the air above you multiple times. Although it is hard to hit with, it deals massive damage.",
    image: BASE + "assassin.png",
    acquisition: "Grow Tree",
    element: BASE_ELEMENT + "earth.png",
    st: 180,
    altSt: 288,
  },
  {
    name: "Circle of Disaster",
    description:
      "Generates a large circle of rocks that will converge at the center. It can be powerful if all the rocks hit the target.",
    altName: "Rock Disaster",
    altDescription:
      "Randomly generates rocks which fly towards their nearest enemy. It has an extremely high hit rate.",
    image: BASE + "circle_of_disaster.png",
    acquisition: "Grow Tree",
    element: BASE_ELEMENT + "earth.png",
    st: 216,
    altSt: 306,
  },
  {
    name: "Tyrant's Tentacle Blades",
    description:
      "Summons the tyrant Adolphus to attack across a broad area on the ground.",
    altName: "Poisonous Meteor",
    altDescription:
      "Swarm of poisonous rocks that attack across the screen. Covers most of the screen and hits many enemies.",
    image: BASE + "tyrants_tentacle_blades.png",
    acquisition: "Grow Tree",
    element: BASE_ELEMENT + "earth.png",
    st: 315,
    atlSt: 387,
  },
  {
    name: "Wind Tiger",
    description:
      "A tiger cloaked in wind delivers a vertically narrow, but horizontally wide attack.",
    altName: "Sky Tiger Fang & Claw",
    altDescription:
      "This combo targets enemies in the air at mid-range. Can be performed in various situations and is also very powerful.",
    image: BASE + "wind_tiger.png",
    acquisition: "Grow Tree",
    element: BASE_ELEMENT + "wind.png",
    st: 99,
    altSt: 207,
  },
  {
    name: "Sylphid",
    description:
      "Increases attack speed and movement speed for a time. The amount it increases depends on your magical power.",
    altName: "Nymph",
    altDescription:
      "Summons a wind spirit which will follow you for a while. Fires arc-shaped gales of wind at regular intervals.",
    image: BASE + "sylphid.png",
    acquisition: "Grow Tree",
    element: BASE_ELEMENT + "wind.png",
    st: 171,
    altSt: 342,
  },
  {
    name: "Random Shots",
    description:
      "Can target anything on screen to attack, and always hits. If there are fewer enemies, the attack is more concentrated.",
    altName: "Piercing Shot",
    altDescription:
      "After a long charge, makes a long-range piercing attack in a straight line. It is highly powerful and effective against enemies lined up in a row.",
    image: BASE + "random_shots.png",
    acquisition: "Grow Tree",
    element: BASE_ELEMENT + "wind.png",
    st: 180,
    altSt: 270,
  },
  {
    name: "Whirlwind",
    description:
      "Attacks at a fixed distance. It is difficult to determine where it hits, but it's very powerful.",
    altName: "Martial Arts",
    altDescription:
      "A wind spirit delivers three kicks by itself. Attacks in the air overhead an is extremely powerful.",
    image: BASE + "whirlwind.png",
    acquisition: "Grow Tree",
    element: BASE_ELEMENT + "wind.png",
    st: 243,
    altSt: 360,
  },
  {
    name: "Oberon's March",
    description:
      "Summons the Fairy Queen, Beatrice. She attacks a wide area before recovering your HP.",
    altName: "Spirit Queen",
    altDescription:
      "Summons the spirit queen, who will follow you for a while. Moves independently and attacks with scales and magic",
    image: BASE + "oberons_march.png",
    acquisition: "Grow Tree",
    element: BASE_ELEMENT + "wind.png",
    st: 288,
    altSt: 450,
  },
  {
    name: "Thunder Spear",
    description:
      "Turns into an electricity-discharging drill that charges at the enemy. Invincible while transforming. Can be used for emergency evasion.",
    altName: "Magnetic",
    altDescription:
      "Attacks by drawing in balls of lightning from the surroundings. Highly powerful if used skillfully.",
    image: BASE + "thunder_spear.png",
    acquisition: "Grow Tree",
    element: BASE_ELEMENT + "dark.png",
    st: 90,
    altSt: 270,
  },
  {
    name: "Lollipop",
    description:
      "Summons a demon which will follow you for a while. The demon will launch an attack for you at certain intervals.",
    altName: "Magic Broom",
    altDescription:
      "Increases magical power for a time. The amount it increases depends on your magical power.",
    image: BASE + "lollipop.png",
    acquisition: "Grow Tree",
    element: BASE_ELEMENT + "dark.png",
    st: 144,
    altSt: 270,
  },
  {
    name: "Thunderbolt",
    description:
      "Although its path is erratic, it generates thunderbolts that penetrate the enemy and hit far and wide.",
    altName: "Chain Lightning",
    altDescription:
      "Lightning that tracks the enemy. Difficult to aim, but it will follow its target wherever it goes.",
    image: BASE + "thunderbolt.png",
    acquisition: "Grow Tree",
    element: BASE_ELEMENT + "dark.png",
    st: 180,
    altSt: 315,
  },
  {
    name: "Purple Flash",
    description:
      "Placed where the skill is activated, it remains there and attacks the area multiple times. Easily useful in various situations.",
    altName: "Thunder and Lightning",
    altDescription:
      "Launches a medium-range discharge attack after a short build-up. Has a wide hit range and instantly strikes with high power.",
    image: BASE + "purple_flash.png",
    acquisition: "Grow Tree",
    element: BASE_ELEMENT + "dark.png",
    st: 252,
    altSt: 333,
  },
  {
    name: "Dark Flare",
    description:
      "Summons Al-Khamis, the Dragon King. It takes time to activate but can inflict great damage to a wide area.",
    altName: "Dark Scales",
    altDescription:
      "Follows the enemy for a short time and attacks continuously. Lays waste in a medium radius with a barrage of bullets.",
    image: BASE + "dark_flare.png",
    acquisition: "Grow Tree",
    element: BASE_ELEMENT + "dark.png",
    st: 432,
    altSt: 468,
  },
  {
    name: "Moonlight",
    description:
      "This double-strike has a short range, but delivers a devastating attack.",
    altName: "Copter",
    altDescription:
      "Moves at high speed while slashing diagonally upward into the sky. Because it covers a wide area, it's very easy to hit airborne enemies.",
    image: BASE + "moonlight.png",
    acquisition: "Grow Tree",
    element: BASE_ELEMENT + "holy.png",
    st: 108,
    altSt: 387,
  },
  {
    name: "Unicorn",
    description:
      "Summons a monster at a fixed location, which attacks a broad area with great power for a brief period.",
    altName: "Qilin",
    altDescription:
      "Jumps around and makes thrusting attacks with its horn. Inflicts major damage both at mid-range and in the air.",
    image: BASE + "unicorn.png",
    acquisition: "Grow Tree",
    element: BASE_ELEMENT + "holy.png",
    st: 117,
    altSt: 324,
  },
  {
    name: "Angel",
    description:
      "Summons a holy spirit which will follow you for a while. It fires penetrating lasers at regular intervals.",
    altName: "Regeneration",
    altDescription:
      "Rapidly recovers your health for a time. The amount of recovery depends on your magical power.",
    image: BASE + "angel.png",
    acquisition: "Grow Tree",
    element: BASE_ELEMENT + "holy.png",
    st: 180,
    altSt: 378,
  },
  {
    name: "Sword Waltz",
    description:
      "Slices through enemies with its sword dance. The range is particular, but it covers a wide area and hits hard.",
    altName: "Actraiser",
    altDescription:
      "Summons a monster which inflicts damage by engulfing all enemies in the vertical direction. Slow to launch but easy to aim and powerful.",
    image: BASE + "sword_waltz.png",
    acquisition: "Grow Tree",
    element: BASE_ELEMENT + "holy.png",
    st: 207,
    altSt: 342,
  },
  {
    name: "Valkyrie Strike",
    description:
      "Summons Astraea, the Goddess of Fate. Inflicts significant damage to the designated area after a brtief moment.",
    altName: "Astroberry Jam",
    altDescription:
      "Causes meteorites to fall, inflicting heavy damage over a wide area. Landing every hit is difficult, but it has the strongest firepower.",
    image: BASE + "valkyrie_strike.png",
    acquisition: "Grow Tree",
    element: BASE_ELEMENT + "holy.png",
    st: 378,
    altSt: 414,
  },
];

export default skills;
