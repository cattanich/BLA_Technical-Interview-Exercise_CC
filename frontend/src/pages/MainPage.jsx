import React, { useState, useEffect } from 'react';
import { useAuth } from '../hooks/useAuth';
import { getPokemonList } from '../services/api';
import styled from 'styled-components';
import PokemonCard from '../components/PokemonCard';
import PokemonModal from '../components/PokemonModal';
import SearchBar from '../components/SearchBar';
import Pagination from '../components/Pagination';

const MainContainer = styled.div`
  min-height: 100vh;
  padding: 2rem;
  background-color: var(--background-color);
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #ddd;
`;

const Title = styled.h1`
  color: var(--primary-color);
  font-size: 2rem;
`;

const LogoutButton = styled.button`
  background-color: transparent;
  color: var(--text-color);
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover {
    background-color: #f5f5f5;
  }
`;

const LoadingMessage = styled.div`
  text-align: center;
  padding: 2rem;
  font-size: 1.2rem;
  color: var(--text-color);
`;

const ErrorMessage = styled.div`
  text-align: center;
  padding: 2rem;
  font-size: 1.2rem;
  color: red;
  background-color: #ffebee;
  border-radius: 8px;
  margin: 2rem 0;
`;

const PokemonGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
`;

const MainPage = () => {
  const { logout } = useAuth();
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [pagination, setPagination] = useState({
    currentPage: 1,
    totalPages: 1,
    limit: 20,
    offset: 0
  });

  useEffect(() => {
    fetchPokemon();
  }, [pagination.limit, pagination.offset, searchTerm]);

  const fetchPokemon = async () => {
    try {
      setLoading(true);
      const data = await getPokemonList(
        pagination.limit,
        pagination.offset,
        searchTerm
      );
      setPokemon(data.results);
      setPagination(prev => ({
        ...prev,
        totalPages: data.totalPages
      }));
    } catch (err) {
      console.error('Error fetching Pokemon:', err);
      setError('Failed to load Pokemon. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const handlePageChange = (newPage) => {
    setPagination(prev => ({
      ...prev,
      currentPage: newPage,
      offset: (newPage - 1) * prev.limit
    }));
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
    setPagination(prev => ({
      ...prev,
      currentPage: 1,
      offset: 0
    }));
  };

  const handlePokemonSelect = (pokemon) => {
    setSelectedPokemon(pokemon);
  };

  const handleCloseModal = () => {
    setSelectedPokemon(null);
  };

  return (
    <MainContainer>
      <Header>
        <Title>Pokédex</Title>
        <LogoutButton onClick={logout}>Logout</LogoutButton>
      </Header>

      <SearchBar onSearch={handleSearch} />

      {error && <ErrorMessage>{error}</ErrorMessage>}

      {loading ? (
        <LoadingMessage>Loading Pokémon...</LoadingMessage>
      ) : (
        <>
          <PokemonGrid>
            {pokemon.map((p) => (
              <PokemonCard 
                key={p.id} 
                pokemon={p} 
                onClick={() => handlePokemonSelect(p)} 
              />
            ))}
          </PokemonGrid>

          <Pagination
            currentPage={pagination.currentPage}
            totalPages={pagination.totalPages}
            onPageChange={handlePageChange}
          />
        </>
      )}

      {selectedPokemon && (
        <PokemonModal 
          pokemon={selectedPokemon} 
          onClose={handleCloseModal} 
        />
      )}
    </MainContainer>
  );
};

export default MainPage;
