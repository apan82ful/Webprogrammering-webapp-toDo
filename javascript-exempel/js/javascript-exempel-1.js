// Använder textContent för att skriva ut till valt id
//var demoText = document.getElementById('demo');
var today = new Date();
var hourNow = today.getHours();
var greetings;

if(hourNow > 18){
    greetings = 'good evening';
}
else if(hourNow > 12){
    greetings = 'god afternoon';
}
else if(hourNow == 0){
    greetings = 'good morning';
}
else{
    greetings = 'welcome';
}
document.write('<h3>' + greetings + '<h3/>');

//demoText.textContent = 'Hello' + name;

