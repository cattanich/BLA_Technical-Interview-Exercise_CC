import pokemonService from '../services/pokemonService.js';

export const getAllPokemon = (req, res) => {
  try {
    const limit = parseInt(req.query.limit) || 20;
    const offset = parseInt(req.query.offset) || 0;
    const search = req.query.search || '';
    
    const result = pokemonService.getAllPokemon(limit, offset, search);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getPokemonById = (req, res) => {
  try {
    const { id } = req.params;
    const pokemon = pokemonService.getPokemonById(id);
    res.status(200).json(pokemon);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

export const getPokemonByName = (req, res) => {
  try {
    const { name } = req.params;
    const pokemon = pokemonService.getPokemonByName(name);
    res.status(200).json(pokemon);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
