(function ($) {
	"use strict";

    jQuery(document).ready(function($){
    	$('#clock').countdown('2020/11/06', function(event) {
		  $(this).html(event.strftime('<span class="countdown-wrap"><span class="single-countdown">%w <br /><span>Weeks </span></span><span class="single-countdown">%d <br /><span>Days </span></span><span class="single-countdown">%H <br /><span>Hours</span></span><span class="single-countdown">%M <br /><span>Minutes</span></span><span class="single-countdown">%S <br /><span>Seconds</span></span></span>'));
		});

               


    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	