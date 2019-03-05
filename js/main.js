
    $(document).ready(function(){
	$('a.scroll-link').click(function(e){
		e.preventDefault();
		$id = $(this).attr('href');
		$('html, body').animate({
			scrollTop: $($id).offset().top -100
		}, 750);
	});	
});
  