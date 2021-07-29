import React from 'react';

export default ({ state }) => (
  <div style={{ color: 'black' }}>{`State: ${JSON.stringify(state)}`}</div>
);
