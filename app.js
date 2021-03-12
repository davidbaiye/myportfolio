let nav = document.querySelector('.nav-links');
let allanchortags = document.querySelectorAll('.nav-links ul li a');
function openmenu() {
		nav.style.right = '0';
		allanchortags.forEach(anchortag => {
				anchortag.addEventListener('click',() => {
				   closemenu();
		   });
		});
}
window.addEventListener('scroll',() => {
		if(nav.style.right !== '') {
					closemenu();
		}
});
function closemenu() {
		nav.style.right = '-200px';
}