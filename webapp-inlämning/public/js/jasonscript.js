var xhr = new XMLHttpRequest();                 // Create XMLHttpRequest object
var notes;

//För att skapa en lista från databasen med samtliga anteckningar
xhr.onload = function () {                       // When readystate changes

    var responseObject = JSON.parse(xhr.responseText);

    var newContent = '';

    for (var id in responseObject) { // Loop through object

        $('#table-content')
            .append(
                createRow(responseObject[id].todoTitle, responseObject[id].todoContent)
                    .attr('id', id)
            );
    }
    notes = responseObject.anteckning;
};

//hämtar att göra listan om man är inloggad på sidan
if(localStorage.getItem('loggedIn') == 'true') {
    xhr.open('GET', '/todo/', true);// Prepare the request

    $('table').fadeIn('slow');
    $('#addNewForm').fadeIn('slow');
    $('#loginfield').hide();

    xhr.send(null);
}
else{
    $('table').fadeOut('slow');
    $('#addNewForm').fadeOut('slow');
    $('#logout').hide();

}

var fetchData = function (id) {
    document.getElementById('comment').textContent = notes[id].text;
};

//För att lägga till nya anteckningr i listan
function createRow(title, text) {
    return $('<tr></tr>')
        .append('<td>' + title + '</td>')
        .append('<td>' + text + '</td>');
}

