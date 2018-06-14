(function() {
    const myQuestions = [

   {
      question: "Frage 1: Wer war Hans Talhoffer?",
      answers: {
        a: "Ein Fechtmeister",
        b: "Ein Halsabschneider",
        c: "Ein König"
      },
      correctAnswer: "a"
    },
  {
      question: "Frage 2: Was ist hier auf dem Bild zu sehen?",
      answers: {
        a: "Arnold Schwarznegger",
        b: "Eine fliegende Schriftrolle",
        c: "Ein betender Fechter"
      },
      correctAnswer: "c"
    },
  {
      question: "Frage 3: Was ist das für eine Art von Fechten?",
      answers: {
        a: "Ein Fechttanz",
        b: "Bloßfechten zu Fuß mit dem langen Schwert",
        c: "Ein Übungskampf"
      },
      correctAnswer: "b"
    },
    {
      question: "Frage 4: Um welches Schild handelt es sich hier auf dem Bild?",
      answers: {
        a: "Stechschild",
        b: "Ritterschild",
        c: "Kampfschild"
      },
      correctAnswer: "a"
    },
    {
      question: "Frage 5: Welche Szenenfolge ist hier erkennbar?",
      answers: {
        a: "Engagieren eines Fechtmeisters",
        b: "Begrüßung eines Fechtsmeisters",
        c: "Unterhaltung der Fechtmeister"
      },
      correctAnswer: "a"

    },
    {
      question: "Frage 6: Was kann man auf diesem Bild erkennen?",
      answers: {
        a: "Vorbereitung eines Fechtkampfes ",
        b: "wegtragen eines Schildes ",
        c: "Tanz der Fechter",
        d: "Kampffechten nach fränkischem Recht mit Stechschild und Kolben"
      },
      correctAnswer: "d"
    },
	{
      question: "Frage 7: Um welche Art von Fechten handelt es sich?",
      answers: {
        a: "Fecht-beten",
        b: "Kampffechten zu Fuß",
        c: "Ritterfechten"
      },
      correctAnswer: "b"

    },
	{
      question: "Frage 8: Um welche Art von Kampffechten handelt es sich hierbei?",
      answers: {
        a: "Vorwärtsfechten",
        b: "Sprungfechten",
        c: "Kampffechten zu Fuß in voller Rüstung"
      },
      correctAnswer: "c"

    },
	{
      question: "Frage 9: Welche Waffe wird bei diesem Kampffechten zu Fuß benutzt?",
      answers: {
        a: "Luzerner Hammer ",
        b: "Fecht-Schwert",
        c: "Speer"
      },
      correctAnswer: "a"

    },
	{
      question: "Frage 10: Welche Techniken werden hier dargestellt?",
      answers: {
        a: "Kampf mit einem Kurzschwert",
        b: "Kampf mit Dolch und Ringkampf",
        c: "Angriffe unterhalb der Gürtellinie"
      },
      correctAnswer: "b"

    },
	{
      question: "Frage 11: Um welche Kampfkunst handelt es sich?",
      answers: {
        a: "Straßenkampf",
        b: "Kick-Boxen",
        c: "Ringkunst"
      },
      correctAnswer: "c"

    },
	{
      question: "Frage 12: Was hat er an?",
      answers: {
        a: "Fechtanzug mit Schlauch",
        b: "Eine mittelalterliche Rüstung",
        c: "Einen Tauscheranzug"
      },
      correctAnswer: "c"

    },
	{
      question: "Frage 13: Welche Technik wird hier gelehrt?",
      answers: {
        a: "Entwaffnen eines Gegners",
        b: "Schere, Stein, Papier",
        c: "Faustkampf"
      },
      correctAnswer: "a"

    },
	{
      question: "Frage 14: Was ist das?",
      answers: {
        a: "Leiter",
        b: "Seil",
        c: "Steigzeug"
      },
      correctAnswer: "c"

    },
	{
      question: "Frage 15: Welche Szene wird hier dargestellt",
      answers: {
        a: "Stierkampf",
        b: "Knappentraining",
        c: "Testen der Schilde",
        d: "Kampf um Gerechtigkeit"
      },
      correctAnswer: "d"

    },

	{
      question: "Frage 16: Welche Technik wird hier gelehrt?",
      answers: {
        a: "Ausstechen der Augen",
        b: "Parieren mit Dolch",
        c: "Schleifen eines neuen Dolches"
      },
      correctAnswer: "b"

    },
    {
      question: "Frage 17: Worum handelt es sich hierbei?",
      answers: {
        a: "Schutzschild",
        b: "Waffenhalter",
        c: "Sturmleiter",
        d: "Wäscheständer"
      },
      correctAnswer: "c"

    },
    {
      question: "Frage 18: Was wird hier dargestellt?",
      answers: {
        a: "Ritterrüstung",
        b: "Reithilfe",
        c: "Belagerungswaffen",
        d: "Mittelalterliche Tauchausrüstung"
      },
      correctAnswer: "d"

    },
    {
      question: "Frage 19: Um was für ein Gerät handelt es sich hierbei?",
      answers: {
        a: "Hometrainer",
        b: "Mittelalterlicher Mehr-Personen-Aufzug",
        c: "Lastkran",
        d: "Kurbelbügel zum erklimmen von Mauern"
      },
      correctAnswer: "d"

    },
	{
      question: "Frage 20: Aus welchem Jahr stammt Hans Talhoffers Fechtbuch?",
      answers: {
        a: "ca. 1440",
        b: "ca. 1777",
        c: "ca. 1600",
        d: "ca. 1350"
      },
      correctAnswer: "a"

    }
  ];


  function buildQuiz() {
    // we'll need a place to store the HTML output
    const output = [];


    myQuestions.forEach((currentQuestion, questionNumber) => {
      // we'll want to store the list of answer choices
      const answers = [];
      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<label>

             <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
           </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="slide">
           <div class="question"> ${currentQuestion.question} </div>
           <div class="answers"> ${answers.join("")} </div>
         </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        answerContainers[questionNumber].style.color = "lightgreen";
      } else {
        // if answer is wrong or blank
        // color the answers red
        answerContainers[questionNumber].style.color = "red";
      }
    });

    // show number of correct answers out of total
    if (numCorrect == 0)   resultsContainer.innerHTML = `${numCorrect} von  ${myQuestions.length} Fragen richtig beantwortet. Herzlichen Glückwunsch!<br/> Du hast nicht nur das Duell verloren, sondern
        auch noch deinen Kopf. Vielleicht klappt’s ja im nächsten Leben.`;
    if (numCorrect >= 1 && numCorrect <= 3)   resultsContainer.innerHTML = `${numCorrect} von  ${myQuestions.length} Fragen richtig beantwortet.<br/> Du wurdest entehrt und entmannt, aber immerhin kommst du noch mit
        deinem Leben davon.`;
    if (numCorrect >= 4 && numCorrect <= 7)   resultsContainer.innerHTML = `${numCorrect} von  ${myQuestions.length} Fragen richtig beantwortet.<br/> Du erleidest etliche Verletzungen und hast den Kampf eindeutig
        verloren.`;
    if (numCorrect >= 8 && numCorrect <= 11)   resultsContainer.innerHTML = `${numCorrect} von ${myQuestions.length} Fragen richtig beantwortet.<br/> Das Duell endet in einem Unentschieden und du hast einen
        erheblichen Schaden erlitten. Das kannst du besser!`;
    if (numCorrect >= 12 && numCorrect <= 15)   resultsContainer.innerHTML = `${numCorrect} von ${myQuestions.length} Fragen richtig beantwortet.<br/> Du hast das Duell zwar gewonnen, jedoch bist du deinem Tod knapp
        entwischt. Du musst dich mit dem Titel des Bronzenen Ritters zufriedengeben.`;
    if (numCorrect >= 16 && numCorrect <= 19)   resultsContainer.innerHTML = `${numCorrect} von  ${myQuestions.length} Fragen richtig beantwortet.<br/> Du hast deinen Gegner kampfunfähig gemacht und somit das Duell
        gewonnen. Da du ihn aber am Leben gelassen hast, bleibt dir die volle Punktzahl
        verwehrt.`;
    if (numCorrect == 20)   resultsContainer.innerHTML = `${numCorrect} von  ${myQuestions.length} Fragen richtig beantwortet. Volltreffer!<br/> Du hast deinen Gegner erfolgreich geköpft und somit das
        Duell gewonnen.Du hast dir den Rang des Goldenen Ritters erkämpft und verdient.
        Talhoffer wäre stolz auf dich.`;
  }
document.getElementById("ItemPreview").src = "bild1.png";

  function showSlide(n) {
    slides[currentSlide].classList.remove("active-slide");
    slides[n].classList.add("active-slide");
    currentSlide = n;


    if (currentSlide === 0) {
      previousButton.style.display = "none";
    } else {
      previousButton.style.display = "inline-block";
    }

    if (currentSlide === slides.length - 1) {
      nextButton.style.display = "none";
      submitButton.style.display = "inline-block";
      reButton.style.display = "inline-block";
    } else {
      nextButton.style.display = "inline-block";
      submitButton.style.display = "none";
      reButton.style.display = "none";
    }
  }

  function showNextSlide() {
    showSlide(currentSlide + 1);


  }
var imgs = ["bild1.png",
            "betenderfechter.png",
            "bild3.png",
            "stechschild.png",
            "fechtmeister.png",
            "kampffechten.png",
            "betenderritter.png",
            "kampfzufuss.png",
            "hammer.png",
            "Dolch.png",
            "ringkampf.png",
            "taucheranzug.png",
            "entwaffnen.png",
            "steigzeug.png",
            "kampfumgerechtigkeit.png",
            "parierenmitdolch.png",
            "sturmleiter.png",
            "tauchhilfe.png",
            "kurbel.png",
            "cover.png",
            ];

function showNextImage(){
document.getElementById("ItemPreview").src = imgs[currentSlide];
}
function showPrevImage(){
document.getElementById("ItemPreview").src = imgs[currentSlide];

}


  function showPreviousSlide() {
    showSlide(currentSlide - 1);
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");
  const reButton = document.getElementById("re");

  // display quiz right away
  buildQuiz();

  const previousButton = document.getElementById("previous");
  const nextButton = document.getElementById("next");
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  showSlide(0);

  // on submit, show results
  submitButton.addEventListener("click", showResults);
  previousButton.addEventListener("click", showPreviousSlide);
  previousButton.addEventListener("click", showPrevImage);
  nextButton.addEventListener("click", showNextSlide);
  nextButton.addEventListener("click", showNextImage);
})();

