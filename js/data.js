/*
Data structure

id
question
answers
    id
    answer
    correct -> bool
explanation
source
domain
history
    result -> 'right', 'wrong', 'unanswered'
    marked -> bool
*/

function initDataHistory(){ //to recall any historic data
    //sets the default value
    dataQuestions = dataQuestions.map(dataQuestion => {
        dataQuestion.history = {
            result : 'unanswered',
            marked : false
        };
        return dataQuestion;
    });

    const storage = JSON.parse(localStorage.getItem('quizGeneral'));
    if (storage) {
        storage.answeredHistory.forEach(el => {
            let question = dataQuestions.find(el2 => el2.id == el.id);
            question.history.result = el.result;
        });
        storage.markedHistory.forEach(el => {
            let question = dataQuestions.find(el2 => el2.id == el.id);
            question.history.marked = el.marked;
        });
    }
}

initDataHistory(); //to use the historic values in the initial report

function getDataQuestion(id) {
    return dataQuestions.find(el => el.id == id);
}
function getDataQuestionAnswer(dataQuestion, id) {
    return dataQuestion.answers.find(el => el.id == id);
}
function getDataQuestionRightAnswer(dataQuestion) {
    return dataQuestion.answers.find(el => el.correct);
}
function getRandomQuestions(number = dataQuestions.length) {

    initDataHistory(); //to update the historic values any time a new quiz begins

    let result = applyShowParams(dataQuestions);

    result = setUnansweredFirst(result);

    if (number >= result.length) return result;
    
    return result.slice(0, number);
}
function getNumberQuestions(){
    return dataQuestions.length;
}
function getNumberQuestionsAnswered(){
    return dataQuestions.filter(el => el.history.result!='unanswered').length;
}
function getNumberQuestionsRight(){
    return dataQuestions.filter(el => el.history.result=='right').length;
}
function getNumberQuestionsWrong(){
    return dataQuestions.filter(el => el.history.result=='wrong').length;
}
function getNumberQuestionsBySource(source){
    source = dataSources[source].title;
    return dataQuestions.filter(el => el.source.includes(source)).length;
}
function getNumberQuestionsBySourceAnswered(source){
    source = dataSources[source].title;
    return dataQuestions.filter(el => el.source.includes(source)).filter(el => el.history.result!='unanswered').length;
}
function getNumberQuestionsBySourceRight(source){
    source = dataSources[source].title;
    return dataQuestions.filter(el => el.source.includes(source)).filter(el => el.history.result=='right').length;
}
function getNumberQuestionsBySourceWrong(source){
    source = dataSources[source].title;
    return dataQuestions.filter(el => el.source.includes(source)).filter(el => el.history.result=='wrong').length;
}
function getNumberQuestionsByDomain(domain){
    domain = dataDomains[domain].title;
    return dataQuestions.filter(el => el.domain==domain).length;
}
function getNumberQuestionsByDomainAnswered(domain){
    domain = dataDomains[domain].title;
    return dataQuestions.filter(el => el.domain==domain).filter(el => el.history.result!='unanswered').length;
}
function getNumberQuestionsByDomainRight(domain){
    domain = dataDomains[domain].title;
    return dataQuestions.filter(el => el.domain==domain).filter(el => el.history.result=='right').length;
}
function getNumberQuestionsByDomainWrong(domain){
    domain = dataDomains[domain].title;
    return dataQuestions.filter(el => el.domain==domain).filter(el => el.history.result=='wrong').length;
}
function getRandomQuestionsDomain(domain) {

    initDataHistory(); //to update the historic values any time a new quiz begins

    let dataQuestionsLocal = applyShowParams(dataQuestions);

    dataQuestionsLocal = dataQuestionsLocal.filter(el => el.domain==dataDomains[domain].title);
    
    if (dataDomains[domain].default >= dataQuestionsLocal.length) return dataQuestionsLocal;
    
    return dataQuestionsLocal.slice(0, dataDomains[domain].default);
}

//reorders the array so the unanswered question go first
function setUnansweredFirst(questions){
    let result = [...questions];

    result.sort((a,b)=>{
        if (a.history.result === b.history.result)
            return 0; //doesnt change order
        else if(a.history.result === 'unanswered')
            return -1; //a is 'unanswered' so put it first
        else if(b.history.result === 'unanswered')
            return 1;  //b is 'unanswered' so put it first
    });
    return result;
}

function applyShowParams(questions){
    let result = [...questions];

    if(showParams.shuffle) shuffleArray(result);

    if(!showParams.wrong) result = result.filter(el2 => el2.history.result !== 'wrong');
    if(!showParams.right) result = result.filter(el2 => el2.history.result !== 'right');
    if(!showParams.unanswered) result = result.filter(el2 => el2.history.result !== 'unanswered');
    if(!showParams.unmarked) result = result.filter(el2 => el2.history.marked);
    
    showParams.sources.forEach((sourceParam,index) => {
        if(!sourceParam) result = result.filter(el2 => !el2.source.includes(dataSources[index].title));
    });
    
    showParams.domains.forEach((domainParam,index) => {
        if(!domainParam) result = result.filter(el2 => el2.domain != dataDomains[index].title);
    });

    return result;
}