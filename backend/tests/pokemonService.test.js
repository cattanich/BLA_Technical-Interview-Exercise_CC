import pokemonService from '../src/services/pokemonService.js';

describe('PokemonService', () => {
  test('should return all Pokemon with pagination', () => {
    const result = pokemonService.getAllPokemon(5, 0);
    
    expect(result).toHaveProperty('count');
    expect(result).toHaveProperty('results');
    expect(result.results).toHaveLength(5);
    expect(result.results[0]).toHaveProperty('id');
    expect(result.results[0]).toHaveProperty('name');
  });
  
  test('should filter Pokemon by search term', () => {
    const result = pokemonService.getAllPokemon(10, 0, 'char');
    
    expect(result.results.length).toBeGreaterThan(0);
    expect(result.results.every(p => p.name.includes('char'))).toBe(true);
  });
  
  test('should get Pokemon by ID', () => {
    const pokemon = pokemonService.getPokemonById(1);
    
    expect(pokemon).toHaveProperty('id', 1);
    expect(pokemon).toHaveProperty('name', 'bulbasaur');
  });
  
  test('should throw error when Pokemon ID not found', () => {
    expect(() => {
      pokemonService.getPokemonById(999);
    }).toThrow('Pokemon not found');
  });
  
  test('should get Pokemon by name', () => {
    const pokemon = pokemonService.getPokemonByName('bulbasaur');
    
    expect(pokemon).toHaveProperty('id', 1);
    expect(pokemon).toHaveProperty('name', 'bulbasaur');
  });
  
  test('should throw error when Pokemon name not found', () => {
    expect(() => {
      pokemonService.getPokemonByName('not-a-pokemon');
    }).toThrow('Pokemon not found');
  });
});
