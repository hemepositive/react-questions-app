import React, { useState } from 'react';

const QAgreement = ({ state, handleChange }) => {
  return (
    <form>
      <label>
        How strongly do you agree with the statement ___ ?
        <select
          name="agreement"
          onChange={handleChange}
          value={state.agreement}
        >
          <option value="stronglyAgree">Strongly Agree</option>
          <option value="agree">Agree</option>
          <option value="undecided">Undecided</option>
          <option value="disagree">Disagree</option>
          <option value="stronglyDisagree">Strongly Disagree</option>
        </select>
      </label>
    </form>
  );
};

export default QAgreement;
