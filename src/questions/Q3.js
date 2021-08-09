import React, { useState, useEffect } from 'react';

const Q3 = ({ state, handleChange, handleTime }) => {
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
      <h2>I get angry when I think of those people.</h2>
      <form>
        <label>
          Yes
          <input
            type="radio"
            name="anger"
            value="yes"
            checked={state.anger === 'yes'}
            onChange={handleChange}
          />
        </label>
        <label>
          No
          <input
            type="radio"
            name="anger"
            value="no"
            checked={state.anger === 'no'}
            onChange={handleChange}
          />
        </label>
      </form>
    </>
  );
};

export default Q3;
