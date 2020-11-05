
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
					   , "1bs/img/bg/6.jpg"
	                   , "1bs/img/bg/7.jpg"
					   , "1bs/img/bg/8.jpg"
					   , "1bs/img/bg/9.jpg"
					   , "1bs/img/bg/10.jpg"
	                   , "1bs/img/bg/11.jpg"
					   , "1bs/img/bg/12.jpg"
	                   , "1bs/img/bg/13.jpg"
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
	