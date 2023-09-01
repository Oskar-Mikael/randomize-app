let items = []
let result = ""
let input = $('#input');

$(function () {
    $('form').on('submit', function (e) {
        e.preventDefault();
    })
})

$(input).on('keypress', function (e) {
    if (e.which == 13) {
        addItem();
    }
});

$('#add').on('click', function () {
    addItem()
})

$('#reset').on('click', function () {
    location.reload();
});

$('#submit').on('click', function () {
    displayResult()
});

$(document).on('click', 'img.delete', function () {
    let deletedItem = $(this).closest('li')
    let itemValue = $(this).closest('li').text()
    let index = items.indexOf(itemValue);
    if (index != -1) {
        items.splice(index, 1);
    }
    deletedItem.remove();
    console.log(itemValue)
});

$('button#presetFootball').click(function () {
    let ul = $('#itemlist');
    console.log(ul)
    items = [];
    items.push('Oskar', 'Emil', 'Kim', 'Mads', 'Mads C', 'Thore')
    // let ul = $('#itemlist');
    items.forEach(function (item) {
        let li = document.createElement('li');
        let img = document.createElement('img')
        li.append(item);
        ul.append(li);
        li.append(img);
        $(img).addClass('delete')
        $(img).attr('src', 'close.png');
        $(input).css('border', '1px solid black');
        $(input).val('');
        $('#inputError').html("")
    })
});




function addItem() {
    if (input.val().length < 1) {
        $('#inputError').html("Add an item please");
    } else {
        items.push($(input).val());
        let ul = $('#itemlist');
        let li = document.createElement('li');
        let img = document.createElement('img')
        li.append($(input).val());
        ul.append(li);
        li.append(img);
        $(img).addClass('delete')
        $(img).attr('src', 'close.png');
        $(input).css('border', '1px solid black');
        $(input).val('');
        $('#inputError').html("")
    }
}

function displayResult() {
    if (items.length < 1) {
        $('#result').html('Error: Add atleast 1 item')
        $(input).css('border', '2px solid red');
        return;
    }

    let selectNumber = $('#selectNumber').val()
    const shuffled = items.sort(() => 0.5 - Math.random());
    result = shuffled.slice(0, selectNumber)

    let resultText = '';
    result.forEach(function (item) {
        resultText += item + ', ';
    });

    $('#result').html(resultText.slice(0, -2))
    $('#result').hide().fadeIn(1000);

}
