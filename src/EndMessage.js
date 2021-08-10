import React, { useEffect } from 'react';

export default ({ setPhase }) => {
  // do a redirect here ??
  useEffect(() => {
    const interval = setTimeout(() => {
      setPhase('END');
    }, 2000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <h2>End of Questionaire</h2>
      <h3>What to know more?</h3>
      <a href="https://www.google.com">Google</a>
    </>
  );
};
