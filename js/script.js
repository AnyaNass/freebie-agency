function toggleTheme(theme) {
	const body = document.body;
	body.classList.remove('dark', 'light')
	if (theme == 'dark') {
		 body.classList.add('dark')
	} else {
		 body.classList.add('light')
	}
}

$('.slider_bunner').slick({
	dots: true,
	infinite: true,
	speed: 300,
	slidesToShow: 1,
});


$('.blog').slick();