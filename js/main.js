$(function() {
	// Auto Play Modal Video
	
	$(".video").click(function() {
		var theModal = $(this).data("target"),
		videoSRC = $(this).attr("data-video"),
		videoSRCauto = videoSRC + "?modelstbranding=1&rel=0&controls=0&showinfo=0&html5=1&autoplay=1";
		$(theModal + ' iframe').attr('src', videoSRCauto);
		$(theModal + 'button.close').click(function() {
			$(theModal + 'iframe').attr('src',videoSRC);
		});
	});
});


// Photo Gallery

$(document).on('click', '[data-toggle="lightbox"]', function(event) {
 event.preventDefault();
 $(this).ekkoLightbox();
});

//Slider 

$('.slider').slick({
	infinite: true,
	slidesToShow: 1,
	slidesToScroll: 1
});



