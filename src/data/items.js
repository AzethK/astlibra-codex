const BASE = import.meta.env.BASE_URL + "assets/items/";
const items = [
  {
    name: "Synthesis Recipes",
    description:
      "Contains information about item synthesis. Only shows recipes for items in your possession.",
    image: BASE + "synthesis_recipes.png",
    acquisition: "Starting item",
    type: "Books/Cards",
  },
  {
    name: "The Book of Karon: Vol 36 (Travel)",
    description:
      "A wise man's book on traveling. Contains a lot of information. Use it as a reference guide.",
    image: BASE + "the_book_of_karon_vol_36.png",
    acquisition: "Starting item",
    type: "Books/Cards",
  },
  {
    name: "Formula",
    description:
      "Makes new equipment available in stores. You can use it to view the Formulas that you currently have.",
    image: BASE + "formula.png",
    acquisition: "Loot Chest",
    type: "Books/Cards",
  },
  {
    name: "Camping Set",
    description:
      "Contains various tools for camping. Most of the tools are handmade.",
    image: BASE + "camping_set.png",
    acquisition: "Starting item",
    type: "Miscellaneous",
  },
  {
    name: "Dew from the World Tree",
    description:
      "Sacred water collected from Yggdrasil shoots. Instantly transports you to a safe location.",
    image: BASE + "dew_from_the_world_tree.png",
    acquisition: "Pekkochira Shop / Loot Chest",
    type: "Miscellaneous",
  },
  {
    name: "Pekkochira Drops",
    description:
      "Can be used to return immediately to the Pekkochira Village. You can use it as many times as you want.",
    image: BASE + "pekkochira_drops.png",
    acquisition: "Next to Cave of Libra",
    type: "Miscellaneous",
  },
  {
    name: "Torch",
    description:
      "A stick wrapped with an oil-soaked cloth at one end. Illuminates the darkness for a limited duration.",
    image: BASE + "torch.png",
    acquisition: "Shop",
    type: "Miscellaneous",
  },

  {
    name: "Wooden Pickaxe",
    description:
      "Crushes rocks and excavates minerals when used at mining points.",
    image: BASE + "wooden_pickaxe.png",
    acquisition: "Pekkochira Shop",
    type: "Miscellaneous",
  },
  {
    name: "Stone Pickaxe",
    description:
      "Crushes rocks and excavates minerals when used at mining points.",
    image: BASE + "stone_pickaxe.png",
    acquisition: "Loot Chest",
    type: "Miscellaneous",
  },
  {
    name: "Iron Pickaxe",
    description:
      "Crushes rocks and excavates minerals when used at mining points.",
    image: BASE + "iron_pickaxe.png",
    acquisition: "Loot Chest",
    type: "Miscellaneous",
  },
  {
    name: "Crystal Pickaxe",
    description:
      "Crushes rocks and excavates minerals when used at mining points.",
    image: BASE + "crystal_pickaxe.png",
    acquisition: "Loot Chest",
    type: "Miscellaneous",
  },
  {
    name: "Copper Chests Key",
    description:
      "A mysterious key that opens chests dropped by enemies. Opens copper treasure chests.",
    image: BASE + "copper_chests_key.png",
    acquisition: "Loot Chest",
    type: "Miscellaneous",
  },
  {
    name: "Silver Chests Key",
    description:
      "A mysterious key that opens chests dropped by enemies. Opens silver treasure chests.",
    image: BASE + "silver_chests_key.png",
    acquisition: "Loot Chest / Crafting",
    type: "Miscellaneous",
  },
  {
    name: "Golden Chests Key",
    description:
      "A mysterious key that opens chests dropped by enemies. Opens golden treasure chests.",
    image: BASE + "golden_chests_key.png",
    acquisition: "Combine Clay-like Gold Stones with Key Mold B",
    type: "Miscellaneous",
  },
  {
    name: "Throwing Knives",
    description:
      "A powerful throwing weapon with a straight trajectory. Three will be thrown in quick succession. Consumed when thrown.",
    image: BASE + "throwing_knives.png",
    acquisition: "Loot Chest",
    type: "Secondary Weapon",
  },
  {
    name: "Quiver",
    description: "Holds 20 wooden arrows. Use it to gain arrows.",
    image: BASE + "quiver.png",
    acquisition: "Loot Chest",
    type: "Secondary Weapon",
  },
  {
    name: "Wooden Arrows",
    description: "Robust wooden arrows. Used with a bow",
    image: BASE + "wooden_arrows.png",
    acquisition: "Pekkochira Shop",
    type: "Secondary Weapon",
  },
  {
    name: "Vijaya",
    description:
      "Consumed on use, but causes tremendous damage over a wide area. Less powerful when fighting a boss.",
    image: BASE + "vijaya.png",
    acquisition: "Loot Chest",
    type: "Secondary Weapon",
  },
  {
    name: "Soma",
    description:
      "Recovers 300 HP. Expensive, but immediately restores your health.",
    image: BASE + "soma.png",
    acquisition: "Combine Small Empty Bottle and Goji Berries",
    type: "Medicines/Bottles",
  },
  {
    name: "Numbness-relieving Medicine",
    description:
      "Heals the abnormal status Paralysis. Neutralizes Paralysis and provides lasting resistance for a while.",
    image: BASE + "numbness_relieving Medicine.png",
    acquisition: "Loot Chest",
    type: "Medicines/Bottles",
  },
  {
    name: "Hemostatic",
    description:
      "Heals the abnormal status Bleeding. Neutralizes Bleeding and provides lasting resistance for a while.",
    image: BASE + "hemostatic.png",
    acquisition: "Loot Chest",
    type: "Medicines/Bottles",
  },
  {
    name: "Antitoxin",
    description:
      "Heals the abnormal status Deadly Poison. Neutralizes Deadly Poison and provides lasting resistance for a while.",
    image: BASE + "antitoxin.png",
    acquisition: "Loot Chest",
    type: "Medicines/Bottles",
  },
  {
    name: "Small Empty Bottle",
    description:
      "A small empty bottle. Surprisingly expensive, as it is made of glass.",
    image: BASE + "small_empty_bottle.png",
    acquisition: "Loot Chest",
    type: "Medicines/Bottles",
  },
  {
    name: "Goji Berries",
    description:
      "Recovers 100 HP. Has a hard, bitter shell, but is rich in nutrients.",
    image: BASE + "goji_berries.png",
    acquisition: "Pekkochira Village",
    type: "Food",
  },
  {
    name: "Sponge Cake",
    description: "Recovers 150 HP. Tastes delicious by itself.",
    image: BASE + "sponge_cake.png",
    acquisition: "Combine Flour and Egg",
    type: "Food",
  },
  {
    name: "Plain Cookies",
    description:
      "Generates 12 [Water] and [Earth] force. Plain cookies with a nice buttery aroma.",
    image: BASE + "plain_cookies.png",
    acquisition: "Combine Butter and Egg",
    type: "Food",
  },
  {
    name: "Pie Dough",
    description:
      "Generates 16 [Fire] and [Holy] force. Has a crispy texture when baked. Can be eaten raw.",
    image: BASE + "pie_dough.png",
    acquisition: "Combine Flour and Butter",
    type: "Food",
  },
  {
    name: "Egg",
    description:
      "A basic food ingredient. Chicken eggs are used in various dishes.",
    image: BASE + "egg.png",
    acquisition: "Pekkochira Objects",
    type: "Food Ingredients",
  },
  {
    name: "Flour",
    description:
      "A basic food ingredient. Refined from wheat, it is used to make dough.",
    image: BASE + "flour.png",
    acquisition: "Pekkochira Objects",
    type: "Food Ingredients",
  },
  {
    name: "Butter",
    description:
      "A basic food ingredient. With its pleasant aroma, it complements sweet treats.",
    image: BASE + "butter.png",
    acquisition: "Pekkochira Objects",
    type: "Food Ingredients",
  },
  {
    name: "Technique Scroll - Sky Sword",
    description:
      "An esoteric scroll describing the Sky Sword technique. Open to view details.",
    image: BASE + "technique_scroll.png",
    acquisition: "Chest west of Pekkochira Village, near Dash tutorial",
    type: "Books/Cards",
  },
  {
    name: "Technique Scroll - Armor Slash",
    description:
      "An esoteric scroll describing the Armor Slash technique. Open to view details.",
    image: BASE + "technique_scroll.png",
    acquisition: "Starting item",
    type: "Books/Cards",
  },
  {
    name: "Technique Scroll - Backstep",
    description:
      "An esoteric scroll describing the Backstep technique. Open to view details.",
    image: BASE + "technique_scroll.png",
    acquisition: "Cave of Libra, chest near Wolf",
    type: "Books/Cards",
  },
  {
    name: "Attack Power Card",
    description:
      "A mysterious card that increases your defensive power when used. Depicts the angry dragon, Grimnil.",
    image: BASE + "attack_power_card.png",
    acquisition: "Loot Chest",
    type: "Books/Cards",
  },
  {
    name: "Defense Power Card",
    description:
      "A mysterious card that increases your defensive power when used. Depicts the god warrior, Gang Cyclops.",
    image: BASE + "defense_power_card.png",
    acquisition: "Loot Chest",
    type: "Books/Cards",
  },
  {
    name: "Good Fortune Card",
    description:
      "A mysterious card that increases your luck when used. Depicts Fate, the goddess of destiny.",
    image: BASE + "good_fortune_card.png",
    acquisition: "Loot Chest",
    type: "Books/Cards",
  },
  {
    name: "Key Mold A",
    description:
      "A key-shaped mold. Press in clay to make a shape. The clay must have an appropriate viscosity to fit the mold.",
    image: BASE + "key_mold_a.png",
    acquisition: "Loot Chest",
    type: "Ore/Gems",
  },
  {
    name: "Key Mold B",
    description:
      "A key-shaped mold. Press in clay to make a shape. The clay must have an appropriate viscosity to fit the mold.",
    image: BASE + "key_mold_b.png",
    acquisition: "Loot Chest",
    type: "Ore/Gems",
  },
  {
    name: "Refining Kit",
    description:
      "Tools for refining ore into ingots. Can increase the material's value. A rare item.",
    image: BASE + "refining_kit.png",
    acquisition: "Loot Chest",
    type: "Ore/Gems",
  },
  {
    name: "Clay-like Silver Stones",
    description:
      "Soft, silvery stones. Soften when pressed an can hold their shape.",
    image: BASE + "clay_like_silver_stones.png",
    acquisition: "Pekkochira Mining",
    type: "Ore/Gems",
  },
  {
    name: "Clay-like Gold Stones",
    description:
      "Soft, golden stones. Soften when pressed an can hold their shape.",
    image: BASE + "clay_like_gold_stones.png",
    acquisition: "Pekkochira Mining",
    type: "Ore/Gems",
  },
  {
    name: "Stones",
    description: "Well-shaped stones. Can be used once processed.",
    image: BASE + "stones.png",
    acquisition: "Pekkochira Mining",
    type: "Ore/Gems",
  },
  {
    name: "Copper Ore",
    description:
      "Pure copper ore containing no tin. Versatile, and holds value as a material.",
    image: BASE + "copper_ore.png",
    acquisition: "Pekkochira Mining",
    type: "Ore/Gems",
  },
  {
    name: "Copper Ingot",
    description:
      "A lump of metal refined from copper ore. Has a higher value than the raw material.",
    image: BASE + "copper_ingot.png",
    acquisition: "Combine Copper Ore and Refining Kit",
    type: "Ore/Gems",
  },
  {
    name: "Atega",
    description:
      "A redeemable item which can be sold for a large number of coins. A gem of good fortune, symbolizing wealth and gold.",
    image: BASE + "atega.png",
    acquisition: "Pekkochira Mining",
    type: "Ore/Gems",
  },
  {
    name: "Slime's Eyeball",
    description:
      "A blob of slime. Produces and shields itself in offensive and defensive mucus.",
    image: BASE + "slimes_eyeball.png",
    acquisition: "Drop from Slime (Pekkochira)",
    type: "Demon Materials",
  },
  {
    name: "Wooden Log",
    description:
      "Solid and well-shaped. Can be used to make all manner of things.",
    image: BASE + "wooden_log.png",
    acquisition: "Pekkochira Objects",
    type: "Demon Materials",
  },
  {
    name: "Cobweb",
    description:
      "Can be used as an effective adhesive. Comes packed tightly in a spider's butt.",
    image: BASE + "cobweb.png",
    acquisition: "Drop from Spider (Pekkochira)",
    type: "Demon Materials",
  },

  {
    name: "Bat Wings",
    description: "Thin and strong. Used for umbrellas.",
    image: BASE + "bat_wings.png",
    acquisition: "Drop from Bat (Pekkochira)",
    type: "Demon Materials",
  },
  {
    name: "Beautiful Bones",
    description:
      "Pure white bones, almost translucent. Robust and light, they can be used to make a variety of things.",
    image: BASE + "beautiful_bones.png",
    acquisition: "Drop from Skeleton (Pekkochira)",
    type: "Demon Materials",
  },

  {
    name: "Anulis' Ribbon",
    description: "A very long ribbon, worn by Anulis. It holds many memories.",
    image: BASE + "anulis_ribbon.png",
    acquisition: "Starting item",
    type: "Valuables",
  },
  {
    name: "Red Orb",
    description:
      "A sphere of unknown material. Can be placed on a pedestal when used near it. Glows fiery red, as if seeking water.",
    image: BASE + "red_orb.png",
    acquisition: "Cave of Libra",
    type: "Valuables",
  },
  {
    name: "Blue Orb",
    description:
      "A sphere of unknown material. Can be placed on a pedestal when used near it. Feels wet, as if it has been underwater.",
    image: BASE + "blue_orb.png",
    acquisition: "Cave of Libra",
    type: "Valuables",
  },
  {
    name: "18 Liter Container of Pine Resin",
    description:
      "Filled with natural resin secreted by pine trees. Also known as a 5 gallon can.",
    image: BASE + "18_liter_container_of_pine_resin.png",
    acquisition: "Pekkochira",
    type: "Valuables",
  },
  {
    name: "Bundle of Wooden Sticks",
    description:
      "Carefully selected, easy-to-grip, sturdy wooden sticks. The sticks have a variety of possible uses.",
    image: BASE + "bundle_of_wooden_sticks.png",
    acquisition: "Cave of Libra",
    type: "Valuables",
  },
  {
    name: "Magical Crystals",
    description:
      "Mages used these magic-filled stones by cracking them open. Required by Karon for sustained magic use.",
    image: BASE + "magical_crystals.png",
    type: "Collected Items",
  },
  {
    name: "Small Metal",
    description:
      "Small lumps of metal composed of rare materials. Can be used as tokens for the Gachapon machine.",
    image: BASE + "small_metal.png",
    type: "Collected Items",
  },
];

export default items;
