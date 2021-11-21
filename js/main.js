let quiz;

const controlElements = {
    showIndex: document.querySelector('.showIndex'),
    quiz10: document.querySelector('.quiz10'),
    quizSimulation: document.querySelector('.quizSimulation'),
    quizAll: document.querySelector('.quizAll'),
    quizPrevious: document.querySelector('.quizPrevious'),
    endQuiz: document.querySelector('.endQuiz')
}
setControls(false); //Sets the initial state of the controls

controlElements.showIndex.addEventListener('click', toggleIndex);
controlElements.quiz10.addEventListener('click', launchQuiz10);
controlElements.quizSimulation.addEventListener('click', launchQuizSimulation);
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

function launchQuizSimulation() {
    /*
Information Security Governance (25 preguntas)
Information Security Program Development and Management (70 preguntas)
Information Risk Management (30 preguntas)
Information Security Incident Management (25 preguntas)
*/
    let questions = mergeArrays(
        getRandomQuestionsDomain(dataDomains[0].default, dataDomains[0].title),
        getRandomQuestionsDomain(dataDomains[1].default, dataDomains[1].title),
        getRandomQuestionsDomain(dataDomains[2].default, dataDomains[2].title),
        getRandomQuestionsDomain(dataDomains[3].default, dataDomains[3].title)
    );
    shuffleArray(questions);
    launchQuiz(questions);
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
    updateAnswersClasses();
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

    clearElementChildren(quiz.elements.options);
}

function renderQuestion(quizQuestion = quiz.getCurrentQuestion()) {
    //Gets de contents for the quiz question
    let dataQuestion = getDataQuestion(quizQuestion.id);

    quiz.elements.question.textContent = dataQuestion.question;
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
            newDiv.innerHTML = `<p class="quiz__explanation">${dataQuestion.explanation}</p>
            <p class="quiz__reference">${dataQuestion.domain}<br/>${dataQuestion.source}</p>`;
            newLi.appendChild(newDiv);
        }
        quiz.elements.options.appendChild(newLi);
    });
}


function updateAnswersClasses() {
    let quizQuestion = quiz.getCurrentQuestion();

    let correctEl = document.querySelector(`[data-id="${quizQuestion.correctId}"]`);
    
    //correct class cleanup
    correctEl.classList.remove('quiz__option--right');

    //selection classes cleanup
    Array.from(quiz.elements.options.children).forEach(el => {
        el.classList.remove('quiz__option--selected');
        el.classList.remove('quiz__option--wrong');
        el.classList.remove('quiz__option--answered');
    });
    

    if (quizQuestion.selected) {
        let selectedEl = document.querySelector(`[data-id="${quizQuestion.selectedId}"]`);

        if (quizQuestion.answered) { //answered classes setup
            if (quiz.showResults) {
                correctEl.classList.add('quiz__option--right');
                if (quizQuestion.result == 'wrong') {
                    selectedEl.classList.add('quiz__option--wrong');
                }
            } else {
                selectedEl.classList.add('quiz__option--answered');
            }
        } else { //select class setup (selected but not yet answered)
            selectedEl.classList.add('quiz__option--selected');
        }
    }
}

function updateInterface(quizQuestion = quiz.getCurrentQuestion()) {

    renderTotals();
    renderMarked();

    updateAnswersClasses();
    updateAnsweredClassesIndex(quizQuestion.id);

    if (quizQuestion.answered) {
        disableAnswers();
        setAnswerButton(false);
        setClearButton(true);
        enableNavigation();
    } else if (quizQuestion.selected) {
        disableAnswers();
        setAnswerButton(true);
        setClearButton(true);
        disableNavigation();
    } else { //new, viewed or cleared question
        enableAnswers();
        setAnswerButton(false);
        setClearButton(false);
        enableNavigation();
    }
}

function setAnswerButton(enable) {
    quiz.elements.answer.disabled = !enable;
}

function setClearButton(enable) {
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
    controlElements.quizSimulation.disabled = quizOn;
    controlElements.quizAll.disabled = quizOn;
    controlElements.quizPrevious.disabled = quizOn ? true : !Quiz.checkForUnfinishedQuiz();
    controlElements.endQuiz.disabled = !quizOn;
    controlElements.showIndex.disabled = !quizOn;
    if (!quizOn) controlElements.showIndex.textContent = 'Show index'
}

function selectAnswer(e) {

    if (e.target.matches('.quiz__option')) {
        quiz.getCurrentQuestion().setSelected(e.target.getAttribute('data-id'));

        updateInterface();

        quiz.save();
    }
}

function clearAnswers() {
    quiz.getCurrentQuestion().clearSelected();

    quiz.getCurrentQuestion().uncheckAnswer();

    updateInterface();

    quiz.save();
}


function checkAnswer(e) {

    quiz.getCurrentQuestion().checkAnswer();

    updateInterface();

    quiz.save();
}

