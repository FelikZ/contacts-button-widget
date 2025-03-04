window.contactWidgetInit = function () {
	var contact_widget_button = document.getElementById('contact_widget_button');
	contact_widget_button.addEventListener('click', function () {
		this.classList.toggle('clicked');

		document.querySelector('.contact-widget-dropdown').classList.toggle('expanded');
		document.querySelectorAll('.contact-widget-icon .fa-envelope, #back-top').forEach(function (el) {
			el.classList.remove('d-none');
		});
		document.querySelectorAll('.contact-widget-icon .chat-icon, #back-top').forEach(function (el) {
			el.classList.toggle('d-none');
		});
		document.querySelectorAll('.contact-widget-icon .contact-widget-text').forEach(function (el) {
			el.classList.toggle('d-none');
		});
		document.getElementById('contact_widget_substrate').classList.toggle('active');
	});

	document.getElementById('contact_widget_substrate').addEventListener('click', function () {
		this.classList.remove('active');
		document.querySelector('.contact-widget-dropdown').classList.remove('expanded');
		document.querySelectorAll('.contact-widget-icon .fa-envelope, #back-top').forEach(function (el) {
			el.classList.remove('d-none');
		});
		document.querySelectorAll('.contact-widget-icon .chat-icon, #back-top').forEach(function (el) {
			el.classList.remove('d-none');
		});
		document.querySelectorAll('.contact-widget-icon .contact-widget-text').forEach(function (el) {
			el.classList.toggle('d-none');
		});
		document.getElementById('contact_widget_button').classList.remove('clicked');
	});

	document.querySelector('.contact-widget-dropdown').addEventListener('click', function (e) {
		e.stopPropagation();
	});

	contact_widget_button.style.display = '';
};

window._contactWidgetInit = function () {
    if (document.readyState != 'loading'){
        window.contactWidgetInit();
    } else {
        document.addEventListener('DOMContentLoaded', window.contactWidgetInit);
    }
}

window._contactWidgetInit();