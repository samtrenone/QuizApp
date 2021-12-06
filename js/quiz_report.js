function renderQuizReport(){
    let newDivTotals = document.createElement('div');
    newDivTotals.classList.add('quiz__report-totals');
    let quizReportContent = `<p>Total time: <span class="time"></span></p>
    <div class="quiz__report-results">
    <p>
        <span class="quiz__report-answered">Total answered: ${quiz.getTotalAnswered()} of ${quiz.getTotalQuestions()}</span>
        <span class="quiz__report-right">${quiz.getTotalRight()} / ${quiz.getPercentageRight()}%</span>
        <span class="quiz__report-wrong">${quiz.getTotalWrong()} / ${quiz.getPercentageWrong()}%</span>
    </p>
    <br/>`;

    for(let i=0 ; i<dataDomains.length ; i++){
        quizReportContent += `<p>
        <span class="quiz__report-answered">${dataDomains[i].title}: ${quiz.getTotalAnsweredByDomain(i)} of ${quiz.getTotalQuestionsByDomain(i)}</span>
        <span class="quiz__report-right">${quiz.getTotalRightByDomain(i)} / ${quiz.getPercentageRightByDomain(i)}%</span>
        <span class="quiz__report-wrong">${quiz.getTotalWrongByDomain(i)} / ${quiz.getPercentageWrongByDomain(i)}%</span>
    </p>`;
    }

    newDivTotals.innerHTML = quizReportContent;

    quiz.root.appendChild(newDivTotals);
    
    renderTimer(quiz.totalSeconds, newDivTotals.querySelector('.time'));
    renderQuizReportQuestions()
}

function filterQuestionsReport(e) {

    if (e.target.matches('input')) {
        let questions = Array.from(document.getElementsByClassName('quiz__report-question'));

        questions.forEach(el => el.classList.remove('hide'));

        switch(e.target.value){
            case 'marked':
                questions.filter(el => el.dataset.marked !== 'true').forEach(el => el.classList.add('hide'));
                break;
            case 'right':
                questions.filter(el => el.dataset.result !== 'right').forEach(el => el.classList.add('hide'));
                break;
            case 'wrong':
                questions.filter(el => el.dataset.result !== 'wrong').forEach(el => el.classList.add('hide'));
                break;
        }
    }
}

function renderQuizReportQuestions() {
    let newDivFilter = document.createElement('div');
    newDivFilter.classList.add('quiz__report-filter');
    newDivFilter.addEventListener('click',filterQuestionsReport);
    newDivFilter.innerHTML = `
    <label for="filterAll">
        <input type="radio" name="filter" id="filterAll" value="all" checked></input>
        All
    </label>
    <label for="filterMarked">
        <input type="radio" name="filter" id="filterMarked" value="marked"></input>
        Marked
    </label>
    <label for="filterWrong">
        <input type="radio" name="filter" id="filterWrong" value="wrong"></input>
        Wrong
    </label>
    <label for="filterRight">
        <input type="radio" name="filter" id="filterRight" value="right"></input>
        Right
    </label>
    `;

    let newDiv = document.createElement('div');
    newDiv.classList.add('quiz__report-index');
    
    let newUl = document.createElement('ul');
    quiz.questions.forEach((question,index) => {
        let dataQuestion = getDataQuestion(question.id);

        let newLi = document.createElement('li');
        newLi.classList.add('quiz__report-question');
        if (question.marked) {
            newLi.classList.add('quiz__report-question--marked');
            newLi.setAttribute('data-marked',true);
        }
        if (question.result == 'right') {
            newLi.classList.add('quiz__report-question--right');
            newLi.setAttribute('data-result','right');
        }
        if (question.result == 'wrong') {
            newLi.classList.add('quiz__report-question--wrong');
            newLi.setAttribute('data-result','wrong');
        }

        newLi.addEventListener('click', function(){
            this.querySelector('.quiz__report-panel').classList.toggle('quiz__report-panel--show');
        });

        let newUlAnswers = document.createElement('ul');
        dataQuestion.answers.forEach(answer => {
            let newLiAnswer = document.createElement('li');
            if(answer.correct){
                newLiAnswer.classList.add('quiz__report-answer--right');
            }else if(answer.id == question.selectedId && question.result == 'wrong'){
                newLiAnswer.classList.add('quiz__report-answer--wrong');
            }else{
                newLiAnswer.classList.add('quiz__report-answer');
            }
            newLiAnswer.textContent = answer.answer;
            newUlAnswers.appendChild(newLiAnswer)
        });

        newLi.innerHTML = `<i class="fa fa-bookmark mark"></i><p class="quiz__report-question-index">${index+1}</p>
        <p>${dataQuestion.question}</p>
        <div class="quiz__report-panel">
        ${newUlAnswers.outerHTML}
        <p class="quiz__report-explanation">${dataQuestion.explanation}</p>
        <p class="quiz__report-reference">${dataQuestion.domain}<br/>${dataQuestion.source}</p>
        </div>`;
        newUl.appendChild(newLi);
    });

    newDiv.appendChild(newDivFilter);
    newDiv.appendChild(newUl);
    quiz.root.appendChild(newDiv);
}