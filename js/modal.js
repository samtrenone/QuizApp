//iif to create the modal box
(function createModal(){
    //this.root.innerHTML
    // <div class="modal">
    //     <div class="modal-overlay"></div>
    //     <div class="modal-content"></div>
    // </div>
    let newDivModal = document.createElement('div');
    newDivModal.classList.add('modal');

    let newDivModalOverlay = document.createElement('div');
    newDivModalOverlay.classList.add('modal-overlay');
    newDivModalOverlay.addEventListener('click', toggleModal);

    let newDivModalContent = document.createElement('div');
    newDivModalContent.classList.add('modal-content');

    let newFormModal = document.createElement('form');

    let newLabelCheck;
    let newInputCheck;

    //wrong questions
    newInputCheck = document.createElement('input');
    newInputCheck.type = 'checkbox';
    newInputCheck.id = 'chkShowWrong';
    newInputCheck.name = 'chkShowWrong';
    newInputCheck.checked = showParams.wrong;

    newLabelCheck = document.createElement('label');
    newLabelCheck.htmlFor = 'chkShowWrong';
    newLabelCheck.appendChild(newInputCheck);
    newLabelCheck.appendChild(document.createTextNode('Show wrong answered questions'));

    newFormModal.appendChild(newLabelCheck);

    //right questions
    newInputCheck = document.createElement('input');
    newInputCheck.type = 'checkbox';
    newInputCheck.id = 'chkShowRight';
    newInputCheck.name = 'chkShowRight';
    newInputCheck.checked = showParams.right;

    newLabelCheck = document.createElement('label');
    newLabelCheck.htmlFor = 'chkShowRight';
    newLabelCheck.appendChild(newInputCheck);
    newLabelCheck.appendChild(document.createTextNode('Show right answered questions'));

    newFormModal.appendChild(newLabelCheck);

    //unanswered questions
    newInputCheck = document.createElement('input');
    newInputCheck.type = 'checkbox';
    newInputCheck.id = 'chkShowUnasnwered';
    newInputCheck.name = 'chkShowUnasnwered';
    newInputCheck.checked = showParams.unanswered;

    newLabelCheck = document.createElement('label');
    newLabelCheck.htmlFor = 'chkShowUnasnwered';
    newLabelCheck.appendChild(newInputCheck);
    newLabelCheck.appendChild(document.createTextNode('Show unanswered questions'));

    newFormModal.appendChild(newLabelCheck);



    newDivModalContent.appendChild(newFormModal);

    newDivModal.appendChild(newDivModalOverlay);
    newDivModal.appendChild(newDivModalContent);

    document.body.appendChild(newDivModal);




    // quiz.questions.forEach(question => {
    //     let dataQuestion = getDataQuestion(question.id);

    //     newLi = document.createElement('li');
    //     newLi.classList.add('index__question');
    //     newLi.setAttribute('data-index-id', question.id);
    //     newLi.innerHTML = `<i class="fa fa-bookmark mark"></i>${dataQuestion.question}`;
    //     newUl.appendChild(newLi);
    // });
    // quiz.elements.index.appendChild(newUl);
})();

function toggleModal() {
    document.querySelector('.modal-content').classList.toggle('modal-content--show');
    document.querySelector('.modal-overlay').classList.toggle('modal-overlay--show');
}