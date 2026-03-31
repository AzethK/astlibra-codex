const karons = [
  {
    name: "Magical Vision",
    description: "Allows you to see remaining enemy physical strength (HP)",
    cost: 1,
    mode: "BASIC",
    acquisition: "Starting Karon",
  },
  {
    name: "Coin Magnet",
    description: "Allows you to see remaining enemy physical strength (HP).",
    cost: 2,
    mode: "BASIC",
    acquisition: "Leather Garment",
  },
  {
    name: "Mind's Eye",
    description: "Shows what colored Force an enem will drop.",
    cost: 1,
    mode: "BASIC",
    acquisition: "Airgetlam",
  },
  {
    name: "Force Magnet",
    description: "Allows you to collect Force automatically.",
    cost: 2,
    mode: "BASIC",
    acquisition: "Magical Staff",
  },
  {
    name: "Evil Vision",
    description:
      "Allows you to see enemy attributes. Also allows you to see the break gauge (green).",
    cost: 1,
    mode: "BASIC",
    acquisition: "Bone Sword",
  },
  {
    name: "Item Magnet",
    description: "Allows you to collect dropped items automatically.",
    cost: 2,
    mode: "BASIC",
    acquisition: "Necromancer",
  },
  {
    name: "Third Eye",
    description:
      "Displays various information such as damage values dealt by you or your enemies.",
    cost: 1,
    mode: "BASIC",
    acquisition: "Starting Karon",
  },
  {
    name: "Ranged Master",
    description:
      "Significantly accelerates the speed of readying arrows, crossbows, and throwing weapons.",
    cost: 5,
    mode: "BASIC",
    acquisition: "Tribal Shield",
  },
  {
    name: "Dash",
    altName: "Step",
    description: "When moving, press [] to run faster.",
    altDescription:
      "	Pressing [] while moving allows you to move forward at high speed.",
    cost: 1,
    mode: "BASIC",
    acquisition: "Starting Karon",
  },
  {
    name: "Spirit World Notification",
    description:
      "Shows which Possession Skils can be used with your current ST. Indicators appear above your HP bar.",
    cost: 1,
    mode: "BASIC",
    acquisition: "Buckler",
  },
  {
    name: "Auto Rapid Fire",
    description:
      "Hold down the attack button to launch a series of normal attacks.",
    cost: 2,
    mode: "BASIC",
    acquisition: "Bronze Broadsword",
  },
  {
    name: "Sub-Weapon",
    description:
      "The item on the right end of shortcut set B can be used immediately by pressing UP + Attack button. (Only while on the ground).",
    cost: 3,
    mode: "BASIC",
    acquisition: "Starting Karon",
  },
  {
    name: "Snorkel",
    description: "Allows you to breathe in shallow water.",
    cost: 1,
    mode: "EXPLORATORY",
    acquisition: "Azure Dragon Blade",
  },
  {
    name: "Dig, Doggy, Dig",
    description: "Allows you to discover hidden mining points.",
    cost: 3,
    mode: "EXPLORATORY",
    acquisition: "Nail Hammer",
  },
  {
    name: "LED",
    description:
      "Makes torches as bright as lanterns. Must be set before using the torch.",
    cost: 3,
    mode: "EXPLORATORY",
    acquisition: "Mage's Staff",
  },
  {
    name: "Digging Master's Focus",
    description: "Stabilizes digging power.",
    cost: 4,
    mode: "EXPLORATORY",
    acquisition: "Stone Statue's Shield",
  },
  {
    name: "The Art of Thievery",
    description:
      "Makes enemies and objects more likely to drop material items.",
    cost: 6,
    mode: "EXPLORATORY",
    acquisition: "Dark Mail",
  },
  {
    name: "Digging Master's Finesse",
    description: "Significantly increases digging power.",
    cost: 5,
    mode: "EXPLORATORY",
    acquisition: "Cursed Sword Gram",
  },
  {
    name: "Master Skinner",
    description: "Makes enemies more likely to drop unique items.",
    cost: 6,
    mode: "EXPLORATORY",
    acquisition: "Dragon's Jaw",
  },
  {
    name: "Icarus Wings",
    altName: "Shuffling",
    altDescription: "Allows you to move slightly while attack.",
    description: "Reduces the speed of falls.",
    cost: 3,
    mode: "EXPLORATORY",
    acquisition: "Elven Armor",
  },
  {
    name: "Karon's Nose",
    altName: "Infinite Unlocking",
    description: "Shows the number of treasure chests on the current screen.",
    altDescription: "Keys are not consumed after opening treasure chests.",
    cost: 2,
    mode: "EXPLORATORY",
    acquisition: "Ivory Armor",
  },
  {
    name: "Jump Boots",
    description: "Boosts jumping power.",
    cost: 3,
    mode: "EXPLORATORY",
    acquisition: "Armor of the Rightful King",
  },
  {
    name: "Sturdy",
    description:
      "Greatly increases your adaptability. Makes you less susceptible to environmental efects such as underwater and snow.",
    cost: 5,
    mode: "EXPLORATORY",
    acquisition: "Spirit Staff",
  },
  {
    name: "Air Ride",
    description:
      "Allows you to jump in midair. Press the jump button while jumping.",
    cost: 4,
    mode: "EXPLORATORY",
    acquisition: "Starting Karon",
  },
  {
    name: "Critical Hit",
    altName: "Break Bash",
    description:
      "After your combo is interrupted, your first subsequent attack deals significant break damage.",
    altDescription:
      "Significantly increases break damage caused by Shield Bash.",
    cost: 2,
    mode: "WEAPONS",
    acquisition: "Iron Axe",
  },
  {
    name: "Gun Hammer",
    description:
      "When hitting with a blunt weapon, bullets are fired diagonally upwards from the point of impact.",
    cost: 7,
    mode: "WEAPONS",
    acquisition: "Blue Silver Shield",
  },
  {
    name: "Gladiator",
    description: "Reduces Shield Bash's cooldown time.",
    cost: 3,
    mode: "WEAPONS",
    acquisition: "Line Shield",
  },
  {
    name: "Dragon Spear",
    description:
      "The longer you remain in the air, the more powerful Armor Slash will become.",
    cost: 5,
    mode: "WEAPONS",
    acquisition: "Dragon Spear Gáe Bulg",
  },
  {
    name: "Shelling",
    description: "Increases the occurrence of critical break.",
    cost: 4,
    mode: "WEAPONS",
    acquisition: "Breaker",
  },
  {
    name: "Stinger",
    description:
      "Stops you from moving forward during a thrust attack or a Shield Bash. You remain at a fixed point. Applies to all thrusting motions.",
    cost: 4,
    mode: "WEAPONS",
    acquisition: "Colichemarde",
  },
  {
    name: "Wrestler",
    altName: "Sumo Attack",
    description:
      "Increases distance enemies are knocked back by weapon attacks.",
    altDescription: "Shield Charge will damage enemies in its path.",
    cost: 3,
    mode: "WEAPONS",
    acquisition: "Rock Hammer",
  },
  {
    name: "Berserk",
    altName: "Counter Guard",
    description:
      "Attack power increased by 3x, but you will die in one hit. Does not overlap with other damage multiplying skills.",
    altDescription:
      "Successful guarding enemy bullets will reflect them back at enemies",
    cost: 8,
    mode: "WEAPONS",
    acquisition: "Dragon Slaying Sword Ascalon",
  },
  {
    name: "Herculean Power",
    description:
      "Improves the minimum swing speed of heavy weapons, allowing them to be swung more quickly.",
    cost: 4,
    mode: "WEAPONS",
    acquisition: "Great Stone Sword",
  },
  {
    name: "Sword Energy",
    altName: "Great Sage",
    description:
      "Releases sword energy during normal attacks. The distance sword energy travels is not affected by weapon type.",
    altDescription:
      "Significantly increases the magical power of attacks produced by magic staves",
    cost: 9,
    mode: "WEAPONS",
    acquisition: "Sacred Staff Celestial",
  },
  {
    name: "Fatal Blow",
    altName: "Shadow Spear",
    description: "Increases the damage dealt to a broken enemy by 30%",
    altDescription:
      "All thrust attacks generate an additional dark attribute attack.",
    cost: 6,
    mode: "WEAPONS",
    acquisition: "Beast Claws",
  },
  {
    name: "Devil's Right Hand",
    altName: "Command Claw",
    description:
      "Increases the range of the currently equipped weapon by one lvel. Range 3 weapons will also be further extended.",
    altDescription:
      "A powerful additional attack is generated when hitting with a short-ranged fist weapon.",
    cost: 10,
    mode: "WEAPONS",
    acquisition: "Mighty Blade Balmung",
  },
  {
    name: "Aegis",
    description:
      "Allows you to hold your shield immediately as well as guard in midair.",
    cost: 1,
    mode: "DEFENSIVE",
    acquisition: "Wooden Round Shield",
  },
  {
    name: "Super Armor",
    altName: "Block Charge",
    description: "Reduces the knockback distance to zero when attacked.",
    altDescription:
      "Significantly reduces guard damage during a Shield Charge.",
    cost: 2,
    mode: "DEFENSIVE",
    acquisition: "Scutum",
  },
  {
    name: "Extra Guard",
    description: "Halves the damage sustained when a shield is broken.",
    cost: 4,
    mode: "DEFENSIVE",
    acquisition: "Ancient Shield",
  },
  {
    name: "Burst Armor",
    description: "Knocks back surrounding enemies when you are attacked.",
    cost: 2,
    mode: "DEFENSIVE",
    acquisition: "Champion's Armor",
  },
  {
    name: "Rapid Repair",
    description: "Accelerates the guard gauge's recovery speed.",
    cost: 5,
    mode: "DEFENSIVE",
    acquisition: "Gold Tower",
  },
  {
    name: "Cicada Shell",
    altName: "Enhance Barrier",
    description:
      "Ignores the first attack you receive on any screen. Resets when you enter a new screen.",
    altDescription:
      "The Rock Shield possession skill and Kuro's barrier will protect against more enemy ranged attacks",
    cost: 3,
    mode: "DEFENSIVE",
    acquisition: "Shinobi's Attire",
  },
  {
    name: "Auto-Guard",
    altName: "Enhanced Guard",
    description:
      "Consumes 30% of your maximum ST to guard you automatically. Only activates when you have enough ST.",
    altDescription:
      "Substantially reduces guard damage taken while your shield is up.",
    cost: 3,
    mode: "DEFENSIVE",
    acquisition: "Battle Shield",
  },
  {
    name: "Tank",
    description: "Increases HP, but lowers your ST",
    cost: 3,
    mode: "DEFENSIVE",
    acquisition: "Scale Mail",
  },
  {
    name: "Redirection",
    description:
      "The guard gauge is not expended when a just-guard succeeds. Does not activate if your shield is broken.",
    cost: 3,
    mode: "DEFENSIVE",
    acquisition: "Jeweled Shield",
  },
  {
    name: "Second Wind",
    description:
      "Increases invincibility duration after taking damage. More likely to avoid combo hits from enemies.",
    cost: 3,
    mode: "DEFENSIVE",
    acquisition: "Oboro",
  },
  {
    name: "Recovery Guard",
    description:
      "Just-guard will recover a small amount of HP. Does not activate if your shield is broken.",
    cost: 2,
    mode: "DEFENSIVE",
    acquisition: "Phoenix Shield",
  },
  {
    name: "God's Left Hand",
    description: "Allows you to equip a shield alongside a long-range weapon.",
    cost: 10,
    mode: "DEFENSIVE",
    acquisition: "Dewprism",
  },
  {
    name: "Efreet",
    altName: "Fire Blessing",
    description:
      "When an enemy is weak to the fire attribue, deal increased fire damage.",
    altDescription: "When Gau is your partner, increase attack power by 5%",
    cost: 4,
    mode: "ATTRIBUTES/STATUS",
    acquisition: "Fire Dagger",
  },
  {
    name: "Drunken Fist",
    description:
      "While affected by any abnormal status, weapon damage and defense power are increased.",
    cost: 2,
    mode: "ATTRIBUTES/STATUS",
    acquisition: "Ceremonial Armor",
  },
  {
    name: "Undine",
    altName: "Water Blessing",
    description:
      "When an enemy is weak to the water attribue, deal increased water damage.",
    altDescription: "When Sheero is your partner, increase HP and ST by 5%.",
    cost: 4,
    mode: "ATTRIBUTES/STATUS",
    acquisition: "Ice Sword",
  },
  {
    name: "Strong Constitution",
    description: "Resistance to all abnormal statuses +10.",
    cost: 3,
    mode: "ATTRIBUTES/STATUS",
    acquisition: "Emelas",
  },
  {
    name: "Gnome",
    altName: "Earth Blessing",
    description:
      "When an enemy is weak to the earth attribue, deal increased earth damage.",
    altDescription:
      "When Polin is your partner, increase Luck and Adaptability by 10%",
    cost: 4,
    mode: "ATTRIBUTES/STATUS",
    acquisition: "Stone Buckler",
  },
  {
    name: "Ultimate Medicine",
    altName: "Junkie",
    description:
      "Resistance to all abnormal statuses +100. You take 1.5x damage.",
    altDescription:
      "While affected by any abnormal status, magic power and agility are increased.",
    cost: 5,
    mode: "ATTRIBUTES/STATUS",
    acquisition: "Thanatos",
  },
  {
    name: "Sylph",
    altName: "Wind Blessing",
    description:
      "When an enemy is weak to the wind attribue, deal increased wind damage.",
    altDescription: "When Kai is your partner, increase agility by 10%",
    cost: 4,
    mode: "ATTRIBUTES/STATUS",
    acquisition: "Stone Dagger",
  },
  {
    name: "Origin",
    description: "Increases damage inflicted by non-attribute weapons.",
    cost: 5,
    mode: "ATTRIBUTES/STATUS",
    acquisition: "Chronos",
  },
  {
    name: "Luna",
    altName: "Light Blessing",
    description:
      "When an enemy is weak to the holy attribue, deal increased holy damage.",
    altDescription: "When Shiro is your partner, increase magic power by 5%.",
    cost: 5,
    mode: "ATTRIBUTES/STATUS",
    acquisition: "Knight's Shield",
  },
  {
    name: "Maxwell",
    altName: "Rainbow Blessing",
    description:
      "Increases damage when attacking with the element an enemy is weak to.",
    altDescription: "When you have no partner, increase all stats by 3%.",
    cost: 8,
    mode: "ATTRIBUTES/STATUS",
    acquisition: "Anastasis",
  },
  {
    name: "Shadow",
    altName: "Dark Blessing",
    description:
      "When an enemy is weak to the dark attribue, deal increased dark damage.",
    altDescription:
      "When Kuro is your partner, increase recovery strength by 10%.",
    cost: 5,
    mode: "ATTRIBUTES/STATUS",
    acquisition: "Dark Sword",
  },
  {
    name: "Spirit's Blessings",
    description:
      "Nullifies damage reduction when attacking a target with the same attribute.",
    cost: 3,
    mode: "ATTRIBUTES/STATUS",
    acquisition: "Elemental Garb",
  },
  {
    name: "Breather",
    altName: "Auto Summon",
    description: "Slows down the speed of decreasing ST.",
    altDescription:
      "Randomly activates useable possession skills at a regular interval.",
    cost: 2,
    mode: "POSSESSION SKILL",
    acquisition: "Hunter's Clothes",
  },
  {
    name: "Eliminate",
    description:
      "Increases ST consumption but your possession skills will eliminate enemy bullets when activated.",
    cost: 3,
    mode: "POSSESSION SKILL",
    acquisition: "Wind Hatchet Ildrakh",
  },
  {
    name: "Lion Heart",
    description: "Extends the range of your possession skills.",
    cost: 3,
    mode: "POSSESSION SKILL",
    acquisition: "Warlord's Armor",
  },
  {
    name: "Demon Rage",
    description:
      "Doubles damage caused by possession skills. Consumes twice as much ST.",
    cost: 6,
    mode: "POSSESSION SKILL",
    acquisition: "Diabolos",
  },
  {
    name: "Chicken Heart",
    description: "Shortens the range of your possession skills.",
    cost: 3,
    mode: "POSSESSION SKILL",
    acquisition: "Post-Apocalypse Mail",
  },
  {
    name: "Energy Drain",
    altName: "Sustained Enhancement",
    description:
      "If an enemy attacks you during a possession skill, restore HP equal to one half of what the damage would be.",
    altDescription:
      "Greatly lengthens the duration of stat increases from possession skills.",
    cost: 8,
    mode: "POSSESSION SKILL",
    acquisition: "Nexagram",
  },
  {
    name: "Great Magic",
    description: "Significantly extends the time until ST begins to decrease.",
    cost: 4,
    mode: "POSSESSION SKILL",
    acquisition: "Great Sorcerer's Staff",
  },
  {
    name: "Bushido",
    altName: "Overflow",
    description: "Increases ST, but lowers your HP",
    altDescription: "ST exceeding the maximum limit will recover your HP.",
    cost: 5,
    mode: "POSSESSION SKILL",
    acquisition: "Samurai Armor",
  },
  {
    name: "Flawless",
    description:
      "Slightly increases ST consumption, but you won't be affected by any abnormal statuses while using possession skills.",
    cost: 6,
    mode: "POSSESSION SKILL",
    acquisition: "Lion Shield",
  },
  {
    name: "Full Burst",
    description:
      "Consume all ST when using a possession skill. In exchange, damage is increased in proportion to how much extra ST was used.",
    cost: 6,
    mode: "POSSESSION SKILL",
    acquisition: "Dragon Gods Shield",
  },
  {
    name: "Darkness",
    description:
      "When activating possession skills, consumes HP corresponding to the ST consumed, but skill power is greatly increased.",
    cost: 7,
    mode: "POSSESSION SKILL",
    acquisition: "Armor of Darkness",
  },
  {
    name: "Artisan",
    description:
      "The ST required to activate possession skills remains the same, but the actual ST consumed is reduced.",
    cost: 10,
    mode: "POSSESSION SKILL",
    acquisition: "Radamantus",
  },
  {
    name: "Hassoride",
    altName: "Sky Surf",
    description: "Shoots out vernier while using Air Blade",
    altDescription: "Air Surf will aim upwards.",
    cost: 3,
    mode: "ALTERED TECHNIQUE",
    acquisition: "Ogre Hammer",
  },
  {
    name: "Grand Slash",
    description: "Hurls rocks up in the air while activating a Jump Slash",
    cost: 6,
    mode: "ALTERED TECHNIQUE",
    acquisition: "Hauteclaire",
  },
  {
    name: "Air Tackle",
    altName: "Kamaitachi",
    description: "While using Air Surf, deal damage to any enemies you hit.",
    altDescription:
      "Sky Sword will now emit vacuum waves while it slashes through the air.",
    cost: 3,
    mode: "ALTERED TECHNIQUE",
    acquisition: "Velvet Dragoon",
  },
  {
    name: "Double Reflect",
    description: "Counter Bash will now repel enemy bullets.",
    cost: 3,
    mode: "ALTERED TECHNIQUE",
    acquisition: "Iron Tower",
  },
  {
    name: "Shuriken Sword",
    description: "Extends the flying distance of the Sky Sword.",
    cost: 4,
    mode: "ALTERED TECHNIQUE",
    acquisition: "Labrys",
  },
  {
    name: "Shuriken Dagger",
    description:
      "When using throwing knives, 5 will be consumed. Throws special projectiles forward randomly that will destroy enemy bullets.",
    cost: 2,
    mode: "ALTERED TECHNIQUE",
    acquisition: "Morning Star",
  },
  {
    name: "Bash Tornado",
    description:
      "Generates a tornado from a Shield Bash. Launches enemies into the air, and destroys any enemy bullets that hit it.",
    cost: 7,
    mode: "ALTERED TECHNIQUE",
    acquisition: "Griffon",
  },
  {
    name: "Mach Spike",
    description: "Places powerfull mines when using Shield Charge.",
    cost: 4,
    mode: "ALTERED TECHNIQUE",
    acquisition: "The Earth",
  },
  {
    name: "Kirihide",
    description:
      "Extends the invincibility time of the backstep and generates blast damage at the previous position.",
    cost: 4,
    mode: "ALTERED TECHNIQUE",
    acquisition: "Gladius",
  },
  {
    name: "Katon Arts",
    description: "Generates an explosion at the end of a Tornado Slash",
    cost: 3,
    mode: "ALTERED TECHNIQUE",
    acquisition: "Great Spirit's Staff",
  },
  {
    name: "Ice Crash",
    altName: "Impaling Slash",
    description: "Generates icicles at the end of Armor Slash",
    altDescription:
      "Armor Slash will only hit directly below you, but the number of hits will double",
    cost: 6,
    mode: "ALTERED TECHNIQUE",
    acquisition: "Woodsman's Shield",
  },
  {
    name: "Gravity Daze",
    altName: "Space Walker",
    description: "Makes the duration of Zero Gravity limitless.",
    altDescription: "Significantly accelerates speed during Zero Gravity.",
    cost: 6,
    mode: "ALTERED TECHNIQUE",
    acquisition: "Stardust Armor",
  },
  {
    name: "Gumption",
    altName: "Fighting Spirit",
    description: "Boosts the benefits of combo bonuses.",
    altDescription:
      "Your combo number will increase by 2 instead of 1 when landing hits",
    cost: 3,
    mode: "SPECIAL",
    acquisition: "Battle Axe",
  },
  {
    name: "Thrifty",
    description:
      "When consumable items are used, there is a 1-in-4 chance they will not be consumed. This does not apply to Force-generating items and Stat Cards.",
    cost: 5,
    mode: "SPECIAL",
    acquisition: "Nagelring",
  },
  {
    name: "Seize",
    description: "When you hit an enemy, seize its coins.",
    altName: "Throw Coins",
    altDescription: "Coins are consumed instead of arrows and bullets.",
    cost: 5,
    mode: "SPECIAL",
    acquisition: "Goblin's Silver Hammer",
  },
  {
    name: "Fine Tuning",
    description: "Reduces the weight of your shield to 0.",
    cost: 5,
    mode: "SPECIAL",
    acquisition: "Espada Ropera",
  },
  {
    name: "King of Destruction",
    description: "Recover HP and ST when you break an enemy.",
    cost: 7,
    mode: "SPECIAL",
    acquisition: "Fire Hammer",
  },
  {
    name: "Swordsmith",
    altName: "Druid",
    description: "Becomes easier to increase weapon proficiency.",
    altDescription:
      "Substantially increases the physical strength of magic staves.",
    cost: 7,
    mode: "SPECIAL",
    acquisition: "Tree Branch",
  },
  {
    name: "Magical Power Conversion",
    description: "Allows you to convert decreasing ST into HP.",
    cost: 5,
    mode: "SPECIAL",
    acquisition: "Soul Armor",
  },
  {
    name: "Magician",
    description: "Increase the swing speed of magic staves.",
    cost: 5,
    mode: "SPECIAL",
    acquisition: "Storm Bringer",
  },
  {
    name: "Gale",
    description: "Techniques that involve movement will now travel further.",
    cost: 5,
    mode: "SPECIAL",
    acquisition: "Hero's Armor",
  },
  {
    name: "Item Master",
    description:
      "Recovery item effects increased by 1.5x. Duration of timed tools increased by 1.5x",
    cost: 8,
    mode: "SPECIAL",
    acquisition: "Shield of Darkness",
  },
  {
    name: "Thunderclap",
    description:
      "Briefly restrain any enemy hit by a bow. The restrained enemy cannot move.",
    cost: 5,
    mode: "SPECIAL",
    acquisition: "Lightning Hammer Mjölnir",
  },
  {
    name: "The Art of Summoning",
    description:
      "Increases the power of all possession skills to the highest level. It also increases ST consumption to the highest level.",
    cost: 10,
    mode: "SPECIAL",
    acquisition: "God-Slaying Sword Anes Zesia",
  },
];

export default karons;
