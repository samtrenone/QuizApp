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
*/

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

    let result = [...dataQuestions];
    shuffleArray(result);

    if (number >= result.length) return result;
    
    return result.slice(0, number);
}
function getNumberQuestionsByDomain(domain){
    return dataQuestions.filter(el => el.domain==domain).length;
}
function getRandomQuestionsDomain(number, domain='') {

    let dataQuestionsLocal = [...dataQuestions];

    if (domain != '') dataQuestionsLocal = dataQuestionsLocal.filter(el => el.domain==domain);
    
    shuffleArray(dataQuestionsLocal);

    if (number >= dataQuestionsLocal.length) return dataQuestionsLocal;
    
    return dataQuestionsLocal.slice(0, number);
}