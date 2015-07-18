const color = new Array("greensea", "nephritis", "pumpkin", "pomegranate", "belizehole", "wisteria");
const transAnimation = new Array(
	"animation-come-left", 
	"animation-leave-left",
	"animation-come-right",
	"animation-leave-right"
);
const transDelay = 1200;

var sleep = false;

function pickColor() {
	colorRand = color[Math.floor((Math.random() * color.length))];

	return colorRand;
}

$(document).ready(function() {
	var colorPicked = "";

	$('.extend.badge').hide();

	$('.extendable.fr').on('mouseenter', function() {
		$('.extend.badge.fr').stop();
		$('.extend.badge.fr').animate({width:'toggle'});
	}).on('mouseleave', function() {
		$('.extend.badge.fr').stop();
		$('.extend.badge.fr').animate({width:'toggle'});
	});
	
	$('.extendable.en').on('mouseenter', function() {
		$('.extend.badge.en').stop();
		$('.extend.badge.en').animate({width:'toggle'});
	}).on('mouseleave', function() {
		$('.extend.badge.en').stop();
		$('.extend.badge.en').animate({width:'toggle'});
	});

	$('.extendable.ch').on('mouseenter', function() {
		$('.extend.badge.ch').stop();
		$('.extend.badge.ch').animate({width:'toggle'});
	}).on('mouseleave', function() {
		$('.extend.badge.ch').stop();
		$('.extend.badge.ch').animate({width:'toggle'});
	});

	$('#nav-left').click(function(e) {
		var prev = $('.navbar-nav > .active').prev();

		if(!sleep) {
			if(prev.length == 0) {
				$('.nav li').last().navigate(1);
			} else {
				prev.navigate(1);
			}
			sleep = true;
			setTimeout(function() { sleep = false }, transDelay);
		}

	});

	$('#nav-right').click(function(e) {
		var next = $('.navbar-nav > .active').next();

		if(!sleep) {
			if(next.length == 0) {
				$('.nav li').first().navigate(0);
			} else {
				next.navigate(0);
			}
			sleep = true;
			setTimeout(function() { sleep = false }, transDelay);
		}
	});

	$('.select-square').click(function(e) {
		$('.select-panel').children().removeClass('active')
		$(this).addClass('active');
		$(this).selectContent('.select-exp');
	});

	$('.flat-button').click(function(e) {
		$('.flat-button').removeClass('active');
		$(this).addClass('active');
		$(this).selectContent('.select-list')
	});

	$('.interest-icon').click(function(e) {
		$('.interest-icon').removeClass('active');
		$(this).addClass('active');
		$(this).selectContent('.select-interest');
	});

	$.fn.selectContent = function(contentClass, lastIndex, direction) {
		var index = jQuery(this).index();

		var selectedContent = jQuery(contentClass + '.content-selector > div:nth-child(' + (index + 1) + ')');

		if(lastIndex >= 0) {
			var lastContent = jQuery(contentClass + '.content-selector > div:nth-child(' + (lastIndex + 1) + ')');

			if(direction == 0) {
				lastContent.addClass(transAnimation[3]);
				selectedContent.addClass(transAnimation[0]);
			} else {
				lastContent.addClass(transAnimation[1]);
				selectedContent.addClass(transAnimation[2]);
			}

			window.setTimeout(function() {
				jQuery(contentClass + '.content-selector').children().removeClass('display');
				jQuery(contentClass + '.content-selector').children().addClass('hidden');

				selectedContent.removeClass('hidden');
				selectedContent.addClass('display');

				}, (transDelay / 2)
			);

			window.setTimeout(function() {
				jQuery.each(transAnimation, function(i, anim) {
					jQuery('.animated').removeClass(anim);
				});

				}, transDelay
			);
		} else {
			jQuery(contentClass + '.content-selector').children().removeClass('display');
			jQuery(contentClass + '.content-selector').children().addClass('hidden');

			selectedContent.removeClass('hidden');
			selectedContent.addClass('display');
		}
	
	};

	$.fn.navigate = function(direction) {
		jQuery('.text-colored').removeClass(colorPicked + '-text');
		jQuery('.colored').removeClass(colorPicked);

		jQuery.each(transAnimation, function(i, anim) {
			jQuery('.animated').removeClass(anim);
		});

		lastIndex = jQuery('.nav .active').index();

		colorPicked = pickColor();

		jQuery('.text-colored').addClass(colorPicked + '-text');
		jQuery('.colored').addClass(colorPicked);

		jQuery('.nav').children().removeClass();
		jQuery(this).addClass('active');

		jQuery(this).selectContent('.select-content', lastIndex, direction);
	};

	var $home = $('.nav li').first();
	$home.navigate();
});
