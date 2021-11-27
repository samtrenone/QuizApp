//iif to create the modal box
(function createModal(){
    //this.root.innerHTML
    // <div class="modal">
    //     <div class="modal-overlay"></div>
    //     <div class="modal-content"></div>
    // </div>
    newDivModal = document.createElement('div');
    newDivModal.classList.add('modal');

    newDivModalOverlay = document.createElement('div');
    newDivModalOverlay.classList.add('modal-overlay');
    newDivModalOverlay.addEventListener('click', toggleModal);

    newDivModalContent = document.createElement('div');
    newDivModalContent.classList.add('modal-content');



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