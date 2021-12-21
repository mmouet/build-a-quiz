// INSTRUCTIONS
// Build a three-question quiz.
// Create an HTML form with a three-question quiz
// Each question should have four multiple-choice answers to choose from.
// When the user submits the quiz, 
// add a message underneath each question 
// letting them know if they got it right/wrong (give them the correct answer).


// PLANNING: 
// Function that uses .innerHTML and writes answer in green or red depending if correct


const answerSheet = () => {

	if (document.getElementById("q1").value === "4") {
		document.getElementById("answer1").innerHTML = "Correct! 4. Salem";
		document.getElementById("answer1").style.color = "green";
	} else {
		document.getElementById("answer1").innerHTML = "Incorrect. ANSWER - 4. Salem"
		document.getElementById("answer1").style.color = "red";
	};

	if (document.getElementById("q2").value === "1") {
		document.getElementById("answer2").innerHTML = "Correct! 1. Santa Fe";
		document.getElementById("answer2").style.color = "green";
	} else {
		document.getElementById("answer2").innerHTML = "Incorrect. ANSWER - 1. Santa Fe";
		document.getElementById("answer2").style.color = "red";
	};

	if (document.getElementById("q3").value === "2") {
		document.getElementById("answer3").innerHTML = "Correct! 2. Atlanta";
		document.getElementById("answer3").style.color = "green";
	} else {
		document.getElementById("answer3").innerHTML = "Incorrect. ANSWER - 2. Atlanta";
		document.getElementById("answer3").style.color = "red";
	}



};