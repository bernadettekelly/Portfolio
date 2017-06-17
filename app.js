$(document).ready(function() {
	$('.Page').hide();
	$('.Page1').show();
});

$('.about').click(function(e) {
	e.preventDefault();
	$('.Page').hide();
	$('.Page2').show();
});

$('.portfolio').click(function(e) {
	e.preventDefault();
	$('.Page').hide();
	$('.Page1').show();
});