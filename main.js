const addButton = document.querySelector('.addButton');
let input = document.querySelector('.input');
const container = document.querySelector('.container');

class item {

    constructor(itemName) {
        this.createDiv(itemName);
    }

    createDiv(itemName) {
        let input = document.createElement('input');
        input.value = itemName;
        input.disabled = true;
        input.classList.add('item_input');
        input.type = "text";

        let itemBox = document.createElement('div');
        itemBox.classList.add('item');

        let editButton = document.createElement('button');
        editButton.innerHTML = "ПРАВИТЬ";
        editButton.classList.add('editButton');

        let removeButton = document.createElement('button');
        removeButton.innerHTML = "УДАЛИТЬ";
        removeButton.classList.add('removeButton');

        container.appendChild(itemBox);

        itemBox.appendChild(input);
        itemBox.appendChild(editButton);
        itemBox.appendChild(removeButton);

        editButton.addEventListener('click', () => this.edit(input));

        removeButton.addEventListener('click', () => this.remove(itemBox));

    }

    edit(input) {
        input.disabled = !input.disabled;
    }

    remove(item) {
        container.removeChild(item);
    }
}

function check() {
    if (input.value != "") {
        new item(input.value);
        input.value = "";
    }
}

addButton.addEventListener('click', check);

let change = document.querySelector('.Background');

function colorSet () {
    let x = change.value;
    if (+x === 2) {
        document.body.style.backgroundColor = "#111111";
    } else {
        document.body.style.backgroundColor = "#ffffff";
    }
}

change.addEventListener("change", colorSet);













// let select = document.querySelector('#background');
// let body = document.body;

// function theme () {
//     let options = select.options;
//     let selectedOptions = options[options.selectedIndex];
//     body.style.background = selectedOption.value;
// }

// let theme = document.querySelector('.Background');


// function colorSet () {
//     let value = first.srcElement.options.value;
//     if (value === 3) {
//         document.body.style.backgroundColor = '#111111';
//     } else {
//         document.body.style.backgroundColor = '#ffffff';
//     }
// }

// theme.onchange = colorSet ();
// theme.addEventListener('click', colorSet);
// window.addEventListener('keydown', (e) => {
//     if (e.which == 13) {
//         check();
//     }
// })