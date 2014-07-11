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

	$("a[href^='#']").on('click', function(e){
		e.preventDefault();
		var target = $(this).attr('href');
		if (target != '#') {
			$('body').scrollTo( $(target),{offsetTop : '-20'} );
		}
	});
});

$(document).ready(function(){


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

});