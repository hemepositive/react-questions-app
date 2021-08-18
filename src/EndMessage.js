import React, { useEffect, useContext } from 'react';
import AppContext from './context';

export default () => {
  // do a redirect here ??
  // useEffect(() => {
  //   const interval = setTimeout(() => {
  //     setPhase('END');
  //   }, 2000);
  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, []);
  const { me } = useContext(AppContext);
  return (
    <>
      <h2>End of Questionaire</h2>
      <h3>What to know more?</h3>
      <p>{me}</p>
      <a href="https://www.google.com">Google</a>
    </>
  );
};
