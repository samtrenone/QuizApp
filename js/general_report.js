(function renderGeneralReport(){
    let newDivTotals = document.createElement('div');
    newDivTotals.classList.add('general__report-totals');
    newDivTotals.innerHTML = `
    <div class="general__report-results">
    <p class="general__report-answered">Answered: ${getNumberQuestionsAnswered()} of ${getNumberQuestions()}</p>
    <p class="general__report-right">Right: ${getNumberQuestionsRight()} / ${getPercentage(getNumberQuestionsRight(),getNumberQuestions())}%</p>
    <p class="general__report-wrong">Wrong: ${getNumberQuestionsWrong()} / ${getPercentage(getNumberQuestionsWrong(),getNumberQuestions())}%</p>
    `;
    // <br/>
    // <p class="general__report-answered">${dataDomains[0].title}</p>
    // <p>Answered: ${quiz.getTotalAnsweredByDomain(0)} of ${quiz.getTotalQuestionsByDomain(0)}</p>
    // <p class="general__report-right">Right: ${quiz.getTotalRightByDomain(0)} / ${quiz.getPercentageRightByDomain(0)}%</p>
    // <p class="general__report-wrong">Wrong: ${quiz.getTotalWrongByDomain(0)} / ${quiz.getPercentageWrongByDomain(0)}%</p>
    // <br/>
    // <p class="general__report-answered">${dataDomains[1].title}</p>
    // <p>Answered: ${quiz.getTotalAnsweredByDomain(1)} of ${quiz.getTotalQuestionsByDomain(1)}</p>
    // <p class="general__report-right">Right: ${quiz.getTotalRightByDomain(1)} / ${quiz.getPercentageRightByDomain(1)}%</p>
    // <p class="general__report-wrong">Wrong: ${quiz.getTotalWrongByDomain(1)} / ${quiz.getPercentageWrongByDomain(1)}%</p>
    // <br/>
    // <p class="general__report-answered">${dataDomains[2].title}</p>
    // <p>Answered: ${quiz.getTotalAnsweredByDomain(2)} of ${quiz.getTotalQuestionsByDomain(2)}</p>
    // <p class="general__report-right">Right: ${quiz.getTotalRightByDomain(2)} / ${quiz.getPercentageRightByDomain(2)}%</p>
    // <p class="general__report-wrong">Wrong: ${quiz.getTotalWrongByDomain(2)} / ${quiz.getPercentageWrongByDomain(2)}%</p>
    // <br/>
    // <p class="general__report-answered">${dataDomains[0].title}</p>
    // <p>Answered: ${quiz.getTotalAnsweredByDomain(3)} of ${quiz.getTotalQuestionsByDomain(3)}</p>
    // <p class="general__report-right">Right: ${quiz.getTotalRightByDomain(3)} / ${quiz.getPercentageRightByDomain(3)}%</p>
    // <p class="general__report-wrong">Wrong: ${quiz.getTotalWrongByDomain(3)} / ${quiz.getPercentageWrongByDomain(3)}%</p>
    // </div>
    // `;

    document.querySelector('.quiz').appendChild(newDivTotals);
})();