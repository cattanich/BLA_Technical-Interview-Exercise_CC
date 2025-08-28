import pokemonData from '../data/pokemon.js';

class PokemonService {
  constructor() {
    this.pokemon = pokemonData;
  }

  // Get all Pokemon with pagination
  getAllPokemon(limit = 20, offset = 0, search = '') {
    // Filter by search term if provided
    const filteredPokemon = search
      ? this.pokemon.filter(p => p.name.toLowerCase().includes(search.toLowerCase()))
      : this.pokemon;
    
    // Calculate total count and pages
    const count = filteredPokemon.length;
    const totalPages = Math.ceil(count / limit);
    
    // Paginate results
    const results = filteredPokemon.slice(offset, offset + limit);
    
    return {
      count,
      next: offset + limit < count ? `/api/pokemon?limit=${limit}&offset=${offset + limit}` : null,
      previous: offset > 0 ? `/api/pokemon?limit=${limit}&offset=${Math.max(0, offset - limit)}` : null,
      results,
      totalPages
    };
  }

  // Get a single Pokemon by ID
  getPokemonById(id) {
    const pokemon = this.pokemon.find(p => p.id === parseInt(id));
    if (!pokemon) {
      throw new Error('Pokemon not found');
    }
    return pokemon;
  }

  // Get a single Pokemon by name
  getPokemonByName(name) {
    const pokemon = this.pokemon.find(p => p.name.toLowerCase() === name.toLowerCase());
    if (!pokemon) {
      throw new Error('Pokemon not found');
    }
    return pokemon;
  }
}

export default new PokemonService();
