const questions = [
    {
      question: "In the Philippines, who has the right to education?",
      answers: [
        { text: "Only wealthy families", correct: false },
        { text: "Only boys", correct: false },
        { text: "All citizens", correct: true },
        { text: "Only those in urban areas", correct: false }
      ]
    },
    {
      question: "What issue still affects girls' education in some areas?",
      answers: [
        { text: "Too many schools", correct: false },
        { text: "Early pregnancy", correct: true },
        { text: "Lack of interest", correct: false },
        { text: "Overpopulation", correct: false }
      ]
    },
    {
      question: "What year was the Beijing Platform for Action established?",
      answers: [
        { text: "1995", correct: true },
        { text: "1990", correct: false },
        { text: "2000", correct: false },
        { text: "2005", correct: false }
      ]
    }
  ];
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  const questionElement = document.getElementById('question');
  const answerButtonsElement = document.getElementById('answer-buttons');
  const nextButton = document.getElementById('next-button');
  const resultElement = document.getElementById('result');
  const scoreElement = document.getElementById('score');
  const retryButton = document.getElementById('retry-button');
  
  function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    resultElement.classList.add('hidden');
    nextButton.classList.remove('hidden');
    showQuestion();
  }
  
  function showQuestion() {
    resetState();
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;
    currentQuestion.answers.forEach(answer => {
      const button = document.createElement('button');
      button.innerText = answer.text;
      button.classList.add('btn');
      button.addEventListener('click', () => selectAnswer(answer));
      answerButtonsElement.appendChild(button);
    });
  }
  
  function resetState() {
    nextButton.classList.add('hidden');
    while (answerButtonsElement.firstChild) {
      answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
  }
  
  function selectAnswer(answer) {
    if (answer.correct) {
      score++;
    }
    nextButton.classList.remove('hidden');
  }
  
  nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      showQuestion();
    } else {
      showResult();
    }
  });
  
  function showResult() {
    questionElement.innerText = 'Quiz Completed!';
    answerButtonsElement.classList.add('hidden');
    nextButton.classList.add('hidden');
    resultElement.classList.remove('hidden');
    scoreElement.innerText = score;
  }
  
  retryButton.addEventListener('click', startQuiz);
  
  startQuiz();