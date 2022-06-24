const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});

var skills = {
	ht: 95,
	js: 75,
	rc: 60,
	jq: 70,
	nd: 80,
	exp: 75,
	ad: 70
};

$.each(skills, function(key, value) {
  var skillbar = $("." + key);
  skillbar.animate(
{
	width: value + "%"
},
  3000,
  function() {
	  $(".speech-bubble").fadeIn();
  }
	);
}); 