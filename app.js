
let left = 0;
var tl = new TimelineLite();

$(document).ready(function() {
	$('.Page').hide();
	$('.Page1').show();
	$('.portfolio').css("font-weight", "Bold");
	TweenLite.from('.Portfolio_Container', 1, {autoAlpha:0, delay:.5});
	TweenMax.staggerFrom('header', 1, {scale:0, autoAlpha:0}, 0.2);
	TweenMax.staggerFrom('.AboutPortfolio', 1, {scale:0, autoAlpha:0}, 0.2);
});

$('.about').click(function(e) {
	e.preventDefault();
	$('.Page').hide();
	$('.Page2').show();
	$('.about').css("font-weight", "Bold");
	$('.portfolio').css("font-weight", "normal");
	TweenMax.staggerFrom('header', 1, {scale:0, autoAlpha:0}, 0.2);
	TweenMax.staggerFrom('.AboutPortfolio', 1, {scale:0, autoAlpha:0}, 0.2);
	TweenLite.from('.1', 1, {autoAlpha:0, delay:.25});
	TweenLite.from('.2', 1, {autoAlpha:0, delay:.5});
	TweenLite.from('.3', 1, {autoAlpha:0, delay:1});
	TweenLite.from('.About_Title', 1, {autoAlpha:0, delay:.5});
});

$('.portfolio').click(function(e) {
	e.preventDefault();
	$('.Page').hide();
	$('.Page1').show();
	$('.portfolio').css("font-weight", "Bold");
	$('.about').css("font-weight", "normal");
	TweenLite.from('.Portfolio_Container', 1, {autoAlpha:0, delay:.5});
	TweenMax.staggerFrom('header', 1, {scale:0, autoAlpha:0}, 0.2);
	TweenMax.staggerFrom('.AboutPortfolio', 1, {scale:0, autoAlpha:0}, 0.2);
});

$('.next').click(function(e){
 //$('.gallery-wrapper').css("left", "-=600px");
 TweenMax.to('.gallery-wrapper', 0.7, {left:'-=600px', ease:Back.easeOut});
});

$('.previous').click(function(e){
 //$('.gallery-wrapper').css("left", "+=600px");
 TweenMax.to('.gallery-wrapper', 0.7, {left: '+=600px', ease:Back.easeOut});
});

