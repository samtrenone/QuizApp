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

    initDataHistory();

    let result = applyShowParams(dataQuestions);

    result = setUnansweredFirst(result);

    if (number >= result.length) return result;
    
    return result.slice(0, number);
}
function getNumberQuestionsByDomain(domain){
    return dataQuestions.filter(el => el.domain==domain).length;
}
function getRandomQuestionsDomain(number, domain='') {

    initDataHistory();

    let dataQuestionsLocal = applyShowParams(dataQuestions);

    if (domain != '') dataQuestionsLocal = dataQuestionsLocal.filter(el => el.domain==domain);
    
    if (number >= dataQuestionsLocal.length) return dataQuestionsLocal;
    
    return dataQuestionsLocal.slice(0, number);
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
    let result = [...dataQuestions];

    if(showParams.shuffle) shuffleArray(result);
    
    showParams.sources.forEach((sourceParam,index) => {
        if(!sourceParam) result = result.filter(el2 => !el2.source.includes(dataSources[index].title));
    });
    
    showParams.domains.forEach((domainParam,index) => {
        if(!domainParam) result = result.filter(el2 => el2.domain != dataDomains[index].title);
    });

    return result;
}