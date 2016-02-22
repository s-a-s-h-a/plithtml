$(document).foundation();

$('.bxslider_one-page').bxSlider({
	mode: 'fade',
	captions: true
});

jQuery(document).ready(function( $ ) {
	$('.counter').counterUp({
		delay: 10,
		time: 1500
	});
});

var foo = $('#gallery');
foo.poptrox({
	usePopupNav:                true,
	windowMargin:               5,
	popupWidth:                 20,
	popupPadding:               5   

});