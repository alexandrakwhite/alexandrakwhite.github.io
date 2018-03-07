/*
1. Get value for gender radio button
2. Loop through dog rows, check if row is equal to value of radio button
3. If so, display dog, if not, hide dog.
*/

var selectedGender;
var selectedAge;

var allDogs = document.querySelectorAll(".dog");

//Write function for gender radio buttons
var processDogForm = function(event) {

 //Gender Button function
 //Find elements with name = gender, call them genderButtons
  var genderButtons = document.getElementsByName('gender');
	for (var i = 0; i < genderButtons.length; i++) {
			if (genderButtons[i].checked) {
        // Get value for gender buttons selected
				selectedGender = genderButtons[i].value;
				break; // quits the for loop once you find the option that's selected
			}
	}

  //Age Button function
  //Find elements with name=age, call them ageButtons
  var ageButtons = document.getElementsByName('age');
  for (var i = 0; i < ageButtons.length; i++) {
      if (ageButtons[i].checked) {
        // Get value for gender buttons selected
        selectedAge = ageButtons[i].value;
        break; // quits the for loop once you find the option that's selected
      }
  }

  for (var i = 0; i < allDogs.length; i++) {
    // Check if dogs gender matches gender selected
    var currentGender = allDogs[i].getAttribute('data-gender');
    var currentAge = allDogs[i].getAttribute('data-age');
    //Add && to this to trigger age

      if (selectedGender == undefined && selectedAge == currentAge) {
          allDogs[i].setAttribute('class', 'col-md-4 visible');
      } //if selectedGender == undefined
    else if (selectedAge == undefined && selectedGender == currentGender) {
        allDogs[i].setAttribute('class', 'col-md-4 visible');
    } //selectedAge == undefined

    else if (selectedGender == currentGender && selectedAge == currentAge) {
      //Show current dog that matches selected gender & age
      allDogs[i].setAttribute('class', 'col-md-4 visible');
  } else {
      //If not, hide it
      allDogs[i].setAttribute('class', 'hidden');
    } //Close else 
  } //Close line 37

  event.preventDefault();

}

//Find form:
var form = document.getElementById('infoForm');
form.addEventListener('change', processDogForm , false);
