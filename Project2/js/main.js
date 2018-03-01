/**
1. Get value for gender radio button
2. Loop through dog rows, check if row is equal to value of radio button
3. If so, display dog, if not, hide dog.
**/

var gender;
var age;

//Write function for gender radio buttons
var processDogForm = function(event) {
  var genderButtons = document.getElementsByName('gender');
	for (var i = 0; i < genderButtons.length; i++) {
			if (genderButtons[i].checked) {
        // Get value for gender buttons selected
				selectedGender = genderButtons[i].value;
				break; // quits the for loop once you find the option that's selected
			}
	}
  console.log(selectedGender);

var allDogs = document.querySelectorAll(".dog");
  for (var i = 0; i < allDogs.length; i++) {
    // Check if dogs gender matches gender selected
    var currentGender = allDogs[i].getAttribute('data-gender');
    if (selectedGender == currentGender) {
    //Show current dog that matches selected gender
      document.getAttribute('data-gender').style.display = 'block');
  } else {
      //If not, hide it
      document.getAttribute('data-gender').style.display = 'none');
    }
  }


//Find form:
var form = document.getElementById('infoForm');

form.addEventListener('change', processDogForm , false)
