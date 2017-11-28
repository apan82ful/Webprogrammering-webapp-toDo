var elForm, elName, elOutput;

elForm = document.getElementById('formReg');
elName = document.getElementById('txtName');
elOutput = document.getElementById('output');

function showName(event){
	// Använd value när man hämtar från input i formuläret
	var name = elName.value;
    
	elOutput.textContent = 'Hej ' + name;

    // Submittar inte formuläret
    event.preventDefault(); //
}

elForm.addEventListener('submit', showName, false);