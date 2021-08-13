import React from 'react';

const Home = ({ startQuestions }) => {
  return (
    <>
      <h1>MultiStep Form</h1>
      <p>Answer questions honestly but quickly.</p>
      <button onClick={() => startQuestions()}>Start</button>
    </>
  );
};

export default Home;
