import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  cursor: pointer;
  transition: transform 0.3s, box-shadow 0.3s;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
  
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const PokemonImage = styled.img`
  width: 120px;
  height: 120px;
  margin-bottom: 1rem;
`;

const PokemonName = styled.h3`
  color: var(--text-color);
  font-size: 1.2rem;
  margin: 0;
  text-transform: capitalize;
`;

const TypeBadge = styled.span`
  display: inline-block;
  padding: 0.25rem 0.75rem;
  margin: 0.25rem;
  border-radius: 16px;
  font-size: 0.75rem;
  text-transform: capitalize;
  color: white;
  background-color: ${props => {
    switch (props.type) {
      case 'grass': return '#78c850';
      case 'fire': return '#f08030';
      case 'water': return '#6890f0';
      case 'bug': return '#a8b820';
      case 'normal': return '#a8a878';
      case 'poison': return '#a040a0';
      case 'electric': return '#f8d030';
      case 'ground': return '#e0c068';
      case 'fairy': return '#ee99ac';
      case 'fighting': return '#c03028';
      case 'psychic': return '#f85888';
      case 'rock': return '#b8a038';
      case 'ghost': return '#705898';
      case 'ice': return '#98d8d8';
      case 'dragon': return '#7038f8';
      case 'dark': return '#705848';
      case 'steel': return '#b8b8d0';
      case 'flying': return '#a890f0';
      default: return '#aaaaaa';
    }
  }};
`;

const TypesContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 0.5rem;
`;

const PokemonCard = ({ pokemon, onClick }) => {
  return (
    <Card onClick={() => onClick(pokemon)}>
      <PokemonImage 
        src={pokemon.sprites.front_default} 
        alt={pokemon.name}
      />
      <PokemonName>{pokemon.name}</PokemonName>
      <TypesContainer>
        {pokemon.types && pokemon.types.map((typeInfo, index) => (
          <TypeBadge key={index} type={typeInfo.type.name}>
            {typeInfo.type.name}
          </TypeBadge>
        ))}
      </TypesContainer>
    </Card>
  );
};

export default PokemonCard;
