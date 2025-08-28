// This file will fetch initial Pokemon data from the PokeAPI and save it locally
// This script can be run independently to update the local data

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const outputPath = path.join(__dirname, 'pokemon.js');

// Function to fetch data from PokeAPI
async function fetchPokemonData(limit = 30) {
  console.log(`Fetching ${limit} Pokemon from PokeAPI...`);
  
  try {
    // First, fetch the list of Pokemon
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`);
    const data = await response.json();
    
    // Then fetch detailed data for each Pokemon
    const pokemonPromises = data.results.map(async (pokemon) => {
      const detailResponse = await fetch(pokemon.url);
      return await detailResponse.json();
    });
    
    const pokemonData = await Promise.all(pokemonPromises);
    
    // Transform the data to include only what we need
    const simplifiedData = pokemonData.map(pokemon => ({
      id: pokemon.id,
      name: pokemon.name,
      height: pokemon.height,
      weight: pokemon.weight,
      sprites: {
        front_default: pokemon.sprites.front_default
      },
      abilities: pokemon.abilities.map(ability => ({
        ability: {
          name: ability.ability.name,
          url: ability.ability.url
        },
        is_hidden: ability.is_hidden
      })),
      moves: pokemon.moves.slice(0, 10).map(move => ({
        move: {
          name: move.move.name,
          url: move.move.url
        }
      })),
      forms: pokemon.forms.map(form => ({
        name: form.name,
        url: form.url
      })),
      types: pokemon.types.map(type => ({
        type: {
          name: type.type.name,
          url: type.type.url
        }
      }))
    }));
    
    return simplifiedData;
  } catch (error) {
    console.error('Error fetching Pokemon data:', error);
    throw error;
  }
}

// Main function to fetch data and save it
async function main() {
  try {
    const pokemonData = await fetchPokemonData();
    
    // Format the data as a JavaScript module
    const fileContent = `// Initial Pokemon data - fetched from PokeAPI
const pokemonData = ${JSON.stringify(pokemonData, null, 2)};

export default pokemonData;
`;
    
    // Write to file
    fs.writeFileSync(outputPath, fileContent);
    console.log(`Successfully wrote Pokemon data to ${outputPath}`);
  } catch (error) {
    console.error('Error in main function:', error);
  }
}

// Run the script
main();
