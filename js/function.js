const color = new Array("greensea", "nephritis", "pumpkin", "pomegranate", "belizehole", "wisteria");

function pickColor() {
	colorRand = color[Math.floor((Math.random() * color.length))];

	return colorRand;
}

$(document).ready(function() {
	var colorPicked = "";

	$('.nav li').click(function(e) {
		$(this).navigate();
	});

	$('#nav-left').click(function(e) {
		var prev = $('.navbar-nav > .active').prev();

		if(prev.length == 0) {
			$('.nav li').last().navigate();
		} else {
			prev.navigate();
		}
	});

	$('#nav-right').click(function(e) {
		var next = $('.navbar-nav > .active').next();

		if(next.length == 0) {
			$('.nav li').first().navigate();
		} else {
			next.navigate();
		}
	});

	$('.select-square').click(function(e) {
		$('.select-pane').children().removeClass('active')
		$(this).addClass('active');
		$(this).selectContent('.select-exp');
	});

	$('.flat-button').click(function(e) {
		$('.flat-button').removeClass('active');
		$(this).addClass('active');
		$(this).selectContent('.select-list')
	});

	$('.select-list li').click(function(e) {
		$('.select-list li').removeClass('active');
		$(this).addClass('active');
	});

	$.fn.selectContent = function(contentClass) {
		var index = jQuery(this).index();

		var selectedContent = jQuery(contentClass + '.content-selector > div:nth-child(' + (index + 1) + ')');

		jQuery(contentClass + '.content-selector').children().removeClass('display');
		jQuery(contentClass + '.content-selector').children().addClass('hidden');

		selectedContent.removeClass('hidden');
		selectedContent.addClass('display');
	};

	$.fn.navigate = function( $ ) {
		jQuery('.text-colored').removeClass(colorPicked + '-text');
		jQuery('.colored').removeClass(colorPicked);

		colorPicked = pickColor();

		jQuery('.text-colored').addClass(colorPicked + '-text');
		jQuery('.colored').addClass(colorPicked);

		jQuery('.nav').children().removeClass();
		jQuery(this).addClass('active');

		jQuery(this).selectContent('.select-content');
	};

	var $home = $('.nav li').first();
	$home.navigate();
});
