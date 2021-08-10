import React, { useState } from 'react';

import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './styles/theme';
import { GlobalStyles } from './styles/global';
import FormController from './FormController';
import EndMessage from './EndMessage';

export default function App() {
  const [state, setState] = useState({});
  const [phase, setPhase] = useState('HOME');
  const [on, setOn] = useState(false);
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
    setLight(false);
  };

  const endQuestions = () => {
    setPhase('end');
  };

  const Home = () => {
    return (
      <>
        <h1>MultiStep Form</h1>
        <p>Answer questions honestly but quickly.</p>
        <button onClick={() => setPhase('QUESTIONAIRE')}>Start</button>
      </>
    );
  };

  return (
    <ThemeProvider theme={light === true ? lightTheme : darkTheme}>
      <GlobalStyles />
      {phase === 'HOME' && <Home startQuestions={startQuestions} />}
      {phase === 'QUESTIONAIRE' && <FormController setPhase={setPhase} />}
      {phase === 'END' && <h1>END</h1>}
    </ThemeProvider>
  );
}
