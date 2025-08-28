import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from '../../components/SearchBar';

describe('SearchBar', () => {
  it('renders correctly', () => {
    const onSearch = vi.fn();
    render(<SearchBar onSearch={onSearch} />);
    
    expect(screen.getByPlaceholderText('Search for a Pokémon...')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /search/i })).toBeInTheDocument();
  });
  
  it('calls onSearch when form is submitted', () => {
    const onSearch = vi.fn();
    render(<SearchBar onSearch={onSearch} />);
    
    const input = screen.getByPlaceholderText('Search for a Pokémon...');
    const button = screen.getByRole('button', { name: /search/i });
    
    fireEvent.change(input, { target: { value: 'pikachu' } });
    fireEvent.click(button);
    
    expect(onSearch).toHaveBeenCalledWith('pikachu');
  });
  
  it('updates input value on change', () => {
    const onSearch = vi.fn();
    render(<SearchBar onSearch={onSearch} />);
    
    const input = screen.getByPlaceholderText('Search for a Pokémon...');
    
    fireEvent.change(input, { target: { value: 'bulba' } });
    
    expect(input.value).toBe('bulba');
  });
});
