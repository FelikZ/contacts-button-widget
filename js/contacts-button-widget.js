/*********** [START] Contact widget button ***********/
window.contactWidgetInit = function() {
	$('#contact_widget_button').on('click', function() {
		$(this).toggleClass('clicked');
		$('.contact-widget-dropdown').toggleClass('expanded');
		$('.contact-widget-icon .fa-envelope, #back-top').toggleClass('d-none');
		$('.contact-widget-icon .contact-widget-text').toggleClass('d-none');
		$('#contact_widget_substrate').toggleClass('active');
	});

	$('#contact_widget_substrate').on('click', function() {
		$(this).removeClass('active');
		$('.contact-widget-dropdown').removeClass('expanded');
		$('.contact-widget-icon .fa-envelope, #back-top').removeClass('d-none');
		$('.contact-widget-icon .contact-widget-text').toggleClass('d-none');
		$('#contact_widget_button').removeClass('clicked');
	});

	$('.contact-widget-dropdown').click(function(e) {
		e.stopPropagation();
	});
};
$(document).ready(function() {
	window.contactWidgetInit();
});
/*********** [END] Contact widget button ***********/