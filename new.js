function insurance(){
	var selector = document.getElementById("country");
	var countryId = parseInt( selector.options[selector.selectedIndex].value );
	var name = document.getElementById("ownerName").value;
	var age = parseInt(document.getElementById("carAge").value);
	var hp = parseInt(document.getElementById("horsePower").value);


			var insurance = 0;
			switch( countryId ) {
				case 1: // Austria
					insurance = hp * 100 / age + 50;
					break;
				case 2: // Hungary
					insurance = hp * 120 / age + 100;
					break;
				case 3: // Greece
					insurance = hp * 150 / age + 50;
					break;
			}
			
			document.getElementById("result").innerHTML= name + "'s YR payments are $" + insurance;
		}

