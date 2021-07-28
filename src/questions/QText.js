import React, { useState, useEffect } from 'react';

const QText = ({ state, handleChange, handleTime }) => {
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
    <form>
      <label>
        <div className="heading">First Name</div>
        <input
          type="text"
          name="firstName"
          value={state.firstName}
          onChange={handleChange}
        />
      </label>
    </form>
  );
};

export default QText;
