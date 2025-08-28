import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import LoginPage from '../../pages/LoginPage';
import { AuthContext } from '../../contexts/AuthContext';

// Mock useNavigate
vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...actual,
    useNavigate: () => vi.fn()
  };
});

describe('LoginPage', () => {
  const mockLogin = vi.fn();
  
  beforeEach(() => {
    mockLogin.mockReset();
  });
  
  const renderWithAuthContext = () => {
    return render(
      <AuthContext.Provider value={{ login: mockLogin }}>
        <BrowserRouter>
          <LoginPage />
        </BrowserRouter>
      </AuthContext.Provider>
    );
  };
  
  it('renders login form correctly', () => {
    renderWithAuthContext();
    
    expect(screen.getByText('Pokédex')).toBeInTheDocument();
    expect(screen.getByLabelText(/username/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /login/i })).toBeInTheDocument();
  });
  
  it('validates form inputs', () => {
    renderWithAuthContext();
    
    const loginButton = screen.getByRole('button', { name: /login/i });
    
    // Submit without inputs
    fireEvent.click(loginButton);
    
    expect(screen.getByText(/username is required/i)).toBeInTheDocument();
    expect(screen.getByText(/password is required/i)).toBeInTheDocument();
    expect(mockLogin).not.toHaveBeenCalled();
  });
  
  it('calls login with form data on submit', () => {
    mockLogin.mockReturnValue(true);
    renderWithAuthContext();
    
    const usernameInput = screen.getByLabelText(/username/i);
    const passwordInput = screen.getByLabelText(/password/i);
    const loginButton = screen.getByRole('button', { name: /login/i });
    
    fireEvent.change(usernameInput, { target: { value: 'admin' } });
    fireEvent.change(passwordInput, { target: { value: 'admin' } });
    fireEvent.click(loginButton);
    
    expect(mockLogin).toHaveBeenCalledWith('admin', 'admin');
  });
  
  it('shows error message on login failure', () => {
    mockLogin.mockReturnValue(false);
    renderWithAuthContext();
    
    const usernameInput = screen.getByLabelText(/username/i);
    const passwordInput = screen.getByLabelText(/password/i);
    const loginButton = screen.getByRole('button', { name: /login/i });
    
    fireEvent.change(usernameInput, { target: { value: 'wrong' } });
    fireEvent.change(passwordInput, { target: { value: 'wrong' } });
    fireEvent.click(loginButton);
    
    expect(mockLogin).toHaveBeenCalledWith('wrong', 'wrong');
    expect(screen.getByText(/invalid username or password/i)).toBeInTheDocument();
  });
});
