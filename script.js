const slider = document.getElementById('slider')
const arrowLeft = document.querySelector('.arrow-left')
const arrowRight = document.querySelector('.arrow-right')
const heading = document.getElementById('title')
const image = document.getElementById('image')
const data = document.getElementById('data')
const dots = document.querySelector('.dots')
const sliderBg = document.getElementById('slider-container')

const images = [
    "marvels-agents-of-shield.jpg", "Once-Upon-A-Time-ABC.jpg", "theFlash.jpg"
]

const headings = [
    "Agent of S.H.I.E.L.D.", "Once Upon A Time", "The Flash"
]

const description = [
    "Action - Adventure - Drama - Sci-Fi - Thriller", 
    "Fantasy - Adventure - Drama - Romance", 
    "Superhero - Drama - Action"
]

let id = 0

function slideShow(id) {
    sliderBg.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url(img/${images[id]})`

    slider.style.backgroundImage = `url(img/${images[id]})`
    slider.style.backgroundSize = 'cover'

    slider.classList.add('image-fade')

    setTimeout(() => {
        slider.classList.remove('image-fade')
    }, 550)

    heading.innerText = headings[id]

    data.innerText = description[id]
    
}


arrowLeft.addEventListener('click', () => {
    if (id <= 0) {
        id = images.length - 1
    } else {
        id -= 1
    }

    slideShow(id)
})

arrowRight.addEventListener('click', () => {

    if (id >= images.length - 1) {
        id = 0
    } else {
        id += 1
    }

    slideShow(id)
})

slideShow(0)

Array.from(images).forEach(image => {
    dots.innerHTML += `
        <div class="dot"></div>
    `
})

const pages = document.getElementsByClassName('dot')

Array.from(pages).forEach((dot, idx) => {
    dot.addEventListener("click", () => {
 
        id = idx

        sliderBg.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url(img/${images[id]})`

        slider.style.backgroundImage = `url(img/${images[id]})`

            heading.innerText = headings[id]

            data.innerText = description[id]
   
    })
})