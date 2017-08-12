
$(document).ready(function() {
	$('.Page').hide();
	$('.Page1').show();
	$('.portfolio').css("font-weight", "Bold");
});

$('.about').click(function(e) {
	e.preventDefault();
	$('.Page').hide();
	$('.Page2').show();
	$('.about').css("font-weight", "Bold");
	$('.portfolio').css("font-weight", "normal");
});

$('.portfolio').click(function(e) {
	e.preventDefault();
	$('.Page').hide();
	$('.Page1').show();
	$('.portfolio').css("font-weight", "Bold");
	$('.about').css("font-weight", "normal");
});

$('.next').click(function(e){
 $('.gallery-wrapper').css("left", "-=600px");
});

$('.previous').click(function(e){
 $('.gallery-wrapper').css("left", "+=600px");
});