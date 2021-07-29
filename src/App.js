import React, { useState } from 'react';
import FormController from './FormController';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './styles/theme';
import { GlobalStyles } from './styles/global';

export default function App() {
  const [on, setOn] = useState(false);
  const [theme, setTheme] = useState('light');

  // The function that toggles between themes
  const toggleTheme = () => {
    // if the theme is not light, then set it to dark
    if (theme === 'light') {
      setTheme('dark');
      // otherwise, it should be light
    } else {
      setTheme('light');
    }
  };

  const toggleOn = () => {
    setOn(on => !on);
  };

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <h1>MultiStep Form</h1>
      <p>Answer questions honestly but quickly.</p>
      <button onClick={toggleTheme}>Toggle Dark/"Incognito" Mode</button>
      {on ? <FormController /> : <button onClick={toggleOn}>Start</button>}
    </ThemeProvider>
  );
}
