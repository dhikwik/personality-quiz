import React from 'react';
import { useNavigate } from 'react-router-dom';

const Welcome = () => {
  const navigate = useNavigate();

  const goToTestPage = () => {
    navigate('/personality-test');
  };

  return (
    <div className="container">
         <h1>Personality Test</h1>
        <h3>This test helps  helps people increase their self-awareness, understand and appreciate differences in others, and apply personality insights to improve their personal and professional effectiveness.</h3>
        <button className="next-btn btn-lg" onClick={goToTestPage}>Take the test </button>
     </div>
  );
};

export default Welcome;
