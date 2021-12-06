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

function filterQuestionsIndex(e) {

    if (e.target.matches('input')) {
        let questions = Array.from(document.getElementsByClassName('index__question'));

        questions.forEach(el => el.classList.remove('hide'));

        switch(e.target.value){
            case 'marked':
                questions.filter(el => el.dataset.marked !== 'true').forEach(el => el.classList.add('hide'));
                break;
            case 'unanswered':
                questions.filter(el => el.dataset.answered === 'true').forEach(el => el.classList.add('hide'));
                break;
        }
    }
}

function renderIndex() {
    let newDivFilter = document.createElement('div');
    newDivFilter.classList.add('index-filter');
    newDivFilter.addEventListener('click',filterQuestionsIndex);
    newDivFilter.innerHTML = `
    <label for="filterAll">
        <input type="radio" name="filter" id="filterAll" value="all" checked></input>
        All
    </label>
    <label for="filterMarked">
        <input type="radio" name="filter" id="filterMarked" value="marked"></input>
        Marked
    </label>
    <label for="filterUnanswered">
        <input type="radio" name="filter" id="filterUnanswered" value="unanswered"></input>
        Unanswered
    </label>
    `;
    quiz.elements.index.appendChild(newDivFilter);

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

    if(quizQuestion.answered){
        questionEl.classList.add('index__question--answered');
        questionEl.setAttribute('data-answered',true);
    } else {
        questionEl.classList.remove('index__question--answered');
        questionEl.setAttribute('data-answered',false);
    }

    if(quizQuestion.marked){
        questionEl.classList.add('index__question--marked');
        questionEl.setAttribute('data-marked',true);
    } else { 
        questionEl.classList.remove('index__question--marked');
        questionEl.setAttribute('data-marked',false);
    }

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
    if(quizQuestion.marked){
        questionEl.classList.add('index__question--marked');
        questionEl.setAttribute('data-marked',true);
    } else { 
        questionEl.classList.remove('index__question--marked');
        questionEl.setAttribute('data-marked',false);
    }
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