$(function(){

	$('html, body').on('click', function(e){
		if(e.target == document.documentElement){
			$('html').removeClass('open-sidebar');
			$('.sidebar-link').show();
		}
	});

	$('.user-info-show').on('click', function(){
		if($('#caret').hasClass("fa-caret-down")){
			$('#caret').removeClass("fa-caret-down").addClass("fa-caret-right").css("color", "#fff");
			$('.header-userarea').addClass('header-userarea-moved');
		} else {
			$('#caret').removeClass("fa-caret-right").addClass("fa-caret-down").css("color", "#5d5d5d");
			$('.header-userarea').removeClass('header-userarea-moved');
		}
	});

	$('.sidebar-link').on('click', function(){
		$('html').addClass('open-sidebar');
		$('.sidebar-link').hide();
	});
})