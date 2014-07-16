//= require jquery
$.fn.scrollTo = function( target, options, callback ){
	if(typeof options == 'function' && arguments.length == 2){ callback = options; options = target; }
	var settings = $.extend({
		scrollTarget  : target,
		offsetTop     : 50,
		duration      : 500,
		easing        : 'swing'
	}, options);
	return this.each(function(){
		var scrollPane = $(this);
		var scrollTarget = (typeof settings.scrollTarget == "number") ? settings.scrollTarget : $(settings.scrollTarget);
		var scrollY = (typeof scrollTarget == "number") ? scrollTarget : scrollTarget.offset().top + scrollPane.scrollTop() - parseInt(settings.offsetTop);
		scrollPane.animate({scrollTop : scrollY }, parseInt(settings.duration), settings.easing, function(){
			if (typeof callback == 'function') { callback.call(this); }
		});
	});
}

$(function(){
	$("a.lang-en").on('click', function(e){
		e.preventDefault();
		$('body').removeClass('pt').addClass('en');
	});
	$("a.lang-pt").on('click', function(e){
		e.preventDefault();
		$('body').removeClass('en').addClass('pt');
	});

	$("a[href^='#']").on('click', function(e){
		e.preventDefault();
		var target = $(this).attr('href');
		if (target != '#') {
			$('body').scrollTo( $(target),{offsetTop : '-20'} );
		}
	});
});

$(document).ready(function() {

	// if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
	if ( $(window).width() > '768' ) {
		$('.parallax').each(function() {
			var $obj = $(this);
			
			$(window).scroll(function() {
				// $obj.css( 'top', '808px' );
				$obj.css( 'top', $obj.height()-700 );
				var initial = $obj.offset().top;
				var yPos = ($(window).scrollTop() - $obj.offset().top / $obj.data('speed'));
				var bgpos = -yPos;// + 'px';
				$obj.css('top', initial+bgpos );
			});

		});
	}

	var skills = $('#skills');
	var skillsOffset = $('#skills').offset().top;
	var skillsSeen = skills.height()+skillsOffset;
	$(window).scroll(function() {
		if ( $(this).scrollTop() + $(this).height() > skillsSeen ) {
			$('.skills-unit').each(function() {
				var skill = $(this).find('p');
				var skillSize = skill.width();
				var skillValue = $(this).data('skill');
				var total = (skillSize*skillValue)/10;
				
				skill.find('span').css('width',total);

			});
		}
	});

});