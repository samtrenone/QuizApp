function renderQuizReport(){
    let newDivTotals = document.createElement('div');
    newDivTotals.classList.add('quiz__report-totals');
    newDivTotals.innerHTML = `<p>Total time: <span class="time"></span></p>
    <div class="quiz__report-results">
    <p>
        <span class="quiz__report-answered">Total answered: ${quiz.getTotalAnswered()} of ${quiz.getTotalQuestions()}</span>
        <span class="quiz__report-right">Right: ${quiz.getTotalRight()} / ${quiz.getPercentageRight()}%</span>
        <span class="quiz__report-wrong">Wrong: ${quiz.getTotalWrong()} / ${quiz.getPercentageWrong()}%</span>
    </p>
    <br/>
    <p>
        <span class="quiz__report-answered">${dataDomains[0].title}: ${quiz.getTotalAnsweredByDomain(0)} of ${quiz.getTotalQuestionsByDomain(0)}</span>
        <span class="quiz__report-right">Right: ${quiz.getTotalRightByDomain(0)} / ${quiz.getPercentageRightByDomain(0)}%</span>
        <span class="quiz__report-wrong">Wrong: ${quiz.getTotalWrongByDomain(0)} / ${quiz.getPercentageWrongByDomain(0)}%</span>
    </p>
    <p>
        <span class="quiz__report-answered">${dataDomains[1].title}: ${quiz.getTotalAnsweredByDomain(1)} of ${quiz.getTotalQuestionsByDomain(1)}</span>
        <span class="quiz__report-right">Right: ${quiz.getTotalRightByDomain(1)} / ${quiz.getPercentageRightByDomain(1)}%</span>
        <span class="quiz__report-wrong">Wrong: ${quiz.getTotalWrongByDomain(1)} / ${quiz.getPercentageWrongByDomain(1)}%</span>
    </p>
    <p>
        <span class="quiz__report-answered">${dataDomains[2].title}: ${quiz.getTotalAnsweredByDomain(2)} of ${quiz.getTotalQuestionsByDomain(2)}</span>
        <span class="quiz__report-right">Right: ${quiz.getTotalRightByDomain(2)} / ${quiz.getPercentageRightByDomain(2)}%</span>
        <span class="quiz__report-wrong">Wrong: ${quiz.getTotalWrongByDomain(2)} / ${quiz.getPercentageWrongByDomain(2)}%</span>
    </p>
    <p>
        <span class="quiz__report-answered">${dataDomains[0].title}: ${quiz.getTotalAnsweredByDomain(3)} of ${quiz.getTotalQuestionsByDomain(3)}</span>
        <span class="quiz__report-right">Right: ${quiz.getTotalRightByDomain(3)} / ${quiz.getPercentageRightByDomain(3)}%</span>
        <span class="quiz__report-wrong">Wrong: ${quiz.getTotalWrongByDomain(3)} / ${quiz.getPercentageWrongByDomain(3)}%</span>
    </p>
    </div>
    <div class="quiz__report-results-graph">
        <div class="quiz__report-right-graph"></div><div class="quiz__report-wrong-graph"></div><div class="quiz__report-rest-graph"></div>
    </div>
    `;

    quiz.root.appendChild(newDivTotals);
    
    renderTimer(quiz.totalSeconds, newDivTotals.querySelector('.time'));
    renderQuizReportQuestions()
}

function filterQuestionsReport(e) {

    if (e.target.matches('label')) {
        let questions = document.getElementsByClassName('.quiz__report-question');
        Array.from(questions).forEach(el=>{
            el.classList.toggle('hide');
        });
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
        <input type="radio" name="filter" id="filterMarked" value="all"></input>
        Marked
    </label>
    <label for="filterWrong">
        <input type="radio" name="filter" id="filterWrong" value="all"></input>
        Wrong
    </label>
    <label for="filterRight">
        <input type="radio" name="filter" id="filterRight" value="all"></input>
        Right
    </label>
    `;

    let newDiv = document.createElement('div');
    newDiv.classList.add('quiz__report-index');
    
    let newUl = document.createElement('ul');
    quiz.questions.forEach(question => {
        let dataQuestion = getDataQuestion(question.id);

        newLi = document.createElement('li');
        newLi.classList.add('quiz__report-question');
        if (question.marked) newLi.classList.add('quiz__report-question--marked');
        if (question.result == 'right') newLi.classList.add('quiz__report-question--right');
        if (question.result == 'wrong') newLi.classList.add('quiz__report-question--wrong');

        newLi.addEventListener('click', function(){
            this.querySelector('.quiz__report-panel').classList.toggle('quiz__report-panel--show');
        });

        let newUlAnswers = document.createElement('ul');
        dataQuestion.answers.forEach( answer => {
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

        newLi.innerHTML = `<i class="fa fa-bookmark mark"></i><p>${dataQuestion.question}</p>
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