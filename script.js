let items = []
let result = ""
let input = document.querySelector("#input");


input.addEventListener('keyup', function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.querySelector("#add").click();
    }

})
document.querySelector("#add").addEventListener('click', addItem);
document.querySelector("#submit").addEventListener('click', displayResult);
document.querySelector("#reset").addEventListener('click', reset);



function addItem() {
    if (input.value.length < 1) {
        document.querySelector("#inputError").innerHTML = "Add an item please";
    } else {
        items.push(document.querySelector("#input").value)
        let ul = document.querySelector("#itemlist");
        let li = document.createElement('li');
        li.appendChild(document.createTextNode(input.value));
        ul.appendChild(li)
        document.querySelector("#input").style.border = "2px solid black";
        document.querySelector("#input").value = '';
        document.querySelector("#inputError").innerHTML = "";
    }
}


function displayResult() {
    if (items.length < 1) {
        document.querySelector("#result").innerHTML = "Error: Add atleast 1 item"
        document.querySelector("#input").style.border = "2px solid red"
    } else {
        result = items[Math.floor(Math.random() * items.length)];
        document.querySelector("#result").innerHTML = result
    }
}

function reset() {
    window.location.reload();
}
