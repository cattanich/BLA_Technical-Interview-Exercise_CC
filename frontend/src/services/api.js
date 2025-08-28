import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001/api';

const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

export const getPokemonList = async (limit = 20, offset = 0, search = '') => {
  try {
    const response = await apiClient.get('/pokemon', {
      params: { limit, offset, search }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching Pokemon list:', error);
    throw error;
  }
};

export const getPokemonById = async (id) => {
  try {
    const response = await apiClient.get(`/pokemon/id/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching Pokemon with ID ${id}:`, error);
    throw error;
  }
};

export const getPokemonByName = async (name) => {
  try {
    const response = await apiClient.get(`/pokemon/name/${name}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching Pokemon with name ${name}:`, error);
    throw error;
  }
};
