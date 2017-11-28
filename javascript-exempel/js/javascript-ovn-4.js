



var elForm = document.getElementById('formReg');
var elCoffeOrTea = document.getElementById('coffeOrTea');
//var elPrice = document.getElementById('price');
// var elOutput = document.getElementById('output');


//function showHowMany(event){
//	// Använd value när man hämtar från input i formuläret
//	var howMany = elHowMany.value;
//	var price = elPrice.value;
//

function showValueOf(event) {
	var coffeOrTea = elCoffeOrTea.value;


	if(coffeOrTea == 'c'){
        elOutput.textContent = 'hot coffe ';
	}
	else if(coffeOrTea == 't'){
		elOutput.textContent = 'hot tea';
	}
	else{
		elOutput.textContent = 'must choose something';
	}

	//elOutput.textContent = 'fahrenheit ' + celsiusToFahrenheit();

    // Submittar inte formuläret
    event.preventDefault(); //
}

elForm.addEventListener('submit', showValueOf, false);


//Låt användaren mata in bokstaven ”K” om man vill ha kaffe, eller bokstaven ”T” om man
//vill ha Te.
//    Matas ”K” in visas texten: ”Varsågod: Varmt kaffe!”
//Matas ”T” in visas texten: ”Varsågod: Varmt Te!”
//Om varken ”K” eller ”T” matats visas texten ”Välj Kaffe eller Te!”