// Initial Pokemon data - this is a simplified version for demonstration
const pokemonData = [
  {
    id: 1,
    name: "bulbasaur",
    height: 7,
    weight: 69,
    sprites: {
      front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
    },
    abilities: [
      {
        ability: { name: "overgrow", url: "https://pokeapi.co/api/v2/ability/65/" },
        is_hidden: false
      },
      {
        ability: { name: "chlorophyll", url: "https://pokeapi.co/api/v2/ability/34/" },
        is_hidden: true
      }
    ],
    moves: [
      { move: { name: "razor-wind", url: "https://pokeapi.co/api/v2/move/13/" } },
      { move: { name: "swords-dance", url: "https://pokeapi.co/api/v2/move/14/" } },
      { move: { name: "cut", url: "https://pokeapi.co/api/v2/move/15/" } }
    ],
    forms: [
      { name: "bulbasaur", url: "https://pokeapi.co/api/v2/pokemon-form/1/" }
    ],
    types: [
      { type: { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" } },
      { type: { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" } }
    ]
  },
  {
    id: 2,
    name: "ivysaur",
    height: 10,
    weight: 130,
    sprites: {
      front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png"
    },
    abilities: [
      {
        ability: { name: "overgrow", url: "https://pokeapi.co/api/v2/ability/65/" },
        is_hidden: false
      },
      {
        ability: { name: "chlorophyll", url: "https://pokeapi.co/api/v2/ability/34/" },
        is_hidden: true
      }
    ],
    moves: [
      { move: { name: "razor-wind", url: "https://pokeapi.co/api/v2/move/13/" } },
      { move: { name: "swords-dance", url: "https://pokeapi.co/api/v2/move/14/" } },
      { move: { name: "cut", url: "https://pokeapi.co/api/v2/move/15/" } }
    ],
    forms: [
      { name: "ivysaur", url: "https://pokeapi.co/api/v2/pokemon-form/2/" }
    ],
    types: [
      { type: { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" } },
      { type: { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" } }
    ]
  },
  {
    id: 3,
    name: "venusaur",
    height: 20,
    weight: 1000,
    sprites: {
      front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png"
    },
    abilities: [
      {
        ability: { name: "overgrow", url: "https://pokeapi.co/api/v2/ability/65/" },
        is_hidden: false
      },
      {
        ability: { name: "chlorophyll", url: "https://pokeapi.co/api/v2/ability/34/" },
        is_hidden: true
      }
    ],
    moves: [
      { move: { name: "razor-wind", url: "https://pokeapi.co/api/v2/move/13/" } },
      { move: { name: "swords-dance", url: "https://pokeapi.co/api/v2/move/14/" } },
      { move: { name: "cut", url: "https://pokeapi.co/api/v2/move/15/" } }
    ],
    forms: [
      { name: "venusaur", url: "https://pokeapi.co/api/v2/pokemon-form/3/" }
    ],
    types: [
      { type: { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" } },
      { type: { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" } }
    ]
  },
  {
    id: 4,
    name: "charmander",
    height: 6,
    weight: 85,
    sprites: {
      front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"
    },
    abilities: [
      {
        ability: { name: "blaze", url: "https://pokeapi.co/api/v2/ability/66/" },
        is_hidden: false
      },
      {
        ability: { name: "solar-power", url: "https://pokeapi.co/api/v2/ability/94/" },
        is_hidden: true
      }
    ],
    moves: [
      { move: { name: "mega-punch", url: "https://pokeapi.co/api/v2/move/5/" } },
      { move: { name: "fire-punch", url: "https://pokeapi.co/api/v2/move/7/" } },
      { move: { name: "thunder-punch", url: "https://pokeapi.co/api/v2/move/9/" } }
    ],
    forms: [
      { name: "charmander", url: "https://pokeapi.co/api/v2/pokemon-form/4/" }
    ],
    types: [
      { type: { name: "fire", url: "https://pokeapi.co/api/v2/type/10/" } }
    ]
  },
  {
    id: 5,
    name: "charmeleon",
    height: 11,
    weight: 190,
    sprites: {
      front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png"
    },
    abilities: [
      {
        ability: { name: "blaze", url: "https://pokeapi.co/api/v2/ability/66/" },
        is_hidden: false
      },
      {
        ability: { name: "solar-power", url: "https://pokeapi.co/api/v2/ability/94/" },
        is_hidden: true
      }
    ],
    moves: [
      { move: { name: "mega-punch", url: "https://pokeapi.co/api/v2/move/5/" } },
      { move: { name: "fire-punch", url: "https://pokeapi.co/api/v2/move/7/" } },
      { move: { name: "thunder-punch", url: "https://pokeapi.co/api/v2/move/9/" } }
    ],
    forms: [
      { name: "charmeleon", url: "https://pokeapi.co/api/v2/pokemon-form/5/" }
    ],
    types: [
      { type: { name: "fire", url: "https://pokeapi.co/api/v2/type/10/" } }
    ]
  },
  {
    id: 6,
    name: "charizard",
    height: 17,
    weight: 905,
    sprites: {
      front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png"
    },
    abilities: [
      {
        ability: { name: "blaze", url: "https://pokeapi.co/api/v2/ability/66/" },
        is_hidden: false
      },
      {
        ability: { name: "solar-power", url: "https://pokeapi.co/api/v2/ability/94/" },
        is_hidden: true
      }
    ],
    moves: [
      { move: { name: "mega-punch", url: "https://pokeapi.co/api/v2/move/5/" } },
      { move: { name: "fire-punch", url: "https://pokeapi.co/api/v2/move/7/" } },
      { move: { name: "thunder-punch", url: "https://pokeapi.co/api/v2/move/9/" } }
    ],
    forms: [
      { name: "charizard", url: "https://pokeapi.co/api/v2/pokemon-form/6/" }
    ],
    types: [
      { type: { name: "fire", url: "https://pokeapi.co/api/v2/type/10/" } },
      { type: { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" } }
    ]
  },
  {
    id: 7,
    name: "squirtle",
    height: 5,
    weight: 90,
    sprites: {
      front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"
    },
    abilities: [
      {
        ability: { name: "torrent", url: "https://pokeapi.co/api/v2/ability/67/" },
        is_hidden: false
      },
      {
        ability: { name: "rain-dish", url: "https://pokeapi.co/api/v2/ability/44/" },
        is_hidden: true
      }
    ],
    moves: [
      { move: { name: "mega-punch", url: "https://pokeapi.co/api/v2/move/5/" } },
      { move: { name: "ice-punch", url: "https://pokeapi.co/api/v2/move/8/" } },
      { move: { name: "water-gun", url: "https://pokeapi.co/api/v2/move/55/" } }
    ],
    forms: [
      { name: "squirtle", url: "https://pokeapi.co/api/v2/pokemon-form/7/" }
    ],
    types: [
      { type: { name: "water", url: "https://pokeapi.co/api/v2/type/11/" } }
    ]
  },
  {
    id: 8,
    name: "wartortle",
    height: 10,
    weight: 225,
    sprites: {
      front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png"
    },
    abilities: [
      {
        ability: { name: "torrent", url: "https://pokeapi.co/api/v2/ability/67/" },
        is_hidden: false
      },
      {
        ability: { name: "rain-dish", url: "https://pokeapi.co/api/v2/ability/44/" },
        is_hidden: true
      }
    ],
    moves: [
      { move: { name: "mega-punch", url: "https://pokeapi.co/api/v2/move/5/" } },
      { move: { name: "ice-punch", url: "https://pokeapi.co/api/v2/move/8/" } },
      { move: { name: "water-gun", url: "https://pokeapi.co/api/v2/move/55/" } }
    ],
    forms: [
      { name: "wartortle", url: "https://pokeapi.co/api/v2/pokemon-form/8/" }
    ],
    types: [
      { type: { name: "water", url: "https://pokeapi.co/api/v2/type/11/" } }
    ]
  },
  {
    id: 9,
    name: "blastoise",
    height: 16,
    weight: 855,
    sprites: {
      front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png"
    },
    abilities: [
      {
        ability: { name: "torrent", url: "https://pokeapi.co/api/v2/ability/67/" },
        is_hidden: false
      },
      {
        ability: { name: "rain-dish", url: "https://pokeapi.co/api/v2/ability/44/" },
        is_hidden: true
      }
    ],
    moves: [
      { move: { name: "mega-punch", url: "https://pokeapi.co/api/v2/move/5/" } },
      { move: { name: "ice-punch", url: "https://pokeapi.co/api/v2/move/8/" } },
      { move: { name: "water-gun", url: "https://pokeapi.co/api/v2/move/55/" } }
    ],
    forms: [
      { name: "blastoise", url: "https://pokeapi.co/api/v2/pokemon-form/9/" }
    ],
    types: [
      { type: { name: "water", url: "https://pokeapi.co/api/v2/type/11/" } }
    ]
  },
  {
    id: 10,
    name: "caterpie",
    height: 3,
    weight: 29,
    sprites: {
      front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png"
    },
    abilities: [
      {
        ability: { name: "shield-dust", url: "https://pokeapi.co/api/v2/ability/19/" },
        is_hidden: false
      },
      {
        ability: { name: "run-away", url: "https://pokeapi.co/api/v2/ability/50/" },
        is_hidden: true
      }
    ],
    moves: [
      { move: { name: "tackle", url: "https://pokeapi.co/api/v2/move/33/" } },
      { move: { name: "string-shot", url: "https://pokeapi.co/api/v2/move/81/" } },
      { move: { name: "bug-bite", url: "https://pokeapi.co/api/v2/move/450/" } }
    ],
    forms: [
      { name: "caterpie", url: "https://pokeapi.co/api/v2/pokemon-form/10/" }
    ],
    types: [
      { type: { name: "bug", url: "https://pokeapi.co/api/v2/type/7/" } }
    ]
  },
  {
    id: 11,
    name: "metapod",
    height: 7,
    weight: 99,
    sprites: {
      front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png"
    },
    abilities: [
      {
        ability: { name: "shed-skin", url: "https://pokeapi.co/api/v2/ability/61/" },
        is_hidden: false
      }
    ],
    moves: [
      { move: { name: "tackle", url: "https://pokeapi.co/api/v2/move/33/" } },
      { move: { name: "string-shot", url: "https://pokeapi.co/api/v2/move/81/" } },
      { move: { name: "harden", url: "https://pokeapi.co/api/v2/move/106/" } }
    ],
    forms: [
      { name: "metapod", url: "https://pokeapi.co/api/v2/pokemon-form/11/" }
    ],
    types: [
      { type: { name: "bug", url: "https://pokeapi.co/api/v2/type/7/" } }
    ]
  },
  {
    id: 12,
    name: "butterfree",
    height: 11,
    weight: 320,
    sprites: {
      front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png"
    },
    abilities: [
      {
        ability: { name: "compound-eyes", url: "https://pokeapi.co/api/v2/ability/14/" },
        is_hidden: false
      },
      {
        ability: { name: "tinted-lens", url: "https://pokeapi.co/api/v2/ability/110/" },
        is_hidden: true
      }
    ],
    moves: [
      { move: { name: "gust", url: "https://pokeapi.co/api/v2/move/16/" } },
      { move: { name: "whirlwind", url: "https://pokeapi.co/api/v2/move/18/" } },
      { move: { name: "psybeam", url: "https://pokeapi.co/api/v2/move/60/" } }
    ],
    forms: [
      { name: "butterfree", url: "https://pokeapi.co/api/v2/pokemon-form/12/" }
    ],
    types: [
      { type: { name: "bug", url: "https://pokeapi.co/api/v2/type/7/" } },
      { type: { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" } }
    ]
  }
];

export default pokemonData;
