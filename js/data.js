/*
Data structure

id
question
answers
    id
    answer
    correct -> bool
explanation
    text
    ref
    dom
*/

function getDataQuestion(id) {
    return dataQuestions.find(el => el.id == id);
}
function getDataQuestionAnswer(question, id) {
    return question.answers.find(el => el.id == id);
}
function getDataQuestionRightAnswer(question) {
    return question.answers.find(el => el.correct);
}
function getRandomQuestions(number = dataQuestions.length) {

    if (number >= dataQuestions.length) return dataQuestions;

    let result = [...dataQuestions];
    shuffleArray(result);
    return result.slice(0, number);
}