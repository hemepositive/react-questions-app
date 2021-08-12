import React, { useState } from 'react';
import { Card } from './styles/Card';
import Q1 from './questions/Q1';
import Q2 from './questions/Q2';
import Q3 from './questions/Q3';
// import Q4 from './Q4';
// import Q5 from './Q5';
import EndMessage from './EndMessage';

const FormController = ({ endQuestions }) => {
  const [component, setComponent] = useState(1);
  const [state, setState] = useState({});
  const [ms, setMS] = useState(0);

  const nextComponent = () => {
    setComponent(component => component + 1);
    if (component > 3) {
      endQuestions();
      return;
    }
  };

  const handleTime = time => {
    setMS(time);
    // console.log(`Miliseconds: ${ms}`);
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
    nextComponent(); // INDEX on Answer
  };

  // const submit = e => {
  //   e.preventDefault();
  //   setComponent();
  // };

  return (
    <div>
      <div>
        <progress max="3" value={component} />
      </div>
      <Card>
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
      </Card>
      <button onClick={nextComponent}>Go Next</button>
    </div>
  );
};

export default FormController;
