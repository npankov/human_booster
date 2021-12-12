'use strict';

const DIV = document.querySelector('#content');
const buttons = document.querySelectorAll('button:not(#export)');
const buttonExport = document.querySelector('#export');
const popUp = document.querySelector('#popup');

function generateHtml() {
    switch (this.id) {
        case 'h1':
            DIV.innerHTML += '<h1 contenteditable="true">Saisir le titre principale</h1>';
            break;

        case 'h1':
            DIV.innerHTML += '<h1 contenteditable="true">Saisir le titre principale</h1>';
            break;
            
        case 'h2':
            DIV.innerHTML += '<h2 contenteditable="true">Saisir le titre niveaux 2</h2>';
            break;

        case 'h3':
            DIV.innerHTML += '<h3 contenteditable="true">Saisir le titre niveaux 3</h3>';
            break;

        case 'p':
            DIV.innerHTML += '<p contenteditable="true">Saisir le paragraph de text</p>';
            break;

        case 'hr':
            DIV.innerHTML += '<hr>';
            break;
    
        default:
            break;
    }
};

function exportHTML() {
    const divPopUp = document.createElement('div');
    popUp.classList.toggle('hide');
    divPopUp.textContent = DIV.innerHTML;
    popUp.append(divPopUp);
};

buttons.forEach((button) => button.addEventListener('click', generateHtml));
buttonExport.addEventListener('click', exportHTML);
