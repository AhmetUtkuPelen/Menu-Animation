const toggleButton = document.querySelector('.toggle')

const items = document.querySelectorAll('li')

toggleButton.addEventListener('click',() => {

    items[0].classList.toggle('active')
    items[1].classList.toggle('active')
    items[2].classList.toggle('active')
    items[3].classList.toggle('active')
    items[4].classList.toggle('active')

})