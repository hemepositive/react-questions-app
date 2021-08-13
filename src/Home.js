import React from 'react';

const Home = ({ startQuestions }) => {
  return (
    <>
      <h1>Uncomfortable Questions</h1>
      <p>Answer questions honestly but quickly.</p>
      <p>Try to make it through all 3 questions without quiting</p>
      <button onClick={() => startQuestions()}>Start</button>
    </>
  );
};

export default Home;
