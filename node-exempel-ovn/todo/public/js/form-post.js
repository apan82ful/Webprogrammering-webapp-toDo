$('#todoform').on('submit', function(e) {           // When form is submitted
    e.preventDefault();                               // Prevent it being sent
    var details = $('#todoform').serialize();         // Serialize form data
    $.post('http://127.0.0.1:8000/todo/', details, function(data) {  // Use $.post() to send it
        $('#content').html('Created successfully');                    // Where to display result
    });
});
