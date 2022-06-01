/* ###################################################
		Slow Scroll Function
################################################### */

jQuery(document).ready(function(){
	jQuery('#portfolio li a').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    jQuery('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});
});


/* ###################################################
		Portfolio Section
################################################### */

//Portfolio Function
jQuery(function(){
  jQuery('#portfolio').mixitup({
    targetSelector: '.item',
    transitionSpeed: 450
  });
});


// Portfolio Hover Function
$(window).load(function() {
	$('#portfolio li').directionalHover();
});
	
!function(a){a.fn.directionalHover=function(b){function c(a,b,c,e,f,g,h,i){var n=0;g/2>=e-i&&(n^=j),c-h>=f/2&&(n^=k),e-i>g/2&&(n^=l),f/2>c-h&&(n^=m),d(n,a,b,c-h,e-i,f/2,g/2)}function d(a,b,c,d,i,j,k){e(a,n)?f(d,i,j,k)?h(b,c,0,2*-j):h(b,c,2*-k,0):e(a,o)?g(d,i,j,k)?h(b,c,2*-k,0):h(b,c,0,2*j):e(a,p)?g(d,i,j,k)?h(b,c,0,2*-j):h(b,c,2*k,0):e(a,q)&&(f(d,i,j,k)?h(b,c,2*k,0):h(b,c,0,2*j))}function e(a,b){return(a&b)===b}function f(a,b,c,d){return 0>d*a-c*b}function g(a,b,c,d){return 0>c*(b-d)+d*a-c*d}function h(a,b,c,d){"in"===b?a.animate({top:c,left:d},0,function(){a.stop().animate({top:0,left:0},i.speed,i.easing)}):"out"===b&&a.animate({top:0,left:0},0,function(){a.stop().animate({top:c,left:d},i.speed,i.easing)})}var i=a.extend({},a.fn.directionalHover.defaults,b),j=1,k=2,l=4,m=8,n=j|m,o=j|k,p=l|m,q=l|k;return this.css({position:"relative",overflow:"hidden"}),this.find("."+i.overlay).css({position:"absolute",top:"-100%"}),this.each(function(){var b=a(this);b.hover(function(a){c(b.find("."+i.overlay),"in",a.pageX,a.pageY,b.width(),b.height(),Math.floor(b.offset().left),b.offset().top)},function(a){c(b.find("."+i.overlay),"out",a.pageX,a.pageY,b.width(),b.height(),Math.floor(b.offset().left),b.offset().top)})})},a.fn.directionalHover.defaults={overlay:"dh-overlay",easing:"swing",speed:400}}(jQuery);	


//Show On Click
jQuery(document).ready(function(e) {
    jQuery('.project-detail-main').hide();
    jQuery('#latest-project-detail-div .container').hide();
	
	jQuery('#portfolio li a').click(function(e) {
		var thecurrentid = (this).id;
		jQuery('#latest-project-detail-div .container').show();
	    jQuery('.project-detail-main').hide();
        
		jQuery('.'+thecurrentid+'-detail').show();
    });
	
});


// Stop Auto scroll Slider of Portfolio detail
	
jQuery(document).ready(function($) {      
	$('.latest-project-detail .carousel').carousel({interval: false});
});




/* ###################################################
		Why Choose Us Section
################################################### */
jQuery(document).ready(function(e) {
    jQuery('.why-choose-detail').hide();
	jQuery('#work_us_detail').show();
	
	jQuery('.why-choose-btns-main li').click(function(e) {
        jQuery('.why-choose-btns-main li').removeClass('active');
		jQuery('.why-choose-detail').hide();
		
		var contentPanelClass = jQuery(this).attr("class");
		jQuery('.'+contentPanelClass).addClass('active');
		
		jQuery('#'+contentPanelClass+'_detail').show();
    });
});


/* ###################################################
		Main Slider Active Thumb
################################################### */

// Main Slider Active Thumb
jQuery(document).ready(function(e) {
    jQuery('.main-thumb-ul li:first-child').addClass('active-thumb');
	
	jQuery('.main-thumb-ul li').click(function(e) {
		jQuery('.main-thumb-ul li').removeClass('active-thumb');
        jQuery(this).addClass('active-thumb');
    });
});

/* #####################################################
		Footer Min Height 
###################################################### */
jQuery(document).ready(function(e) {
    var thefirstheight = jQuery('.footer-section-first').height()
	var toaddheight = thefirstheight + 100;
	
	jQuery('.footer-section').css('min-height', toaddheight+'px');
});


/* ##################################################
		Who We Are Image On Scroll
################################################## */
jQuery(document).ready(function(e) {
    wH = jQuery(window).height()/3,
	// About section
	jQuery(window).scroll(function() {
	   var about = jQuery('.what-we-do-images').offset().top,
		   wS = jQuery(this).scrollTop();
	   if (wS > (about-wH)){
		   jQuery('.what-we-do-images img').removeClass('who-we-are-top-image');
		   jQuery('.what-we-do-images img').removeClass('who-we-are-bottom-image');
	   }
	});
	
});



/* ##################################################
		About Us page Number Moving
################################################## */
jQuery(document).ready(function(e) {
// Get Values and Numbers
	var wH = jQuery(window).height()/1.5;
	var firstendvalue = jQuery('#first-value').data('id');
	var secnodendvalue = jQuery('#second-value').data('id');
	var thirdendvalue = jQuery('#third-value').data('id');
	var fourthendvalue = jQuery('#fourth-value').data('id');
	
	jQuery(document).scroll(function() {
	   var video = jQuery('.counter-section-main').offset().top,
		   wS = jQuery(this).scrollTop();
	   	   var skilles = jQuery('.counter-section-main').offset().top;
	   if (wS > (video-wH)){
			jQuery('.counter-section-main').trigger('click');
	   }
	});



    
	jQuery('.counter-section-main').click(function( event ) {
		
		if (jQuery(this).attr('data-once')!='already' ){
			jQuery(document).ready(function(e) {
				// First Value Animation
				jQuery({someValue: 0}).animate({someValue: firstendvalue}, {
				duration: 3000,
				easing:'swing', // can be anything
				step: function() { // called on every step
				// Update the element's text with rounded-up value:
					//jQuery('#first-value').text(commaSeparateNumber(Math.round(this.someValue)));
					jQuery('#first-value').text(Math.round(this.someValue));

					}
				});
	
				// Second Value Animation
				jQuery({someValue: 0}).animate({someValue: secnodendvalue}, {
				duration: 3000,
				easing:'swing', // can be anything
				step: function() { // called on every step
				// Update the element's text with rounded-up value:
					//jQuery('#first-value').text(commaSeparateNumber(Math.round(this.someValue)));
					jQuery('#second-value').text(Math.round(this.someValue));

					}
				});
	
				// Third Value Animation
				jQuery({someValue: 0}).animate({someValue: fourthendvalue}, {
				duration: 3000,
				easing:'swing', // can be anything
				step: function() { // called on every step
				// Update the element's text with rounded-up value:
					//jQuery('#first-value').text(commaSeparateNumber(Math.round(this.someValue)));
					jQuery('#third-value').text(Math.round(this.someValue));

					}
				});
	
				// Fourth Value Animation
				jQuery({someValue: 0}).animate({someValue: thirdendvalue}, {
				duration: 3000,
				easing:'swing', // can be anything
				step: function() { // called on every step
				// Update the element's text with rounded-up value:
					//jQuery('#first-value').text(commaSeparateNumber(Math.round(this.someValue)));
					jQuery('#fourth-value').text(Math.round(this.someValue));

					}
				});
				// Increament Function		
				function commaSeparateNumber(val){
					while (/(\d+)(\d{3})/.test(val.toString())){
					val = val.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "jQuery1,");
				}
					return val;
				}
			
			});
		
			jQuery(this).attr('data-once', 'already');
		}
	  
	});

});



jQuery(document).ready(function(e) {
	jQuery(".dropdown").hover(            
		function() {
			jQuery('.dropdown-menu', this).stop( true, true ).fadeIn("fast");
			jQuery(this).toggleClass('open');
			jQuery('b', this).toggleClass("caret caret-up");                
		},
		function() {
			jQuery('.dropdown-menu', this).stop( true, true ).fadeOut("fast");
			jQuery(this).toggleClass('open');
			jQuery('b', this).toggleClass("caret caret-up");                
		});
});


/* ###################################################
		FAQs Page
################################################### */
jQuery(document).ready(function(e) {
    jQuery('.faq-answer-div').hide();
	
	//on( "dblclick"
	jQuery('.faq-question-div').on("click" ,function(e) {
        var theid = jQuery(this).attr('id');
		jQuery('.faq-question-div').removeClass('active-question');	
			

		jQuery('.faq-answer-div').hide('slow');
		
		if ( jQuery('#'+theid+'-detail').css('display') == 'none' ){
			jQuery(this).addClass('active-question');
			jQuery('#'+theid+'-detail').show('slow');
		}
    });
});