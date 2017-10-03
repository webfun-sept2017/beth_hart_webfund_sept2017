
$(document).ready(function(){
	$("form").on(click, "#submit", function(e) {
		e.preventDefault();
		var city = $("#city").val()
		$.get("api.openweathermap.org/data/2.5/weather?q=${city}&APPID=8f9c0e3c39482fd48101fa130b0129", function success(res){
			console.log(res);
			$("#weather").html(`<h2>${forecast}</h2>`);

	}, "json");
	

	});
})
