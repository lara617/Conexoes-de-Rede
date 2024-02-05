const questions = [
    {
      question:
        "1ª Qual é a característica fundamental das conexões Peer-to-peer (P2P)?",
      answers: [
        "a) Envia mensagens para vários destinatários simultaneamente.",
        "b) Permite que um dispositivo se comunique diretamente com outro dispositivo.",
        "c) Conecta-se diretamente e entrega mensagens para vários dispositivos em paralelo.",
      ],
      correctAnswer: "b",
    },
    {
      question: "2ª O que é uma característica das redes Broadcast/multicast?",
      answers: [
        "a) Permite que um dispositivo se comunique diretamente com outro dispositivo.",
        "b) Envia mensagens para vários destinatários simultaneamente.",
        "c) Conecta-se diretamente e entrega mensagens para vários dispositivos em paralelo.",
      ],
      correctAnswer: "b",
    },
    {
      question: "3ª O que diferencia as redes Multipoint das outras conexões?",
      answers: [
        "a)  Envia mensagens para vários destinatários simultaneamente.",
        "b) Conecta-se diretamente e entrega mensagens para vários dispositivos em paralelo.",
        "c) Permite que um dispositivo se comunique diretamente com outro dispositivo.",
      ],
      correctAnswer: "c",
    },
    {
      question:
        "4ª O que caracteriza a banda larga em termos de redes de computadores?",
      answers: [
        "a)  Conexões de alta velocidade via rádio.",
        "b)  Redes privadas em residências e organizações.",
        "c) Comunicação por linhas telefônicas comuns.",
      ],
      correctAnswer: "b",
    },
    {
      question: "5ª Qual é a definição correta de Internet móvel?",
      answers: [
        "a) Serviços de Internet de alta velocidade instalados em locais específicos.",
        "b) Diversos tipos de serviços de Internet acessados por meio de uma conexão sem fio",
        "c) Conexões dedicadas entre dois dispositivos.",
      ],
      correctAnswer: "b",
    },
    {
      question: "6ª O que é uma Rede Privada Virtual (VPN)?",
      answers: [
        "a) Conexões dial-up que permitem comunicações TCP/IP.",
        "b) Rede de armazenamento que interliga vários dispositivos.",
        "c) Oferece suporte a comunicações protegidas pela infraestrutura de rede pública.",
      ],
      correctAnswer: "c",
    },
    {
      question: "7ª Como são realizadas as comunicações em conexões dial-up?",
      answers: [
        "a) Por meio de rádio de microondas.",
        "b)  Através de linhas telefônicas comuns.",
        "c) Utilizando roteadores de banda larga.",
      ],
      correctAnswer: "b",
    },
    {
      question: "8ª O que caracteriza uma Rede Local (LAN)?",
      answers: [
        "a) Conexões diretas entre dois dispositivos.",
        "b) Coleção de dispositivos localizados próximos uns aos outros.",
        "c) Conexões dedicadas entre dispositivos.",
      ],
      correctAnswer: "b",
    },
    {
      question: "9ª O que diferencia as Redes Diretas das redes Peer-to-peer?",
      answers: [
        "a) Contêm um maior número de dispositivos.",
        "b) Permitem comunicações TCP/IP através de linhas telefônicas.",
        "c) São conexões dedicadas entre dois dispositivos.",
      ],
      correctAnswer: "c",
    },
    {
      question: "10ª O que define uma Rede Metropolitana (MAN)?",
      answers: [
        "a) Conecta redes locais dentro de uma mesma cidade.",
        "b) Conecta redes de longa distância.",
        "c) Interliga computadores presentes em um mesmo espaço físico.",
      ],
      correctAnswer: "a",
    },
    {
      question: "11ª O que caracteriza uma Rede de Longa Distância (WAN)?",
      answers: [
        "a) Conecta redes locais dentro de uma mesma cidade.",
        "b)  Conecta redes de longa distância.",
        "c) Interliga computadores presentes em um mesmo espaço físico.",
      ],
      correctAnswer: "b",
    },
  ];
  let currentQuestionIndex = 0;
let score = 0;
let incorrectQuestions = [];
let restartButton = null;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  incorrectQuestions = [];
  showQuestion();
}

function showQuestion() {
  const questionContainer = document.getElementById("question-container");
  const optionsContainer = document.getElementById("options-container");
  const resultContainer = document.getElementById("result");
  const nextButton = document.getElementById("next-btn");

  if (currentQuestionIndex < questions.length) {
    const currentQuestionData = questions[currentQuestionIndex];
    questionContainer.textContent = currentQuestionData.question;

    optionsContainer.innerHTML = "";
    currentQuestionData.answers.forEach((option, index) => {
      const button = document.createElement("button");
      button.textContent = option;
      button.className = "option answer-btn";
      button.addEventListener("click", () => checkAnswer(index));
      optionsContainer.appendChild(button);
    });

    resultContainer.textContent = "";
    nextButton.style.display = "none";
  } else {
    showResult();
  }
}

function checkAnswer(selectedIndex) {
  const correctLabel = questions[currentQuestionIndex].correctAnswer;

  if (correctLabel === String.fromCharCode(97 + selectedIndex)) {
    score++;
  } else {
    incorrectQuestions.push(currentQuestionIndex);
  }

  currentQuestionIndex++;

  showQuestion();
}

function showResult() {
  const quizContainer = document.getElementById("quiz-container");
  const resultContainer = document.getElementById("result");
  const nextButton = document.getElementById("next-btn");

  resultContainer.textContent = `Você acertou ${score} de ${questions.length} perguntas.`;

  if (incorrectQuestions.length > 0) {
    resultContainer.innerHTML += "<br>Perguntas incorretas:";
    incorrectQuestions.forEach((index) => {
      resultContainer.innerHTML += `<br>${questions[index].question}`;
    });
  }

  if (!restartButton) {
    restartButton = document.createElement("button");
    restartButton.textContent = "Reiniciar Quiz";
    restartButton.className = "restart-btn";
    restartButton.addEventListener("click", () => {
      startQuiz();
    });
    quizContainer.appendChild(restartButton);
  }

  nextButton.style.display = "none";
}

document.addEventListener("DOMContentLoaded", startQuiz);
