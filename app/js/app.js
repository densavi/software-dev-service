// // Import vendor jQuery plugin example
// import '~/app/libs/mmenu/dist/mmenu.js'

import $ from 'jQuery';

document.addEventListener('DOMContentLoaded', () => {

	$('.js-menu').on('click', function(e) {
		e.preventDefault();
		$(this).toggleClass('active');
	})

})
