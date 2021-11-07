/*
id
answers
    id
correctId -> id
selectedId -> id
selected -> bool
answered -> bool
result -> 'right', 'wrong', 'unanswered'
marked -> bool
history -> 'right', 'wrong', 'unanswered'
*/
class Question {
    constructor() { 
        this.selected = false;
        this.answered = false;
        this.result = 'unanswered';
        this.marked = false;
        this.history = 'unanswered';
    }
    loadFromData(question) {
        this.id = question.id;
        this.answers = [];
        question.answers.forEach(el => {
            let answer = { id: el.id };
            if (el.correct) this.correctId = el.id;
            this.answers.push(answer);
        });
        shuffleArray(this.answers);
    }
    loadFromStorage(question) {
        this.id = question.id;
        this.answers = question.answers;
        this.correctId = question.correctId;
        this.selectedId = question.selectedId;
        this.selected = question.selected;
        this.answered = question.answered;
        this.result = question.result;
        this.marked = question.marked;
    }

    setSelected(id) {
        this.selectedId = id;
        this.selected = true;
    }
    clearSelected(id) {
        this.selectedId = 0;
        this.selected = false;
    }
    checkAnswer() {
        this.result = this.selectedId == this.correctId ? 'right' : 'wrong';
        this.answered = true;
    }
    uncheckAnswer() {
        this.result = 'unanswered';
        this.answered = false;
    }

    domain(){
        return getDataQuestion(this.id).domain;
    }
}