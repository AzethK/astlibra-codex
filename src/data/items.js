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
    name: "Advanced Synthesis Recipes",
    description:
      "Contains information about item synthesis. It allows the used to synthesize advanced items.",
    image: BASE + "advanced_synthesis_recipes.png",
    acquisition: "Arena Battle, Elizas Cup 'Aesthetics of Destruction' Reward",
    type: "Books/Cards",
  },
  {
    name: "Baker's Recipes",
    description:
      "Contains knowledge of bread and cake making. It allows the user to synthesize foods that cannot be made normally.",
    image: BASE + "bakers_recipes.png",
    acquisition: "Arena Battle, Anesta Cup 'Block the Way' Reward",
    type: "Books/Cards",
  },
  {
    name: "Alchemy Recipes",
    description:
      "Contains information about special item synthesis. It allows the user to perform out-of-the-norm synthesis.",
    image: BASE + "alchemy_recipes.png",
    acquisition: "Mokyun Gacha Reward",
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
      effects: ["Experience Earned", "Coins Earned", "Magical Power (GOOD)"],
    },
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
      effects: ["Max HP", "Max ST"],
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
      effects: ["Weight Reduction", "Gradual Recovery"],
    },
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
    name: "World Tree Blossom",
    description:
      "Can be used to travel to any previous save crystal. Can only be used at certain times, but has infinite uses.",
    image: BASE + "world_tree_blossom.png",
    acquisition: "East of the Rispadar Bar",
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
      effects: ["Effect Duration", "Max HP"],
    },
  },
  {
    name: "Lantern",
    description:
      "A glass container with a plate of oil. Illuminates the darkness for a long duration.",
    image: BASE + "lantern.png",
    acquisition: "Shop",
    type: "Miscellaneous",
    libra: {
      karma: 36,
      effects: ["Effect Duration (GOOD)", "Max HP (GOOD)"],
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
      effects: ["Effect Duration"],
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
      effects: ["Effect Duration (GOOD)"],
    },
  },
  {
    name: "Iron Pickaxe",
    description:
      "Crushes rocks and excavates minerals when used at mining points.",
    image: BASE + "iron_pickaxe.png",
    acquisition: "Shop",
    type: "Miscellaneous",
    libra: {
      karma: 29,
      effects: ["Effect Duration (EPIC)"],
    },
  },
  {
    name: "Crystal Pickaxe",
    description:
      "Crushes rocks and excavates minerals when used at mining points.",
    image: BASE + "crystal_pickaxe.png",
    acquisition: "Shop",
    type: "Miscellaneous",
    libra: {
      karma: 56,
      effects: ["Effect Duration (EPIC)", "Weight Reduction (GOOD)"],
    },
  },
  {
    name: "Demon God's Pickaxe",
    description:
      "Crushes rocks and excavates minerals when used at mining points.",
    image: BASE + "demon_gods_pickaxe.png",
    acquisition: "Shop",
    type: "Miscellaneous",
    libra: {
      karma: 68,
      effects: [
        "Experience Earned",
        "Weight Reduction (EPIC)",
        "Defense Power",
      ],
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
      effects: ["Use Speed"],
    },
  },
  {
    name: "Silver Chests Key",
    description:
      "A mysterious key that opens chests dropped by enemies. Opens silver treasure chests.",
    image: BASE + "silver_chests_key.png",
    acquisition: "Combine Clay-like Gold Stones with Key Mold A",
    type: "Miscellaneous",
    libra: {
      karma: 23,
      effects: ["Experience Earned"],
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
      effects: ["Coins Earned"],
    },
  },
  {
    name: "Gunpowder",
    description:
      "A pouch filled with gunpowder. It is highly explosive, so handle it with care.",
    image: BASE + "gunpowder.png",
    acquisition: "Shop",
    type: "Miscellaneous",
    libra: {
      karma: 50,
      effects: [
        "Attack Power (GOOD)",
        "Paralysis Resistance (GOOD)",
        "Blind Resistance",
      ],
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
      effects: ["Defense Power"],
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
      effects: ["Defense Power (GOOD)"],
    },
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
      effects: ["Magical Power (EPIC)"],
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
    name: "Mokyun Doll",
    description:
      "Takes your place in death, resurrecting you on the spot. Cannot be used during boss battles.",
    image: BASE + "mokyun_doll.png",
    acquisition: "Mokyun Gacha Reward / Shop",
    type: "Miscellaneous",
    libra: {
      karma: 26,
      effects: ["ST Gain Rate (EPIC)"],
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
      effects: ["Weight Reduction", "Attack Power"],
    },
  },
  {
    name: "Wooden Boomerang",
    description:
      "With a fick of the wrist, it follows a unique trajectory. Ranged weapon that will always return.",
    image: BASE + "wooden_boomerang.png",
    acquisition: "Belkade Volcano Event",
    type: "Secondary Weapon",
    libra: {
      karma: 24,
      effects: ["Attack Power", "Magical Power"],
    },
  },
  {
    name: "Bomb",
    description:
      "Capable of destroying fragile walls. Also very powerful against enemies.",
    image: BASE + "bomb.png",
    acquisition: "Combine Refining Kit with Gunpowder",
    type: "Secondary Weapon",
    libra: {
      karma: 19,
      effects: ["Defense Power (GOOD)", "Guard Durability"],
    },
  },
  {
    name: "Gunpowder Bullet",
    description: "A bullet filled with gunpowder.",
    image: BASE + "gunpowder_bullet.png",
    type: "Secondary Weapon",
    libra: {
      karma: 39,
      effects: ["Defense Power (EPIC)", "Guard Durability (GOOD)"],
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
      effects: ["Attack Power (GOOD)"],
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
      effects: ["Attack Power"],
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
    name: "Yggdrasil Bow",
    description:
      "Legendary bow supposedly carved from the World Tree. It feels warm with life despite being made of wood.",
    image: BASE + "yggdrasil_bow.png",
    acquisition: "Akrasinon, Levin's hut",
    type: "Secondary Weapon",
  },
  {
    name: "Torch Bow",
    description:
      "Launches arrows strapped with torches. Can set things ablaze. Athough it is powerful, it consumes a torch each time it is fired.",
    image: BASE + "torch_bow.png",
    acquisition: "Combine Yggdrasil Bow and Torch",
    type: "Secondary Weapon",
  },
  {
    name: "Spirit Bow Ushas",
    description:
      "Fires at a set trajectory that aims upwards. Consumes 20 arrows and briefly delivers tremendous firepower.",
    image: BASE + "spirit_bow_ushas.png",
    acquisition:
      "West of the Belkade Cave, area with a massive pit, use Zero Gravity / Air Surf to get to the chest",
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
    name: "Double Crossbow",
    description:
      "Takes time to load, but can fire two arrows at once. Consumes 2 arrows and attacks at a distance.",
    image: BASE + "double_crossbow.png",
    acquisition: "Mokyun Gacha Reward",
    type: "Secondary Weapon",
  },
  {
    name: "Shotgun",
    description:
      "Takes a long time to load but fires explosive rounds. Consumes 5 gunpowder bullets to attack a wide area.",
    image: BASE + "shotgun.png",
    acquisition: "Mokyun Gacha Reward",
    type: "Secondary Weapon",
  },
  {
    name: "Laser Gun",
    description:
      "Takes a long time to load but fires energy bullets. Consumes 10 gunpowder bullets for a super rapidfire attack.",
    image: BASE + "laser_gun.png",
    acquisition: "Mokyun Gacha Reward",
    type: "Secondary Weapon",
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
      effects: ["Attack Power (GOOD)", "Magical Power"],
    },
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
      effects: ["Max HP", "HP Recovery"],
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
      effects: ["Max HP (GOOD)", "HP Recovery"],
    },
  },
  {
    name: "Amrita",
    description:
      "Recovers 1,200 HP. Expensive, but immediately restores your health.",
    image: BASE + "amrita.png",
    acquisition: "Combine Sapodilla Fruit and Empty Bottle",
    type: "Medicines/Bottles",
    libra: {
      karma: 32,
      effects: ["Max HP (GOOD)", "HP Recovery (GOOD)"],
    },
  },
  {
    name: "Ambrosia",
    description: "Recovers 3,000 HP. A mysterious remedy.",
    image: BASE + "ambrosia.png",
    acquisition: "Combine Tufted Fruit and Empty Bottle",
    type: "Medicines/Bottles",
    libra: {
      karma: 52,
      effects: ["Max HP (EPIC)", "HP Recovery (EPIC)"],
    },
  },
  {
    name: "Numbness-relieving Medicine",
    description:
      "Heals the abnormal status Paralysis. Neutralizes Paralysis and provides lasting resistance for a while.",
    image: BASE + "numbness_relieving_medicine.png",
    acquisition: "Shop",
    type: "Medicines/Bottles",
    libra: {
      karma: 29,
      effects: ["Paralysis Resistance (EPIC)"],
    },
  },
  {
    name: "Eye Medicine",
    description:
      "Heals the abnormal status Blind. Neutralizes Blind and provides lasting resistance for a while.",
    image: BASE + "eye_medicine.png",
    acquisition: "Shop",
    type: "Medicines/Bottles",
    libra: {
      karma: 30,
      effects: ["Blind Resistance (EPIC)"],
    },
  },
  {
    name: "Hemostatic",
    description:
      "Heals the abnormal status Bleeding. Neutralizes Bleeding and provides lasting resistance for a while.",
    image: BASE + "hemostatic.png",
    acquisition: "Shop",
    type: "Medicines/Bottles",
    libra: {
      karma: 34,
      effects: ["Bleeding Resistance (EPIC)"],
    },
  },
  {
    name: "Holy Water",
    description:
      "Prevents Petrifaction for a while. Items cannot be used when petrified, so protect yourself beforehand.",
    image: BASE + "holy_water.png",
    acquisition: "Shop",
    type: "Medicines/Bottles",
    libra: {
      karma: 26,
      effects: ["Petrifaction Resistance (EPIC)"],
    },
  },
  {
    name: "Antitoxin",
    description:
      "Heals the abnormal status Deadly Poison. Neutralizes Deadly Poison and provides lasting resistance for a while.",
    image: BASE + "antitoxin.png",
    acquisition: "Shop",
    type: "Medicines/Bottles",
    libra: {
      karma: 35,
      effects: ["Poison Resistance (EPIC)"],
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
      effects: ["Adaptability"],
    },
  },
  {
    name: "Empty Bottle",
    description:
      "A empty bottle. Surprisingly expensive, as it is made of glass.",
    image: BASE + "empty_bottle.png",
    acquisition: "Shop",
    type: "Medicines/Bottles",
    libra: {
      karma: 18,
      effects: ["Adaptability (GOOD)"],
    },
  },
  {
    name: "Large Empty Bottle",
    description:
      "A large empty bottle. Surprisingly expensive, as it is made of glass.",
    image: BASE + "large_empty_bottle.png",
    acquisition: "Shop",
    type: "Medicines/Bottles",
    libra: {
      karma: 28,
      effects: ["Adaptability (EPIC)"],
    },
  },
  {
    name: "Small Water-filled Bottle",
    description:
      "A small bottle of delicious water. Heals more gently than restorative remedies.",
    image: BASE + "small_water_filled_bottle.png",
    acquisition: "Use Small Empty Bottle on water",
    type: "Medicines/Bottles",
    libra: {
      karma: 20,
      effects: ["Adaptability", "Gradual Recovery"],
    },
  },
  {
    name: "Water-filled Bottle",
    description:
      "A bottle of delicious water. Heals more gently than restorative remedies.",
    image: BASE + "water_filled_bottle.png",
    acquisition: "Use Empty Bottle on water",
    type: "Medicines/Bottles",
    libra: {
      karma: 40,
      effects: ["Adaptability (GOOD)", "Gradual Recovery (GOOD)"],
    },
  },
  {
    name: "Large Water-filled Bottle",
    description:
      "A large bottle of delicious water. Heals more gently than restorative remedies.",
    image: BASE + "large_water_filled_bottle.png",
    acquisition: "Use Large Empty Bottle on water",
    type: "Medicines/Bottles",
    libra: {
      karma: 60,
      effects: ["Adaptability (EPIC)", "Gradual Recovery (EPIC)"],
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
      effects: ["HP Recovery"],
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
      effects: ["HP Recovery (GOOD)"],
    },
  },
  {
    name: "Sapodilla Fruit",
    description: "Recovers 900 HP. Is this...edible?",
    image: BASE + "sapodilla_fruit.png",
    acquisition: "Shop",
    type: "Food",
    libra: {
      karma: 20,
      effects: ["HP Recovery", "HP Recovery (GOOD)"],
    },
  },
  {
    name: "Tufted Fruit",
    description:
      "Recovers 2,000 HP. It's hairy and difficult to eat, but the inside is juicy.",
    image: BASE + "tufted_fruit.png",
    acquisition: "Shop",
    type: "Food",
    libra: {
      karma: 40,
      effects: ["HP Recovery (GOOD)", "HP Recovery (EPIC)"],
    },
  },
  {
    name: "Dogu Fruit",
    description:
      "Recovers 4,000 HP. Contrary to its toxic appearance, this fruit-like medicine is good for the body.",
    image: BASE + "dogu_fruit.png",
    acquisition: "Shop",
    type: "Food",
    libra: {
      karma: 42,
      effects: ["HP Recovery (EPIC)", "Weight Reduction"],
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
      effects: ["Max HP", "HP Recovery"],
    },
  },
  {
    name: "Egg on Bread",
    description:
      "Recovers 250 HP. Fried egg on sliced bread. Pazu's favorite food.",
    image: BASE + "egg_on_bread.png",
    acquisition: "Combine Bread and Egg",
    type: "Food",
    libra: {
      karma: 18,
      effects: ["Max HP", "HP Recovery", "ST Gain Rate"],
    },
  },
  {
    name: "Cream Puff",
    description:
      "Recovers 400 HP. This soft pastry is filled with whipped cream.",
    image: BASE + "cream_puff.png",
    acquisition: "Combine Milk and Flour",
    type: "Food",
    libra: {
      karma: 28,
      effects: ["Max HP (GOOD)", "HP Recovery", "ST Gain Rate"],
    },
  },
  {
    name: "Dango",
    description: "Recovers 600 HP. Its sticky texture is to die for.",
    image: BASE + "dango.png",
    acquisition: "Combine Mochi and Mochi",
    type: "Food",
    libra: {
      karma: 38,
      effects: ["Max HP (GOOD)", "HP Recovery (GOOD)", "ST Gain Rate"],
    },
  },
  {
    name: "Chocolate Cream Puff",
    description:
      "Recovers 800 HP. This chocolate cream puff is topped with chocolate chips.",
    image: BASE + "chocolate_cream_puff.png",
    acquisition: "Combine Cream Puff and Chocolate",
    type: "Food",
    libra: {
      karma: 48,
      effects: ["Max HP (GOOD)", "HP Recovery (GOOD)", "ST Gain Rate (GOOD)"],
    },
  },
  {
    name: "Hamburger",
    description:
      "Recovers 1,200 HP. The fluffy bun is filled with a generous serving of meat.",
    image: BASE + "hamburger.png",
    acquisition: "Combine Flour and Beef",
    type: "Food",
    libra: {
      karma: 38,
      effects: ["Max HP (EPIC)", "HP Recovery", "ST Gain Rate"],
    },
  },
  {
    name: "Red Bean Manju",
    description:
      "Recovers 1,800 HP. The fluffy dango and sweet red bean jam are a match made in heaven.",
    image: BASE + "red_bean_manju.png",
    acquisition: "Combine Flour and Red Bean Jam",
    type: "Food",
    libra: {
      karma: 48,
      effects: ["Max HP (EPIC)", "HP Recovery (GOOD)", "ST Gain Rate"],
    },
  },
  {
    name: "Jam Roll",
    description:
      "Recovers 2,400 HP. It is a bread roll filled with jam. Tear off a bit and enjoy.",
    image: BASE + "jam_roll.png",
    acquisition: "Combine Bread and Strawberry Jam",
    type: "Food",
    libra: {
      karma: 58,
      effects: ["Max HP (EPIC)", "HP Recovery (GOOD)", "ST Gain Rate (GOOD)"],
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
      effects: ["Attack Power", "Magical Power", "Weight Reduction"],
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
      effects: ["Use Speed", "Effect Duration", "Guard Durability"],
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
      effects: ["Attack Power (GOOD)", "Guard Durability", "Weight Reduction"],
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
      effects: ["Defense Power (GOOD)", "Use Speed", "Effect Duration"],
    },
  },
  {
    name: "Soft-Serve Ice Cream",
    description:
      "Generates 43 [Wind] and [Water] force. A sweet, cold dessert made from milk. Condensed milk flavor.",
    image: BASE + "soft_serve_ice_cream.png",
    acquisition: "Combine Egg and Milk",
    type: "Food",
    libra: {
      karma: 44,
      effects: ["Use Speed (GOOD)", "Effect Duration (GOOD)", "Magical Power"],
    },
  },

  {
    name: "Mont Blanc",
    description:
      "Generates 46 [Earth] and [Darkness] force. No one would expect chestnuts to taste this good.",
    image: BASE + "mont_blanc.png",
    acquisition: "Combine Chestnut and Sponge Cake",
    type: "Food",
    libra: {
      karma: 49,
      effects: [
        "Attack Power (GOOD)",
        "Guard Durability (GOOD)",
        "Weight Reduction",
      ],
    },
  },
  {
    name: "Apple Pie",
    description:
      "Generates 40 [Fire] and [Holy] force. The gooey apple filling is hot and sweet.",
    image: BASE + "apple_pie.png",
    acquisition: "Combine Pie Dough and Apple",
    type: "Food",
    libra: {
      karma: 56,
      effects: [
        "Magical Power (GOOD)",
        "Weight Reduction (GOOD)",
        "ST Gain Rate",
      ],
    },
  },
  {
    name: "Strawberry Au Lait",
    description:
      "Generates 77 [Water] and [Fire] force. Strawberry milk. Pink colored  and looks delicious.",
    image: BASE + "strawberry_au_lait.png",
    acquisition: "Combine Strawberry and Milk",
    type: "Food",
    libra: {
      karma: 63,
      effects: [
        "Weight Reduction (GOOD)",
        "Magical Power (GOOD)",
        "Max ST (GOOD)",
      ],
    },
  },
  {
    name: "Strawberry Crepe",
    description:
      "Generates 72 [Wind] and [Darkness] force. This delicious crepe is made with an abundance  of fresh strawberries.",
    image: BASE + "strawberry_crepe.png",
    acquisition: "Combine Pie Dough and Strawberry",
    type: "Food",
    libra: {
      karma: 45,
      effects: [
        "ST Gain Rate (GOOD)",
        "Guard Durability (GOOD)",
        "Defense Power (GOOD)",
      ],
    },
  },
  {
    name: "Shortcake",
    description:
      "Generates 70 [Earth] and [Holy] force. A standard cake. Simple is best for sweetness.",
    image: BASE + "shortcake.png",
    acquisition: "Combine Strawberry and Sponge Cake",
    type: "Food",
    libra: {
      karma: 57,
      effects: [
        "Attack Power (GOOD)",
        "Effect Duration(GOOD)",
        "Max HP (GOOD)",
      ],
    },
  },
  {
    name: "Soft-Serve Chocolate Ice Cream",
    description:
      "Generates 110 [Wind] and [Earth] force. This chocolate-favored ice cream neutraizes sweetness.",
    image: BASE + "soft_serve_chocolate_ice_cream.png",
    acquisition: "Combine Soft-Serve Ice Cream and Chocolate",
    type: "Food",
    libra: {
      karma: 34,
      effects: ["Attack Power (EPIC)", "Use Speed", "Guard Durability"],
    },
  },
  {
    name: "Chocolate Chip Cookie",
    description:
      "Generates 121 [Fire] and [Holy] force. This cookie features chocolate chips. Slightly sweet.",
    image: BASE + "chocolate_chip_cookie.png",
    acquisition: "Combine Plain Cookies and Chocolate",
    type: "Food",
    libra: {
      karma: 43,
      effects: ["Defense Power (EPIC)", "Effect Duration", "ST Gain Rate"],
    },
  },
  {
    name: "Chocolate Pie",
    description:
      "Generates 116 [Darkness] and [Water] force. The crust is flaky and the chocolate is sweet.",
    image: BASE + "chocolate_pie.png",
    acquisition: "Combine Pie Dough and Chocolate",
    type: "Food",
    libra: {
      karma: 63,
      effects: ["Magical Power (EPIC)", "Weight Reduction", "Magical Power"],
    },
  },
  {
    name: "Hot Chocolate",
    description:
      "Generates 152 [Water] and [Earth] force. A comforting beverage.",
    image: BASE + "hot_chocolate.png",
    acquisition: "Combine Milk and Cocoa",
    type: "Food",
    libra: {
      karma: 49,
      effects: ["Use Speed (EPIC)", "Attack Power (GOOD)", "ST Gain Rate"],
    },
  },
  {
    name: "Chocolate Cookie",
    description:
      "Generates 145 [Fire] and [Wind] force. Its bitter taste is meant for grown-ups. Enjoy it with a sweet beverage.",
    image: BASE + "chocolate_cookie.png",
    acquisition: "Combine Plain Cookies and Cocoa",
    type: "Food",
    libra: {
      karma: 60,
      effects: [
        "Effect Duration (EPIC)",
        "Defense Power (GOOD)",
        "Magical Power",
      ],
    },
  },
  {
    name: "Meat Pie",
    description:
      "Generates 159 [Darkness] and [Holy] force. A marriage between confection and meat. It is filling.",
    image: BASE + "meat_pie.png",
    acquisition: "Combine Beef and Pie Dough",
    type: "Food",
    libra: {
      karma: 50,
      effects: [
        "Weight Reduction (EPIC)",
        "Use Speed (GOOD)",
        "Guard Durability",
      ],
    },
  },
  {
    name: "Soft Serve Matcha Ice Cream",
    description:
      "Generates 220 [Wind] and [Holy] force. Matcha-flavored ice cream. The sweetness and bitterness never get old.",
    image: BASE + "soft_serve_matcha_ice_cream.png",
    acquisition: "Combine Soft Serve Ice Cream and Tea Leaves",
    type: "Food",
    libra: {
      karma: 66,
      effects: [
        "Attack Power (EPIC)",
        "Magical Power (GOOD)",
        "Use Speed (GOOD)",
      ],
    },
  },
  {
    name: "Matcha Au Lait",
    description:
      "Generates 213 [Water] and [Darkness] force. Made of milk and green tea powder. Sweetness is not enough to satisfy.",
    image: BASE + "matcha_au_lait.png",
    acquisition: "Combine Milk and Tea Leaves",
    type: "Food",
    libra: {
      karma: 67,
      effects: [
        "Use Speed (EPIC)",
        "Weight Reduction (GOOD)",
        "Defense Power (GOOD)",
      ],
    },
  },
  {
    name: "Mochi Rolled in Bean Jam",
    description:
      "Generates 209 [Earth] and [Fire] force. This sticky mochi is rolled in sweet red bean jam.",
    image: BASE + "mochi_rolled_in_bean_jam.png",
    acquisition: "Combine Dango and Tea Leaves",
    type: "Food",
    libra: {
      karma: 59,
      effects: [
        "ST Gain Rate (EPIC)",
        "Guard Durability (GOOD)",
        "Gradual Recovery (GOOD)",
      ],
    },
  },
  {
    name: "Strawberry Jam",
    description:
      "Recovers 50 ST. This sweet and tangy jam contains bits of strawberry.",
    image: BASE + "strawberry_jam.png",
    acquisition: "Combine Strawberry and Sugar",
    type: "Food",
    libra: {
      karma: 98,
      effects: [
        "Poison Resistance (EPIC)",
        "Bleeding Resistance (EPIC)",
        "Paralysis Resistance (EPIC)",
      ],
    },
  },
  {
    name: "Cotton Candy",
    description:
      "Recovers 250 HP. Sweet and melts in your mouth. It's tasty, mokyu.",
    image: BASE + "cotton_candy.png",
    acquisition: "Combine Sugar and Sugar",
    type: "Food",
    libra: {
      karma: 85,
      effects: [
        "Paralysis Resistance (EPIC)",
        "Petrifaction Resistance (EPIC)",
        "Blind Resistance (EPIC)",
      ],
    },
  },
  {
    name: "Strawberry Ice Cream",
    description:
      "Recovers 322 [Earth] and [Fire] force. Strawberry-flavored ice cream is everyone's favorite.",
    image: BASE + "strawberry_ice_cream.png",
    acquisition: "Combine Strawberry Jam and Soft-Serve Ice Cream",
    type: "Food",
    libra: {
      karma: 63,
      effects: [
        "Guard Durability (EPIC)",
        "Effect Duration (EPIC)",
        "Magical Power",
      ],
    },
  },
  {
    name: "Jam Cookie",
    description:
      "Recovers 316 [Earth] and [Water] force. Crumbly cookie and sweet jam is a golden combination.",
    image: BASE + "jam_cookie.png",
    acquisition: "Combine Strawberry Jam and Plain Cookies",
    type: "Food",
    libra: {
      karma: 51,
      effects: ["Defense Power (EPIC)", "Use Speed (EPIC)", "Guard Durability"],
    },
  },
  {
    name: "Candied Apple",
    description:
      "Recovers 307 [Darkness] and [Water] force. This is the ultimate candy, combining a crunchy texture and crisp apple.",
    image: BASE + "candied_apple.png",
    acquisition: "Combine Apple and Cotton Candy",
    type: "Food",
    libra: {
      karma: 74,
      effects: [
        "Attack Power (EPIC)",
        "Weight Reduction (EPIC)",
        "ST Gain Rate",
      ],
    },
  },
  {
    name: "Delicious Cake",
    description:
      "Recovers 3,000 HP. Cures all abnormal statuses. For those on the plump side who are not satisfied by shortcakes.",
    image: BASE + "delicious_cake.png",
    acquisition: "Combine Shortcake and Shortcake",
    type: "Food",
    libra: {
      karma: 40,
      effects: ["Petrifaction Resistance (GOOD)", "Bleeding Resistance (GOOD)"],
    },
  },
  {
    name: "Decorative Cake",
    description: "This item offers nothing. It looks too good to eat.",
    image: BASE + "decorative_cake.png",
    acquisition: "Combine Delicious Cake and Delicious Cake",
    type: "Food",
    libra: {
      karma: 86,
      effects: [
        "Defense Power (EPIC)",
        "Guard Durability (EPIC)",
        "Weight Reduction (EPIC)",
      ],
    },
  },
  {
    name: "Chocolate Cake",
    description:
      "Recovers 800 HP. Cures all abnormal statuses. A magical synthesis of chocolate and cake. It's super tasty.",
    image: BASE + "chocolate_cake.png",
    acquisition: "Combine Chocolate and Shortcake",
    type: "Food",
    libra: {
      karma: 64,
      effects: [
        "Poison Resistance (GOOD)",
        "Blind Resistance (GOOD)",
        "Paralysis Resistance (GOOD)",
      ],
    },
  },
  {
    name: "Sachertorte",
    description: "This item offers nothing. It looks too good to eat.",
    image: BASE + "sachertorte.png",
    acquisition: "Combine Chocolate Cake and Chocolate Cake",
    type: "Food",
    libra: {
      karma: 30,
      effects: ["Attack Power", "Magical Power", "ST Gain Rate"],
    },
  },
  {
    name: "Valentine Cake",
    description: "This item offers nothing. It looks too good to eat.",
    image: BASE + "valentine_cake.png",
    acquisition: "Combine Sachertorte and Love",
    type: "Food",
    libra: {
      karma: 60,
      effects: [
        "Attack Power (GOOD)",
        "Magical Power (GOOD)",
        "ST Gain Rate (GOOD)",
      ],
    },
  },
  {
    name: "Valentine Present",
    description: "This item offers nothing. It looks too good to eat.",
    image: BASE + "valentine_present.png",
    acquisition: "Combine Valentine Cake and Decorative Box",
    type: "Food",
    libra: {
      karma: 90,
      effects: [
        "Attack Power (EPIC)",
        "Magical Power (EPIC)",
        "ST Gain Rate (EPIC)",
      ],
    },
  },
  {
    name: "Egg",
    description:
      "A basic food ingredient. Chicken eggs are used in various dishes.",
    image: BASE + "egg.png",
    acquisition: "Shop",
    type: "Food Ingredients",
    libra: {
      karma: 24,
      effects: ["Paralysis Resistance", "Poison Resistance"],
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
      effects: ["Petrifaction Resistance", "Blind Resistance"],
    },
  },
  {
    name: "Butter",
    description:
      "A basic food ingredient. With its pleasant aroma, it complements sweet treats.",
    image: BASE + "butter.png",
    type: "Food Ingredients",
    acquisition: "Shop",
    libra: {
      karma: 23,
      effects: ["Bleeding Resistance", "Paralysis Resistance"],
    },
  },
  {
    name: "Cheese",
    description:
      "A basic food. A slightly stinky fermented food. Its usefulness depends on how it's used.",
    image: BASE + "cheese.png",
    type: "Food Ingredients",
    libra: {
      karma: 39,
      effects: ["Bleeding Resistance", "Poison Resistance", "Blind Resistance"],
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
      effects: [
        "Petrifaction Resistance",
        "Paralysis Resistance",
        "Bleeding Resistance",
      ],
    },
  },
  {
    name: "Milk",
    description:
      "A basic food. The best drink produced by nature, regarded as the water of the gods.",
    image: BASE + "milk.png",
    type: "Food Ingredients",
    acquisition: "Shop",
    libra: {
      karma: 48,
      effects: [
        "Paralysis Resistance (GOOD)",
        "Poison Resistance",
        "Bleeding Resistance",
      ],
    },
  },
  {
    name: "Chestnut",
    description: "A basic food. The flesh has a unique, slightly sweet flavor.",
    image: BASE + "chestnut.png",
    type: "Food Ingredients",
    libra: {
      karma: 31,
      effects: [
        "Petrifaction Resistance (GOOD)",
        "Paralysis Resistance",
        "Petrifaction Resistance",
      ],
    },
  },
  {
    name: "Apple",
    description:
      "A basic food. Popular for its moderate sweetness and crisp texture.",
    image: BASE + "apple.png",
    type: "Food Ingredients",
    acquisition: "Shop",
    libra: {
      karma: 43,
      effects: [
        "Bleeding Resistance (GOOD)",
        "Blind Resistance",
        "Paralysis Resistance",
      ],
    },
  },
  {
    name: "Strawberry",
    description:
      "A basic food. This freshly picked strawberry smells wonderful.",
    image: BASE + "strawberry.png",
    type: "Food Ingredients",
    acquisition: "Shop",
    libra: {
      karma: 43,
      effects: [
        "Paralysis Resistance",
        "Blind Resistance (GOOD)",
        "Bleeding Resistance",
      ],
    },
  },
  {
    name: "Mochi",
    description: "A basic food. It has a sticky, springy texture.",
    image: BASE + "mochi.png",
    type: "Food Ingredients",
    libra: {
      karma: 40,
      effects: [
        "Petrifaction Resistance",
        "Paralysis Resistance (GOOD)",
        "Poison Resistance",
      ],
    },
  },
  {
    name: "Chocolate",
    description:
      "A basic food. Very sweet, slightly bitter, and melts in your mouth.",
    image: BASE + "chocolate.png",
    type: "Food Ingredients",
    libra: {
      karma: 74,
      effects: [
        "Poison Resistance (EPIC)",
        "Blind Resistance (GOOD)",
        "Paralysis Resistance (GOOD)",
      ],
    },
  },
  {
    name: "Cocoa",
    description: "A basic food. A bittersweet, free-flowing powder.",
    image: BASE + "cocoa.png",
    type: "Food Ingredients",
    libra: {
      karma: 64,
      effects: [
        "Paralysis Resistance (EPIC)",
        "Poison Resistance (GOOD)",
        "Blind Resistance",
      ],
    },
  },
  {
    name: "Beef",
    description: "A basic food. Meat purloined from a cow.",
    image: BASE + "beef.png",
    type: "Food Ingredients",
    libra: {
      karma: 61,
      effects: [
        "Poison Resistance (EPIC)",
        "Blind Resistance (GOOD)",
        "Petrifaction Resistance",
      ],
    },
  },
  {
    name: "Tea Leaves",
    description: "Basic food. It tastes bitter when chewed, so what is it for?",
    image: BASE + "tea_leaves.png",
    type: "Food Ingredients",
    libra: {
      karma: 78,
      effects: [
        "Bleeding Resistance (EPIC)",
        "Paralysis Resistance (EPIC)",
        "Poison Resistance",
      ],
    },
  },
  {
    name: "Red Bean Jam",
    description:
      "A basic food. Smooth and delicately sweet, enjoyed by the elderly.",
    image: BASE + "red_bean_jam.png",
    type: "Food Ingredients",
    libra: {
      karma: 66,
      effects: [
        "Blind Resistance (EPIC)",
        "Petrifaction Resistance (EPIC)",
        "Blind Resistance",
      ],
    },
  },
  {
    name: "Sugar",
    description:
      "A basic food. The granules are sweet, but it's hard to eat on its own.",
    image: BASE + "sugar.png",
    type: "Food Ingredients",
    libra: {
      karma: 91,
      effects: [
        "Petrifaction Resistance (EPIC)",
        "Poison Resistance (EPIC)",
        "Blind Resistance (EPIC)",
      ],
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
    name: "Book of Battle Records",
    description: "Allows you to view various battle records.",
    image: BASE + "book_of_battle_records.png",
    acquisition: "Mokyun Gacha Reward",
    type: "Books/Cards",
  },
  {
    name: "Treasure Encyclopaedia",
    description:
      "Contains information about items obtained from treasure chests.",
    image: BASE + "treasure_encyclopaedia.png",
    acquisition: "Arena Battle, Urugut Cup, 'Snipe' Reward",
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
    name: "Technique Scroll - Shield Charge",
    description:
      "An esoteric scroll describing the Shield Charge technique. Open to view details.",
    image: BASE + "technique_scroll.png",
    acquisition: "Elizas, chest found by bombing a wall east of the village.",
    type: "Books/Cards",
  },
  {
    name: "Technique Scroll - Air Blade",
    description:
      "An esoteric scroll describing the Air Blade technique. Open to view details.",
    image: BASE + "technique_scroll.png",
    acquisition: "Akrasinon, chest in dark area with water.",
    type: "Books/Cards",
  },
  {
    name: "Technique Scroll - Air Surf",
    description:
      "An esoteric scroll describing the Air Surf technique. Open to view details.",
    image: BASE + "technique_scroll.png",
    acquisition: "Elysium, chest under the ground.",
    type: "Books/Cards",
  },
  {
    name: "Technique Scroll - Tornado Slash",
    description:
      "An esoteric scroll describing the Tornado Slash technique. Open to view details.",
    image: BASE + "technique_scroll.png",
    acquisition: "Elysium, chest under the ground.",
    type: "Books/Cards",
  },
  {
    name: "Technique Scroll - Zero Gravity",
    description:
      "An esoteric scroll describing the Zero Gravity technique. Open to view details.",
    image: BASE + "technique_scroll.png",
    acquisition:
      "Research Lab, go up the elevator and follow the path to the left, go up and go through the red door, open the chest.",
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
    name: "Technique Sealing Medal",
    description:
      "When used with a technique scroll, it seals the technique. The seal can be disassembled to regain the medal.",
    image: BASE + "technique_sealing_medal.png",
    acquisition: "Rispadar Clothes Shop",
    type: "Books/Cards",
    libra: {
      karma: 55,
      effects: [
        "Blind Resistance (GOOD)",
        "Petrifaction Resistance (GOOD)",
        "Paralysis Resistance (GOOD)",
      ],
    },
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
    name: "[Sealed] Technique Scroll - Shield Charge",
    description:
      "A sealed esoteric scroll describing the Shield Charge technique. Open to view details.",
    image: BASE + "sealed_technique_scroll.png",
    acquisition: "Combine Technique Sealing Medal with the technique scroll",
    type: "Books/Cards",
  },
  {
    name: "[Sealed] Technique Scroll - Air Blade",
    description:
      "A sealed esoteric scroll describing the Air Blade technique. Open to view details.",
    image: BASE + "sealed_technique_scroll.png",
    acquisition: "Combine Technique Sealing Medal with the technique scroll",
    type: "Books/Cards",
  },
  {
    name: "[Sealed] Technique Scroll - Air Surf",
    description:
      "A sealed esoteric scroll describing the Air Surf technique. Open to view details.",
    image: BASE + "sealed_technique_scroll.png",
    acquisition: "Combine Technique Sealing Medal with the technique scroll",
    type: "Books/Cards",
  },
  {
    name: "[Sealed] Technique Scroll - Tornado Slash",
    description:
      "A sealed esoteric scroll describing the Tornado Slash technique. Open to view details.",
    image: BASE + "sealed_technique_scroll.png",
    acquisition: "Combine Technique Sealing Medal with the technique scroll",
    type: "Books/Cards",
  },
  {
    name: "[Sealed] Technique Scroll - Zero Gravity",
    description:
      "A sealed esoteric scroll describing the Zero Gravity technique. Open to view details.",
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
    name: "The Priest's Diary",
    description:
      "Thhe diary kept by Father Edwin. Some pages have been torn away, but you can collect them to read the full account.",
    image: BASE + "the_priests_diary.png",
    acquisition: "Elizas Event",
    type: "Books/Cards",
    libra: {
      karma: 36,
      effects: ["Max ST (GOOD)", "Magical Power (GOOD)"],
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
      effects: ["Gradual Recovery (GOOD)", "Experience Earned (GOOD)"],
    },
  },
  {
    name: "Well Epistle",
    description:
      "This roll of paper is old and looks like it's about to crumble. It describes the well and the sluice.",
    image: BASE + "well_epistle.png",
    acquisition: "Arkasinon, on top of a table in a ruined building",
    type: "Books/Cards",
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
      effects: ["Max HP", "Max HP (GOOD)"],
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
      effects: ["Max ST", "Max ST (GOOD)"],
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
      effects: ["Attack Power", "Attack Power (GOOD)"],
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
      effects: ["Defense Power", "Defense Power (GOOD)"],
    },
  },
  {
    name: "Magical Power Card",
    description:
      "A mysterious card that increases your magical power when used. Depicts the witch, Morgan le Fay.",
    image: BASE + "magical_power_card.png",
    acquisition: "Loot Chest",
    type: "Books/Cards",
    libra: {
      karma: 36,
      effects: ["Magical Power", "Magical Power (GOOD)"],
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
      effects: ["Coins Earned", "Coins Earned (GOOD)"],
    },
  },
  {
    name: "Agility Card",
    description:
      "A mysterious card that increases your agility when used. Depicts Le Hoot, the goddess of breath.",
    image: BASE + "agility_card.png",
    acquisition: "Loot Chest",
    type: "Books/Cards",
    libra: {
      karma: 44,
      effects: ["Weight Reduction", "Weight Reduction (GOOD)"],
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
      effects: ["Adaptability", "Adaptability (GOOD)"],
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
      effects: ["Effect Duration", "Blind Resistance"],
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
      effects: ["Max ST (GOOD)", "Poison Resistance (GOOD)"],
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
      effects: ["Max ST (EPIC)", "Paralysis Resistance (EPIC)"],
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
      effects: ["Defense Power"],
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
      effects: ["Defense Power"],
    },
  },
  {
    name: "Iron Ore",
    description:
      "Extremely hard and heavy ore containing metal. It is sometimes called kurogane in the East.",
    image: BASE + "iron_ore.png",
    acquisition: "Mining",
    type: "Ore/Gems",
    libra: {
      karma: 9,
      effects: ["Defense Power", "Guard Durability"],
    },
  },
  {
    name: "Gold Ore",
    description:
      "This soft and pliable ore contains gold. It has a mysterious power that captivates people.",
    image: BASE + "gold_ore.png",
    acquisition: "Mining",
    type: "Ore/Gems",
    libra: {
      karma: 19,
      effects: ["Defense Power (GOOD)", "Guard Durability"],
    },
  },
  {
    name: "High-carbon Steel Ore",
    description:
      "An ore with high levels of impurities called vanadium. It is extremely rare, and difficut to obtain.",
    image: BASE + "high_carbon_steel_ore.png",
    acquisition: "Mining",
    type: "Ore/Gems",
    libra: {
      karma: 29,
      effects: ["Defense Power (GOOD)", "Guard Durability (GOOD)"],
    },
  },
  {
    name: "Magical Silver Ore",
    description:
      "This mysterious ore doesn't inhibit magical power (telekinesis). This rare ore is used in items such as artifacts.",
    image: BASE + "magical_silver_ore.png",
    acquisition: "Mining",
    type: "Ore/Gems",
    libra: {
      karma: 39,
      effects: ["Defense Power (GOOD)", "Guard Durability (EPIC)"],
    },
  },
  {
    name: "Adamantine",
    description:
      "Known as the hardest rare metal in the world. Its name comes from adamas (diamond).",
    image: BASE + "adamantine.png",
    acquisition: "Mining",
    type: "Ore/Gems",
    libra: {
      karma: 39,
      effects: ["Defense Power (EPIC)", "Guard Durability (GOOD)"],
    },
  },
  {
    name: "Hihi-Irokane",
    description:
      "A legendary ore of the East. It is reputed to be a living metal that never changes.",
    image: BASE + "hihi_irokane.png",
    acquisition: "Mining",
    type: "Ore/Gems",
    libra: {
      karma: 49,
      effects: ["Defense Power (EPIC)", "Guard Durability (EPIC)"],
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
      effects: ["Attack Power"],
    },
  },
  {
    name: "Iron Ingot",
    description: "This ingot is made from iron ore. It is also called a bar.",
    image: BASE + "iron_ingot.png",
    acquisition: "Combine Iron Ore and Refining Kit",
    type: "Ore/Gems",
    libra: {
      karma: 11,
      effects: ["Attack Power"],
    },
  },
  {
    name: "Gold Ingot",
    description: "This ingot is made from gold ore. It is also called a bar.",
    image: BASE + "gold_ingot.png",
    acquisition: "Combine Gold Ore and Refining Kit",
    type: "Ore/Gems",
    libra: {
      karma: 24,
      effects: ["Attack Power", "Magical Power"],
    },
  },
  {
    name: "Damascus Ingot",
    description:
      "A dark ingot with a distinctive wood grain pattern. It is not only hard but has high aesthetic value.",
    image: BASE + "damascus_ingot.png",
    acquisition: "Combine High-Carbon Steel Ore and Refining Kit",
    type: "Ore/Gems",
    libra: {
      karma: 34,
      effects: ["Attack Power (GOOD)", "Magical Power"],
    },
  },
  {
    name: "Mithril",
    description:
      "A magical metal that is harder than steel and ighter than a feather. It is compatible with magic and holds a sacred power.",
    image: BASE + "mithril.png",
    acquisition: "Combine Magical Silver Ore and Refining Kit",
    type: "Ore/Gems",
    libra: {
      karma: 44,
      effects: ["Attack Power (GOOD)", "Magical Power (GOOD)"],
    },
  },
  {
    name: "Adamantite",
    description:
      "Its legendary hardness surpasses the norm. It is doubtful that it can be processed any further.",
    image: BASE + "adamantite.png",
    acquisition: "Combine Adamantine and Refining Kit",
    type: "Ore/Gems",
    libra: {
      karma: 44,
      effects: ["Attack Power (EPIC)", "Magical Power (GOOD)"],
    },
  },
  {
    name: "Orichalcum",
    description:
      "This ultimate metal ingot emits a strange aura. It is cold to the touch. Legends state that it possesses a will of its own.",
    image: BASE + "orichalcum.png",
    acquisition: "Combine Hihi-Irokane and Refining Kit",
    type: "Ore/Gems",
    libra: {
      karma: 64,
      effects: ["Attack Power (EPIC)", "Magical Power (EPIC)"],
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
      effects: ["Coins Earned"],
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
      effects: ["Coins Earned", "Experience Earned"],
    },
  },
  {
    name: "Erameld",
    description:
      "A redeemable item which can be sold for a large number of coins. Symbolizes the healing power of forests and possesses healing power.",
    image: BASE + "erameld.png",
    acquisition: "Mining",
    type: "Ore/Gems",
    libra: {
      karma: 55,
      effects: ["Coins Earned (GOOD)", "Experience Earned"],
    },
  },
  {
    name: "Sirpphae",
    description:
      "A redeemable item which can be sold for a large number of coins. A blue gem symbolizing tranquility.",
    image: BASE + "sirpphae.png",
    acquisition: "Mining",
    type: "Ore/Gems",
    libra: {
      karma: 65,
      effects: ["Coins Earned (GOOD)", "Experience Earned (GOOD)"],
    },
  },
  {
    name: "Byru",
    description:
      "A redeemable item which can be sold for a large number of coins. Symbolizes passion and ambition, has the power to ensure victory.",
    image: BASE + "byru.png",
    acquisition: "Mining",
    type: "Ore/Gems",
    libra: {
      karma: 75,
      effects: ["Coins Earned (EPIC)", "Experience Earned (GOOD)"],
    },
  },
  {
    name: "Daimond",
    description:
      "A redeemable item which can be sold for a large number of coins. A gem of chaos and brilliance, symbolizing fate.",
    image: BASE + "daimond.png",
    acquisition: "Mining",
    type: "Ore/Gems",
    libra: {
      karma: 85,
      effects: ["Coins Earned (EPIC)", "Experience Earned (EPIC)"],
    },
  },
  {
    name: "Piece Gem Fragment",
    description: "A fragment used to enhance a Piece Gem",
    image: BASE + "piece_gem_fragment.png",
    acquisition: "Postscript, Mining",
    type: "Ore/Gems",
  },
  {
    name: "Large Piece Gem Fragment",
    description: "A fragment used to enhance a Piece Gem",
    image: BASE + "large_piece_gem_fragment.png",
    acquisition: "Postscript, Mining",
    type: "Ore/Gems",
  },
  {
    name: "Piece Gem [Health]",
    description:
      "Piece Gems can be set within the empty slots on a Board. Maximum HP increased by (Depends on enhancement)",
    image: BASE + "piece_gem_health.png",
    acquisition:
      "Postscript, Research Lab, ground pickup on lava next to computer.",
    type: "Ore/Gems",
  },
  {
    name: "Piece Gem [Stamina]",
    description:
      "Piece Gems can be set within the empty slots on a Board. Maximum ST increased by (Depends on enhancement)",
    image: BASE + "piece_gem_stamina.png",
    acquisition:
      "Postscript, Akrasinon, ground pickup where the demon tree's roots were.",
    type: "Ore/Gems",
  },
  {
    name: "Piece Gem [Attack power]",
    description:
      "Piece Gems can be set within the empty slots on a Board. Attack power increased by (Depends on enhancement)",
    image: BASE + "piece_gem_attack_power.png",
    acquisition:
      "Postscript, Belkade Volcado, hug the right wall when going down the pit where you'd use the boomerang.",
    type: "Ore/Gems",
  },
  {
    name: "Piece Gem [Defense power]",
    description:
      "Piece Gems can be set within the empty slots on a Board. Defense power increased by (Depends on enhancement)",
    image: BASE + "piece_gem_defense_power.png",
    acquisition:
      "Postscript, Bridion Swamp, east, ground pickup next to the water",
    type: "Ore/Gems",
  },
  {
    name: "Piece Gem [Magical power]",
    description:
      "Piece Gems can be set within the empty slots on a Board. Magical power increased by (Depends on enhancement)",
    image: BASE + "piece_gem_magical_power.png",
    acquisition:
      "Postscript, Elysium, ground pickup next to pot that you had to fill with water",
    type: "Ore/Gems",
  },
  {
    name: "Piece Gem [Agility]",
    description:
      "Piece Gems can be set within the empty slots on a Board. Agility increased by (Depends on enhancement)",
    image: BASE + "piece_gem_agility.png",
    acquisition:
      "Postscript, Bridion Swamp, west of Mokyun Shop, ground pickup ",
    type: "Ore/Gems",
  },
  {
    name: "Piece Gem [Luck]",
    description:
      "Piece Gems can be set within the empty slots on a Board. Luck increased by (Depends on enhancement)",
    image: BASE + "piece_gem_luck.png",
    acquisition: "Postscript, Frontier Spring, east ground pickup ",
    type: "Ore/Gems",
  },
  {
    name: "Piece Gem [Adaptability]",
    description:
      "Piece Gems can be set within the empty slots on a Board. Adaptability increased by (Depends on enhancement)",
    image: BASE + "piece_gem_adaptability.png",
    acquisition:
      "Postscript, Belkade Volcano, ground pickup where you'd use the boomerang",
    type: "Ore/Gems",
  },
  {
    name: "Piece Gem [Guard Durability]",
    description:
      "Piece Gems can be set within the empty slots on a Board. Guard defense power increased by (Depends on enhancement)",
    image: BASE + "piece_gem_guard_durability.png",
    acquisition:
      "Postscript, Elizas, next to the door in the church shortcut to the shrine",
    type: "Ore/Gems",
  },
  {
    name: "Piece Gem [Weight Reduction]",
    description:
      "Piece Gems can be set within the empty slots on a Board. Weight reduced by (Depends on enhancement)",
    image: BASE + "piece_gem_weight_reduction.png",
    acquisition:
      "Postscript, Sea Serpent cave, ground pickup below the bridges",
    type: "Ore/Gems",
  },
  {
    name: "Piece Gem [Walking Speed]",
    description:
      "Piece Gems can be set within the empty slots on a Board. Walking speed increased by (Depends on enhancement)",
    image: BASE + "piece_gem_walking_speed.png",
    acquisition:
      "Postscript, Akrasinon Castle, right side of where the miniboss was",
    type: "Ore/Gems",
  },
  {
    name: "Piece Gem [Stat Point Cap]",
    description:
      "Piece Gems can be set within the empty slots on a Board. When allocating character stat points, the point stat cap before diminishing returns is raised by (Depends on enhancement)",
    image: BASE + "piece_gem_stat_point_cap.png",
    acquisition:
      "Postscript, Elysium, ground pickup at the end of path on the door left of the one that was locked by runes",
    type: "Ore/Gems",
  },
  {
    name: "Piece Gem [Change [Possession Skill]]",
    description:
      "Piece Gems can be set within the empty slots on a Board. Possession Skill (Depends on enhancement) changes to (Depends on enhancement)",
    image: BASE + "piece_gem_change_possession_skill.png",
    acquisition:
      "Postscript, Anesta Village, ground pickup where the boss would be.",
    type: "Ore/Gems",
  },
  {
    name: "Piece Gem [Change Karon Magic]",
    description:
      "Piece Gems can be set within the empty slots on a Board. Karon's magic (Depends on enhancement) changes to (Depends on enhancement)",
    image: BASE + "piece_gem_change_karon_magic.png",
    acquisition: "Postscript, Anesta Village, next to Anulis' Grave",
    type: "Ore/Gems",
  },
  {
    name: "Piece Gem [Weapon Attributes]",
    description:
      "Piece Gems can be set within the empty slots on a Board. Weapon's attribute will be changed to (Depends on enhancement)",
    image: BASE + "piece_gem_weapon_attributes.png",
    acquisition: "Postscript, Cave of Libra, next to Blue Orb ",
    type: "Ore/Gems",
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
      effects: ["Max HP"],
    },
  },
  {
    name: "Wooden Log",
    description:
      "Solid and well-shaped. Can be used to make all manner of things.",
    image: BASE + "wooden_log.png",
    acquisition: "Trees",
    type: "Demon Materials",
    libra: {
      karma: 3,
      effects: ["Max ST"],
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
      effects: ["Adaptability"],
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
      effects: ["Attack Power"],
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
      effects: ["Defense Power"],
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
      effects: ["Blind Resistance"],
    },
  },
  {
    name: "Mandragora",
    description:
      "Formerly a flower, now drained of its evil energy. Don't look at the roots.",
    image: BASE + "mandragora.png",
    acquisition: "Drop from Mandragora (Bridion Swamp, Belkade Volcano)",
    type: "Demon Materials",
    libra: {
      karma: 6,
      effects: ["ST Gain Rate"],
    },
  },
  {
    name: "Tadpole",
    description: "A frog larva. It has a characteristically long tail",
    image: BASE + "tadpole.png",
    acquisition: "Drop from Frog (Bridion Swamp, Sea Serpent Cave)",
    type: "Demon Materials",
    libra: {
      karma: 5,
      effects: ["HP Recovery"],
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
      effects: ["Magical Power", "Gradual Recovery"],
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
      effects: ["Poison Resistance", "Defense Power"],
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
      effects: ["Defense Power", "Use Speed"],
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
      effects: ["Defense Power", "Experience Earned"],
    },
  },
  {
    name: "Putrid Gill",
    description:
      "This gill is grotesque in appearance, and reeks. It's supposed to be a delicacy, but that doesn't bear thinking on.",
    image: BASE + "putrid_gill.png",
    acquisition: "Drop from Flying Creature (Belkade Volcano)",
    type: "Demon Materials",
    libra: {
      karma: 19,
      effects: ["HP Recovery", "Bleeding Resistance"],
    },
  },
  {
    name: "Demon Horn",
    description:
      "Horns are a well known feature of demons. They can be used even if broken, as they are still tinged with evil energy.",
    image: BASE + "demon_horn.png",
    acquisition: "Drop from Demon (Belkade Volcano)",
    type: "Demon Materials",
    libra: {
      karma: 21,
      effects: ["Gradual Recovery", "Paralysis Resistance"],
    },
  },
  {
    name: "Golem Fragment",
    description:
      "Even a fragment of evil energy is powerful enough to join and manipulate huge rocks. It has many uses.",
    image: BASE + "golem_fragment.png",
    acquisition:
      "Drop from Golem, the boulders it summons also drop it (Belkade Volcano, Elizas)",
    type: "Demon Materials",
    libra: {
      karma: 18,
      effects: ["Defense Power (GOOD)"],
    },
  },
  {
    name: "Hawk Feather",
    description:
      "A splendid hawk feather. It is also used for fletching. Feathers have been used as material for all kinds of things since long ago.",
    image: BASE + "hawk_feather.png",
    acquisition: "Drop from Hawk (Elizas)",
    type: "Demon Materials",
    libra: {
      karma: 27,
      effects: ["Weight Reduction (GOOD)"],
    },
  },

  {
    name: "Turtle Shell",
    description:
      "The shell of an alligator snapping turtle. The shell alegedly evolved from the turtle's ribs.",
    image: BASE + "turtle_shell.png",
    acquisition: "Drop from Turtle (Elizas)",
    type: "Demon Materials",
    libra: {
      karma: 11,
      effects: ["Guard Durability (GOOD)"],
    },
  },
  {
    name: "Crab Stick",
    description:
      "Imitation crab meat with the same color, shape and texture as real crab. Materials such as this are not always used for making equipment.",
    image: BASE + "crab_stick.png",
    acquisition: "Drop from Crab (Elizas)",
    type: "Demon Materials",
    libra: {
      karma: 15,
      effects: ["HP Recovery (GOOD)"],
    },
  },
  {
    name: "Sashimi",
    description:
      "A delicious looking slice of fish. Naturally, this isn't used as material but to motivate the creator.",
    image: BASE + "sashimi.png",
    acquisition: "Drop from Fish (Sea Serpent Cave)",
    type: "Demon Materials",
    libra: {
      karma: 13,
      effects: ["Max ST (GOOD)"],
    },
  },
  {
    name: "Monkfish Liver",
    description:
      "Monkfish liver, also known as the foie gras of the sea. This ugly fish can be eaten entirely, except for the bones, eye, and teeth..",
    image: BASE + "monkfish_liver.png",
    acquisition: "Drop from Monkfish (Sea Serpent Cave)",
    type: "Demon Materials",
    libra: {
      karma: 22,
      effects: ["Gradual Recovery (GOOD)"],
    },
  },
  {
    name: "Claystones",
    description:
      "These stones were taken from a magicallly manipulated mud golem. They spring up inexhaustibly as the Demon King's soldiers.",
    image: BASE + "claystones.png",
    acquisition: "Drop from Mud Golem (Akrasinon)",
    type: "Demon Materials",
    libra: {
      karma: 25,
      effects: ["Defense Power (GOOD)", "Max HP"],
    },
  },
  {
    name: "Minotaur's Axe",
    description:
      "An axe used by a Minotaur. It is made of steel. Its handle is too short for you to equip it.",
    image: BASE + "minotaurs_axe.png",
    acquisition: "Drop from Minotaurs (Akrasinon)",
    type: "Demon Materials",
    libra: {
      karma: 13,
      effects: ["Guard Durability (GOOD)", "Use Speed"],
    },
  },
  {
    name: "Mammon's Feet",
    description:
      "Seeing the demon's upper body, it's hard to imagine that these magnificent feet came from the same being. They're Commander-class in the Demon King's army.",
    image: BASE + "mammons_feet.png",
    acquisition: "Drop from Mammon (Akrasinon)",
    type: "Demon Materials",
    libra: {
      karma: 28,
      effects: ["ST Gain Rate (GOOD)", "Gradual Recovery"],
    },
  },
  {
    name: "Lizard Scales",
    description:
      "Lizardmen fight surprisingly well in close combat. They are aquatic but very durable.",
    image: BASE + "lizard_scales.png",
    acquisition: "Drop from Lizardman (Akrasinon)",
    type: "Demon Materials",
    libra: {
      karma: 36,
      effects: ["Effect Duration (GOOD)", "Weight Reduction"],
    },
  },
  {
    name: "Gargoyle's Wings",
    description:
      "Along with goblins, gargoyles are the most common of demons. They possess an evil intelligence.",
    image: BASE + "gargoyles_wings.png",
    acquisition: "Drop from Gargoyle (Akrasinon)",
    type: "Demon Materials",
    libra: {
      karma: 40,
      effects: ["Poison Resistance (GOOD)", "Poison Resistance"],
    },
  },
  {
    name: "Heat Exhaust Organ",
    description:
      "An elder lizard's heat exhaust organ. They use it to transform the air into ice and attack.",
    image: BASE + "heat_exhaust_organ.png",
    acquisition: "Drop from Elder Lizard (Akrasinon)",
    type: "Demon Materials",
    libra: {
      karma: 25,
      effects: ["Blind Resistance (GOOD)", "HP Recovery"],
    },
  },
  {
    name: "Slime Jelly",
    description: "A piece of snow slime. It's cold.",
    image: BASE + "slime_jelly.png",
    acquisition: "Drop from Snow Slime (Urugut Mountains)",
    type: "Demon Materials",
    libra: {
      karma: 36,
      effects: ["Max HP (GOOD)", "Paralysis Resistance (GOOD)"],
    },
  },
  {
    name: "Penguin's Egg",
    description: "A battle penguin's egg. It is a famous delicacy.",
    image: BASE + "penguins_egg.png",
    acquisition: "Drop from Penguin (Urugut Mountains)",
    type: "Demon Materials",
    libra: {
      karma: 31,
      effects: ["Blind Resistance (GOOD)", "Guard Durability (GOOD)"],
    },
  },
  {
    name: "Clean Ice",
    description:
      "Pure and crystal-clear ice. Said to contain a soul. The nucleus of Snow Spirits",
    image: BASE + "clean_ice.png",
    acquisition: "Drop from Snow Spirit (Urugut Mountains)",
    type: "Demon Materials",
    libra: {
      karma: 34,
      effects: ["Adaptability (GOOD)", "Petrifaction Resistance (GOOD)"],
    },
  },
  {
    name: "Yeti's Fur",
    description:
      "The fur of a yeti, seen in the Snowy Mountains. It is thicka nd often used to make warm clothes.",
    image: BASE + "yetis_fur.png",
    acquisition: "Drop from Yeti (Urugut Mountains)",
    type: "Demon Materials",
    libra: {
      karma: 45,
      effects: ["Attack Power (GOOD)", "Bleeding Resistance (GOOD)"],
    },
  },
  {
    name: "Shield of Rispadar",
    description:
      "Shields like this one are supplied to the soldiers of Rispadar. It's very long, making it difficult for you to handle.",
    image: BASE + "shield_of_rispadar.png",
    acquisition: "Drop from Rispadar Soldier (Urugut Mountains, Elysium)",
    type: "Demon Materials",
    libra: {
      karma: 51,
      effects: ["Defense Power (GOOD)", "Experience Obtained (GOOD)"],
    },
  },
  {
    name: "Slice of Ancient Fish",
    description:
      "Fish in ancient times floated in the air. The flesh's color is creepy.",
    image: BASE + "slice_of_ancient_fish.png",
    acquisition: "Drop from Ancient Fish (Elysium)",
    type: "Demon Materials",
    libra: {
      karma: 46,
      effects: ["Paralysis Resistance (GOOD)", "Weight Reduction (GOOD)"],
    },
  },
  {
    name: "Godly Wings",
    description:
      "Part of one of Elysium's unmanned weapons. They are likely decorative as they're not useful for flying.",
    image: BASE + "godly_wings.png",
    acquisition: "Drop from Elysium Angel Weapon (Elysium)",
    type: "Demon Materials",
    libra: {
      karma: 47,
      effects: ["HP Recovery (GOOD)", "Coins Earned (GOOD)"],
    },
  },
  {
    name: "Mirror Fragment",
    description:
      "It's a mystery why this mirror-shaped weapon was made. This is a piece of broken mirror.",
    image: BASE + "mirror_fragment.png",
    acquisition: "Drop from Elysium Mirror Weapon (Elysium)",
    type: "Demon Materials",
    libra: {
      karma: 38,
      effects: ["Gradual Recovery (GOOD)", "ST Gain Rate (GOOD)"],
    },
  },
  {
    name: "Magical Jar",
    description:
      "This jar was made by an ancient magical civilization. It is filled with magical powers.",
    image: BASE + "magical_jar.png",
    acquisition: "Drop from Elysium Tank Weapon (Elysium)",
    type: "Demon Materials",
    libra: {
      karma: 43,
      effects: ["Magical Power (GOOD)", "Blind Resistance (GOOD)"],
    },
  },
  {
    name: "Grasshopper's Wings",
    description:
      "These insect wings are made of a mysteriously thin, yet strong material. They possibly come from another world.",
    image: BASE + "grasshoppers_wings.png",
    acquisition: "Drop from Grasshopper (Anesta Village)",
    type: "Demon Materials",
    libra: {
      karma: 37,
      effects: ["Weight Reduction (EPIC)"],
    },
  },
  {
    name: "Insect Feet",
    description:
      "These feet are made of a hard, mysterious substance called chicken matter. They might belong to a creature that flew here from another world.",
    image: BASE + "insect_feet.png",
    acquisition: "Drop from Insect (Anesta Village)",
    type: "Demon Materials",
    libra: {
      karma: 28,
      effects: ["Defense Power (EPIC)"],
    },
  },
  {
    name: "Bewitched Tree Branch",
    description:
      "Part of a tree that rotted over the years and turned demonic. Sometimes it wiggles.",
    image: BASE + "bewitched_tree_branch.png",
    acquisition: "Drop from Bewitched Tree (Anesta Village)",
    type: "Demon Materials",
    libra: {
      karma: 33,
      effects: ["Magical Power (EPIC)"],
    },
  },
  {
    name: "Beastly Tree's Fungi",
    description:
      "Supposedly, a tree that grows by sucking the blood of dead animals could become a beast itself. This is a mushroom that only grows on such things.",
    image: BASE + "beastly_trees_fungi.png",
    acquisition: "Drop from Beastly Tree (Anesta Village)",
    type: "Demon Materials",
    libra: {
      karma: 23,
      effects: ["ST Gain Rate (EPIC)"],
    },
  },

  {
    name: "Tough Leg Meat",
    description:
      "The tough leg muscles lift heavy torsos up into the air. Their springing power is used in a variety of commodities.",
    image: BASE + "tough_leg_meat.png",
    acquisition: "Drop from Purple Frog (Belkade Mining Town)",
    type: "Demon Materials",
    libra: {
      karma: 27,
      effects: ["Max HP (EPIC)"],
    },
  },
  {
    name: "Dual Attribute Core",
    description:
      "A crystal that successfully combines two opposing attributes. Widely used in energy applications.",
    image: BASE + "dual_attribute_core.png",
    acquisition: "Drop from Dual Attribute Doll (Belkade Mining Town)",
    type: "Demon Materials",
    libra: {
      karma: 23,
      effects: ["Max ST (EPIC)"],
    },
  },
  {
    name: "Spider Butt",
    description:
      "This plump arachnid butt is filled with spider silk. They say some people enjoy eating it.",
    image: BASE + "spider_butt.png",
    acquisition: "Drop from Arachne (Belkade Mining Town)",
    type: "Demon Materials",
    libra: {
      karma: 22,
      effects: ["Use Speed (EPIC)"],
    },
  },
  {
    name: "Bolts",
    description:
      "Metallic parts used to hold the machines of the future together. They say there is a world where these are used as currency.",
    image: BASE + "bolts.png",
    acquisition: "Drop from Tank (Tokyo)",
    type: "Demon Materials",
    libra: {
      karma: 46,
      effects: ["Poison Resistance (EPIC)", "Attack Power"],
    },
  },
  {
    name: "Cable",
    description:
      "It is like a blood vessel for conducting electricity. The mechanism for transmitting energy is no different from human blood.",
    image: BASE + "cable.png",
    acquisition: "Drop from Flying Machine (Blue) (Tokyo)",
    type: "Demon Materials",
    libra: {
      karma: 47,
      effects: ["Bleeding Resistance (EPIC)", "Magical Power"],
    },
  },
  {
    name: "Gear",
    description:
      "Part of a mysterious mechanism which exerts its mighty power when joining a large object with a smaller one.",
    image: BASE + "gear.png",
    acquisition: "Drop from Machine Crab (Tokyo)",
    type: "Demon Materials",
    libra: {
      karma: 37,
      effects: ["Blind Resistance (EPIC)", "Max HP"],
    },
  },
  {
    name: "Battery",
    description:
      "A curious box that can store energy. For some reason it only contains water.",
    image: BASE + "battery.png",
    acquisition: "Drop from Flying Machine (Black) (Tokyo)",
    type: "Demon Materials",
    libra: {
      karma: 31,
      effects: ["Petrifaction Resistance (EPIC)", "HP Recovery"],
    },
  },
  {
    name: "Screws",
    description:
      "High-performance screws, incomparable to those of the past. They're called screws because they are screwed in.",
    image: BASE + "screws.png",
    acquisition: "Drop from Flying Machine 3 (Research Lab)",
    type: "Demon Materials",
    libra: {
      karma: 35,
      effects: ["Paralysis Resistance (EPIC)", "ST Gain Rate"],
    },
  },
  {
    name: "Heart",
    description:
      "A creature's heart taken out of a machine. Its self-cleaning organics are superior to machines.",
    image: BASE + "heart.png",
    acquisition: "Drop from Red Crab (Research Lab)",
    type: "Demon Materials",
    libra: {
      karma: 55,
      effects: ["Gradual Recovery (EPIC)", "Experience Earned"],
    },
  },
  {
    name: "Spring",
    description:
      "Piece of metal that bounces back when you push it. It will not bounce back if you hold it down.",
    image: BASE + "spring.png",
    acquisition: "Drop from Machine Phantom (Research Lab)",
    type: "Demon Materials",
    libra: {
      karma: 31,
      effects: ["Effect Duration (EPIC)", "Use Speed"],
    },
  },
  {
    name: "Nuclear Power Reactor",
    description:
      "The heart of a machine that continues to generate energy. One of these can supply a town's electricity for ten years.",
    image: BASE + "nuclear_power_reactor.png",
    acquisition: "Drop from Mech (Research Lab)",
    type: "Demon Materials",
    libra: {
      karma: 50,
      effects: ["Coins Earned (EPIC)", "Adaptability"],
    },
  },
  {
    name: "Primordial Fragment",
    description: "The oldest form of life.",
    image: BASE + "primordial_fragment.png",
    acquisition: "Mokyun Gacha Reward",
    type: "Demon Materials",
    libra: {
      karma: 92,
      effects: [
        "Gradual Recovery (EPIC)",
        "Effect Duration (EPIC)",
        "Attack Power (EPIC)",
      ],
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
      effects: ["Weight Reduction", "Use Speed (GOOD)"],
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
      effects: ["Max HP", "HP Recovery", "Gradual Recovery"],
    },
  },
  {
    name: "Legendary Herb",
    description:
      "Medicinal herb said to grow near Astraea's Scales. It has the power to cure any disease.",
    image: BASE + "legendary_herb.png",
    acquisition: "Elizas event",
    type: "Valuables",
    libra: {
      karma: 54,
      effects: [
        "Max HP (GOOD)",
        "HP Recovery (GOOD)",
        "Gradual Recovery (GOOD)",
      ],
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
    libra: {
      karma: 32,
      effects: ["Attack Power", "Defense Power", "Magical Power"],
    },
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
      effects: ["Defense Power", "Effect Duration"],
    },
  },
  {
    name: "Bundle of Wooden Sticks",
    description:
      "Carefully selected, easy-to-grip, sturdy wooden sticks. The sticks have a variety of possible uses.",
    image: BASE + "bundle_of_wooden_sticks.png",
    acquisition: "Cave of Libra",
    type: "Valuables",
    libra: {
      karma: 17,
      effects: ["Attack Power", "ST Gain Rate"],
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
      effects: ["Use Speed", "Magical Power", "Guard Durability"],
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
      effects: ["Magical Power"],
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
      effects: ["Magical Power (GOOD)"],
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
      effects: ["Magical Power (EPIC)"],
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
      effects: ["Petrifaction Resistance"],
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
      effects: ["Petrifaction Resistance (EPIC)", "Guard Durability"],
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
      effects: ["Petrifaction Resistance (GOOD)", "Guard Durability"],
    },
  },

  {
    name: "Pretty Seashell",
    description:
      "A pretty seashell found on the beach. I chose an undamaged one with a nice shape.",
    image: BASE + "pretty_seashell.png",
    acquisition: "West and East Coast, Elizas",
    type: "Valuables",
  },
  {
    name: "Golden Rice Ears",
    description:
      "These ears of rice shine like gold. They produce rice, but are kept in homes for decorative purposes.",
    image: BASE + "golden_rice_ears.png",
    acquisition: "Elizas Village",
    type: "Valuables",
  },
  {
    name: "Pure White Garment",
    description:
      "This godly garment shines brilliantly. It's still warm and smells lovely.",
    image: BASE + "pure_white_garment.png",
    acquisition: "Elizas Event",
    type: "Valuables",
    libra: {
      karma: 70,
      effects: ["Max ST (EPIC)", "HP Recovery (EPIC)", "Use Speed (EPIC)"],
    },
  },
  {
    name: "Apples from the King's Castle",
    description:
      "These apples were left inside Akrasinon Castle. They've been touched with magic and retain a tinge of power.",
    image: BASE + "apples_from_the_kings_castle.png",
    acquisition: "Akrasinon Castle, on the table.",
    type: "Valuables",
    libra: {
      karma: 54,
      effects: [
        "HP Recovery (GOOD)",
        "Max HP (GOOD)",
        "Gradual Recovery (GOOD)",
      ],
    },
  },
  {
    name: "Red Gem",
    description:
      "This round stone was set at the bottom of a dish of apples. It's used to manipulate one of Akrasinon Castle's mechanisms.",
    image: BASE + "red_gem.png",
    acquisition: "Akrasinon Castle, take all of the apples from the table.",
    type: "Valuables",
  },
  {
    name: "Blue Gem",
    description:
      "This round stone was set in the bronze statue's eye. It's used to manipulate one of Akrasinon Castle's mechanisms.",
    image: BASE + "blue_gem.png",
    acquisition: "Akrasinon Castle, destroy statue with glowing eye.",
    type: "Valuables",
  },
  {
    name: "Green Gem",
    description:
      "This round stone was suspended from the ceiling. It's used to manipulate one of Akrasinon Castle's mechanisms.",
    image: BASE + "green_gem.png",
    acquisition:
      "Akrasinon Castle, on the ceiling near the entrance, shoot it.",
    type: "Valuables",
  },
  {
    name: "Girl's Earrings",
    description:
      "These earrings were dropped by the fairy-tale girl. They exude powerful, hidden magic.",
    image: BASE + "girls_earrings.png",
    acquisition: "Akrasinon, in dark area with water.",
    type: "Valuables",
  },
  {
    name: "Sluice Key",
    description:
      "A large, oddly-shaped key. It is inserted into a device and turned to open the sluice.",
    image: BASE + "sluice_key.png",
    acquisition: "Akrasinon, above demon tree.",
    type: "Valuables",
  },
  {
    name: "Ancient Key",
    description: "Its ancient technology allows you to open sealed doors",
    image: BASE + "ancient_key.png",
    acquisition: "Akrasinon, drop from Wyvern miniboss.",
    type: "Valuables",
  },
  {
    name: "Iron Bars Key",
    description: "This key can open iron bars.",
    image: BASE + "iron_bars_key.png",
    acquisition: "Chapter 6 Event.",
    type: "Valuables",
  },
  {
    name: "Security Card",
    description: "A researcher's ID. It opens doors to high security rooms.",
    image: BASE + "security_card.png",
    acquisition: "Chapter 8 Event.",
    type: "Valuables",
  },
  {
    name: "Red Rune",
    description:
      "A key to the ancient ruins. It opens the  door to the King's throne.",
    image: BASE + "red_rune.png",
    acquisition:
      "Elysium, light the 2 unlit torches near the beginning, need to use Pine Resin and obtain sticks by breaking barrels further in the area.",
    type: "Valuables",
  },
  {
    name: "Blue Rune",
    description:
      "A key to the ancient ruins. It opens the  door to the King's throne.",
    image: BASE + "blue_rune.png",
    acquisition: "Elysium, fill the pot with water.",
    type: "Valuables",
  },
  {
    name: "Purple Rune",
    description:
      "A key to the ancient ruins. It opens the  door to the King's throne.",
    image: BASE + "purple_rune.png",
    acquisition: "Elysium, hit it with a throwing knife.",
    type: "Valuables",
  },
  {
    name: "Green Rune",
    description:
      "A key to the ancient ruins. It opens the  door to the King's throne.",
    image: BASE + "green_rune.png",
    acquisition:
      "Elysium, hidden area, blocked by a barrier, go under the ground to get.",
    type: "Valuables",
  },
  {
    name: "Herb",
    description:
      "An herb that can be found in the prairie. It makes an excellent sleeping aid.",
    image: BASE + "herb.png",
    acquisition: "Anesta Village, drop from miniboss",
    type: "Valuables",
  },
  {
    name: "Sleeping Aid",
    description:
      "A powdered remedy made from a concentrated mixture of herbs. Inhale it and you will fall unconscious and not awaken until the next day.",
    image: BASE + "sleeping_aid.png",
    acquisition: "Combine Herb and Gunpowder",
    type: "Valuables",
  },
  {
    name: "Metal and Glass Plank",
    description:
      "A fancy plank received from Nagumo. When the surface is touched, it emits light and shows pictures.",
    image: BASE + "metal_and_glass_plank.png",
    acquisition: "Postscript Event",
    type: "Valuables",
  },
  {
    name: "Translocation Stone",
    description:
      "This stone contains the Great Sage's magic. Can transport you to an active magic circle, or activate a circle.",
    image: BASE + "translocation_stone.png",
    acquisition: "Postscript Event",
    type: "Valuables",
  },
  {
    name: "Anulis' Brain",
    description:
      "This specimen jar contains Anulis' brain. It has a beautiful color.",
    image: BASE + "anulis_brain.png",
    acquisition: "Postscript Event",
    type: "Valuables",
  },
  {
    name: "Bread?",
    description:
      "This so-called bread was made by Anulis. Instinct tells you it's not safe to eat.",
    image: BASE + "bread_.png",
    acquisition: "Postscript, give Love to Anulis",
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
    name: "Red Stone",
    description: "A bright red stone. Its usage is not yet known.",
    image: BASE + "red_stone.png",
    acquisition: "Master Magical Staff Verethragna / Magic Sword Aroundight",
    type: "Collected Items",
  },
  {
    name: "Blue Stone",
    description: "A bright blue stone. Its usage is not yet known.",
    image: BASE + "blue_stone.png",
    acquisition: "Master Divine Spear Gungnir",
    type: "Collected Items",
  },
  {
    name: "Green Stone",
    description: "A bright green stone. Its usage is not yet known.",
    image: BASE + "green_stone.png",
    acquisition: "Master Divine Spear Gungnir",
    type: "Collected Items",
  },
  {
    name: "Yellow Stone",
    description: "A bright yellow stone. Its usage is not yet known.",
    image: BASE + "yellow_stone.png",
    acquisition: "Master Ridill / Saced Sword Excalibur",
    type: "Collected Items",
  },
  {
    name: "Purple Stone",
    description: "A purple gem. Its usage is not yet known.",
    image: BASE + "purple_stone.png",
    acquisition: "Combine Red Stone and Blue Stone",
    type: "Collected Items",
  },
  {
    name: "Yellow-green Gem",
    description: "A shiny yellow-green gem. Its usage is not yet known.",
    image: BASE + "yellow_green_gem.png",
    acquisition: "Combine Green Stone and Yellow Stone",
    type: "Collected Items",
  },
  {
    name: "Red-yellow Gem",
    description:
      "A beautiful gem of mixed red and yellow. Its usage is not yet known.",
    image: BASE + "red_yellow_gem.png",
    acquisition: "Combine Yellow Stone and Red Stone",
    type: "Collected Items",
  },
  {
    name: "White Gem",
    description: "A white, strangely opaque gem. Its usage is not yet known.",
    image: BASE + "white_gem.png",
    acquisition: "Master Sword of Light Claíomh Solais",
    type: "Collected Items",
  },
  {
    name: "Dark Gem",
    description:
      "A dark, faintly glowing substance of mixed purple and green. Its usage is not yet known.",
    image: BASE + "dark_gem.png",
    acquisition: "Combine Yellow-green Gem and Purple Stone",
    type: "Collected Items",
  },
  {
    name: "Sun Stone",
    description:
      "A dazzling gem with an orange fire at its center. Its usage is not yet known.",
    image: BASE + "sun_stone.png",
    acquisition: "Combine Red-yellow Gem and White Gem",
    type: "Collected Items",
  },
  {
    name: "Alexandrite",
    description:
      "This rare gem only appears in legends. Its usage is not yet known.",
    image: BASE + "alexandrite.png",
    acquisition: "Combine Dark Gem and Sun Stone",
    type: "Collected Items",
  },
  {
    name: "Love",
    description: "It is extremely precious and hard to come by.",
    image: BASE + "love.png",
    type: "Collected Items",
  },
  {
    name: "Decorative Box",
    description: "An empty, splendid-looking box.",
    image: BASE + "decorative_box.png",
    type: "Collected Items",
    acquisition: "Arena Battle, Pekkochira Cup, 'The Principle of Geo' reward",
  },
  {
    name: "Battery (Muramasa)",
    description:
      "The battery of a glowstick. When equipped, Muramasa will fire beams of white light when swung.",
    image: BASE + "battery_muramasa.png",
    type: "Collected Items",
    acquisition: "Master Super Ultimate Laser Blade Muramasa",
  },
];

export default items;
