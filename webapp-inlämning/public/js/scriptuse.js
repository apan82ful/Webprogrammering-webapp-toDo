$(function () {
/*
    var $newItemButton = $('#newItemButton');
    var $newItemForm = $('#newItemForm');
    var $textInput = $('#itemDescription');


    $newItemButton.show();
    $newItemForm.hide();

    $('#showForm').on('click', function () {
        $newItemButton.hide();
        $newItemForm.show();
    });

    $newItemForm.on('submit', function (e) {
        e.preventDefault();
        console.log("Test");
        var newText = $textInput.val();
        $('#item-test li:last').after('<li>' + newText + '</li>');
        $newItemForm.hide();
        $newItemButton.show();
        $textInput.val('');
    });
*/
//För att kunna posta till servern... hämtar anteckning från formulär
    $('#addNewForm').on('submit', function (event) {
        event.preventDefault();
        console.log('formulär funktion');
        var details = $('#addNewForm').serialize();         // Serialize form data
        $.post('http://127.0.0.1:8000/todo/', details, function (data) {  // Use $.post() to send it
            //$('#content').html('Created successfully');                    // Where to display result
            console.log(data.message);
            if (data.status === 0) {
                $('#table-content')
                    .append(
                        createRow($('#todoTitle').val(), $('#todoContent').val())
                            .attr('id', data.id)
                    );
            } else {
                alert('MySQL error!')
            }
        });


        /*var formTitle = $('#title').val();
        var formText = $('#text').val();
        $('#table-content')
            .append(
                createRow(formTitle, formText)
                    //.attr('id', id)
            );*/
//    alert('Klick! ' + formTitle + ', ' + formText);


    });
    //För att ligga in på sidan och visa anteckningar
    $('#loginfield').on('submit', function (event) {
        event.preventDefault();
        console.log('login funktion');

        var login = $("#login").val();
        var pwd = $("#pwd").val();

        //om användarnamn och lösen stämmer med jasonfilen loggas man in.. inloggning sparas i local storage så att man är inloggad
        //tills man loggat ut
        $.post('/login', {'login':login, 'pwd':pwd}, function (data) {
            console.log(data.message);
            if(data.status == 0){
                localStorage.setItem('loggedIn', true);
                window.location.reload(true);
            }
            else {
                console.log('Wrong Password or Username');
            }
        });

    });
//För att logga ut.. login sätts till false.. local storage gäller inte längre
    $('#logout').on('click', function (event) {
        event.preventDefault();
        localStorage.setItem('loggedIn', false);
        console.log('logout funktion');
        window.location.reload(true);


    });



});