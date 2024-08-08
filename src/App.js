import React, { useState } from 'react';
import './App.css';
import Question from './Question';
import confetti from 'canvas-confetti'; 


const questions = [
  { id: 1, text: "Do you prefer to focus on the outer world or on your own inner world?", choices: ["Outer world (E)", "Inner world (I)"] },
  { id: 2, text: "Do you prefer to focus on the basic information you take in or do you prefer to interpret and add meaning?", choices: ["Focus on basic information (S)", "Interpret and add meaning (N)"] },
  { id: 3, text: "When making decisions, do you prefer to first look at logic and consistency or first look at the people and special circumstances?", choices: ["Logic and consistency (T)", "People and special circumstances (F)"] },
  { id: 4, text: "In dealing with the outside world, do you prefer to get things decided or do you prefer to stay open to new information and options?", choices: ["Get things decided (J)", "Stay open to new information and options (P)"] },
  { id: 5, text: "When you are in a social setting, do you find yourself more often initiating conversations or responding to others?", choices: ["Initiating conversations (E)", "Responding to others (I)"] },
  { id: 6, text: "Do you prefer to have a detailed plan or are you comfortable improvising as you go?", choices: ["Detailed plan (J)", "Improvising (P)"] },
  { id: 7, text: "Do you prefer to focus on one task at a time or do you like to multitask?", choices: ["One task at a time (S)", "Multitask (N)"] },
  { id: 8, text: "When resolving a conflict, do you prefer to rely on objective criteria or do you consider the personal context of the situation?", choices: ["Objective criteria (T)", "Personal context (F)"] },
  { id: 9, text: "Do you feel more energized after spending time alone or after spending time with other people?", choices: ["Time alone (I)", "Time with other people (E)"] },
  { id: 10, text: "Do you prefer a more structured routine or a flexible schedule?", choices: ["Structured routine (J)", "Flexible schedule (P)"] }
];

const mbtiDescriptions = {
  ENFJ: "E - Extraverted, N - Intuitive, F - Feeling, J - Judging: Warm, empathetic, responsible.",
  ENFP: "E - Extraverted, N - Intuitive, F - Feeling, P - Perceiving: Enthusiastic, imaginative, spontaneous.",
  ENTJ: "E - Extraverted, N - Intuitive, T - Thinking, J - Judging: Decisive, strategic, goal-oriented.",
  ENTP: "E - Extraverted, N - Intuitive, T - Thinking, P - Perceiving: Innovative, energetic, charismatic.",
  ESFJ: "E - Extraverted, S - Sensing, F - Feeling, J - Judging: Friendly, conscientious, organized.",
  ESFP: "E - Extraverted, S - Sensing, F - Feeling, P - Perceiving: Outgoing, practical, spontaneous.",
  ESTJ: "E - Extraverted, S - Sensing, T - Thinking, J - Judging: Practical, realistic, leader.",
  ESTP: "E - Extraverted, S - Sensing, T - Thinking, P - Perceiving: Energetic, adventurous, spontaneous.",
  INFJ: "I - Introverted, N - Intuitive, F - Feeling, J - Judging: Insightful, organized, compassionate.",
  INFP: "I - Introverted, N - Intuitive, F - Feeling, P - Perceiving: Idealistic, empathetic, loyal.",
  INTJ: "I - Introverted, N - Intuitive, T - Thinking, J - Judging: Strategic, logical, determined.",
  INTP: "I - Introverted, N - Intuitive, T - Thinking, P - Perceiving: Analytical, abstract, intellectual.",
  ISFJ: "I - Introverted, S - Sensing, F - Feeling, J - Judging: Warm, dependable, meticulous.",
  ISFP: "I - Introverted, S - Sensing, F - Feeling, P - Perceiving: Gentle, flexible, artistic.",
  ISTJ: "I - Introverted, S - Sensing, T - Thinking, J - Judging: Responsible, detail-oriented, logical.",
  ISTP: "I - Introverted, S - Sensing, T - Thinking, P - Perceiving: Observant, practical, problem-solver."
};

const App = () => {
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [result, setResult] = useState("");

  const handleAnswerChange = (choice) => {
    const updatedAnswers = [...answers];
    updatedAnswers[currentQuestionIndex] = choice;
    setAnswers(updatedAnswers);
   };

  const nextQuestion = () => {
    if (currentQuestionIndex < questions.length ) {
      console.log("currentQuestionIndex",currentQuestionIndex)
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }  
  };

  const calculateResult = () => {
    let e = 0, i = 0, s = 0, n = 0, t = 0, f = 0, j = 0, p = 0;

 
    answers.forEach((answer, index) => {
      console.log(answer)
      if(answer){
      if (answer.includes('E')) e++;
      if (answer.includes('I')) i++;
      if (answer.includes('S')) s++;
      if (answer.includes('N')) n++;
      if (answer.includes('T')) t++;
      if (answer.includes('F')) f++;
      if (answer.includes('J')) j++;
      if (answer.includes('P')) p++;
      }
    });

    const mbti =
    (e > i ? 'E' : 'I') +
    (s > n ? 'S' : 'N') +
    (t > f ? 'T' : 'F') +
    (j > p ? 'J' : 'P');
    console.log("result",result)
    setResult(mbti);
    confettiDecor();
    setCurrentQuestionIndex(currentQuestionIndex + 1);

  };
  const confettiDecor = () => {
     const end = Date.now() + 15 * 300;

        const colors = ["#bb0000", "#ffffff"];
        frame();
        function frame() {
        confetti({
            particleCount: 2,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
            colors: colors,
        });

        confetti({
            particleCount: 2,
            angle: 120,
            spread: 55,
            origin: { x: 1 },
            colors: colors,
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
        };
  }

  return (
    <div className="container1">
      <h1>Personality Quiz</h1>
      <div className="questions">
        {currentQuestionIndex < questions.length ? (
          <Question
            question={questions[currentQuestionIndex]}
            onAnswerChange={handleAnswerChange}
          />
        ) : (
          result && 
          <>
           <div className="result">Your MBTI type is: {result}</div>
           <p className="result">{mbtiDescriptions[result]}</p>
          </>
        )}
      </div>
      {currentQuestionIndex === questions.length-1 && ( calculateResult() 
       )}
      
      {currentQuestionIndex < questions.length && (
        <button className="next-btn-click" onClick={nextQuestion}>
          Next
        </button>
      )}
      
    </div>
  );
};

export default App;
