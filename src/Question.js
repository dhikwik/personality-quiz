import React from 'react';
 
const Question = ({ question, onAnswerChange }) => {
  return (
    <div className="question">
      <p>{question.text}</p>
      <div className="choices">
        {question.choices.map(choice => (
          <label key={choice}>
            <input
              type="radio"
              name={`question-${question.id}`}
              value={choice}
              onChange={() => onAnswerChange(choice)}
            />
            {choice}
            {console.log("question choice",choice)}
          </label>
        ))}
      </div>
    </div>
  );
};

export default Question;
