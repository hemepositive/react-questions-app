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
  const { id } = useContext(AppContext);

  return (
    <>
      <h2>Get too uncomfortable?</h2>
      <h3>You need help.</h3>
      <p>{id ? `id is: ${id}` : 'not found'}</p>
      <a href="https://www.google.com">Google</a>
    </>
  );
};
