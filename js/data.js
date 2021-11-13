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

function initDataHistory(){
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
        let found = []; //to keep track of the already found questions

        storage.sort((a,b) => b.start - a.start); //sorts the historic data by date from newest to oldest

        //cycles every quiz recorded in the history
        storage.forEach(el => {
            //only interested in answered or marked questions
            el.questions.filter(el => el.result != 'unanswered' || el.marked).forEach(question => {
                //checks if its already being found
                if(!found.includes(question.id)){
                    dataQuestion = dataQuestions.find(el => el.id == question.id);
                    dataQuestion.history.result = question.result;
                    dataQuestion.history.marked = question.marked;
                    found.push(question.id);
                }
            });
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