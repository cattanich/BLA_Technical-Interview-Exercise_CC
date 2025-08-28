import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import styled from 'styled-components';

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: var(--background-color);
`;

const LoginCard = styled.div`
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  width: 100%;
  max-width: 400px;
`;

const Logo = styled.div`
  text-align: center;
  margin-bottom: 2rem;
  
  h1 {
    color: var(--primary-color);
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
  }
  
  p {
    color: var(--text-color);
    font-size: 1rem;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 0.5rem;
  font-weight: 600;
`;

const Input = styled.input`
  padding: 0.75rem;
  border: 1px solid ${props => props.error ? 'red' : '#ddd'};
  border-radius: 4px;
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: var(--primary-color);
  }
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 0.875rem;
  margin-top: 0.5rem;
`;

const SubmitButton = styled.button`
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-radius: 4px;
  padding: 0.75rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: #d32f2f;
  }
  
  &:disabled {
    background-color: #e0e0e0;
    cursor: not-allowed;
  }
`;

const LoginPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { login } = useAuth();
  const navigate = useNavigate();
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error when user types
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };
  
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.username.trim()) {
      newErrors.username = 'Username is required';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Attempt login
      const success = login(formData.username, formData.password);
      
      if (success) {
        navigate('/');
      } else {
        setErrors({
          auth: 'Invalid username or password. Please use "admin" for both fields.'
        });
      }
      
      setIsSubmitting(false);
    }
  };
  
  return (
    <LoginContainer>
      <LoginCard>
        <Logo>
          <h1>Pokédex</h1>
          <p>Your ultimate Pokémon companion</p>
        </Logo>
        
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="username">Username</Label>
            <Input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              error={errors.username}
              autoComplete="username"
            />
            {errors.username && <ErrorMessage>{errors.username}</ErrorMessage>}
          </FormGroup>
          
          <FormGroup>
            <Label htmlFor="password">Password</Label>
            <Input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              error={errors.password}
              autoComplete="current-password"
            />
            {errors.password && <ErrorMessage>{errors.password}</ErrorMessage>}
          </FormGroup>
          
          {errors.auth && <ErrorMessage>{errors.auth}</ErrorMessage>}
          
          <SubmitButton type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Logging in...' : 'Login'}
          </SubmitButton>
          
          <div style={{ textAlign: 'center', marginTop: '1rem', fontSize: '0.875rem' }}>
            <p>Use "admin" for both username and password</p>
          </div>
        </Form>
      </LoginCard>
    </LoginContainer>
  );
};

export default LoginPage;
