$(document).ready(function(){
	$('ul.tabs li a:first').addClass('active');
	$('.secciones article').hide();
	$('.secciones article:first').hide();
	$('.secciones2 article').hide();
	$('.secciones2 article:first').hide();


	$('ul.tabs li a').click(function(){
		$('ul.tabs li a').removeClass('active');
		$(this).addClass('active');
		$('.secciones article').hide();
		$('.secciones2 article').hide();

		var activeTab = $(this).attr('href');
		$(activeTab).show().delay(30000).queue(function(n) {
  		$(this).hide(); n();});
		return false;
	});

});
