import React, { useState } from 'react';

const ThemeContext = React.createContext(null);

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(
    JSON.parse(localStorage.getItem('color-schema')) || 'light',
  );
  const chooseTheme = e => {
    setTheme(e.target.name);
    localStorage.setItem('color-schema', JSON.stringify(e.target.name));
  };
  return (
    <ThemeContext.Provider value={{ theme, chooseTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = React.useContext(ThemeContext);

  if (context === undefined) {
    throw new Error('useTheme must be used within the ThemeProvider component');
  }

  return context;
}
