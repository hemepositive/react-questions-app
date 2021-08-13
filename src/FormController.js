import React, { useState } from 'react';
import { Card } from './styles/Card';
import Q1 from './questions/Q1';
import Q2 from './questions/Q2';
import Q3 from './questions/Q3';
// import Q4 from './Q4';
// import Q5 from './Q5';
import EndMessage from './EndMessage';

const FormController = ({ endQuestions, quit }) => {
  const [component, setComponent] = useState(1);
  const [state, setState] = useState({});
  const [ms, setMS] = useState(0);

  const nextComponent = () => {
    console.log('nextComponent preIndex', component);
    setComponent(component => component + 1);
    console.log('nextComponent postIndex', component);
    if (component > 3) {
      console.log('!! component > 3', component);
      endQuestions();
      return;
    }
  };

  const handleTime = time => {
    setMS(time);
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
    setTimeout(() => {
      nextComponent(); // INDEX on Answer
    }, 500);
  };

  // const submit = e => {
  //   e.preventDefault();
  //   setComponent();
  // };

  return (
    <div>
      <Card>
        <div>
          <progress max="3" value={component} />
        </div>
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
        {component > 3 && <EndMessage />}
        {/* 
        {component === 4 && <Q4 state={state} handleChange={handleChange} />}
        {component === 5 && <Q5 state={state} handleChange={handleChange} />} 
          */}
        <button onClick={() => quit()}>QUIT</button>
      </Card>
    </div>
  );
};

export default FormController;
