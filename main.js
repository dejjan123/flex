
$(document).ready(function(){

		var headerHight = $('ul').outerHeight();  //brisi

	$('a[href^="#"]').on('click',function(e){ 	//anchor tag who starts with #
		e.preventDefault();						//klik na link da ne raboti

		var target = this.hash;		//element that have #
		var $target = $(target);

		//Scroll and show hash
		$('html, body').animate({
			'scrollTop': $target.offset().top - headerHight
		}, 1000);
	});  


/*
	//----------------Drug nacin-----------//

		//ul hight  
		var headerHight = $('ul').outerHeight();

	$('.slide').click(function(e){

		var linkHref = $(this).attr('href');


		$('html, body').animate({
			scrollTop: $(linkHref).offset().top - headerHight
		}, 1000);

		e.preventDefault();
	});     */
});

 