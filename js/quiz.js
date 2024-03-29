/*
questions
start
end
currentIndex
showResults
*/
class Quiz {
    constructor(dataQuestions = []) {
        this.showResults = false; // Shows the right or wrong results or just the selected answer

        this.questions = [];

        this.start = Date.now();
        this.totalSeconds = 0;
        this.timer = setInterval(() => {
            this.totalSeconds++;
            renderTimer(this.totalSeconds, this.elements.timer);
        }, 1000);
        //this.end

        this.currentIndex = 0;

        if (dataQuestions.length == 0) { // To load a previous unfinished quiz
            this.load();
        } else {
            dataQuestions.forEach(el => {
                let question = new Question();
                question.loadFromData(el);
                this.questions.push(question);
            });
        }

        this.root = document.querySelector('.quiz');
        this.initHtml();
        this.initHtmlElements();
        this.initEvents();
    }

    static checkForUnfinishedQuiz() {
        return localStorage.getItem('quiz') ? true : false;
    }
    save() {
        localStorage.setItem('quiz', JSON.stringify({
            questions: this.questions,
            currentIndex: this.currentIndex,
            start: this.start,
            totalSeconds: this.totalSeconds,
            showResults: this.showResults
        }));
    }
    clearStorage() {
        localStorage.removeItem('quiz');
    }
    load() {
        const storage = JSON.parse(localStorage.getItem('quiz'));
        if (storage) {
            this.currentIndex = storage.currentIndex;
            this.start = storage.start;
            this.totalSeconds = storage.totalSeconds;
            this.showResults = storage.showResults;
            this.questions = [];
            storage.questions.forEach(el => {
                let question = new Question();
                question.loadFromStorage(el);
                this.questions.push(question);
            });
        }
    }

    saveGeneral() {
        //only records the questions answered and/or marked
        let questions = this.questions.filter( question => question.answered || question.marked ).map( question => ({
            id: question.id,
            result: question.result,
            marked: question.marked
        }));
        let answeredQuestions = questions.filter(question => question.result != 'unanswered').map(el => {
            let {marked, ...newEl} = el;
            return newEl;
        });
        //check all the questions for the marked questions 
        let markedQuestions = this.questions.map( question => ({
            id: question.id,
            marked: question.marked
        }));

        if(questions.length){
            let storage = JSON.parse(localStorage.getItem('quizGeneral'));
            if (!storage) { //there are not previous record
                storage = {
                    answeredHistory : answeredQuestions ,
                    markedHistory : markedQuestions.filter(question => question.marked) ,
                    quizHistory : []
                    };
            } else{
                answeredQuestions.forEach(el => {
                    //check if there is a previous record with the same id
                    if(storage.answeredHistory.some(el2 => el.id == el2.id)){
                        let element = storage.answeredHistory.find(el2 => el.id == el2.id);
                        element.result = el.result;
                    }else{
                        storage.answeredHistory.push(el);
                    }
                });
                markedQuestions.forEach(el => {
                    //check if there is a previous record with the same id
                    if(storage.markedHistory.some(el2 => el.id == el2.id)){
                        let element = storage.markedHistory.find(el2 => el.id == el2.id);
                        element.marked = el.marked;
                    }else{
                        storage.markedHistory.push(el);
                    }
                });
                storage.markedHistory = storage.markedHistory.filter(question => question.marked);
            }
        
            storage.quizHistory.push({
                    total:this.questions.length,
                    questions: questions,
                    start: this.start,
                    end: this.end
            });

            localStorage.setItem('quizGeneral', JSON.stringify(storage));
        }
    }

    showResultsChecked() {
        return this.showResults ? 'checked' : '';
    }

    initHtml() {
        this.root.innerHTML = `<div class="quiz__actions-nav">
        <p class="quiz__score"><span class="answered"></span><span class="right"></span><span class="wrong"></span></p>
        <p class="timer">00:00:00</p>
        <div>
            <label class="quiz__show-results" for="chkShow">
            <input type="checkbox" name="chkShow" id="chkShow" ${this.showResultsChecked()}>
            Show results</label>
            <button class="btn btn--clear quiz__prev"><span>&lsaquo;</span>&nbsp;Previous</button>
            <button class="btn btn--clear quiz__next">Next&nbsp;<span>&rsaquo;</span></button>
        </div>
    </div>
    <p class="quiz__counter"></p>
    <div class="quiz__question-wrapper">
        <input class="quiz__mark" type="checkbox" id="quiz__mark">
        <label for="quiz__mark"><i class="fas fa-bookmark"></i></label>
        <p class="quiz__question"></p>
    </div>
    <ol class="quiz__options"></ol>
    <div class="quiz__actions">
        <button class="btn btn--large quiz__answer">Answer</button>
        <button class="btn btn--large btn--clear quiz__clear">Clear</button>
    </div>
    <div class="index-overlay"></div>
    <div class="index"></div>
`;
    }

