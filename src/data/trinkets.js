const BASE = import.meta.env.BASE_URL + "assets/trinkets/";
const trinkets = [
  {
    name: "Wooden Ring",
    description:
      "An unusual wooden ring. Given power by the wishes it carries.",
    image: BASE + "wooden_ring.png",
    stats: { agility: 5 },
    acquisition: "Pekkochira Weapon Shop / Rispadar Weapon Shop",
    materials: ["Wooden Log"],
    materialAmount: [2],
  },
  {
    name: "Pretty Ring",
    description: "A beautiful, pure_white ring. Exudes power, albeit slight.",
    image: BASE + "pretty_ring.png",
    stats: { atk: 5 },
    acquisition: "Pekkochira Weapon Shop / Rispadar Weapon Shop",
    materials: ["Slime's Eyeball", "Cobweb"],
    materialAmount: [1, 1],
  },
  {
    name: "Bone Necklace",
    description:
      "A creepy collar made from strung bones. Disconcerting, perhaps due to its looks or power.",
    image: BASE + "bone_necklace.png",
    stats: { def: 5, guard: 2, agility: 6 },
    acquisition: "Pekkochira Weapon Shop / Rispadar Weapon Shop",
    materials: ["Beautiful Bones", "Bat Wings"],
    materialAmount: [1, 1],
  },
  {
    name: "Fang Amulet",
    description: "An amulet shaped like a fang. Seemed to make you stronger.",
    image: BASE + "fang_amulet.png",
    stats: { maxst: 5, atk: 3, guard: 5 },
    acquisition: `Arena Reward from "Freedive"`,
  },
  {
    name: "Dragon Cup",
    description:
      "Legend says that a dragon drank liquor from this cup. Extends time that ST is maintained.",
    image: BASE + "dragon_cup.png",
    stats: { agility: 5, luck: 2, adaptability: 5, effect: "ST Increased +" },
    acquisition: "Pekkochira Formula",
    materials: ["Plain Cookies", "Cobweb", "Clay-like Silver Stones"],
    materialAmount: [1, 1, 1],
  },
  {
    name: "Iron Ring",
    description: "An iron ring infused with magical powers.",
    image: BASE + "iron_ring.png",
    stats: { maxhp: 10, defense: 4, guard: 5, agility: -5 },
    acquisition: "Bridion Swamp Mokyun Shop",
    materials: ["Revolting Meat", "Mandragora"],
    materialAmount: [2, 1],
  },
  {
    name: "Ball and Chain",
    description:
      "Made to restrain criminals. Extremely heavy, but can help you keep your footing in water.",
    image: BASE + "ball_and_chain.png",
    stats: { def: 6, guard: 30, agility: -30, adaptability: 10 },
    acquisition: "Bridion Swamp Mokyun Shop",
    materials: ["Stones", "Mandragora"],
    materialAmount: [10, 1],
  },
  {
    name: "Ring of Flames",
    description: "A ring adorned with a fire crystal. It adds a bit of style.",
    image: BASE + "ring_of_flames.png",
    stats: { maxhp: 20, magical_power: 6 },
    acquisition: "Bridion Swamp Mokyun Shop",
    materials: ["Mandragora", "Tadpole"],
    materialAmount: [2, 1],
  },
  {
    name: "Indio Decoration",
    description:
      "A good luck charm passed down in a cetain tribe. It offers promising effects.",
    image: BASE + "indio_decoration.png",
    stats: { agility: 2, parares: 40, luck: 5 },
    acquisition: "Arena Battle, Bridion Cup, 'Goblin Army' Reward",
  },
  {
    name: "Dragon Harp",
    description:
      "This harp is made of dragon fangs. It extends the duration of combos.",
    image: BASE + "dragon_harp.png",
    stats: { agility: 5, luck: 5, adaptability: 2, effect: "Combo Duration +" },
    acquisition: "Bridion Swamp Formula",
    materials: ["Egg on Bread", "Tadpole", "Copper Ore"],
    materialAmount: [2, 1, 1],
  },
  {
    name: "Pure White Feather",
    description:
      "A feather as pure as this possesses magical power all by itself.",
    image: BASE + "pure_white_feather.png",
    stats: { maxst: 10, magical_power: 8, petrires: 20 },
    acquisition: "Belkade Volcano Mokyun Shop",
    materials: ["Iron Ingot", "Demon Horn"],
    materialAmount: [2, 1],
  },
  {
    name: "Screw Ring",
    description:
      "Characterized by a slight twist. The angle of the twist holds the power.",
    image: BASE + "screw_ring.png",
    stats: { maxhp: 20, def: 5, guard: 10 },
    acquisition: "Belkade Volcano Mokyun Shop",
    materials: ["Iron Ore", "Lava Pebble"],
    materialAmount: [2, 2],
  },
  {
    name: "Blue Gem Pendant",
    description:
      "A pendant set with a water crystal. It offers various resistances.",
    image: BASE + "blue_gem_pendant.png",
    stats: { def: 8, bleedres: 20, blindres: 20, parares: 20 },
    acquisition: "Belkade Volcano Mokyun Shop",
    materials: ["Iron Ingot", "Putrid Gill"],
    materialAmount: [1, 2],
  },
  {
    name: "Power Ring",
    description:
      "A ring specializing in attack. The best defense is a good offense.",
    image: BASE + "power_ring.png",
    stats: { atk: 15, def: -5 },
    acquisition: "Mokyun Shop Gacha Reward",
  },
  {
    name: "Dragon Ring",
    description:
      "This ring is made of dragon talons. It boosts damage inflicted by all ranged attacks.",
    image: BASE + "dragon_ring.png",
    stats: {
      agility: 5,
      luck: 2,
      adaptability: 2,
      effect: "Ranged Attack Power +",
    },
    acquisition: "Belkade Volcano Formula",
    materials: ["Apple Pie", "Putrid Gill", "Iron Ore"],
    materialAmount: [1, 1, 1],
  },
  {
    name: "Gold Necklace",
    description:
      "Fashioned from a sumptuous amount of gold, it is heavy and taxing on the shoulders.",
    image: BASE + "gold_necklace.png",
    stats: { maxhp: 60 },
    acquisition: "Elizas / Sea Serpent Cave Mokyun Shop",
    materials: ["Iron Ingot", "Hawk Feather"],
    materialAmount: [1, 2],
  },
  {
    name: "Dragon Staff",
    description:
      "This staff is made of dragon scales. It lessens damages sustained from ranged attacks.",
    image: BASE + "dragon_staff.png",
    stats: {
      agility: 5,
      luck: 2,
      adaptability: 2,
      effect: "Ranged Attack Defense +",
    },
    acquisition: "Elizas / Sea Serpent Cave Formula",
    materials: ["Strawberry Au Lait", "Hawk Feather", "Gold Ore"],
    materialAmount: [1, 1, 1],
  },
  {
    name: "Ring of Prayer",
    description:
      "Ring that restores MP when used. However, MP does not exist, so it provides no benefit.",
    image: BASE + "ring_of_prayer.png",
    stats: { maxst: 20, magical_power: 15 },
    acquisition: "Elizas / Sea Serpent Cave Mokyun Shop",
    materials: ["Iron Ingot", "Crab Stick"],
    materialAmount: [1, 2],
  },
  {
    name: "Serpent God's Ring",
    description:
      "A divine tool used in the ritual worshipping the Serpent Goddess. Amazingly, it improves the wearer's swimming ability.",
    image: BASE + "serpent_gods_ring.png",
    stats: { def: 8, guard: 10, adaptability: 20 },
    acquisition: "Elizas / Sea Serpent Cave Mokyun Shop",
    materials: ["Gold Ingot", "Sashimi"],
    materialAmount: [1, 2],
  },
  {
    name: "Emerald Earring",
    description:
      "An earring made of emerald. It offers resistance to bleeding and paralysis.",
    image: BASE + "emerald_earring.png",
    stats: { agility: 6, bleedres: 30, parares: 30 },
    acquisition: "Arena Battle, Elizas Cup 'Soft-shelled Turtle' Reward",
  },
  {
    name: "Floral Wreath",
    description:
      "A mysterious trinket that doubles a woman's beauty when worn.",
    image: BASE + "floral_wreath.png",
    stats: { maxhp: 50, maxst: 20 },
    acquisition: "Akrasinon / Demon King's Castle",
    materials: ["Gold Ingot", "Claystones"],
    materialAmount: [1, 2],
  },
  {
    name: "Cross",
    description:
      "An object used when praying to the gods. It offers protection against calamities.",
    image: BASE + "cross.png",
    stats: { bleedres: 30, blindres: 30, petrires: 30, parares: 30 },
    acquisition: "Akrasinon / Demon King's Castle",
    materials: ["Gold Ingot", "Lizard Scales"],
    materialAmount: [1, 2],
  },
  {
    name: "Phoenix Feather",
    description:
      "The feather of a phoenix in the dragon's lair. ST and magic power are increasing.",
    image: BASE + "phoenix_feather.png",
    stats: { maxst: 40, magical_power: 20 },
    acquisition: "Mokyun Shop Gacha Reward",
  },
  {
    name: "Dragon Leather Boots",
    description:
      "Boots made from dragon hide. Increases the number of possible midair jumps.",
    image: BASE + "dragon_leather_boots.png",
    stats: { agility: 10, luck: 2, adaptability: 2, effect: "Midair Jump +" },
    acquisition: "Akrasinon / Demon King's Castle Formula",
    materials: ["Chocolate Pie", "Minotaur's Axe", "High-carbon Steel Ore"],
    materialAmount: [1, 1, 1],
  },
  {
    name: "Ring of Protection",
    description:
      "Ring that reinforces defense, guard, and HP. However, it slightly decreases attack.",
    image: BASE + "ring_of_protection.png",
    stats: { maxhp: 50, atk: -20, def: 20, guard: 20 },
    acquisition: "Akrasinon / Demon King's Castle",
    materials: ["Damascus Ingot", "Gargoyle's Wings"],
    materialAmount: [1, 2],
  },
  {
    name: "Shiro's Transformation Earrings",
    description:
      "These earrings are always worn by Shiro. They turn her into a slender woman.",
    stats: { effect: "Change appearance to Shiro" },
    image: BASE + "girls_earrings.png",
    acquisition: "Belkade Mining Town Event",
  },
  {
    name: "Long-Haired Wig",
    description: "A feminine wig. It can make some men look like women.",
    image: BASE + "long_haired_wig.png",
    stats: { guard: 10, agility: 10, luck: 10 },
    acquisition: "Elizas Inn Event",
  },
  {
    name: "Teardrop",
    description: "A necklace mimicking the shape of teardrops.",
    image: BASE + "teardrop.png",
    stats: { agility: 5, petrires: 30, parares: 30, adaptability: 10 },
    acquisition: "Urugut Mountains / Elysium Mokyun Shop",
    materials: ["Damascus Ingot", "Slime Jelly", "Penguin's Egg"],
    materialAmount: [1, 1, 1],
  },
  {
    name: "Gold Bracelet",
    description: "A gorgeous bracelet made of gold.",
    image: BASE + "gold_bracelet.png",
    stats: { maxhp: 100, luck: 20 },
    acquisition: "Urugut Mountains / Elysium Mokyun Shop",
    materials: ["Mithril", "Yeti's Fur", "Shield of Rispadar"],
    materialAmount: [1, 1, 1],
  },
  {
    name: "Ancient Ring",
    description:
      "An unusual ring that looks like it's made of stone, but for some reason it shines.",
    image: BASE + "ancient_ring.png",
    stats: { maxst: 20, guard: 20, blindres: 20 },
    acquisition: "Arena Battle, Urugut Cup 'Instant Firepower' Reward.",
  },
  {
    name: "Ancient Necklace",
    description: "A necklace containing the power of the ruins.",
    image: BASE + "ancient_necklace.png",
    stats: { def: 20, magical_power: 25, bleedres: 20 },
    acquisition: "Urugut Mountains / Elysium Mokyun Shop",
    materials: ["Mithril", "Slice of Ancient Fish", "Mirror Fragment"],
    materialAmount: [1, 1, 1],
  },
  {
    name: "Flower Ring",
    description: "Ring set with an eerlasting flower.",
    image: BASE + "flower_ring.png",
    stats: { atk: 25, agility: 10, luck: 10 },
    acquisition: "Urugut Mountains / Elysium Formula",
    materials: ["Chocolate Cookie", "Yeti's Fur", "Magical Silver Ore"],
    materialAmount: [1, 1, 1],
  },
  {
    name: "Tanzanite Ring",
    description: "Ring set with a large blue gem",
    image: BASE + "tanzanite_ring.png",
    stats: { maxst: 10, magical_power: 10, adaptability: 30 },
    acquisition: "Anesta / Belkade Mining Town Mokyun Shop",
    materials: ["Mithril", "Grasshopper's Wings", "Insect Feet"],
    materialAmount: [1, 1, 1],
  },
  {
    name: "Power Gloves",
    description: "Gloves that significantly increase arm power.",
    image: BASE + "power_gloves.png",
    stats: { atk: 35, bleedres: 20, petrires: 10 },
    acquisition: "Anesta / Belkade Mining Town Mokyun Shop",
    materials: ["Mithril", "Bewitched Tree Branch", "Beastly Tree's Fungi"],
    materialAmount: [1, 1, 1],
  },
  {
    name: "Elemental Cloth",
    description:
      "Cloak that works to dispel evil spirits. It can prevent many abnormal statuses",
    image: BASE + "elemental_cloth.png",
    stats: { bleedres: 40, blindres: 40, petrires: 40, parares: 40 },
    acquisition: "Arena Battle, Anesta Cup 'Stinger' Reward.",
  },
  {
    name: "Devil's Ring",
    description: "This ring is believed to have sprung from hell.",
    image: BASE + "devils_ring.png",
    stats: { maxhp: 100, maxst: 20, parares: 10 },
    acquisition: "Anesta / Belkade Mining Town Mokyun Shop",
    materials: ["Adamantite", "Dual Attribute Core", "Tough Leg Meat"],
    materialAmount: [1, 1, 1],
  },
  {
    name: "Dragoness Ring",
    description:
      "This ring was allegedly given by a dragon to his human sweetheart. A powerful force dwells within it.",
    image: BASE + "dragoness_ring.png",
    stats: { maxhp: 100, atk: 15, def: 15, guard: 10 },
    acquisition: "Anesta / Belkade Mining Town Formula",
    materials: ["Mochi Rolled in Bean Jam", "Spider Butt", "Adamantine"],
    materialAmount: [1, 1, 1],
  },
  {
    name: "Halloween Belt",
    description:
      "A popular fashion item this autumn, it's worn at fancy dress parties.",
    image: BASE + "halloween_belt.png",
    stats: { maxhp: 100, atk: 20, bleedres: 40, parares: 40 },
    acquisition: "Tokyo / Research Lab Mokyun Shop",
    materials: ["Adamantite", "Cable", "Gear"],
    materialAmount: [1, 1, 1],
  },
  {
    name: "Magic Gloves",
    description:
      "These gloves reinforce so-called magic in the ancient world, what will be known as telekinesis in the future.",
    image: BASE + "magic_gloves.png",
    stats: { magical_power: 50 },
    acquisition: "Tokyo / Research Lab Mokyun Shop",
    materials: ["Orichalcum", "Battery", "Heart"],
    materialAmount: [1, 1, 1],
  },
  {
    name: "Gold Pocket Watch",
    description: "This rare pocket watc contains a hint of Chronos's power.",
    image: BASE + "gold_pocket_watch.png",
    stats: { maxst: 30, agility: 20, poisonres: 40, luck: 10 },
    acquisition: "Arena Battle, Tokyo Cup 'Harem' Reward.",
  },
  {
    name: "Magic Ore Ring",
    description: "Terrifying ring set with the gouged-out eye of a devil.",
    image: BASE + "magic_ore_ring.png",
    stats: { maxhp: 50, def: 20, magical_power: 10, petrires: 40 },
    acquisition: "Tokyo / Research Lab Mokyun Shop",
    materials: ["Orichalcum", "Screws", "Spring"],
    materialAmount: [1, 1, 1],
  },
  {
    name: "Magic Scale",
    description:
      "A fish scalee believed to have dropped from the heavenly sea. It offers powerful defense.",
    image: BASE + "magic_scale.png",
    stats: { maxhp: 200, def: 30, guard: 20, luck: 5 },
    acquisition: "Tokyo / Research Lab Formula",
    materials: ["Delicious Cake", "Battery", "Hihi-Irokane"],
    materialAmount: [2, 1, 1],
  },
  {
    name: "Hero's Hair Ornament",
    description:
      "This hair ornament is worthy of a beautiful hero, man or woman. It significantly increases attack and defense power.",
    image: BASE + "heros_hair_ornament.png",
    stats: { atk: 50, def: 50, agility: 10 },
    acquisition: "Arena Battle, Maiden Cup 'There Are Three' Reward",
  },
  {
    name: "Dark Matter",
    description:
      "This mysterious gem is made of dark mater. It is packed with immense magical power.",
    image: BASE + "dark_matter.png",
    stats: { maxst: 50, magical_power: 30, luck: 10 },
    acquisition: "Arena Battle, Maiden Cup 'Great Monster War' Reward.",
  },
  {
    name: "Glorious",
    description:
      "This mystical orb came from another planet. Its wearer is believed to be destined for glory.",
    image: BASE + "glorious.png",
    stats: { maxhp: 300, def: 50, guard: 30, magical_power: 10 },
    acquisition: "Arena Battle, Maiden Cup 'Barrier' Reward.",
  },
  {
    name: "Ability Goggles",
    description:
      "These goggles increase the chance that boards will come with Stat pieces attached.",
    image: BASE + "ability_goggles.png",
    stats: { effect: "Stat Piece Chance+" },
    acquisition: "Mokyun Shop Gacha Reward",
  },
  {
    name: "Special Goggles",
    description:
      "These goggles increase the chance that boards will come with Special pieces attached.",
    image: BASE + "special_goggles.png",
    stats: { effect: "Special Piece Chance+" },
    acquisition: "Arena Battle, Bonus Cup 'Hydroponics' Reward",
  },
  {
    name: "Tablet of Rebellion",
    description:
      "This tablet decreases the chance of obtaining Boards from treasure chests.",
    image: BASE + "tablet_of_rebellion.png",
    stats: { effect: "Board Drop Chance-" },
    acquisition: "Arena Battle, Bonus Cup 'Revenger' Reward",
  },
  {
    name: "Tablet of Detection",
    description:
      "This tablet increases the chance of obtaining Boards from treasure chests.",
    image: BASE + "tablet_of_detection.png",
    stats: { effect: "Board Drop Chance+" },
    acquisition: "Mokyun Shop Gacha Reward",
  },
  {
    name: "Bandit's Gloves",
    description:
      "These gloves greatly increases the chance that enemies will drop items. They emulate a bandit's mastery.",
    image: BASE + "bandits_gloves.png",
    stats: { luck: 20, effect: "Item Drop Chance+" },
    acquisition: "Mokyun Shop Gacha Reward",
  },
  {
    name: "Thorn Badge",
    description:
      "A badge that increases the strength of thrust-type normal attacks.",
    image: BASE + "thorn_badge.png",
    stats: {
      maxhp: 200,
      agility: 20,
      poisonres: 30,
      effect: "Thrust Attack Power+",
    },
    acquisition: "Arena Battle, Bonus Cup 'Final Fight' Reward.",
  },
  {
    name: "Stone Badge",
    description:
      "A badge that increases the strength of blunt-type normal attacks.",
    image: BASE + "stone_badge.png",
    stats: {
      maxhp: 200,
      def: 50,
      parares: 30,
      effect: "Blunt Attack Power+",
    },
    acquisition: "Mokyun Shop Gacha Reward",
  },

  {
    name: "Iris Badge",
    description:
      "A badge decorated with a flower which increases magical power. It increases the speed and magic range of magical wands and staves",
    image: BASE + "iris_badge.png",
    stats: {
      magical_power: 50,
      agility: 10,
      blindres: 30,
      effect: "Wand/Staff Speed+",
    },
    acquisition: "Arena Battle, Bonus Cup 'The Elite of the Elites' Reward",
  },
  {
    name: "Laurel Badge",
    description:
      "A badge decorated with a beautiful flower and gems. It increases the strength of all recovery effects.",
    image: BASE + "laurel_badge.png",
    stats: {
      maxhp: 300,
      petridres: 30,
      effect: "All Recovery Effects+",
    },
    acquisition: "Arena Battle, Bonus Cup 'Godzi Godzilla' Reward",
  },
  {
    name: "Hawk Ring",
    description:
      "A beautiful ring with a hawk design. It turns backsteps into forward steps.",
    image: BASE + "hawk_ring.png",
    stats: { agility: 40, effect: "Forward Step" },
    acquisition: "Arena Battle, Bonus Cup 'Push Sumo' Reward",
  },
  {
    name: "Pure Gold Anchor",
    description:
      "This extremely heavy weight is made of gold. It doesn't offer any special power but is very valuable.",
    image: BASE + "pure_gold_anchor.png",
    stats: { agility: -9999, petrires: 50, luck: 20 },
    acquisition: "Urugut Mountains / Elysium Mokyun Shop",
  },
  {
    name: "Turtle Shell",
    description:
      "A massive shell that can be worn on your abck to increase defense, but it's extremely heavy.",
    image: BASE + "turtle_shell.png",
    stats: { def: 80, agility: -50, poisonres: 50 },
    acquisition: "Snowdrift in Urugut Mountains",
  },
  {
    name: "Adamant Shell",
    description:
      "The shell of a legendary tortoise. It is very heavy but provides a mighty defense.",
    image: BASE + "adamant_shell.png",
    stats: { maxhp: 800, def: 80, guard: 80, agility: -100 },
    acquisition: "God of Destruction, Adolphus Reward",
  },
  {
    name: "Music Box of Courage",
    description:
      "A music box designed in the shape of Beatrice, the goddess of love and courage.",
    image: BASE + "music_box_of_courage.png",
    stats: { luck: 30, effect: "No Experience Points Gained" },
    acquisition: "Rispadar Item Shop Chest",
  },
  {
    name: "Lion's Hair",
    description:
      "This wig exudes the stateliness of a king. It provides high attack power and agility.",
    image: BASE + "lions_hair.png",
    stats: { atk: 100, agility: 20 },
    acquisition: "God of Darkness, Al Khamis Reward",
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
    acquisition: "Goddess of Mischief, Lieselotte Reward",
  },
  {
    name: "Reflecting Ring",
    description:
      "This ring substantially increases the force of deflected enemy bullets, and expands the range of double-back reflection.",
    image: BASE + "reflecting_ring.png",
    stats: { maxhp: 500, guard: 20, effect: "Increase reflective power" },
    acquisition: "Arena Battle Bonus Cup 'All Stars' Reward",
  },
  {
    name: "Pegasus Feather Boots",
    description:
      "Magical boots that float above the ground. Protects against topographical effects such as lava or spikes.",
    image: BASE + "pegasus_feather_boots.png",
    stats: { atk: 5, def: 5, agility: 5, effect: "Immune to Terrain Damage" },
    acquisition: "Belkade Volcano Wind Dragon Boss Reward",
  },
  {
    name: "Eternal Gallia Shin",
    description:
      "A premier artifact. It makes you fast on your feet so you dash at all times.",
    image: BASE + "eternal_gallia_shin.png",
    stats: { maxhp: 100, guard: 20, agility: 15, effect: "Continuous Dash" },
    acquisition: "Elysium Chest",
  },
  {
    name: "Kaiser Ring",
    description:
      "This ring greatly increases the power of additional attacks occuring at the same time as a regular attack.",
    image: BASE + "kaiser_ring.png",
    stats: { atk: 200, effect: "Increase additional attack power" },
    acquisition: "Mokyun Shop Gacha Reward",
  },
  {
    name: "Coin Emblem",
    description:
      "This artifact multiplies coins earned from deeating enemies by 1.3 times.",
    image: BASE + "coin_emblem.png",
    stats: { luck: 20, effect: "Coins Earned +" },
    acquisition: "Rispadar Chest - Destroy the rocks outside your home",
  },
  {
    name: "Force Emblem",
    description:
      "This artifact multiplies force earned from deeating enemies by 1.3 times.",
    image: BASE + "force_emblem.png",
    stats: { luck: 20, effect: "Force Earned +" },
    acquisition: "Rispadar Chest - Path to the Castle",
  },
  {
    name: "Level Emblem",
    description:
      "This artifact multiplies experience points earned from defeating enemies by 1.3 times.",
    image: BASE + "level_emblem.png",
    stats: { luck: 20, effect: "Experience Points Earned +" },
    acquisition: "God of War, Geraldtine Reward",
  },
  {
    name: "KEIZO Emblem",
    description:
      "Proof that you have defeated the Master. Increases the chance of obtaining boards for weapons/armor/trinkets you have equipped",
    image: BASE + "keizo_emblem.png",
    stats: {
      maxhp: 7,
      atk: 7,
      magical_power: 7,
      effect: "Proof of Proficiency",
    },
    acquisition: "Reward for completing all Arena Battle Cups",
  },
];

export default trinkets;
