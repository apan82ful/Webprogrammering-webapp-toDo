var elForm, elTemp, elOutput;

elForm = document.getElementById('formTemp');
elTemp = document.getElementById('txtTemp');
elOutput = document.getElementById('output');

function showTemp(event){
	var inTemp = elTemp.value;
	var outTemp;

	outTemp = inTemp * 9 / 5 + 32;

	elOutput.textContent = 'Fahrenheit: ' + outTemp;


    // Submittar inte formuläret
    event.preventDefault(); //
}

elForm.addEventListener('submit', showTemp, false);