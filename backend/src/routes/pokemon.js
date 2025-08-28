import express from 'express';
import * as pokemonController from '../controllers/pokemonController.js';

const router = express.Router();

// Get all Pokemon with pagination and search
router.get('/', pokemonController.getAllPokemon);

// Get Pokemon by ID
router.get('/id/:id', pokemonController.getPokemonById);

// Get Pokemon by name
router.get('/name/:name', pokemonController.getPokemonByName);

export default router;
