import React, { useState } from 'react';

import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './styles/theme';
import { GlobalStyles } from './styles/global';
import FormController from './FormController';
import Home from './Home';
import EndMessage from './EndMessage';
import Quit from './Quit'

export default function App() {
  const [state, setState] = useState({});
  const [phase, setPhase] = useState('HOME');
  const [light, setLight] = useState(true);

  // // The function that toggles between themes
  // const toggleTheme = () => {
  //   // if the theme is not light, then set it to dark
  //   if (theme === 'light') {
  //     setTheme('dark');
  //     // otherwise, it should be light
  //   } else {
  //     setTheme('light');
  //   }
  // };

  // function Notification({ text, status }) {
  //   switch (status) {
  //     case 'info':
  //       return <Info text={text} />;
  //     case 'warning':
  //       return <Warning text={text} />;
  //     case 'error':
  //       return <Error text={text} />;
  //     default:
  //       return null;
  //   }
  // }

  // const phaseShift = phase => {
  //   switch (phase) {
  //     case 'pre':
  //       return <Hero startQuestions={startQuestions} />;
  //     case 'active':
  //       return <FormController endQuestions={endQuestions} />;
  //     case 'end':
  //       return <EndMessage />;
  //     default:
  //       return null;
  //   }
  // };

  const startQuestions = e => {
    console.log('startQuestions');
    setLight(false);
    setPhase('QUESTIONAIRE');
  };

  const endQuestions = () => {
    console.log('endQuestions');
    setPhase('END');
  };

  const quit = () => {
    console.log('quit');
    setPhase('QUIT');
  };

  return (
    <ThemeProvider theme={light === true ? lightTheme : darkTheme}>
      <GlobalStyles />
      {phase === 'HOME' && <Home startQuestions={startQuestions} />}
      {phase === 'QUESTIONAIRE' && (
        <FormController endQuestions={endQuestions} quit={quit} />
      )}
      {phase === 'END' && <EndMessage />}
      {phase === 'QUIT' && <Quit />}
    </ThemeProvider>
  );
}
