$(function() {
    //$.getJSON('data/data.json', showTodo);    // Dummy JSON Data
    $.getJSON('http://127.0.0.1:8000/todo/', showTodo);

    function showTodo(data) {
        var output = '';
        $.each(data,function(key, item) {
            output += '<div>';
            output += item.todoTitle + '<br />';
            output += item.todoContent + '<br />';
            output += item.todoDate;
            output += '</div>';
        });
        $('#content').html(output);
    }
});