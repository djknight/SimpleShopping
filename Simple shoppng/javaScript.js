var button = document.getElementById('enter');
var input = document.getElementById('userInput');
var ul = document.querySelector('ul');

function inputLength() {
    return input.value.length;
}

function createListElement() {
    var li = document.createElement('li');
    var button = document.createElement('button');

    button.appendChild(document.createTextNode('Delete'));
    li.appendChild(document.createTextNode(input.value + '   '));
    li.appendChild(button);
    ul.appendChild(li);
    input.value = '';
}

function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
    }
}

function addAfterKeypress(event) {
    if (inputLength() > 0 && event.keyCode === 13) {
        createListElement();
    }
}

function doneItem(event) {
    event.target.classList.toggle('done');
}

function deleteItem(event) {
    event.target.parentNode.parentNode.removeChild(event.target.parentNode);
}

function clickItem(event) {
    if (event.target.nodeName === 'LI') {
        doneItem(event);
    } else if (event.target.nodeName === 'BUTTON') {
        deleteItem(event);
    }
}

button.addEventListener('click', addListAfterClick);
input.addEventListener('keypress', addAfterKeypress);
ul.addEventListener('click', clickItem);