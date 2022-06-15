$("#middle").hide(0)
$("#bottom").hide(0)
$("#results").hide(0)
$("#fly_game").hide(0)
$("#mosquito_game").hide(0)
$("#tarantula_game").hide(0)
$("#cockroach_game").hide(0)

$("#btn").click(function() {

	$("#middle").slideToggle(300)
	$("#top").slideToggle(300)

})

$("#btn").mouseover(function() {

	$(".btn").css("font-size", "25px")
	$(".btn").css("padding", "5px 30px")

})

$("#btn").mouseout(function() {

	$(".btn").css("font-size", "20px")
	$(".btn").css("padding", "0px 25px")

})

$("#results_btn").click(function() {

	$("#middle").slideToggle(300)
	$("#results").slideToggle(300)
	clearInterval(x)
	clearInterval(y)

})

$("#results_btn").mouseover(function() {

	$(".results_btn").css("font-size", "25px")
	$(".results_btn").css("padding", "5px 30px")

})

$("#results_btn").mouseout(function() {

	$(".results_btn").css("font-size", "20px")
	$(".results_btn").css("padding", "0px 25px")

})

$("#time_complexity_easy").click(function() {

	$("#time_complexity_easy").addClass("active")
	$("#time_complexity_medium").removeClass("active")
	$("#time_complexity_hard").removeClass("active")

})

$("#time_complexity_medium").click(function() {

	$("#time_complexity_medium").addClass("active")
	$("#time_complexity_easy").removeClass("active")
	$("#time_complexity_hard").removeClass("active")

})

$("#time_complexity_hard").click(function() {

	$("#time_complexity_hard").addClass("active")
	$("#time_complexity_easy").removeClass("active")
	$("#time_complexity_medium").removeClass("active")

})

let a = 0;
let b = 0;

let randomTop =  Math.floor(Math.random() * 600)
let randomLeft =  Math.floor(Math.random() * 1500)

$("#fly").click(function() {

	$("#bottom").slideToggle(300)
	$("#middle").slideToggle(300)

	let x = setInterval(function() {

	a++

	if (a === 10) {

		$("#sec").hide(0)

	} else if (a === 30) {

		$("#results").slideToggle(300)
		$("#bottom").slideToggle(300)
		$("#user_score").html(score)

	} else if (a === 60) {

		a = 0;
		b++;
		$("#sec").show(0)

	}

	sec_one.innerText = a;

}, 1000)

let y = setInterval(function() {

	if (b === 10) {

		$("#min").hide(0)

	} else if (b === 60) {

		b = 0;
		$("#min").show(0)

	}

	min_one.innerText = b;

}, 60000)

let z = setInterval(function() {

	$("#fly_game").show(100)
	$("#fly_game").css("position", "relative")
	$("#fly_game").css("top", ""+ randomTop +"px")
	$("#fly_game").css("left", ""+ randomLeft +"px")

}, 500)

})

$("#mosquito").click(function() {

	$("#bottom").slideToggle(300)
	$("#middle").slideToggle(300)

	let x = setInterval(function() {

	a++

	if (a === 10) {

		$("#sec").hide(0)

	} else if (a === 30) {

		$("#results").slideToggle(300)
		$("#bottom").slideToggle(300)
		$("#user_score").html(score)

	} else if (a === 60) {

		a = 0;
		b++;
		$("#sec").show(0)

	}

	sec_one.innerText = a;

}, 1000)

let y = setInterval(function() {

	if (b === 10) {

		$("#min").hide(0)

	} else if (b === 60) {

		b = 0;
		$("#min").show(0)

	}

	min_one.innerText = b;

}, 60000)

let z = setInterval(function() {

	$("#mosquito_game").show(100)
	$("#mosquito_game").css("position", "relative")
	$("#mosquito_game").css("top", ""+ randomTop +"px")
	$("#mosquito_game").css("left", ""+ randomLeft +"px")

}, 500)

})

$("#tarantula").click(function() {

	$("#bottom").slideToggle(300)
	$("#middle").slideToggle(300)

	let x = setInterval(function() {

	a++

	if (a === 10) {

		$("#sec").hide(0)

	} else if (a === 30) {

		$("#results").slideToggle(300)
		$("#bottom").slideToggle(300)
		$("#user_score").html(score)

	} else if (a === 60) {

		a = 0;
		b++;
		$("#sec").show(0)

	}

	sec_one.innerText = a;

}, 1000)

let y = setInterval(function() {

	if (b === 10) {

		$("#min").hide(0)

	} else if (b === 60) {

		b = 0;
		$("#min").show(0)

	}

	min_one.innerText = b;

}, 60000)

let z = setInterval(function() {

	$("#tarantula_game").show(100)
	$("#tarantula_game").css("position", "relative")
	$("#tarantula_game").css("top", ""+ randomTop +"px")
	$("#tarantula_game").css("left", ""+ randomLeft +"px")

}, 500)

})

$("#cockroach").click(function() {

	$("#bottom").slideToggle(300)
	$("#middle").slideToggle(300)

	let x = setInterval(function() {

	a++

	if (a === 10) {

		$("#sec").hide(0)

	} else if (a === 30) {

		$("#results").slideToggle(300)
		$("#bottom").slideToggle(300)
		$("#user_score").html(score)

	} else if (a === 60) {

		a = 0;
		b++;
		$("#sec").show(0)

	}

	sec_one.innerText = a;

}, 1000)

let y = setInterval(function() {

	if (b === 10) {

		$("#min").hide(0)

	} else if (b === 60) {

		b = 0;
		$("#min").show(0)

	}

	min_one.innerText = b;

}, 60000)

let z = setInterval(function() {

	$("#cockroach_game").show(100)
	$("#cockroach_game").css("position", "relative")
	$("#cockroach_game").css("top", ""+ randomTop +"px")
	$("#cockroach_game").css("left", ""+ randomLeft +"px")

}, 500)

})

let score = 0;

$("#fly_game").click(function() {

	score++;
	$("#fly_game").hide(250)
	$("#score").html(score)	

})

$("#mosquito_game").click(function() {

	score++;
	$("#mosquito_game").hide(250)
	$("#score").html(score)

})

$("#tarantula_game").click(function() {

	score++;
	$("#tarantula_game").hide(250)
	$("#score").html(score)

})

$("#cockroach_game").click(function() {

	score++;
	$("#cockroach_game").hide(250)
	$("#score").html(score)

})