let input = document.getElementById('input');


let submit = document.getElementById('submit');
let list = document.getElementById('list');

function GoodColor(color) {
    let node = document.createElement("div");
    node.style.color = color;
    return node.style.color !== "";
}

function submitText() {
    let value = input.value;
    if (GoodColor(value) == true) {

        let node = document.createElement("li");
        node.innerText = value;
        node.style.color = value;
        list.appendChild(node);
    } else {
        console.log('error');
    }
}

function googleOnClick() {
    let query = input.value;
    if (GoodColor(query) == true) {
        window.open(' https://www.google.com/search?q=' + query);
    } else {
        console.log('error');
    }
}

let googleButton = document.getElementById('google');
googleButton.onclick = googleOnClick;

submit.onclick = submitText;