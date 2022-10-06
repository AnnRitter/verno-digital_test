const swiper = new Swiper('.swiper', {
	slidesPerView: 2,
	spaceBetween: 20,
	direction: 'horizontal',
	loop: true,
	speed: 400,
	
	autoplay: {
		delay: 1000,
	},
	breakpoints: {
	
			900: {
				spaceBetween: 66,
	slidesPerView: 6,
			},
	}

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

const menu = document.querySelector('.header__burger-menu')
const burger = document.querySelector('.header__burger')
const cross_burger = document.querySelector('.header__burger-cross')

burger.addEventListener('click', function() {
	menu.classList.add('open-burger')
})

cross_burger.addEventListener('click', function() {
	menu.classList.remove('open-burger')
})