(function renderGeneralReport() {
  let newDivTotals = document.createElement("div");
  newDivTotals.classList.add("general__report-totals");
  let generalReportContent = `
    <div class="general__report-results">
    <p>
        <span class="general__report-answered">Total: ${getNumberQuestionsAnswered()} of ${getNumberQuestions()} / ${getPercentage(
    getNumberQuestionsAnswered(),
    getNumberQuestions()
  )}%</span>
        <span class="general__report-right">${getNumberQuestionsRight()} / ${getPercentage(
    getNumberQuestionsRight(),
    getNumberQuestionsAnswered()
  )}%</span>
        <span class="general__report-wrong">${getNumberQuestionsWrong()} / ${getPercentage(
    getNumberQuestionsWrong(),
    getNumberQuestionsAnswered()
  )}%</span>
    </p>
    <br/>`;

  for (let i = 0; i < dataSources.length; i++) {
    generalReportContent += `<p>
        <span class="general__report-answered">${
          dataSources[i].title
        }: ${getNumberQuestionsBySourceAnswered(
      0
    )} of ${getNumberQuestionsBySource(i)} / ${getPercentage(
      getNumberQuestionsBySourceAnswered(i),
      getNumberQuestionsBySource(i)
    )}%</span>
        <span class="general__report-right">${getNumberQuestionsBySourceRight(
          i
        )} / ${getPercentage(
      getNumberQuestionsBySourceRight(i),
      getNumberQuestionsBySourceAnswered(i)
    )}%</span>
        <span class="general__report-wrong">${getNumberQuestionsBySourceWrong(
          i
        )} / ${getPercentage(
      getNumberQuestionsBySourceWrong(i),
      getNumberQuestionsBySourceAnswered(i)
    )}%</span>
    </p>`;
  }

  generalReportContent += "<br/>";

  for (let i = 0; i < dataDomains.length; i++) {
    generalReportContent += `<p>
        <span class="general__report-answered">${
          dataDomains[i].title
        }: ${getNumberQuestionsByDomainAnswered(
      i
    )} of ${getNumberQuestionsByDomain(i)} / ${getPercentage(
      getNumberQuestionsByDomainAnswered(i),
      getNumberQuestionsByDomain(i)
    )}%</span>
        <span class="general__report-right">${getNumberQuestionsByDomainRight(
          i
        )} / ${getPercentage(
      getNumberQuestionsByDomainRight(i),
      getNumberQuestionsByDomainAnswered(i)
    )}%</span>
        <span class="general__report-wrong">${getNumberQuestionsByDomainWrong(
          i
        )} / ${getPercentage(
      getNumberQuestionsByDomainWrong(i),
      getNumberQuestionsByDomainAnswered(i)
    )}%</span>
    </p>`;
    for (let j = 0; j < dataSources.length; j++) {
      generalReportContent += `<p class="general__report--secondary">
            <span class="general__report-answered">${
              dataSources[j].title
            }: ${getNumberQuestionsByDomainSourceAnswered(
        i,
        j
      )} of ${getNumberQuestionsByDomainSource(i, j)} / ${getPercentage(
        getNumberQuestionsByDomainSourceAnswered(i, j),
        getNumberQuestionsByDomainSource(i, j)
      )}%</span>
            <span class="general__report-right">${getNumberQuestionsByDomainSourceRight(
              i,
              j
            )} / ${getPercentage(
        getNumberQuestionsByDomainSourceRight(i, j),
        getNumberQuestionsByDomainSourceAnswered(i, j)
      )}%</span>
            <span class="general__report-wrong">${getNumberQuestionsByDomainSourceWrong(
              i,
              j
            )} / ${getPercentage(
        getNumberQuestionsByDomainSourceWrong(i, j),
        getNumberQuestionsByDomainSourceAnswered(i, j)
      )}%</span>
        </p>`;
    }
  }

  newDivTotals.innerHTML = generalReportContent;
  document.querySelector(".quiz").appendChild(newDivTotals);
})();
