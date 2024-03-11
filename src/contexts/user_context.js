import React, { createContext, useContext, useState } from 'react';

// Create a context
const AuthContext = createContext();

// Provider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // null when not logged in

  // Simulate login
  const login = () => {
    setUser({ name: 'John Doe', picture: '/path/to/john-doe.jpg' });
  };

  // Simulate logout
  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);