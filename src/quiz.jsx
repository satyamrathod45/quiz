import React, { useState } from 'react';

const questions = [
  {
    question: "What does YCCE stand for?",
    options: ["Yeshwantrao Chavan College of Engineering", "Yashwantrao College of Computer Education", "Yashwant Central College of Engineering", "Yogendra Chavan College of Education"],
    correctAnswerIndex: 0
  },
  {
    question: "In which year was YCCE established?",
    options: ["1980", "1984", "1990", "1995"],
    correctAnswerIndex: 1
  },
  {
    question: "Where is YCCE located?",
    options: ["Mumbai", "Nagpur", "Pune", "Aurangabad"],
    correctAnswerIndex: 1
  },
  {
    question: "Which university is YCCE affiliated with?",
    options: ["Mumbai University", "Rashtrasant Tukadoji Maharaj Nagpur University", "Savitribai Phule Pune University", "Delhi University"],
    correctAnswerIndex: 1
  },
  {
    question: "What is the annual cultural event hosted by YCCE called?",
    options: ["Technovanza", "Yuvotsav", "Yashotsav", "InfinITy"],
    correctAnswerIndex: 1
  },
  {
    question: "Which department is known as the 'core engineering' branch at YCCE?",
    options: ["Mechanical Engineering", "Computer Technology", "Civil Engineering", "Electronics Engineering"],
    correctAnswerIndex: 0
  },
  {
    question: "What is the grading system used at YCCE?",
    options: ["Percentage", "CGPA", "Marks", "Grades"],
    correctAnswerIndex: 1
  },
  {
    question: "Which body accredits YCCE?",
    options: ["AICTE", "NBA", "NAAC", "UGC"],
    correctAnswerIndex: 2
  },
  {
    question: "What type of institution is YCCE?",
    options: ["Government", "Private", "Autonomous", "Deemed University"],
    correctAnswerIndex: 2
  },
  {
    question: "Which of the following is a popular technical fest held at YCCE?",
    options: ["Innovision", "TechFury", "Enginova", "TechMania"],
    correctAnswerIndex: 0
  }
];

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  let [score , setScore] = useState(0);
  let [result , setResult] = useState(false)
  let curQue = questions[currentQuestion];
  let currAns = questions[currentQuestion].options[curQue.correctAnswerIndex];
  let [emoji,setEmoji] = useState("😔")
  
  const changeQuestion = () => {
    const nextQuestion = currentQuestion + 1;
    
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    }else {
      console.log("Quiz completed!");
      setResult(true)
    }
  };
  const emojiChanger = (sc) => {
    if (sc < 3) {
      setEmoji("😔");
    } else if (sc >= 3 && sc < 7) {
      setEmoji("😥");
    } else if (sc >= 7 && sc < 9) {
      setEmoji("😁");
    } else {
      setEmoji("😎");
    }
  };
  
  const checkAnswer = (selectedOpt) => {
    if (selectedOpt === currAns) {
      var updatedScore = score + 1
      setScore(updatedScore);
      changeQuestion()
      emojiChanger(updatedScore);
      console.log(updatedScore);
      
    }else{
      changeQuestion()
    }
  }
  
  const btn = document.getElementsByTagName("button");
  if (result) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="p-6 bg-white shadow-lg rounded-lg text-center">
          <h2 className="text-2xl font-bold text-gray-800">
            Your Score: {score} / {questions.length}
            <br />
            {emoji}
          </h2>
          <button
           onClick={ ()=>{
            setScore(0)
            setCurrentQuestion(0)
            setResult(false)
            console.log(emoji);
            
           }}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
          >
            Retry
            </button>
            </div>
            </div>

    )
    
  }else{
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">{questions[currentQuestion].question}</h2>

          {questions[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              className="w-full px-4 py-2 m-2 text-gray-700 bg-gray-200 rounded hover:bg-blue-500 hover:text-white transition"
              value={questions.correctAnswerIndex}
              onClick={()=>checkAnswer(option)}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    );

  }
 

 
}

export default Quiz;
