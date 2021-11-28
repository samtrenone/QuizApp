let showParams = {
    shuffle : false,
    wrong : true,
    right : true,
    unanswered : true,
    unmarked : true,
    domains : [true,true,true,true],
    sources : [true,true]
};

function saveShowParams(){
    localStorage.setItem('showParams', JSON.stringify(showParams));
}

(function loadShowParams(){
    const storage = JSON.parse(localStorage.getItem('showParams'));
    if (storage) {
        showParams = storage;
    }
})();

//iif to create the modal box
(function createModal(){
    let newDivModal = document.createElement('div');
    newDivModal.classList.add('modal');

    let newDivModalOverlay = document.createElement('div');
    newDivModalOverlay.classList.add('modal-overlay');

    let newDivModalContent = document.createElement('div');
    newDivModalContent.classList.add('modal-content');

    let newFormModal = document.createElement('form');
    newFormModal.classList.add('modal-content-form');

    let newFieldSet;
    let newLegend;
    let newLabelCheck;
    let newInputCheck;

    //sources
    newFieldSet = document.createElement('fieldset');
    newLegend = document.createElement('legend');
    newLegend.textContent = 'Sources:'
    newFieldSet.appendChild(newLegend);

    showParams.sources.forEach((source,index) =>{
        newInputCheck = document.createElement('input');
        newInputCheck.type = 'checkbox';
        newInputCheck.id = 'chkShowSource' + index;
        newInputCheck.name = 'chkShowSource' + index;
        newInputCheck.checked = source;
    
        newLabelCheck = document.createElement('label');
        newLabelCheck.htmlFor = 'chkShowSource' + index;
        newLabelCheck.appendChild(newInputCheck);
        newLabelCheck.appendChild(document.createTextNode(dataSources[index].title));
    
        newFieldSet.appendChild(newLabelCheck);
    });
    newFormModal.appendChild(newFieldSet);
    

    newFieldSet = document.createElement('fieldset');
    newLegend = document.createElement('legend');
    newLegend.textContent = 'Questions:'
    newFieldSet.appendChild(newLegend);

    //wrong questions
    newInputCheck = document.createElement('input');
    newInputCheck.type = 'checkbox';
    newInputCheck.id = 'chkShowWrong';
    newInputCheck.name = 'chkShowWrong';
    newInputCheck.checked = showParams.wrong;

    newLabelCheck = document.createElement('label');
    newLabelCheck.htmlFor = 'chkShowWrong';
    newLabelCheck.appendChild(newInputCheck);
    newLabelCheck.appendChild(document.createTextNode('Wrong'));

    newFieldSet.appendChild(newLabelCheck);
    
    //right questions
    newInputCheck = document.createElement('input');
    newInputCheck.type = 'checkbox';
    newInputCheck.id = 'chkShowRight';
    newInputCheck.name = 'chkShowRight';
    newInputCheck.checked = showParams.right;

    newLabelCheck = document.createElement('label');
    newLabelCheck.htmlFor = 'chkShowRight';
    newLabelCheck.appendChild(newInputCheck);
    newLabelCheck.appendChild(document.createTextNode('Right'));

    newFieldSet.appendChild(newLabelCheck);

    //unanswered questions
    newInputCheck = document.createElement('input');
    newInputCheck.type = 'checkbox';
    newInputCheck.id = 'chkShowUnasnwered';
    newInputCheck.name = 'chkShowUnasnwered';
    newInputCheck.checked = showParams.unanswered;

    newLabelCheck = document.createElement('label');
    newLabelCheck.htmlFor = 'chkShowUnasnwered';
    newLabelCheck.appendChild(newInputCheck);
    newLabelCheck.appendChild(document.createTextNode('Unanswered'));

    newFieldSet.appendChild(newLabelCheck);

    newFormModal.appendChild(newFieldSet);

    //domains
    newFieldSet = document.createElement('fieldset');
    newLegend = document.createElement('legend');
    newLegend.textContent = 'Domains:'
    newFieldSet.appendChild(newLegend);

    showParams.domains.forEach((domain,index) =>{
        newInputCheck = document.createElement('input');
        newInputCheck.type = 'checkbox';
        newInputCheck.id = 'chkShowDomain' + index;
        newInputCheck.name = 'chkShowDomain' + index;
        newInputCheck.checked = domain;
    
        newLabelCheck = document.createElement('label');
        newLabelCheck.htmlFor = 'chkShowDomain' + index;
        newLabelCheck.appendChild(newInputCheck);
        newLabelCheck.appendChild(document.createTextNode(dataDomains[index].title));
    
        newFieldSet.appendChild(newLabelCheck);
    });
    newFormModal.appendChild(newFieldSet);

    //submit button
    let newSubmit = document.createElement('input');
    newSubmit.type = 'submit';
    newSubmit.value = 'Ok'
    newFormModal.appendChild(newSubmit);

    newFormModal.addEventListener('submit',e =>{
        e.preventDefault();

        showParams.sources.forEach((source,index) =>{
            showParams.sources[index] = newFormModal.elements['chkShowSource' + index].checked;    
        });
        showParams.wrong = newFormModal.elements['chkShowWrong'].checked;
        showParams.right = newFormModal.elements['chkShowRight'].checked;
        showParams.unanswered = newFormModal.elements['chkShowUnasnwered'].checked;
        showParams.domains.forEach((source,index) =>{
            showParams.domains[index] = newFormModal.elements['chkShowDomain' + index].checked;    
        });

        saveShowParams();
        toggleModal();
    });

    newDivModalContent.appendChild(newFormModal);

    newDivModal.appendChild(newDivModalOverlay);
    newDivModal.appendChild(newDivModalContent);

    document.body.appendChild(newDivModal);
})();

function toggleModal() {
    document.querySelector('.modal-content').classList.toggle('modal-content--show');
    document.querySelector('.modal-overlay').classList.toggle('modal-overlay--show');
}