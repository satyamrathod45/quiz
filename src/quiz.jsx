import React, { useState } from 'react';

const questions = [
  {
    question: "What was the name of the first artificial satellite launched into space?",
    options: ["Sputnik 1", "Explorer 1", "Voyager 1", "Apollo 11"],
    correctAnswerIndex: 0
  },
  {
    question: "Who was the first person to walk on the Moon?",
    options: ["Buzz Aldrin", "Yuri Gagarin", "Neil Armstrong", "Michael Collins"],
    correctAnswerIndex: 2
  },
  {
    question: "Which planet is known as the 'Red Planet'?",
    options: ["Venus", "Mars", "Jupiter", "Saturn"],
    correctAnswerIndex: 1
  },
  {
    question: "What is the name of NASA’s most famous space telescope?",
    options: ["Kepler", "Spitzer", "Hubble", "James Webb"],
    correctAnswerIndex: 2
  },
  {
    question: "Which space agency successfully landed the Perseverance rover on Mars in 2021?",
    options: ["NASA", "ESA", "Roscosmos", "ISRO"],
    correctAnswerIndex: 0
  },
  {
    question: "What is the purpose of the International Space Station (ISS)?",
    options: [
      "Military surveillance",
      "Research and scientific studies",
      "Space tourism",
      "Mining in space"
    ],
    correctAnswerIndex: 1
  },
  {
    question: "Which spacecraft was the first to successfully land on Mars?",
    options: ["Viking 1", "Sojourner", "Opportunity", "Spirit"],
    correctAnswerIndex: 0
  },
  {
    question: "What type of rocket was used to launch the Apollo missions?",
    options: ["Falcon 9", "Saturn V", "Soyuz", "Atlas V"],
    correctAnswerIndex: 1
  },
  {
    question: "Which space agency launched the first reusable spacecraft?",
    options: ["NASA", "ISRO", "Roscosmos", "ESA"],
    correctAnswerIndex: 0
  },
  {
    question: "Which country was the first to send a human into space?",
    options: ["USA", "Russia", "China", "Japan"],
    correctAnswerIndex: 1
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
