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

    let result = [...dataQuestions];
    shuffleArray(result);

    if (number >= result.length) return result;
    
    return result.slice(0, number);
}
function getNumberQuestionsByDomain(domain){
    return dataQuestions.filter(el => el.domain==domain).length;
}
function getRandomQuestionsDomain(number, domain='') {

    initDataHistory();

    let dataQuestionsLocal = [...dataQuestions];

    if (domain != '') dataQuestionsLocal = dataQuestionsLocal.filter(el => el.domain==domain);
    
    shuffleArray(dataQuestionsLocal);

    if (number >= dataQuestionsLocal.length) return dataQuestionsLocal;
    
    return dataQuestionsLocal.slice(0, number);
}