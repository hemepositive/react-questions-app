import React, { useState } from 'react';
import Q1 from './questions/Q1';
import Q2 from './questions/Q2';
import Q3 from './questions/Q3';
// import Q4 from './Q4';
// import Q5 from './Q5';
import EndMessage from './EndMessage';
// import State from './State';

const FormController = () => {
  const [component, setComponent] = useState(1);
  const [state, setState] = useState({});
  const [ms, setMS] = useState(0);

  const nextComponent = () => {
    if (component > 4) return;
    setComponent(component => component + 1);
  };

  const handleTime = time => {
    setMS(time);
    console.log(`Miliseconds: ${ms}`);
  };

  const handleChange = event => {
    const value = event.target.value;
    // const value =
    //   event.target.type === 'checkbox'
    //     ? event.target.checked
    //     : event.target.value;
    setState({
      ...state,
      [event.target.name]: value
    });
  };

  const submit = e => {
    e.preventDefault();
    setComponent();
  };

  return (
    <div>
      <h2 style={{ color: 'red', textTransform: 'uppercase' }}>
        Form Controller
      </h2>
      <div>
        <progress max="5" value={component} />
      </div>
      {ms && (
        <h3 style={{ color: 'blue', textTransform: 'uppercase' }}>
          Time: {ms}
        </h3>
      )}
      <div>
        {component === 1 && (
          <Q1
            state={state}
            handleChange={handleChange}
            handleTime={handleTime}
          />
        )}
        {component === 2 && (
          <Q2
            state={state}
            handleChange={handleChange}
            handleTime={handleTime}
          />
        )}
        {component === 3 && (
          <Q3
            state={state}
            handleChange={handleChange}
            handleTime={handleTime}
          />
        )}
        {/* 
        {component === 4 && <Q4 state={state} handleChange={handleChange} />}
        {component === 5 && <Q5 state={state} handleChange={handleChange} />} 
        */}
        {component < 4 && <button onClick={nextComponent}>Go Next</button>}
        {component > 4 && <EndMessage />}
      </div>
      {/* {component === 3 && (
        <button type="submit" onClick={submit}>
          Submit
        </button>
      )} */}
      {/* IDEA BELOW */}
      {/* {page !== 4 && <button onClick={goNextPage}>Go Next</button>}
      {page === 4 && (
        <button type="submit" onClick={submit}>
          Submit
        </button>
      )} */}

      {/* <State state={state} /> */}
    </div>
  );
};

export default FormController;
