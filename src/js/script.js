const swiper = new Swiper('.swiper', {

	direction: 'horizontal',
	loop: true,
	speed: 400,
	spaceBetween: 66,
	slidesPerView: 6,
	autoplay: {
		delay: 1000,
	},

});



const question = document.querySelectorAll('.section8__question')
const items = document.querySelectorAll('.section8__item')
console.log(question);
question.forEach(element => {
	element.addEventListener('click', toggleAnswer)
})

function toggleAnswer() {
	items.forEach(item => {
		if (!this == item) {
			item.classList.remove('active')
		}
	})

	if (this.closest('.section8__item').classList.contains('active')) {
		this.closest('.section8__item').classList.remove('active')
	} else {
		this.closest('.section8__item').classList.add('active')
	}
}

const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')
const buttons = document.querySelectorAll('.modal_available')
const cross = document.querySelector('.modal__cross')

buttons.forEach(button => {
	console.log(button);
	button.addEventListener('click', function () {
		overlay.classList.add('open');
		modal.classList.add('open');
	})
})

overlay.addEventListener('click', closeModal)
cross.addEventListener('click', closeModal)

function closeModal() {
	overlay.classList.remove('open');
	modal.classList.remove('open');
}