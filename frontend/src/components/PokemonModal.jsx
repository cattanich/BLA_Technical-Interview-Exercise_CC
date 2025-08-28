import React from 'react';
import styled from 'styled-components';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background-color: white;
  border-radius: 10px;
  max-width: 90%;
  width: 600px;
  max-height: 90vh;
  overflow-y: auto;
  padding: 2rem;
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #666;
  
  &:hover {
    color: var(--primary-color);
  }
`;

const PokemonHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
`;

const PokemonImage = styled.img`
  width: 150px;
  height: 150px;
  margin-right: 1.5rem;
`;

const PokemonInfo = styled.div`
  flex: 1;
`;

const PokemonName = styled.h2`
  color: var(--text-color);
  font-size: 2rem;
  margin: 0 0 0.5rem 0;
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

const Section = styled.div`
  margin-bottom: 2rem;
`;

const SectionTitle = styled.h3`
  color: var(--primary-color);
  font-size: 1.2rem;
  margin-bottom: 1rem;
  border-bottom: 1px solid #eee;
  padding-bottom: 0.5rem;
`;

const PokemonStat = styled.div`
  display: flex;
  margin-bottom: 0.5rem;
`;

const StatLabel = styled.span`
  width: 120px;
  font-weight: 600;
`;

const StatValue = styled.span`
  flex: 1;
`;

const AbilityItem = styled.div`
  background-color: #f5f5f5;
  border-radius: 4px;
  padding: 0.75rem;
  margin-bottom: 0.5rem;
`;

const AbilityName = styled.h4`
  margin: 0;
  font-size: 1rem;
  text-transform: capitalize;
`;

const MovesList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 0.5rem;
`;

const MoveItem = styled.div`
  background-color: #f5f5f5;
  border-radius: 4px;
  padding: 0.5rem;
  font-size: 0.9rem;
  text-transform: capitalize;
`;

const FormsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const FormItem = styled.div`
  background-color: #f5f5f5;
  border-radius: 4px;
  padding: 0.5rem;
  font-size: 0.9rem;
  text-transform: capitalize;
`;

const PokemonModal = ({ pokemon, onClose }) => {
  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={e => e.stopPropagation()}>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        
        <PokemonHeader>
          <PokemonImage 
            src={pokemon.sprites.front_default} 
            alt={pokemon.name} 
          />
          <PokemonInfo>
            <PokemonName>{pokemon.name}</PokemonName>
            <div>
              {pokemon.types && pokemon.types.map((typeInfo, index) => (
                <TypeBadge key={index} type={typeInfo.type.name}>
                  {typeInfo.type.name}
                </TypeBadge>
              ))}
            </div>
            <div style={{ marginTop: '0.5rem' }}>
              <PokemonStat>
                <StatLabel>Height:</StatLabel>
                <StatValue>{(pokemon.height / 10).toFixed(1)}m</StatValue>
              </PokemonStat>
              <PokemonStat>
                <StatLabel>Weight:</StatLabel>
                <StatValue>{(pokemon.weight / 10).toFixed(1)}kg</StatValue>
              </PokemonStat>
            </div>
          </PokemonInfo>
        </PokemonHeader>
        
        <Section>
          <SectionTitle>Abilities</SectionTitle>
          {pokemon.abilities && pokemon.abilities.map((abilityInfo, index) => (
            <AbilityItem key={index}>
              <AbilityName>
                {abilityInfo.ability.name.replace('-', ' ')}
                {abilityInfo.is_hidden && ' (Hidden)'}
              </AbilityName>
            </AbilityItem>
          ))}
        </Section>
        
        <Section>
          <SectionTitle>Moves</SectionTitle>
          <MovesList>
            {pokemon.moves && pokemon.moves.map((moveInfo, index) => (
              <MoveItem key={index}>
                {moveInfo.move.name.replace('-', ' ')}
              </MoveItem>
            ))}
          </MovesList>
        </Section>
        
        <Section>
          <SectionTitle>Forms</SectionTitle>
          <FormsList>
            {pokemon.forms && pokemon.forms.map((form, index) => (
              <FormItem key={index}>
                {form.name.replace('-', ' ')}
              </FormItem>
            ))}
          </FormsList>
        </Section>
      </ModalContent>
    </ModalOverlay>
  );
};

export default PokemonModal;
