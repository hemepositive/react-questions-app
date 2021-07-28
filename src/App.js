import React, { useState } from 'react';
import './style.css';
import FormController from './FormController';

export default function App() {
  const [on, setOn] = useState(false);
  // const [dark, setDark] = useState(false);

  const toggleOn = () => {
    setOn(on => !on);
  };

  return (
    <div>
      <h1>MultiStep Form</h1>
      <p>Answer questions honestly but quickly.</p>
      {/* <button>Toggle Incognito Mode</button> */}
      {on ? <FormController /> : <button onClick={toggleOn}>Start</button>}
    </div>
  );
}
