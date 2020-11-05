
jQuery(document).ready(function() {	
	
    /*
        Background slideshow
    */
	$('.banner-area').backstretch([
	                     "1bs/img/bg/1.jpg"
	                   , "1bs/img/bg/2.jpg"
	                   , "1bs/img/bg/3.jpg"
					   , "1bs/img/bg/4.jpg"
	                   , "1bs/img/bg/5.jpg"
	                  ], {duration: 3000, fade: 750});
					 
});
		
	// smooth scrolling	
		$(function() {
	  $('a[href*=#]:not([href=#])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {

	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      if (target.length) {
	        $('html,body').animate({
	          scrollTop: target.offset().top
	        }, 1000);
	        return false;
	      }
	    }
	  });
	});
	