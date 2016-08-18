$(document).ready(function(){
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 850, 'swing', function () {
	        window.location.hash = target;
	    });
	});
});
$(document).scroll(function(){
		$('.bar').toggleClass('scrolled', $(this).scrollTop() > 1);
});
