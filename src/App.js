import React, { useState } from 'react';

import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './styles/theme';
import { GlobalStyles } from './styles/global';
import FormController from './FormController';
import Home from './Home';
import EndMessage from './EndMessage';
import Quit from './Quit';

export default function App() {
  const [state, setState] = useState({});
  const [phase, setPhase] = useState('HOME');
  const [light, setLight] = useState(true);

  const startQuestions = e => {
    setLight(false);
    setPhase('QUESTIONAIRE');
  };

  const endQuestions = () => {
    setPhase('END');
  };

  const quit = () => {
    setPhase('QUIT');
  };

  return (
    <ThemeProvider theme={light === true ? lightTheme : darkTheme}>
      <GlobalStyles />
      {phase === 'HOME' && <Home startQuestions={startQuestions} />}
      {phase === 'QUESTIONAIRE' && (
        <FormController
          state={state}
          setState={setState}
          endQuestions={endQuestions}
          quit={quit}
        />
      )}
      {phase === 'END' && <EndMessage />}
      {phase === 'QUIT' && <Quit />}
    </ThemeProvider>
  );
}
