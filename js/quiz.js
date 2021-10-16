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
            shuffleArray(this.questions);
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
            showResults: this.showResults,
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
        let storage = JSON.parse(localStorage.getItem('quizGeneral'));
        if (!storage) {
            storage = [];
        }
        
        let questions = this.questions.filter( question => question.answered || question.marked ).map( question => ({
            id: question.id,
            result: question.result,
            marked: question.marked
        }));

        if(questions.length){
            storage.push({
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
    <p class="quiz__reference"></p>
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
            reference: document.querySelector('.quiz__reference'),
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
        return result.toFixed(2);
    }

    getTotalWrong() {
        return this.questions.filter(el => el.result == 'wrong').length;
    }
    getPercentageWrong() {
        let result = this.getTotalWrong() * 100 / this.getTotalQuestions();
        return result.toFixed(2);
    }
}