function renderQuizReport(){
    let newDivTotals = document.createElement('div');
    newDivTotals.classList.add('quiz__report-totals');
    newDivTotals.innerHTML = `<p>Total time: <span class="time"></span></p>
    <div class="quiz__report-results">
    <p class="quiz__report-answered">Answered: ${quiz.getTotalAnswered()} of ${quiz.getTotalQuestions()}</p>
    <p class="quiz__report-right">Right: ${quiz.getTotalRight()} / ${quiz.getPercentageRight()}%</p>
    <p class="quiz__report-wrong">Wrong: ${quiz.getTotalWrong()} / ${quiz.getPercentageWrong()}%</p>
    </div>
    <div class="quiz__report-results-graph">
        <div class="quiz__report-right-graph"></div><div class="quiz__report-wrong-graph"></div><div class="quiz__report-rest-graph"></div>
    </div>
    `;

    quiz.root.appendChild(newDivTotals);
    
    renderTimer(quiz.totalSeconds, newDivTotals.querySelector('.time'));
    renderQuizReportQuestions()
}

function renderQuizReportQuestions() {
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

    newDiv.appendChild(newUl);
    quiz.root.appendChild(newDiv);
}