    clearHtml() {
        clearElementChildren(document.querySelector('.quiz'));
    }

    initHtmlElements() {
        this.elements = {
            scoreAnswered: document.querySelector('.quiz__score .answered'),
            scoreRight: document.querySelector('.quiz__score .right'),
            scoreWrong: document.querySelector('.quiz__score .wrong'),
            counter: document.querySelector('.quiz__counter'),
            timer: document.querySelector('.timer'),
            mark: document.querySelector('.quiz__mark'),
            question: document.querySelector('.quiz__question'),
            options: document.querySelector('.quiz__options'),
            answer: document.querySelector('.quiz__answer'),
            clear: document.querySelector('.quiz__clear'),
            next: document.querySelector('.quiz__next'),
            prev: document.querySelector('.quiz__prev'),
            showResults: document.querySelector('.quiz__show-results'),
            indexOverlay: document.querySelector('.index-overlay'),
            index: document.querySelector('.index')
        }
    }

    initEvents() {
        this.elements.mark.addEventListener('click', markQuestion);
        this.elements.answer.addEventListener('click', checkAnswer);
        this.elements.clear.addEventListener('click', clearAnswers);
        this.elements.next.addEventListener('click', nextQuestion);
        this.elements.prev.addEventListener('click', prevQuestion);
        this.elements.showResults.addEventListener('click', showResults);
        this.elements.indexOverlay.addEventListener('click', toggleIndex);
    }


    end() {
        this.end = Date.now();
        clearInterval(this.timer);
        this.clearStorage();
        this.clearHtml();
        this.saveGeneral();
    }

    getTotalTime() {
        return this.end - this.start;
    }

    getTotalQuestions() {
        return this.questions.length;
    }

    getCurrentIndex() {
        return this.currentIndex;
    }
    getCurrentQuestion() {
        return this.questions[this.currentIndex];
    }
    getQuestion(id) {
        return this.questions.find(el => el.id == id);
    }

    isFirstQuestion() {
        return this.currentIndex == 0 ? true : false;
    }
    isLastQuestion() {
        return this.currentIndex == this.questions.length - 1 ? true : false;
    }
    moveNext() {
        if (!this.isLastQuestion()) {
            this.currentIndex++;
            this.save();
        }
    }
    movePrev() {
        if (!this.isFirstQuestion()) {
            this.currentIndex--;
            this.save();
        }
    }

    moveToQuestion(id) {
        let newIndex = this.questions.indexOf(this.getQuestion(id));
        if (this.currentIndex != newIndex) {
            this.currentIndex = newIndex;
            this.save();
        }
    }

    getTotalAnswered() {
        return this.questions.filter(el => el.answered).length;
    }

    getTotalRight() {
        return this.questions.filter(el => el.result == 'right').length;
    }
    getPercentageRight() {
        let result = this.getTotalRight() * 100 / this.getTotalQuestions();
        if(result==0) return 0;
        return result.toFixed(2);
    }

    getTotalWrong() {
        return this.questions.filter(el => el.result == 'wrong').length;
    }
    getPercentageWrong() {
        let result = this.getTotalWrong() * 100 / this.getTotalQuestions();
        if(result==0) return 0;
        return result.toFixed(2);
    }

    getQuestionsByDomain(domainIndex) {
        return this.questions.filter(el => el.domain() == dataDomains[domainIndex].title);
    }
    getTotalQuestionsByDomain(domainIndex){
        return this.getQuestionsByDomain(domainIndex).length;
    }
    getTotalAnsweredByDomain(domainIndex) {
        return this.getQuestionsByDomain(domainIndex).filter(el => el.answered).length;
    }
    
    getTotalRightByDomain(domainIndex) {
        return this.questions.filter(el => el.result == 'right' && el.domain() == dataDomains[domainIndex].title).length;
    }
    getPercentageRightByDomain(domainIndex) {
        let total = this.getTotalQuestionsByDomain(domainIndex);
        if (total==0) return 0;
        let result = this.getTotalRightByDomain(domainIndex) * 100 / total;
        return result.toFixed(2);
    }

    getTotalWrongByDomain(domainIndex) {
        return this.questions.filter(el => el.result == 'wrong' && el.domain() == dataDomains[domainIndex].title).length;
    }
    getPercentageWrongByDomain(domainIndex) {
        let total = this.getTotalQuestionsByDomain(domainIndex);
        if (total==0) return 0;
        let result = this.getTotalWrongByDomain(domainIndex) * 100 / total;
        return result.toFixed(2);
    }
}