function calculateGrade() {
	var particip_percent = parseInt (document.getElementById("gradePart").innerHTML)
	var quiz_percent = parseInt (document.getElementById("gradeQuizzes").innerHTML)
	var pm1_percent = parseInt (document.getElementById("gradePM1").innerHTML)
	var pm2_percent = parseInt (document.getElementById("gradePM2").innerHTML)
	var fin_proj_percent = parseInt (document.getElementById("gradeFinalProj").innerHTML)


	var particip_grade = parseFloat (document.getElementById("currPart").value)
	var quiz_grade = parseFloat (document.getElementById("currQuizzes").value)
	var pm1_grade = parseFloat (document.getElementById("currPM1").value)
	var pm2_grade = parseFloat (document.getElementById("currPM2").value)
	var fin_proj_grade = parseFloat (document.getElementById("currFinProj").value)

	if (particip_grade > 100 || particip_grade < 0){
		alert("This is not a valid input, please use a number between 0 and 100.")
		document.getElementById("currPart").style = "color:red"
	}
	
	if (quiz_grade > 100 || quiz_grade < 0){
		alert("This is not a valid input, please use a number between 0 and 100.")
		document.getElementById("currQuizzes").style = "color:red"
	}	

	if (pm1_grade > 100 || pm1_grade < 0){
		alert("This is not a valid input, please use a number between 0 and 100.")
		document.getElementById("currPM1").style = "color:red"
	}

	if (pm2_grade > 100 || pm2_grade < 0){
		alert("This is not a valid input, please use a number between 0 and 100.")
		document.getElementById("currPM2").style = "color:red"
	}	

	if (fin_proj_grade > 100 || fin_proj_grade < 0){
		alert("This is not a valid input, please use a number between 0 and 100.")
		document.getElementById("currFinProj").style = "color:red"
	}	

	var particip = particip_percent * particip_grade / 100
	var quizzes = quiz_percent * quiz_grade / 100
	var pm1 = pm1_percent * pm1_grade / 100
	var pm2 = pm2_percent * pm2_grade / 100
	var final_proj = fin_proj_percent * fin_proj_grade / 100
	var final_Grade = particip + quizzes + pm1 + pm2 + final_proj
	if (document.getElementById("currFinProj").style == "color:red" || document.getElementById("currPM2").style == "color:red"){
		console.log("Nope")
	} 
	if (document.getElementById("currPM1").style == "color:red" || document.getElementById("currQuizzes").style == "color:red"){
		console.log("Nope")
	} 
	if (document.getElementById("currPart").style == "color:red"){
		console.log ("Nope")
	}
	if (final_Grade > 0 || final_Grade < 100){
		console.log(final_Grade)
	}

}
