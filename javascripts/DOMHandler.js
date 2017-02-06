"use strict";

//Globals

var meatPrice = 0;
var breadPrice = 0;
let TEMP;

//Selectors
$("#meat-chooser").change( () => {
  var selectedMeat = $("#meat-chooser option:selected").val();
  meatPrice = SandwichMaker.addMeat(selectedMeat);
});

$("#bread-chooser").change( () => {
  var selectedBread = $("#bread-chooser option:selected").val();  
  breadPrice = SandwichMaker.addBread(selectedBread);
  
});



//Cheese Checkboxes
$("input[value='american']").click( () => {
	var cheesePrice = SandwichMaker.addCheese($("input[value='american']").val());
	 TEMP = $("input[value='american']").is(":checked") ? SandwichMaker.addTopping(cheesePrice) : SandwichMaker.removeTopping(cheesePrice);
});
$("input[value='swiss']").click( () => {
	var cheesePrice = SandwichMaker.addCheese($("input[value='swiss']").val());
	TEMP = $("input[value='swiss']").is(":checked") ? SandwichMaker.addTopping(cheesePrice) : SandwichMaker.removeTopping(cheesePrice);
});
$("input[value='cheddar']").click( () => {
	var cheesePrice = SandwichMaker.addCheese($("input[value='cheddar']").val());
	TEMP = $("input[value='cheddar']").is(":checked") ? SandwichMaker.addTopping(cheesePrice) : SandwichMaker.removeTopping(cheesePrice);
});


//Condiments Checkboxes
$("input[value='mayo']").click( () => {
	var condPrice = SandwichMaker.addCond($("input[value='mayo']").val());
	TEMP = $("input[value='mayo']").is(":checked") ? SandwichMaker.addTopping(condPrice) : SandwichMaker.removeTopping(condPrice);
});
$("input[value='mustard']").click( () => {
	var condPrice = SandwichMaker.addCond($("input[value='mustard']").val());
	TEMP = $("input[value='mustard']").is(":checked") ? SandwichMaker.addTopping(condPrice) : SandwichMaker.removeTopping(condPrice);
});


//Veggies Checkboxes
$("input[value='lettuce']").click( () => {
	var veggiePrice = SandwichMaker.addVeggies($("input[value='lettuce']").val());
	TEMP = $("input[value='lettuce']").is(":checked") ? SandwichMaker.addTopping(veggiePrice) : SandwichMaker.removeTopping(veggiePrice);
});
$("input[value='tomato']").click( () => {
	var veggiePrice = SandwichMaker.addVeggies($("input[value='tomato']").val());
	TEMP = $("input[value='tomato']").is(":checked") ? SandwichMaker.addTopping(veggiePrice) :	SandwichMaker.removeTopping(veggiePrice);
});
$("input[value='onion']").click( () => {
	var veggiePrice = SandwichMaker.addVeggies($("input[value='onion']").val());
	TEMP = $("input[value='onion']").is(":checked") ? SandwichMaker.addTopping(veggiePrice) : SandwichMaker.removeTopping(veggiePrice);
});


//Print Sandwhich Total
$("button").click( () => {
	SandwichMaker.addTopping(meatPrice);
	SandwichMaker.addTopping(breadPrice);
	$("#total-price").html(`<h3>Your total price will be $${SandwichMaker.showTotal()}</h3>`);
	SandwichMaker.removeTopping(meatPrice);
	SandwichMaker.removeTopping(breadPrice);	
});








