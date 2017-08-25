
let left = 0;
var tl = new TimelineLite();
let screens = 0;

$(document).ready(function() {
	$('.Page').hide();
	$('.Page2').show();
	$('.portfolio').css("color", "#333");
	$('.about').css("color", "#00d1b2");
	$('.previous').hide();
	TweenLite.from('.Portfolio_Container', 1, {autoAlpha:0, delay:.5});
	TweenMax.from('header', 1, {scale:0, autoAlpha:0}, 0.2);
	TweenMax.from('.AboutPortfolio', 1, {scale:0, autoAlpha:0}, 0.2);
	TweenLite.from('.1', 1, {autoAlpha:0, delay:.25});
	TweenLite.from('.2', 1, {autoAlpha:0, delay:.5});
	TweenLite.from('.3', 1, {autoAlpha:0, delay:1});
	aboutListeners();
	portfolioListeners();
	buttonListeners();
});

function aboutListeners() {
	$('.about').on('mouseover', function(e){
		TweenLite.to(this, 0.7, {color: '#00d1b2'})
	});
	$('.about').on('mouseleave', function(e){
		TweenLite.to(this, 0.7, {color: '#333'})
	});
}

function portfolioListeners() {
	$('.portfolio').on('mouseover', function(e){
		TweenLite.to(this, 0.7, {color: '#00d1b2'})
	});
	$('.portfolio').on('mouseleave', function(e){
		TweenLite.to(this, 0.7, {color: '#333'})
	});
}

function buttonListeners() {
	$('.button').on('mouseover', function(e){
		TweenLite.to(this, 0.7, {color: '#00d1b2'})
	});
	$('.button').on('mouseleave', function(e){
		TweenLite.to(this, 0.7, {color: '#363636'})
	});
}

$('.about').click(function(e) {
	e.preventDefault();
	$('.Page').hide();
	$('.Page2').show();
	portfolioListeners();
	$('.about').off('mouseover');
	$('.about').off('mouseleave');
	$('.about').css({"font-weight": "normal", color: "#00d1b2"});
	$('.portfolio').css({"font-weight": "normal", color: "#333"});
	TweenMax.from('header', 1, {scale:0, autoAlpha:0});
	TweenLite.from('.1', 1, {autoAlpha:0, delay:.25});
	TweenLite.from('.2', 1, {autoAlpha:0, delay:.5});
	TweenLite.from('.3', 1, {autoAlpha:0, delay:1});
	TweenLite.from('.About_Title', 1, {autoAlpha:0, delay:.5});
	TweenMax.from('.AboutPortfolio', 1, {scale:0, autoAlpha:0});
});

$('.portfolio').click(function(e) {
	e.preventDefault();
	$('.Page').hide();
	$('.Page1').show();
	aboutListeners();
	$('.portfolio').off('mouseover');
	$('.portfolio').off('mouseleave');
	$('.portfolio').css({"font-weight": "normal", color: "#00d1b2"});
	$('.about').css({"font-weight": "normal", color: "#333"});
	TweenLite.from('.Portfolio_Container', 1, {autoAlpha:0, delay:.5});
	TweenMax.from('header', 1, {scale:0, autoAlpha:0.5});
	TweenMax.from('.AboutPortfolio', 1, {scale:0, autoAlpha:0});
});

$('.next').click(function(e){
	screens++;
 //$('.gallery-wrapper').css("left", "-=600px");
 	if(screens > 3){
 		screens = 0;
 		TweenMax.to('.gallery-wrapper', 0.7, {left:'0px', ease:Back.easeOut});
 	}else{
		TweenMax.to('.gallery-wrapper', 0.7, {left:'-=600px', ease:Back.easeOut});
	}
	if(screens > 0){
 		$('.previous').show();
 	}else{
 		$('.previous').hide();
 	}
});

$('.previous').click(function(e){
	screens--;
	if(screens <= 0){
		$('.previous').hide();
	}
 	//$('.gallery-wrapper').css("left", "+=600px");
 	TweenMax.to('.gallery-wrapper', 0.7, {left: '+=600px', ease:Back.easeOut});
});

