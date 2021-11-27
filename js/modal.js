function toggleModal() {
    quiz.elements.modal.classList.toggle('index--show');
    quiz.elements.modalOverlay.classList.toggle('index-overlay--show');
    controlElements.showIndex.textContent = quiz.elements.index.classList.contains('index--show') ? 'Hide index' : 'Show index';
}