function toggleIndex() {
    quiz.elements.index.classList.toggle('index--show');
    quiz.elements.indexOverlay.classList.toggle('index-overlay--show');
    controlElements.showIndex.textContent = quiz.elements.index.classList.contains('index--show') ? 'Hide index' : 'Show index';
}

function initIndex(){
    renderIndex();
    updateAnsweredClassesIndexAll();
    updateIndexCurrent();
    enableIndexEvents();
}

function renderIndex() {
    newUl = document.createElement('ul');
    quiz.questions.forEach(question => {
        let dataQuestion = getDataQuestion(question.id);

        newLi = document.createElement('li');
        newLi.classList.add('index__question');
        newLi.setAttribute('data-index-id', question.id);
        newLi.innerHTML = `<i class="fa fa-bookmark mark"></i>${dataQuestion.question}`;
        newUl.appendChild(newLi);
    });
    quiz.elements.index.appendChild(newUl);
}

function updateAnsweredClassesIndexAll() {
    let questionEls = quiz.elements.index.querySelectorAll('.index__question');
    questionEls.forEach(questionEl => {
        updateAnsweredClassesIndex(questionEl.getAttribute('data-index-id'));
    });
}

function updateAnsweredClassesIndex(id) {
    let quizQuestion = quiz.getQuestion(id);
    let questionEl = quiz.elements.index.querySelector(`[data-index-id="${id}"]`);

    quizQuestion.answered ? questionEl.classList.add('index__question--answered') : questionEl.classList.remove('index__question--answered');
    quizQuestion.marked ? questionEl.classList.add('index__question--marked') : questionEl.classList.remove('index__question--marked');

    questionEl.classList.remove('index__question--right');
    questionEl.classList.remove('index__question--wrong');
    if (quiz.showResults) {
        if (quizQuestion.result == 'right') questionEl.classList.add('index__question--right');
        if (quizQuestion.result == 'wrong') questionEl.classList.add('index__question--wrong');
    }
}

function updateIndexMarked(id) {
    let quizQuestion = quiz.getQuestion(id);
    let questionEl = quiz.elements.index.querySelector(`[data-index-id="${id}"]`);
    quizQuestion.marked ? questionEl.classList.add('index__question--marked') : questionEl.classList.remove('index__question--marked');
}

function updateIndexCurrent() {
    let { id } = quiz.getCurrentQuestion();
    let currentQuestionEl = quiz.elements.index.querySelector(`[data-index-id="${id}"]`);

    let currentQuestionBeforeEl = quiz.elements.index.querySelector('.index__question--current');
    if (currentQuestionBeforeEl) currentQuestionBeforeEl.classList.remove('index__question--current');

    currentQuestionEl.classList.add('index__question--current');
    currentQuestionEl.scrollIntoView({ behavior: 'smooth', block: "nearest" });
}

function launchFromIndex(e) {

    if (e.target.matches('.index__question')) {
        quiz.moveToQuestion(e.target.getAttribute('data-index-id'));
        updateIndexCurrent();
        launchCurrentQuestion();
        toggleIndex();
    }
}

function enableIndexEvents() {
    quiz.elements.index.addEventListener('click', launchFromIndex);
    quiz.elements.index.querySelectorAll('.index__question').forEach(el => {
        el.classList.remove('index__question--disabled')
    });
}
function disableIndexEvents() {
    quiz.elements.index.removeEventListener('click', launchFromIndex);
    quiz.elements.index.querySelectorAll('.index__question').forEach(el => {
        el.classList.add('index__question--disabled')
    });
}