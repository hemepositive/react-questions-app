import React, { useState } from 'react';
import { useMachine } from '@xstate/react';
import { createMachine } from 'xstate';
import FormController from './FormController';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './styles/theme';
import { GlobalStyles } from './styles/global';

const gameMachine = createMachine({
  id: 'game',
  initial: 'inactive',
  states: {
    inactive: {
      on: { TOGGLE: 'active' }
    },
    active: {
      on: { TOGGLE: 'inactive' }
    },
    over: {
      on: { END: 'inactive' }
    }
  }
});

const Home = ({ send }) => {
  return (
    <>
      <h1>MultiStep Form</h1>
      <p>Answer questions honestly but quickly.</p>
      <button onClick={() => send('TOGGLE')}>Start</button>
    </>
  );
};

export default function App() {
  const [current, send] = useMachine(gameMachine);
  const [on, setOn] = useState(false);
  const [theme, setTheme] = useState('light');

  const cancel = () => {
    console.log('end in app');
    send('END');
  };
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      {current.matches('inactive') && <Home send={send} />}
      {current.matches('active') && <FormController cancel={cancel} />}
    </ThemeProvider>
  );
}
