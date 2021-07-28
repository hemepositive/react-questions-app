import React, { useState, useEffect } from 'react';

const Q1 = ({ state, handleChange, handleTime }) => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(time => time + 1);
      handleTime(time);
    });
    return () => {
      clearInterval(interval);
    };
  }, [time]);

  return (
    <>
      <h2>I like ice cream.</h2>
      <form>
        <label>
          Yes
          <input
            type="radio"
            name="iceCream"
            value="yes"
            checked={state.iceCream === 'yes'}
            onChange={handleChange}
          />
        </label>
        <label>
          No
          <input
            type="radio"
            name="iceCream"
            value="no"
            checked={state.iceCream === 'no'}
            onChange={handleChange}
          />
        </label>
      </form>
    </>
  );
};

export default Q1;
