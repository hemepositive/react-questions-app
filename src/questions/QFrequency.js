import React, { useState } from 'react';

const QFreqency = ({ state, handleChange }) => {
  return (
    <form>
      <label>
        How often do you think...?
        <select
          name="frequency"
          onChange={handleChange}
          value={state.frequency}
        >
          <option value="always">Always</option>
          <option value="often">Often</option>
          <option value="sometimes">Sometimes</option>
          <option value="rarely">Rarely</option>
          <option value="never">Never</option>
        </select>
      </label>
    </form>
  );
};

export default QFreqency;
