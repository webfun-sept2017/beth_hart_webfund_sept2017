
$(document).ready(function(){
	$("form").on("click", "#submit", function(e) {
		e.preventDefault();
		var city = $("#city").val()
		console.log(city);
		$.get("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&APPID=8f9c0e3c39482fd48101fa130b012981", function success(res){
			console.log(res);
			$("#weather").html(`<h2>Currently in ${city}:</h2>
			<p>humidity: ${res.main.humidity} </p>
			<p>high: ${res.main.temp_max}</p>
			<p>low: ${res.main.temp_min}</p>`)

	}, "json");
	

	});
})
