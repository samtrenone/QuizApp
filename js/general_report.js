(function renderGeneralReport(){
    let newDivTotals = document.createElement('div');
    newDivTotals.classList.add('general__report-totals');
    newDivTotals.innerHTML = `
    <div class="general__report-results">
    <p class="general__report-answered">Answered: ${getNumberQuestionsAnswered()} of ${getNumberQuestions()}</p>
    <p class="general__report-right">Right: ${getNumberQuestionsRight()} / ${getPercentage(getNumberQuestionsRight(),getNumberQuestions())}%</p>
    <p class="general__report-wrong">Wrong: ${getNumberQuestionsWrong()} / ${getPercentage(getNumberQuestionsWrong(),getNumberQuestions())}%</p>
    <br/>
    <p class="general__report-answered">${dataSources[0].title}</p>
    <p>Answered: ${getNumberQuestionsBySourceAnswered(0)} of ${getNumberQuestionsBySource(0)}</p>
    <p class="general__report-right">Right: ${getNumberQuestionsBySourceRight(0)} / ${getPercentage(getNumberQuestionsBySourceRight(0),getNumberQuestionsBySource(0))}%</p>
    <p class="general__report-wrong">Wrong: ${getNumberQuestionsBySourceWrong(0)} / ${getPercentage(getNumberQuestionsBySourceWrong(0),getNumberQuestionsBySource(0))}%</p>
    <br/>
    <p class="general__report-answered">${dataSources[1].title}</p>
    <p>Answered: ${getNumberQuestionsBySourceAnswered(1)} of ${getNumberQuestionsBySource(1)}</p>
    <p class="general__report-right">Right: ${getNumberQuestionsBySourceRight(1)} / ${getPercentage(getNumberQuestionsBySourceRight(1),getNumberQuestionsBySource(1))}%</p>
    <p class="general__report-wrong">Wrong: ${getNumberQuestionsBySourceWrong(1)} / ${getPercentage(getNumberQuestionsBySourceWrong(1),getNumberQuestionsBySource(1))}%</p>
    <br/>
    <p class="general__report-answered">${dataDomains[0].title}</p>
    <p>Answered: ${getNumberQuestionsByDomainAnswered(0)} of ${getNumberQuestionsByDomain(0)}</p>
    <p class="general__report-right">Right: ${getNumberQuestionsByDomainRight(0)} / ${getPercentage(getNumberQuestionsByDomainRight(0),getNumberQuestionsByDomain(0))}%</p>
    <p class="general__report-wrong">Wrong: ${getNumberQuestionsByDomainWrong(0)} / ${getPercentage(getNumberQuestionsByDomainWrong(0),getNumberQuestionsByDomain(0))}%</p>
    <br/>
    <p class="general__report-answered">${dataDomains[1].title}</p>
    <p>Answered: ${getNumberQuestionsByDomainAnswered(1)} of ${getNumberQuestionsByDomain(1)}</p>
    <p class="general__report-right">Right: ${getNumberQuestionsByDomainRight(1)} / ${getPercentage(getNumberQuestionsByDomainRight(1),getNumberQuestionsByDomain(1))}%</p>
    <p class="general__report-wrong">Wrong: ${getNumberQuestionsByDomainWrong(1)} / ${getPercentage(getNumberQuestionsByDomainWrong(1),getNumberQuestionsByDomain(1))}%</p>
    <br/>
    <p class="general__report-answered">${dataDomains[2].title}</p>
    <p>Answered: ${getNumberQuestionsByDomainAnswered(2)} of ${getNumberQuestionsByDomain(2)}</p>
    <p class="general__report-right">Right: ${getNumberQuestionsByDomainRight(2)} / ${getPercentage(getNumberQuestionsByDomainRight(2),getNumberQuestionsByDomain(2))}%</p>
    <p class="general__report-wrong">Wrong: ${getNumberQuestionsByDomainWrong(2)} / ${getPercentage(getNumberQuestionsByDomainWrong(2),getNumberQuestionsByDomain(2))}%</p>
    <br/>
    <p class="general__report-answered">${dataDomains[3].title}</p>
    <p>Answered: ${getNumberQuestionsByDomainAnswered(3)} of ${getNumberQuestionsByDomain(3)}</p>
    <p class="general__report-right">Right: ${getNumberQuestionsByDomainRight(3)} / ${getPercentage(getNumberQuestionsByDomainRight(3),getNumberQuestionsByDomain(3))}%</p>
    <p class="general__report-wrong">Wrong: ${getNumberQuestionsByDomainWrong(3)} / ${getPercentage(getNumberQuestionsByDomainWrong(3),getNumberQuestionsByDomain(3))}%</p>
    
    
    </div>
    `;

    document.querySelector('.quiz').appendChild(newDivTotals);
})();