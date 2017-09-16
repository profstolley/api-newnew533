var food = [
 {
		"name": "Sweet Soy Chicken Wings",
		"number": "16",
    "type": "stir-fried",
		"material": [
		"salt",
		"soysauce",
    "Chicken Wings",
    "sugar" ]},
	{
			"name": "potato",
			"number": "10",
	    "type": "stir-fried",
			"material": [
			"salt",
			"soysauce",
	    "Chicken Wings",
	    "sugar" ]}
  ]

 $("#user-form").on("submit", function(e){
	var foodname = $("#food").val();
	$("#result").append("<li>" + foodname + "</li>");
	console.log("hello");
	e.preventDefault();
 });

 $("#food").on("focus", function(e){
	 console.log("kakaksk");
 });
