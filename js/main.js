let quiz;

const controlElements = {
    showIndex: document.querySelector('.showIndex'),
    quiz10: document.querySelector('.quiz10'),
    quiz150: document.querySelector('.quiz150'),
    quizAll: document.querySelector('.quizAll'),
    quizPrevious: document.querySelector('.quizPrevious'),
    endQuiz: document.querySelector('.endQuiz')
}
setControls(false); //Sets the initial state of the controls

controlElements.showIndex.addEventListener('click', toggleIndex);
controlElements.quiz10.addEventListener('click', launchQuiz10);
controlElements.quiz150.addEventListener('click', launchQuiz150);
controlElements.quizAll.addEventListener('click', launchQuizAll);
controlElements.quizPrevious.addEventListener('click', launchQuizPrevious);
controlElements.endQuiz.addEventListener('click', endQuiz);

function endQuiz() {
    quiz.end();
    setControls(false);
    renderQuizReport();
}

function launchQuiz10() {
    launchQuiz(getRandomQuestions(10));
}

function launchQuiz150() {
    launchQuiz(getRandomQuestions(150));
}

function launchQuizAll() {
    launchQuiz(getRandomQuestions());
}

function launchQuizPrevious() {
    launchQuiz([]); //Without parameters it launches a previously stored quiz
}

function launchQuiz(dataQuestions) {
    setControls(true);
    quiz = new Quiz(dataQuestions);
    initIndex();
    launchCurrentQuestion();
}


function markQuestion(e) {
    quiz.getCurrentQuestion().marked = e.target.checked;
    renderMarked();
}

function nextQuestion() {
    if (!quiz.isLastQuestion()) {
        quiz.moveNext();
        updateIndexCurrent();
        launchCurrentQuestion();
    }
}

function prevQuestion() {
    if (!quiz.isFirstQuestion()) {
        quiz.movePrev();
        updateIndexCurrent();
        launchCurrentQuestion();
    }
}

function showResults(e) {
    quiz.showResults = e.target.checked;
    renderTotals();
    updateAnsweredClasses();
    updateAnsweredClassesIndexAll();
    quiz.save();
}

function launchCurrentQuestion() {
    clearQuestion();
    renderQuestion();
    updateInterface();
}



function clearQuestion() {
    quiz.elements.question.textContent = '';
    quiz.elements.domain.textContent = '';
    quiz.elements.source.textContent = '';

    clearElementChildren(quiz.elements.options);
}

function renderQuestion(quizQuestion = quiz.getCurrentQuestion()) {
    //Gets de contents for the quiz question
    let dataQuestion = getDataQuestion(quizQuestion.id);

    quiz.elements.question.textContent = dataQuestion.question;
    quiz.elements.domain.textContent = dataQuestion.domain;
    quiz.elements.source.textContent = dataQuestion.source;
    let newLi;
    quizQuestion.answers.forEach(el => {
        let answer = getDataQuestionAnswer(dataQuestion, el.id);
        newLi = document.createElement('li');
        newLi.classList.add('quiz__option');
        newLi.setAttribute('data-id', el.id);
        newLi.textContent = answer.answer;

        if (answer.correct) {
            let newDiv = document.createElement('div');
            newDiv.classList.add('quiz__explanation');
            newDiv.innerHTML = `<p>${dataQuestion.explanation}</p>`;
            newLi.appendChild(newDiv);
        }
        quiz.elements.options.appendChild(newLi);
    });
}


function updateAnsweredClasses() {
    let quizQuestion = quiz.getCurrentQuestion();
    if (!quizQuestion.answered) return;

    let correctEl = document.querySelector(`[data-id="${quizQuestion.correctId}"]`);
    let selectedEl = document.querySelector(`[data-id="${quizQuestion.selectedId}"]`);

    selectedEl.classList.remove('quiz__option--selected');
    correctEl.classList.remove('quiz__option--right');
    selectedEl.classList.remove('quiz__option--wrong');
    selectedEl.classList.remove('quiz__option--answered');

    if (quiz.showResults) {
        correctEl.classList.add('quiz__option--right');
        if (quizQuestion.result == 'wrong') {
            selectedEl.classList.add('quiz__option--wrong');
        }
    } else {
        selectedEl.classList.add('quiz__option--answered');
    }
}

