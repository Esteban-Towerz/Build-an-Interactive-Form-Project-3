'use strict';
/////////////////////////////////////////////////////////////////////////
/////////////////// Set focus on the first text field ///////////////////
/////////////////////////////////////////////////////////////////////////

$(document).ready( function(){
	$("#name").focus();
	$("#color").html("<option><-- Please select a T-shirt theme</option>");
    $("form").css('display', 'none').fadeIn(1000);

//////////////////////////////////////////////////////////
/////////////////// ”Job Role” section ///////////////////
//////////////////////////////////////////////////////////

$("fieldset:nth-of-type(1)").append('<input type="text" id="other-title" name="job_role" placeholder="Your Job Role">');
$("#other-title").hide();

// Change function to display other-field
$( "#title" ).change( function() {
	if ($("#title option:selected").val() === "other") {
		$("#other-title").show().css('display', 'none').fadeIn(400);
	} else {
		$("#other-title").hide();
	}
});


//////////////////////////////////////////////////////////////
/////////////////// ”T-Shirt Info” section ///////////////////
//////////////////////////////////////////////////////////////

// Return true/false for form validation in the console
var shirtSelected = false;
// The color option for that particular t-shirt  will be listed respectively next to that selection
$( "#design" ).change( function() {
	if ($("#design option:selected").val() === "js puns") {
		$("#color").html('<option value="cornflowerblue">Cornflower Blue</option><option value="darkslategrey">Dark Slate Grey</option><option value="gold">Gold</option>');
		shirtSelected = true;
		return console.log(shirtSelected);
	} else if ($('#design option:selected').val() === "heart js") {
		$("#color").html('<option value="tomato">Tomato</option><option value="steelblue">Steel Blue</option><option value="dimgrey">Dim Grey</option>');
		shirtSelected = true;
		return console.log(shirtSelected);
	} else {
		$("#color").html('<option><--Please select a T-shirt theme</option>');
		shirtSelected = false;
		return console.log(shirtSelected);
	}
});


// $('#myCheckbox').change(function () {
//     if ($(this).attr("checked")) {
//         // checked
//         return;
//     }
//     // not checked
// });

// $( "td:lt(3)" ).show(); don't work
// $( "td:lt(-3)" ).show(); don't work

/////////////////////////////////////////////////////////////////////////
/////////////////// ”Register for Activities” section ///////////////////
/////////////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////
/////////////////// ”Total cost” section ///////////////////
////////////////////////////////////////////////////////////

var $all = $("input[name='all']");
var $jsFrameworks = $("input[name='js-frameworks']");
var $jsLibs = $("input[name='js-libs']");
var $express = $("input[name='express']");
var $node = $("input[name='node']");
var $buildTools = $("input[name='build-tools']");
var $npm = $("input[name='npm']");

var totalCost = 0;

$(".activities").append("<div id='total'></div>");

var updateCost = function (cost) {
	totalCost += cost;
	document.getElementById('total').innerHTML = "Total: $" + totalCost;
};


///////////////////////////////////////////////
////// ”Register for Activities” section //////
///////////////////////////////////////////////

var all = $("input[name='all']");
var jsFrameworks = $("input[name='js-frameworks']");
var jsLibs = $("input[name='js-libs']");
var express = $("input[name='express']");
var node = $("input[name='node']");
var buildTools = $("input[name='build-tools']");
var npm = $("input[name='npm']");

// Add Total Cost

var totalCost = 0;
$('.activities').append('<div id=cost></div>');

// updated cost function to use in each of the activities with their own costs
var costUpdated = function(cost) {
	totalCost += cost;
	document.getElementById("cost").innerHTML = "Total: $" + totalCost;
};

all.change( function() {
	if($(this).prop("checked")) {
		costUpdated(200);
	} else {
		costUpdated(-200);
	}
});

jsFrameworks.change(function () {
	if($(this).prop("checked")) {
		express.prop('disabled', true);
		express.parent().addClass('disabled');
		express.parent().append('<span class="conflict">&nbsp;&nbsp;Same Date!</span>')
		costUpdated(100);
	} else {
		express.prop('disabled', false);
		express.parent().removeClass('disabled');
		express.parent().find('.conflict').remove();
		costUpdated(-100);
	}
});

express.change(function () {
	if ($(this).prop("checked")) {
		jsFrameworks.prop("disabled", true);
		jsFrameworks.parent().addClass("disabled");
		jsFrameworks.parent().append('<span class="conflict">&nbsp;&nbsp;Same Date!</span>')
		costUpdated(100);
	} else {
		jsFrameworks.prop("disabled", false);
		jsFrameworks.parent().removeClass("disabled");
		jsFrameworks.parent().find('.conflict').remove();
		costUpdated(-100);
	}
});


jsLibs.change(function () {
	if ($(this).prop("checked")) {
		node.prop("disabled", true);
		node.parent().addClass("disabled");
		node.parent().append('<span class="conflict">&nbsp;&nbsp;Same Date!</span>')
		costUpdated(100);
	} else {
		node.prop("disabled", false);
		node.parent().removeClass("disabled");
		node.parent().find('.conflict').remove();
		costUpdated(-100);
	}
});

node.change(function () {
	if ($(this).prop("checked")) {
		jsLibs.prop("disabled", true);
		jsLibs.parent().addClass("disabled");
		jsLibs.parent().append('<span class="conflict">&nbsp;&nbsp;Same Date!</span>')
		costUpdated(100);
	} else {
		jsLibs.prop("disabled", false);
		jsLibs.parent().removeClass("disabled");
		jsLibs.parent().find('.conflict').remove();
		costUpdated(-100);
	}
});

buildTools.change(function () {
	if ($(this).prop("checked")) {
		costUpdated(100);
	} else {
		costUpdated(-100);
	}
});

npm.change(function () {
	if ($(this).prop("checked")) {
		costUpdated(100);
	} else {
		costUpdated(-100);
	}
});


////////////////////////////////////
////// ”Payment info” section //////
////////////////////////////////////

// Hide everything but credit card by default initially

var $paypal = $( "p:contains('PayPal')" );
var $bitcoin = $( "p:contains('Bitcoin')" );

$paypal.hide();
$bitcoin.hide();

$('#payment').val('credit card');

$('#payment').change(function(){
	if ($("#payment option:selected").val() === 'paypal') {
		$paypal.show().css('display', 'none').fadeIn(400);
		$('#credit-card').hide();
		$bitcoin.hide();
	} else if ($("#payment option:selected").val() === 'bitcoin') {
		$bitcoin.show().css('display', 'none').fadeIn(400);
		$('#credit-card').hide();
		$paypal.hide();
	} else {
		$('#credit-card').show().css('display', 'none').fadeIn(400);
		$bitcoin.hide();
		$paypal.hide();
	}
});

///////////////////////////////////////
////// ”Form Validation” section //////
///////////////////////////////////////

// Add Error/Success Indicators on Keyup for fun
$('#name, #mail, #cc-num, #zip, #cvv, #other').keyup(function (){
	if ( $(this).val() === "")  {
		$(this).removeClass('success');
		$(this).addClass('error');
	} else {
		$(this).removeClass('error');
		$(this).addClass('success');
	}
});

var emailAddress = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
var creditCard = /\b\d{4}(| |-)\d{4}\1\d{4}\1\d{4}\b/g;
var zipCode = /^\d{5}(?:[-\s]\d{4})?$/;
var errorMessage = " ";

$('form').prepend('<p id="error-message"></p>');
$('#error-message').hide();
$('form').submit(function (e){
	e.preventDefault();

	if ( $('#name').val() === "" ) {
		$("html, body").animate({scrollTop: 0}, "slow");
		errorMessage = "<h2>Woow!</h2> Ensure you have entered all required fields.";
		$('#name').focus().addClass('error');
		console.log("Error!");
	} else if ( !emailAddress.test($('#mail').val()) ) {
		$("html, body").animate({scrollTop: 0}, "slow");
		errorMessage = "<h2>Woow!</h2> Enter a valid email.";
		$('#mail').focus().addClass('error');
	} else if ( $(".activities > label > input:checked").length === 0 ) {
		$("html, body").animate({scrollTop: 0}, "slow");
		errorMessage = "<h2>Woow!</h2> Select at least one activity.";
		$('.activities').focus();
	} else if ( $("#payment").val() === "select_method" )  {
		$("html, body").animate({scrollTop: 0}, "slow");
		errorMessage = "<h2>Woow!</h2>Select a payment method.";
		$('#payment').focus().addClass('error');
	} else if ( $("#payment").val() === "credit card" && !creditCard.test($("#cc-num").val()) )  {
		$("html, body").animate({scrollTop: 0}, "slow");
		errorMessage = "<h2>Error!</h2>Enter a valid credit card number.";
		$('#cc-num').focus().addClass('error');
	} else if ( $("#payment").val() === "credit card" && !zipCode.test($("#zip").val()) )  {
		$("html, body").animate({scrollTop: 0}, "slow");
		errorMessage = "<h2>Error!</h2>Enter your zip code.";
		$('#zip').focus().addClass('error');
	} else if ( $("#payment").val() === "credit card" && $("#cvv").val().length < 3)  {
		$("html, body").animate({scrollTop: 0}, "slow");
		errorMessage = "<h2>Error!</h2>Please enter a 3 digit CVV";
		$('#cvv').focus().addClass('error');
	} else {
		$("html, body").animate({scrollTop: 0}, "slow");
		errorMessage = "";
		alert("Thanks for registering! We'll see you at the Con!");
	}
	document.getElementById('error-message').innerHTML = errorMessage;
	$('#error-message').show();
});


}); // End Document ready



// $("button").bind("click", validate);

/////////////////// USED SELECTORS ///////////////////

// - $( ".container" ).prepend( $( "h2" ) );
// - $( "h2").prependTo( $( ".container" ) );


// - $("#color option:nth-of-type(n+4)").hide();
// - $("#color option:nth-of-type(-n+3)").hide();

// - $("fieldset:eq(0)")
// - $("fieldset:nth-of-type(1)")
// - $( "<input>" ).is( "[type=text]" );
// - #title option:nth-child(1n)
// - $( "#title" ).find("option").eq( 5 ).change(function() {
// - $( "input[type=checkbox]" )
// - $("select option:selected").attr("selected", "selected");
// - $( "ul.level-2" ).children().css( "background-color", "red" );
// - var allInputs = $( ":input" );
// - var formChildren = $( "form > *" );

// if ($( "input[name~='frameworks']" ).is(':checked')) {
