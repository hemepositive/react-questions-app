import React, { useState } from 'react';

import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './styles/theme';
import { GlobalStyles } from './styles/global';
import FormController from './FormController';
import EndMessage from './EndMessage';

export default function App() {
  const [state, setState] = useState({});
  const [phase, setPhase] = useState('pre');
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

  const phaseShift = phase => {
    switch (phase) {
      case 'pre':
        return <Hero startQuestions={startQuestions} />;
      case 'active':
        return <FormController endQuestions={endQuestions} />;
      case 'end':
        return <EndMessage />;
      default:
          return null;
    }
  };

  const startQuestions = e => {
    setPhase('active');
    setLight(false);
  };

  const endQuestions = () => {
    setPhase('end');
  };

  const Hero = () => {
    return (
      <>
        <h1>MultiStep Form</h1>
        <p>Answer questions honestly but quickly.</p>
        <button onClick={startQuestions}>Start</button>
      </>
    );
  };

  return (
    <ThemeProvider theme={light === true ? lightTheme : darkTheme}>
      <GlobalStyles />
      {phaseShift(phase)}
    </ThemeProvider>
  );
}