function updateInterface(quizQuestion = quiz.getCurrentQuestion()) {

    renderTotals();
    renderMarked();

    if (quizQuestion.answered) {
        updateAnsweredClasses();
        updateAnsweredClassesIndex(quizQuestion.id);

        disableAnswers();
        //paintAnswer();
        setAnswerClearButtons(false);
        enableNavigation();
    } else if (quizQuestion.selected) {
        disableAnswers();
        setAnswerClearButtons(true);
        disableNavigation();
    } else { //new or viewed question
        enableAnswers();
        setAnswerClearButtons(false);
        enableNavigation();
    }
}

function setAnswerClearButtons(enable) {
    quiz.elements.answer.disabled = !enable;
    quiz.elements.clear.disabled = !enable;
}

function enableAnswers() {
    quiz.elements.options.addEventListener('click', selectAnswer);
    quiz.elements.options.classList.remove('quiz__options--disabled');
}
function disableAnswers() {
    quiz.elements.options.removeEventListener('click', selectAnswer);
    quiz.elements.options.classList.add('quiz__options--disabled');
}

function enableNavigation() {
    quiz.elements.prev.disabled = quiz.isFirstQuestion();
    quiz.elements.next.disabled = quiz.isLastQuestion();

    enableIndexEvents();
}
function disableNavigation() {
    quiz.elements.prev.disabled = true;
    quiz.elements.next.disabled = true;

    disableIndexEvents();
}

function renderTotals() {
    quiz.elements.counter.textContent = `${quiz.getCurrentIndex() + 1} of ${quiz.getTotalQuestions()}`;
    quiz.elements.scoreAnswered.textContent = `Answered: ${quiz.getTotalAnswered()} of ${quiz.getTotalQuestions()}`;
    if (quiz.showResults) {
        quiz.elements.scoreRight.textContent = `Right: ${quiz.getTotalRight()} / ${quiz.getPercentageRight()}%`;
        quiz.elements.scoreWrong.textContent = `Wrong: ${quiz.getTotalWrong()} / ${quiz.getPercentageWrong()}%`;
    } else {
        quiz.elements.scoreRight.textContent = '';
        quiz.elements.scoreWrong.textContent = '';
    }
}

function renderMarked() {
    quiz.elements.mark.checked = quiz.getCurrentQuestion().marked;
    updateIndexMarked(quiz.getCurrentQuestion().id);
}

//enables/disables the controls to start and end a quiz
function setControls(quizOn) {
    controlElements.quiz10.disabled = quizOn;
    controlElements.quiz150.disabled = quizOn;
    controlElements.quizAll.disabled = quizOn;
    controlElements.quizPrevious.disabled = quizOn ? true : !Quiz.checkForUnfinishedQuiz();
    controlElements.endQuiz.disabled = !quizOn;
    controlElements.showIndex.disabled = !quizOn;
}

function selectAnswer(e) {

    if (e.target.matches('.quiz__option')) {
        quiz.getCurrentQuestion().setSelected(e.target.getAttribute('data-id'));

        e.target.classList.add('quiz__option--selected');

        updateInterface();

        quiz.save();
    }
}

function clearAnswers() {
    quiz.getCurrentQuestion().clearSelected();

    Array.from(quiz.elements.options.children).forEach(el => {
        el.classList.remove('quiz__option--selected');
    });

    updateInterface();

    quiz.save();
}


function checkAnswer(e) {

    quiz.getCurrentQuestion().checkAnswer();

    updateInterface();

    quiz.save();
}

