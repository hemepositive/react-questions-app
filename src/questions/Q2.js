import React, { useState, useEffect } from 'react';

const Q2 = ({ state, handleChange, handleTime }) => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(time => time + 1);
      console.log(`Interval time: ${time}`);
      handleTime(time);
    });
    return () => {
      clearInterval(interval);
    };
  }, [time]);
  return (
    <>
      <h2>I like myself.</h2>
      <form>
        <label>
          Yes
          <input
            type="radio"
            name="self"
            value="yes"
            checked={state.self === 'yes'}
            onChange={handleChange}
          />
        </label>
        <label>
          No
          <input
            type="radio"
            name="self"
            value="no"
            checked={state.self === 'no'}
            onChange={handleChange}
          />
        </label>
      </form>
    </>
  );
};

export default Q2;
