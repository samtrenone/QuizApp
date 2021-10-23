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

    if (number >= dataQuestions.length) return dataQuestions;

    let result = [...dataQuestions];
    shuffleArray(result);
    return result.slice(0, number);
}