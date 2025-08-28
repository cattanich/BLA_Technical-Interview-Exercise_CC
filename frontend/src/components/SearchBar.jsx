import React, { useState } from 'react';
import styled from 'styled-components';

const SearchContainer = styled.div`
  margin-bottom: 2rem;
`;

const SearchForm = styled.form`
  display: flex;
  max-width: 600px;
  margin: 0 auto;
`;

const SearchInput = styled.input`
  flex: 1;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-right: none;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: var(--primary-color);
  }
`;

const SearchButton = styled.button`
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  padding: 0 1.5rem;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: #d32f2f;
  }
`;

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };
  
  return (
    <SearchContainer>
      <SearchForm onSubmit={handleSubmit}>
        <SearchInput
          type="text"
          placeholder="Search for a Pokémon..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <SearchButton type="submit">Search</SearchButton>
      </SearchForm>
    </SearchContainer>
  );
};

export default SearchBar;
