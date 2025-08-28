import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Check if user is already logged in
  useEffect(() => {
    const checkLoggedIn = () => {
      const userInfo = localStorage.getItem('user');
      if (userInfo) {
        setUser(JSON.parse(userInfo));
        setIsAuthenticated(true);
      }
      setLoading(false);
    };

    checkLoggedIn();
  }, []);

  // Login function
  const login = (username, password) => {
    // For this exercise, we're using a simple validation
    if (username === 'admin' && password === 'admin') {
      const user = { username };
      localStorage.setItem('user', JSON.stringify(user));
      setUser(user);
      setIsAuthenticated(true);
      return true;
    }
    return false;
  };

  // Logout function
  const logout = () => {
    localStorage.removeItem('user');
    setUser(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        user,
        loading,
        login,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
