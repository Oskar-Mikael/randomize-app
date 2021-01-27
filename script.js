let items = []
let result = ""
let input = $('#input');

$(function () {
    $('form').on('submit', function(e) {
        e.preventDefault();
    })
})

$(input).on('keypress', function(e) {
    if(e.which == 13) {
        addItem();
    }
});

$('#add').on('click', function(){
    addItem()
})

$('#reset').on('click', function(){
    window.location.reload();
});

$('#submit').on('click', function(){
    displayResult()
});



function addItem() {
    if (input.val().length < 1) {
        $('#inputError').html("Add an item please");
    } else {
        items.push($(input).val());
        let ul = $('#itemlist');
        let li = document.createElement('li');
        li.append($(input).val());
        ul.append(li)
        $(input).css('border', '1px solid black');
        $(input).val('');
        $('#inputError').html("")
    }
}

function displayResult() {
    if (items.length < 1) {
        $('#result').html('Error: Add atleast 1 item')
        $(input).css('border', '2px solid red');
    } else {
        result = items[Math.floor(Math.random() * items.length)];
        $('#result').html(result)
        $('#result').hide().fadeIn(1000);
    }
}

