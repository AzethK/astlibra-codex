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
    libra: {
      karma: 68,
      effect: "Experience Earned",
      effect: "Coins Earned",
      effect: "Magical Power (GOOD)",
    },
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
    name: "The Book of Mythology",
    description: "Contains stories about the gods",
    image: BASE + "the_book_of_mythology.png",
    acquisition: "Rispadar Clothes Shop",
    type: "Books/Cards",
  },
  {
    name: "Fairy Tales of the World",
    description: "Contains folklore from across the world.",
    image: BASE + "fairy_tales_of_the_world.png",
    acquisition: "Rispadar Clothes Shop",
    type: "Books/Cards",
  },
  {
    name: "Introduction to Wizardry",
    description: "Contains information related to magic.",
    image: BASE + "introduction_to_wizardry.png",
    acquisition: "Rispadar Clothes Shop",
    type: "Books/Cards",
  },
  {
    name: "Guidebook",
    description: "Contains information about various locations.",
    image: BASE + "guidebook.png",
    acquisition: "Rispadar Clothes Shop",
    type: "Books/Cards",
  },
  {
    name: "Self-Made Item Book",
    description: "Used to record items that have been acquired previously.",
    image: BASE + "self_made_item_book.png",
    acquisition: "Rispadar Clothes Shop",
    type: "Books/Cards",
  },
  {
    name: "Camping Set",
    description:
      "Contains various tools for camping. Most of the tools are handmade.",
    image: BASE + "camping_set.png",
    acquisition: "Starting item",
    type: "Miscellaneous",
    libra: {
      karma: 10,
      effect: "Max HP",
      effect: "Max ST",
    },
  },

  {
    name: "Dew from the World Tree",
    description:
      "Sacred water collected from Yggdrasil shoots. Instantly transports you to a safe location.",
    image: BASE + "dew_from_the_world_tree.png",
    acquisition: "Shop",
    type: "Miscellaneous",
    libra: {
      karma: 29,
      effect: "Weight Reduction",
      effect: "Gradual Recovery",
    },
  },
  {
    name: "World Tree Blossom",
    description:
      "Can be used to travel to any previous save crystal. Can only be used at certain times, but has infinite uses.",
    image: BASE + "world_tree_blossom.png",
    acquisition: "East of the Rispadar Bar",
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
    libra: {
      karma: 16,
      effect: "Effect Duration",
      effect: "Max HP",
    },
  },
  {
    name: "Lantern",
    description:
      "A glass container with a plate of oil. Illuminates the darkness for a long duration.",
    image: BASE + "lantern.png",
    acquisition: "Loot Chest",
    type: "Miscellaneous",
    libra: {
      karma: 36,
      effect: "Effect Duration (GOOD)",
      effect: "Max HP (GOOD)",
    },
  },
  {
    name: "Wooden Pickaxe",
    description:
      "Crushes rocks and excavates minerals when used at mining points.",
    image: BASE + "wooden_pickaxe.png",
    acquisition: "Shop",
    type: "Miscellaneous",
    libra: {
      karma: 9,
      effect: "Effect Duration",
    },
  },
  {
    name: "Stone Pickaxe",
    description:
      "Crushes rocks and excavates minerals when used at mining points.",
    image: BASE + "stone_pickaxe.png",
    acquisition: "Shop",
    type: "Miscellaneous",
    libra: {
      karma: 19,
      effect: "Effect Duration (GOOD)",
    },
  },
  {
    name: "Iron Pickaxe",
    description:
      "Crushes rocks and excavates minerals when used at mining points.",
    image: BASE + "iron_pickaxe.png",
    acquisition: "Loot Chest",
    type: "Miscellaneous",
    libra: {
      karma: 29,
      effect: "Effect Duration (EPIC)",
    },
  },
  {
    name: "Crystal Pickaxe",
    description:
      "Crushes rocks and excavates minerals when used at mining points.",
    image: BASE + "crystal_pickaxe.png",
    acquisition: "Loot Chest",
    type: "Miscellaneous",
    libra: {
      karma: 56,
      effect: "Effect Duration (EPIC)",
      effect: "Weight Reduction (GOOD)",
    },
  },
  {
    name: "Copper Chests Key",
    description:
      "A mysterious key that opens chests dropped by enemies. Opens copper treasure chests.",
    image: BASE + "copper_chests_key.png",
    acquisition: "Shop",
    type: "Miscellaneous",
    libra: {
      karma: 2,
      effect: "Use Speed",
    },
  },
  {
    name: "Silver Chests Key",
    description:
      "A mysterious key that opens chests dropped by enemies. Opens silver treasure chests.",
    image: BASE + "silver_chests_key.png",
    acquisition: "Loot Chest / Crafting",
    type: "Miscellaneous",
    libra: {
      karma: 23,
      effect: "Experience Earned",
    },
  },
  {
    name: "Gold Chests Key",
    description:
      "A mysterious key that opens chests dropped by enemies. Opens gold treasure chests.",
    image: BASE + "gold_chests_key.png",
    acquisition: "Combine Clay-like Gold Stones with Key Mold B",
    type: "Miscellaneous",
    libra: {
      karma: 22,
      effect: "Coins Earned",
    },
  },
  {
    name: "Mokyun Doll",
    description:
      "Takes your place in death, resurrecting you on the spot. Cannot be used during boss battles.",
    image: BASE + "mokyun_doll.png",
    acquisition: "Mokyun Gacha Reward",
    type: "Miscellaneous",
    libra: {
      karma: 26,
      effect: "ST Gain Rate (EPIC)",
    },
  },
  {
    name: "Trinkets Slot +1",
    description:
      "Adds an additional slot for equipping trinkets. A very valuable item.",
    type: "Miscellaneous",
    image: BASE + "trinkets_slot_+1.png",
  },
  {
    name: "Reset Potion",
    description:
      "When used, resets all cahracter stat point allocation. You can only hold one of these items at a time.",
    image: BASE + "reset_potion.png",
    acquisition: "Shop",
    type: "Miscellaneous",
    libra: {
      karma: 33,
      effect: "Magical Power (EPIC)",
    },
  },
  {
    name: "Throwing Knives",
    description:
      "A powerful throwing weapon with a straight trajectory. Three will be thrown in quick succession. Consumed when thrown.",
    image: BASE + "throwing_knives.png",
    acquisition: "Loot Chest",
    type: "Secondary Weapon",
    libra: {
      karma: 28,
      effect: "Weight Reduction",
      effect: "Attack Power",
    },
  },
  {
    name: "Quiver",
    description: "Holds 20 wooden arrows. Use it to gain arrows.",
    image: BASE + "quiver.png",
    acquisition: "Loot Chest",
    type: "Secondary Weapon",
    libra: {
      karma: 21,
      effect: "Attack Power (GOOD)",
    },
  },
  {
    name: "Wooden Arrows",
    description: "Robust wooden arrows. Used with a bow",
    image: BASE + "wooden_arrows.png",
    acquisition: "Shop",
    type: "Secondary Weapon",
    libra: {
      karma: 11,
      effect: "Attack Power",
    },
  },
  {
    name: "Vijaya",
    description:
      "Consumed on use, but causes tremendous damage over a wide area. Less powerful when fighting a boss.",
    image: BASE + "vijaya.png",
    acquisition: "Loot Chest",
    type: "Secondary Weapon",
    libra: {
      karma: 34,
      effect: "Attack Power (GOOD)",
      effect: "Magical Power",
    },
  },
  {
    name: "Wooden Bow",
    description: "A sturdy wooden bow. Uses arrows to attack distant targets",
    image: BASE + "wooden_bow.png",
    acquisition: "Pekkochira, chest behind a tall hill west of the village",
    type: "Secondary Weapon",
  },
  {
    name: "Crossbow",
    description:
      "Takes time to load, but fires arrows in a straight line. The angle of the crossbow can be changed with the up and down buttons.",
    image: BASE + "crossbow.png",
    acquisition: "Arena Battle, Belkade Cup 'Carefully and Quickly' Reward",
    type: "Secondary Weapon",
  },
  {
    name: "Soma",
    description:
      "Recovers 300 HP. Expensive, but immediately restores your health.",
    image: BASE + "soma.png",
    acquisition: "Combine Small Empty Bottle and Goji Berries",
    type: "Medicines/Bottles",
    libra: {
      karma: 12,
      effect: "Max HP",
      effect: "HP Recovery",
    },
  },
  {
    name: "Nectar",
    description:
      "Recovers 500 HP. Expensive, but immediately restores your health.",
    image: BASE + "nectar.png",
    acquisition: "Combine Small Empty Bottle and Cactus Fruit",
    type: "Medicines/Bottles",
    libra: {
      karma: 22,
      effect: "Max HP (Good)",
      effect: "HP Recovery",
    },
  },
  {
    name: "Numbness-relieving Medicine",
    description:
      "Heals the abnormal status Paralysis. Neutralizes Paralysis and provides lasting resistance for a while.",
    image: BASE + "numbness_relieving_medicine.png",
    acquisition: "Loot Chest",
    type: "Medicines/Bottles",
    libra: {
      karma: 29,
      effect: "Paralysis Resistance (EPIC)",
    },
  },
  {
    name: "Eye Medicine",
    description:
      "Heals the abnormal status Blind. Neutralizes Blind and provides lasting resistance for a while.",
    image: BASE + "eye_medicine.png",
    acquisition: "Loot Chest",
    type: "Medicines/Bottles",
    libra: {
      karma: 30,
      effect: "Blind Resistance (EPIC)",
    },
  },
  {
    name: "Hemostatic",
    description:
      "Heals the abnormal status Bleeding. Neutralizes Bleeding and provides lasting resistance for a while.",
    image: BASE + "hemostatic.png",
    acquisition: "Bakery",
    type: "Medicines/Bottles",
    libra: {
      karma: 34,
      effect: "Bleeding Resistance (EPIC)",
    },
  },
  {
    name: "Holy Water",
    description:
      "Prevents Petrifaction for a while. Items cannot be used when petrified, so protect yourself beforehand.",
    image: BASE + "holy_water.png",
    acquisition: "Bakery",
    type: "Medicines/Bottles",
    libra: {
      karma: 26,
      effect: "Petrifaction Resistance (EPIC)",
    },
  },
  {
    name: "Antitoxin",
    description:
      "Heals the abnormal status Deadly Poison. Neutralizes Deadly Poison and provides lasting resistance for a while.",
    image: BASE + "antitoxin.png",
    acquisition: "Loot Chest",
    type: "Medicines/Bottles",
    libra: {
      karma: 35,
      effect: "Poison Resistance (EPIC)",
    },
  },
  {
    name: "Small Empty Bottle",
    description:
      "A small empty bottle. Surprisingly expensive, as it is made of glass.",
    image: BASE + "small_empty_bottle.png",
    acquisition: "Shop",
    type: "Medicines/Bottles",
    libra: {
      karma: 8,
      effect: "Adaptability",
    },
  },
  {
    name: "Goji Berries",
    description:
      "Recovers 100 HP. Has a hard, bitter shell, but is rich in nutrients.",
    image: BASE + "goji_berries.png",
    acquisition: "Shop",
    type: "Food",
    libra: {
      karma: 5,
      effect: "HP Recovery",
    },
  },
  {
    name: "Cactus Fruit",
    description:
      "Recovers 300 HP. You have to be careful when eating them, but they are delicious.",
    image: BASE + "cactus_fruit.png",
    acquisition: "Shop",
    type: "Food",
    libra: {
      karma: 15,
      effect: "HP Recovery (GOOD)",
    },
  },
  {
    name: "Sponge Cake",
    description: "Recovers 150 HP. Tastes delicious by itself.",
    image: BASE + "sponge_cake.png",
    acquisition: "Combine Flour and Egg",
    type: "Food",
    libra: {
      karma: 12,
      effect: "Max HP",
      effect: "HP Recovery",
    },
  },
  {
    name: "Egg on Bread",
    description:
      "Recovers 250 HP. Fried egg on sliced bread. Pazu's favorite foood.",
    image: BASE + "egg_on_bread.png",
    acquisition: "Combine Bread and Egg",
    type: "Food",
    libra: {
      karma: 18,
      effect: "Max HP",
      effect: "HP Recovery",
      effect: "ST Gain Rate",
    },
  },
  {
    name: "Plain Cookies",
    description:
      "Generates 12 [Water] and [Earth] force. Plain cookies with a nice buttery aroma.",
    image: BASE + "plain_cookies.png",
    acquisition: "Combine Butter and Egg",
    type: "Food",
    libra: {
      karma: 41,
      effect: "Attack Power",
      effect: "Magical Power",
      effect: "Weight Reduction",
    },
  },
  {
    name: "Pie Dough",
    description:
      "Generates 16 [Fire] and [Holy] force. Has a crispy texture when baked. Can be eaten raw.",
    image: BASE + "pie_dough.png",
    acquisition: "Combine Flour and Butter",
    type: "Food",
    libra: {
      karma: 12,
      effect: "Use Speed",
      effect: "Effect Duration",
      effect: "Guard Durability",
    },
  },
  {
    name: "Cheesecake",
    description:
      "Generates 21 [Water] and [Darkness] force. Te cheese absorbed into the sponge is sweet and delicious.",
    image: BASE + "cheesecake.png",
    acquisition: "Combine Cheese and Sponge Cake",
    type: "Food",
    libra: {
      karma: 39,
      effect: "Attack Power (GOOD)",
      effect: "Guard Durability",
      effect: "Weight Reduction",
    },
  },
  {
    name: "Pancakes",
    description:
      "Generates 25 [Holy] and [Earth] force. Eat with fluffy hot butter and honey on top.",
    image: BASE + "pancakes.png",
    acquisition: "Combine Bread and Butter",
    type: "Food",
    libra: {
      karma: 29,
      effect: "Defense Power (GOOD)",
      effect: "Use Speed",
      effect: "Effect Duration",
    },
  },
  {
    name: "Egg",
    description:
      "A basic food ingredient. Chicken eggs are used in various dishes.",
    image: BASE + "egg.png",
    acquisition: "Pekkochira",
    type: "Food Ingredients",
    libra: {
      karma: 24,
      effect: "Paralysis Resistance",
      effect: "Poison Resistance",
    },
  },
  {
    name: "Flour",
    description:
      "A basic food ingredient. Refined from wheat, it is used to make dough.",
    image: BASE + "flour.png",
    acquisition: "Shop",
    type: "Food Ingredients",
    libra: {
      karma: 16,
      effect: "Petrifaction Resistance",
      effect: "Blind Resistance",
    },
  },
  {
    name: "Butter",
    description:
      "A basic food ingredient. With its pleasant aroma, it complements sweet treats.",
    image: BASE + "butter.png",
    acquisition: "Pekkochira",
    type: "Food Ingredients",
    libra: {
      karma: 23,
      effect: "Bleeding Resistance",
      effect: "Paralysis Resistance",
    },
  },
  {
    name: "Cheese",
    description:
      "A basic food. A slightly stinky fermented food. Its usefulness depends on how it's used.",
    image: BASE + "cheese.png",
    acquisition: "Bridion Swamp",
    type: "Food Ingredients",
    libra: {
      karma: 39,
      effect: "Bleeding Resistance",
      effect: "Poison Resistance",
      effect: "Blind Resistance",
    },
  },
  {
    name: "Bread",
    description:
      "Basic food ingredient. Its distinctive aroma whets the appetite. A staple.",
    image: BASE + "bread.png",
    acquisition: "Bakery",
    type: "Food Ingredients",
    libra: {
      karma: 29,
      effect: "Petrifaction Resistance",
      effect: "Paralysis Resistance",
      effect: "Bleeding Resistance",
    },
  },
  {
    name: "Milk",
    description:
      "A basic food. The best drink produced by nature, regarded as the water of the gods.",
    image: BASE + "milk.png",
    acquisition: "Belkade Volcano",
    type: "Food Ingredients",
    libra: {
      karma: 48,
      effect: "Paralysis Resistance (GOOD)",
      effect: "Poison Resistance",
      effect: "Bleeding Resistance",
    },
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
    name: "Technique Scroll - Counter Bash",
    description:
      "An esoteric scroll describing the Counter Bash technique. Open to view details.",
    image: BASE + "technique_scroll.png",
    acquisition:
      "Belkade Volcado, chest found by dropping down from the screen west of the entrance",
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
    name: "Technique Scroll - Jump Slash",
    description:
      "An esoteric scroll describing the Jump Slash technique. Open to view details.",
    image: BASE + "technique_scroll.png",
    acquisition:
      "Cave east of Bridion Swamp Mokyun Shop, chest on the top of the screen",
    type: "Books/Cards",
  },
  {
    name: "[Sealed] Technique Scroll - Sky Sword",
    description:
      "A sealed esoteric scroll describing the Sky Sword technique. Open to view details.",
    image: BASE + "sealed_technique_scroll.png",
    acquisition: "Combine Technique Sealing Medal with the technique scroll",
    type: "Books/Cards",
  },
  {
    name: "[Sealed] Technique Scroll - Armor Slash",
    description:
      "A sealed esoteric scroll describing the Armor Slash technique. Open to view details.",
    image: BASE + "sealed_technique_scroll.png",
    acquisition: "Combine Technique Sealing Medal with the technique scroll",
    type: "Books/Cards",
  },
  {
    name: "[Sealed] Technique Scroll - Counter Bash",
    description:
      "A sealed esoteric scroll describing the Counter Bash technique. Open to view details.",
    image: BASE + "sealed_technique_scroll.png",
    acquisition: "Combine Technique Sealing Medal with the technique scroll",
    type: "Books/Cards",
  },
  {
    name: "[Sealed] Technique Scroll - Backstep",
    description:
      "A sealed esoteric scroll describing the Backstep technique. Open to view details.",
    image: BASE + "sealed_technique_scroll.png",
    acquisition: "Combine Technique Sealing Medal with the technique scroll",
    type: "Books/Cards",
  },
  {
    name: "[Sealed] Technique Scroll - Jump Slash",
    description:
      "A sealed esoteric scroll describing the Jump Slash technique. Open to view details.",
    image: BASE + "sealed_technique_scroll.png",
    acquisition: "Combine Technique Sealing Medal with the technique scroll",
    type: "Books/Cards",
  },
  {
    name: "Technique Sealing Medal",
    description:
      "When used with a technique scroll, it seals the technique. The seal can be disassembled to regain the medal.",
    image: BASE + "technique_sealing_medal.png",
    acquisition: "Rispadar Clothes Shop",
    type: "Books/Cards",
    libra: {
      karma: 55,
      effect: "Blind Resistance (GOOD)",
      effect: "Petrifaction Resistance (GOOD)",
      effect: "Paralysis Resistance (GOOD)",
    },
  },
  {
    name: "Diary Fragment",
    description:
      "A page from a diary likely written by a goblin. Both sides are covered in terrible handwriting.",
    image: BASE + "diary_fragment.png",
    acquisition: "Next to Goblin Lair in Bridion Swamp",
    type: "Books/Cards",
    libra: {
      karma: 55,
      effect: "Gradual Recovery (GOOD)",
      effect: "Experience Earned (GOOD)",
    },
  },
  {
    name: "Physical Fitness Card",
    description:
      "A mysterious card that increases your maximum HP when used. Depicts Andraste, the goddess of abundance.",
    image: BASE + "physical_fitness_card.png",
    acquisition: "Loot Chest",
    type: "Books/Cards",
    libra: {
      karma: 24,
      effect: "Max HP",
      effect: "Max HP (GOOD)",
    },
  },
  {
    name: "Stamina Card",
    description:
      "A mysterious card that increases your defensive power when used. Depicts Dryad Thea, the dark green goddess.",
    image: BASE + "stamina_card.png",
    acquisition: "Loot Chest",
    type: "Books/Cards",
    libra: {
      karma: 16,
      effect: "Max ST",
      effect: "Max ST (GOOD)",
    },
  },
  {
    name: "Attack Power Card",
    description:
      "A mysterious card that increases your defensive power when used. Depicts the angry dragon, Grimnil.",
    image: BASE + "attack_power_card.png",
    acquisition: "Loot Chest",
    type: "Books/Cards",
    libra: {
      karma: 32,
      effect: "Attack Power",
      effect: "Attack Power (GOOD)",
    },
  },
  {
    name: "Defense Power Card",
    description:
      "A mysterious card that increases your defensive power when used. Depicts the god warrior, Gang Cyclops.",
    image: BASE + "defense_power_card.png",
    acquisition: "Loot Chest",
    type: "Books/Cards",
    libra: {
      karma: 26,
      effect: "Defense Power",
      effect: "Defense Power (GOOD)",
    },
  },
  {
    name: "Good Fortune Card",
    description:
      "A mysterious card that increases your luck when used. Depicts Fate, the goddess of destiny.",
    image: BASE + "good_fortune_card.png",
    acquisition: "Loot Chest",
    type: "Books/Cards",
    libra: {
      karma: 54,
      effect: "Coins Earned",
      effect: "Coins Earned (GOOD)",
    },
  },
  {
    name: "Adaption Card",
    description:
      "A mysterious card that increases your adaptability when used. Depicts the spirit of water, Rusalka.",
    image: BASE + "adaption_card.png",
    acquisition: "Loot Chest",
    type: "Books/Cards",
    libra: {
      karma: 26,
      effect: "Adaptability",
      effect: "Adaptability (GOOD)",
    },
  },
  {
    name: "Key Mold A",
    description:
      "A key-shaped mold. Press in clay to make a shape. The clay must have an appropriate viscosity to fit the mold.",
    image: BASE + "key_mold_a.png",
    acquisition: "Loot Chest",
    type: "Ore/Gems",
    libra: {
      karma: 8,
      effect: "Defense Power",
    },
  },
  {
    name: "Key Mold B",
    description:
      "A key-shaped mold. Press in clay to make a shape. The clay must have an appropriate viscosity to fit the mold.",
    image: BASE + "key_mold_b.png",
    acquisition: "Loot Chest",
    type: "Ore/Gems",
    libra: {
      karma: 18,
      effect: "Defense Power (GOOD)",
    },
  },
  {
    name: "Refining Kit",
    description:
      "Tools for refining ore into ingots. Can increase the material's value. A rare item.",
    image: BASE + "refining_kit.png",
    acquisition: "Loot Chest",
    type: "Ore/Gems",
    libra: {
      karma: 19,
      effect: "Effect Duration",
      effect: "Blind Resistance",
    },
  },
  {
    name: "Clay-like Silver Stones",
    description:
      "Soft, silvery stones. Soften when pressed an can hold their shape.",
    image: BASE + "clay_like_silver_stones.png",
    acquisition: "Mining",
    type: "Ore/Gems",
    libra: {
      karma: 38,
      effect: "Max ST (GOOD)",
      effect: "Poison Resistance (GOOD)",
    },
  },
  {
    name: "Clay-like Gold Stones",
    description:
      "Soft, golden stones. Soften when pressed an can hold their shape.",
    image: BASE + "clay_like_gold_stones.png",
    acquisition: "Mining",
    type: "Ore/Gems",
    libra: {
      karma: 52,
      effect: "Max ST (EPIC)",
      effect: "Paralysis Resistance (EPIC)",
    },
  },
  {
    name: "Stones",
    description: "Well-shaped stones. Can be used once processed.",
    image: BASE + "stones.png",
    acquisition: "Mining",
    type: "Ore/Gems",
    libra: {
      karma: 8,
      effect: "Defense Power",
    },
  },
  {
    name: "Copper Ore",
    description:
      "Pure copper ore containing no tin. Versatile, and holds value as a material.",
    image: BASE + "copper_ore.png",
    acquisition: "Mining",
    type: "Ore/Gems",
    libra: {
      karma: 8,
      effect: "Defense Power",
    },
  },
  {
    name: "Copper Ingot",
    description:
      "A lump of metal refined from copper ore. Has a higher value than the raw material.",
    image: BASE + "copper_ingot.png",
    acquisition: "Combine Copper Ore and Refining Kit",
    type: "Ore/Gems",
    libra: {
      karma: 11,
      effect: "Attack Power",
    },
  },
  {
    name: "Atega",
    description:
      "A redeemable item which can be sold for a large number of coins. A gem of good fortune, symbolizing wealth and gold.",
    image: BASE + "atega.png",
    acquisition: "Mining",
    type: "Ore/Gems",
    libra: {
      karma: 22,
      effect: "Coins Earned",
    },
  },
  {
    name: "Tozupa",
    description:
      "A redeemable item which can be sold for a large number of coins. A gem of love and courage, symbolizing hope.",
    image: BASE + "tozupa.png",
    acquisition: "Mining",
    type: "Ore/Gems",
    libra: {
      karma: 45,
      effect: "Coins Earned",
      effect: "Experience Earned",
    },
  },
  {
    name: "Slime's Eyeball",
    description:
      "A blob of slime. Produces and shields itself in offensive and defensive mucus.",
    image: BASE + "slimes_eyeball.png",
    acquisition: "Drop from Slime (Pekkochira, Belkade Volcano)",
    type: "Demon Materials",
    libra: {
      karma: 7,
      effect: "Max HP",
    },
  },
  {
    name: "Wooden Log",
    description:
      "Solid and well-shaped. Can be used to make all manner of things.",
    image: BASE + "wooden_log.png",
    acquisition: "Pekkochira",
    type: "Demon Materials",
    libra: {
      karma: 3,
      effect: "Max ST",
    },
  },
  {
    name: "Cobweb",
    description:
      "Can be used as an effective adhesive. Comes packed tightly in a spider's butt.",
    image: BASE + "cobweb.png",
    acquisition: "Drop from Spider (Pekkochira)",
    type: "Demon Materials",
    libra: {
      karma: 8,
      effect: "Adaptability",
    },
  },

  {
    name: "Bat Wings",
    description: "Thin and strong. Used for umbrellas.",
    image: BASE + "bat_wings.png",
    acquisition: "Drop from Bat (Pekkochira, Bridion Swamp)",
    type: "Demon Materials",
    libra: {
      karma: 11,
      effect: "Attack Power",
    },
  },
  {
    name: "Beautiful Bones",
    description:
      "Pure white bones, almost translucent. Robust and light, they can be used to make a variety of things.",
    image: BASE + "beautiful_bones.png",
    acquisition: "Drop from Skeleton (Pekkochira)",
    type: "Demon Materials",
    libra: {
      karma: 8,
      effect: "Defense Power",
    },
  },
  {
    name: "Revolting Meat",
    description:
      "Eating this guarantees death. Its color is enough to warn people away.",
    image: BASE + "revolting_meat.png",
    acquisition: "Drop from Caterpillar (Bridion Swamp)",
    type: "Demon Materials",
    libra: {
      karma: 10,
      effect: "Blind Resistance",
    },
  },
  {
    name: "Mandragora",
    description:
      "Formerly a flower, now drained of its evil energy. Don't look at the roots.",
    image: BASE + "mandragora.png",
    acquisition: "Drop from plant monster (Bridion Swamp, Belkade Volcano)",
    type: "Demon Materials",
    libra: {
      karma: 6,
      effect: "ST Gain Rate",
    },
  },
  {
    name: "Tadpole",
    description: "A frog larva. It has a characteristically long tail",
    image: BASE + "tadpole.png",
    acquisition: "Drop from Frog (Bridion Swamp)",
    type: "Demon Materials",
    libra: {
      karma: 5,
      effect: "HP Recovery",
    },
  },
  {
    name: "Poinsettia",
    description:
      "A flower susceptible to evil energy. It is costumarily used as funeral flowers.",
    image: BASE + "poinsettia.png",
    acquisition: "Drop from Alraune (Bridion Swamp)",
    type: "Demon Materials",
    libra: {
      karma: 25,
      effect: "Magical Power",
      effect: "Gradual Recovery",
    },
  },
  {
    name: "Filthy Fang",
    description:
      "An extremely dirty fang that's never been brushed. It is reputed to be very hard.",
    image: BASE + "filthy_fang.png",
    acquisition: "Drop from Goblin (Bridion Swamp)",
    type: "Demon Materials",
    libra: {
      karma: 23,
      effect: "Poison Resistance",
      effect: "Defense Power",
    },
  },
  {
    name: "Charcoal",
    description:
      "A remnant of burned wood. It has various properties, including deodorizing, and repelling insects.",
    image: BASE + "charcoal.png",
    acquisition: "Drop from Flame Spiders (Belkade Volcano)",
    type: "Demon Materials",
    libra: {
      karma: 10,
      effect: "Defense Power",
      effect: "Use Speed",
    },
  },
  {
    name: "Putrid Gill",
    description:
      "This gill is grotesque in appearance, and reeks. It's supposed to be a delicacy, but that doesn't bear thinking on.",
    image: BASE + "putrid_gill.png",
    acquisition:
      "Drop from the flying fish worm enemies (I don't know what these are meant to be) (Belkade Volcano)",
    type: "Demon Materials",
    libra: {
      karma: 19,
      effect: "HP Recovery",
      effect: "Bleeding Resistance",
    },
  },
  {
    name: "Lava Pebble",
    description:
      "A pebble drained of its evil energy. Its altered properties make it different from an ordinary pebble.",
    image: BASE + "lava_pebble.png",
    acquisition: "Drop from Lava Pebble (Belkade Volcano)",
    type: "Demon Materials",
    libra: {
      karma: 31,
      effect: "Defense Power",
      effect: "Experience Earned",
    },
  },
  {
    name: "Anulis' Ribbon",
    description: "A very long ribbon, worn by Anulis. It holds many memories.",
    image: BASE + "anulis_ribbon.png",
    acquisition: "Starting item",
    type: "Valuables",
    libra: {
      karma: 29,
      effect: "Weight Reduction",
      effect: "Use Speed (GOOD)",
    },
  },
  {
    name: "Withered Legendary Herb",
    description:
      "Medicinal herb said to grow near Astraea's Scales. Originally had the power to cure all kinds of illnesses.",
    image: BASE + "withered_legendary_herb.png",
    acquisition: "Cave of Libra, after boss",
    type: "Valuables",
    libra: {
      karma: 24,
      effect: "Max HP",
      effect: "HP Recovery",
      effect: "Gradual Recovery",
    },
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
    libra: {
      karma: 17,
      effect: "Defense Power",
      effect: "Effect Duration",
    },
  },
  {
    name: "Wonder Drug Fruit",
    description:
      "This fruit acts like medicine and alleviates a particular chronic illness, but isn't readily available since the illness is so rare.",
    image: BASE + "wonder_drug_fruit.png",
    acquisition: "Next to Goblin Lair, Bridion Swamp",
    type: "Valuables",
    libra: {
      karma: 16,
      effect: "Use Speed",
      effect: "Magical Power",
      effect: "Guard Durability",
    },
  },
  {
    name: "Wooden Skull",
    description:
      "An elaborately carved wooden skull. It produces a nice sound when tapped.",
    image: BASE + "wooden_skull.png",
    acquisition: "Bridion Swamp Mokyun Shop",
    type: "Valuables",
    libra: {
      karma: 13,
      effect: "Magical Power",
    },
  },
  {
    name: "Silver Skull",
    description:
      "A silver skull made by some mysterious power. Made entirely of pure silver.",
    image: BASE + "silver_skull.png",
    acquisition: "Edge of lake, Bridion Swamp event",
    type: "Valuables",
    libra: {
      karma: 23,
      effect: "Magical Power (GOOD)",
    },
  },
  {
    name: "Gold Skull",
    description:
      "A gold skull made by some mysterious power. Made entirely of pure gold.",
    image: BASE + "gold_skull.png",
    acquisition: "Edge of lake, Bridion Swamp event",
    type: "Valuables",
    libra: {
      karma: 33,
      effect: "Magical Power (EPIC)",
    },
  },
  {
    name: "Stone Plate Fragment (Upper)",
    description:
      "A piece of the stone plate broken by the goblin. By itself, it's completely useless.",
    image: BASE + "stone_plate_fragment_up.png",
    acquisition: "Screen west of Bridion Swamp Mokyun Shop",
    type: "Valuables",
    libra: {
      karma: 27,
      effect: "Petrifaction Resistance (EPIC)",
      effect: "Guard Durability",
    },
  },
  {
    name: "Stone Plate Fragment (Lower)",
    description:
      "A piece of the stone plate broken by the goblin. By itself, it's completely useless.",
    image: BASE + "stone_plate_fragment_down.png",
    acquisition: "Screen west of Bridion Swamp Mokyun Shop",
    type: "Valuables",
    libra: {
      karma: 17,
      effect: "Petrifaction Resistance (GOOD)",
      effect: "Guard Durability",
    },
  },
  {
    name: "Goblin's Stone Plate",
    description:
      "Stone plate that can open the goblins' secret doors. How it works is unknown.",
    image: BASE + "goblins_stone_plate.png",
    acquisition: "Combine both Stone Plate Fragments",
    type: "Valuables",
    libra: {
      karma: 6,
      effect: "Petrifaction Resistance",
    },
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
  {
    name: "Scale Pans",
    description:
      "Pans for a set of scales. Increases the number of items placeable on the scales.",
    image: BASE + "scale_pans.png",
    type: "Collected Items",
  },
  {
    name: "Golden Ticket",
    description:
      "It gives you 5% off when you shop. With several in your possession, you'll get fantastic discounts.",
    image: BASE + "golden_ticket.png",
    type: "Collected Items",
  },
  {
    name: "Decorative Box",
    description: "An empty, splendid-looking box.",
    image: BASE + "decorative_box.png",
    type: "Collected Items",
  },
];

export default items;
