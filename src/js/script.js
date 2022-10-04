const question = document.querySelectorAll('.section8__question')
const items = document.querySelectorAll('.section8__item')

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