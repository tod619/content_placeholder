const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile_img')
const name = document.getElementById('name')
const date = document.getElementById('date')

const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_texts = document.querySelectorAll('.animated-bg-text')

setTimeout(getData, 2500)

function getData() {
    header.innerHTML = '<img src="img-1.jpg" alt="beach life">'
    title.innerText = 'Lorem ipsum dolor sit amet.'
    excerpt.innerText = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, aliquam.'
    profile_img.innerHTML = '<img src="person-1.jpg" alt="Author Image">'
    name.innerText = 'Jane Doe'
    date.innerText = 'March 25 2021'

    animated_bgs.forEach(bg => bg.classList.remove('.animated-bg'))
    animated_bg_texts.forEach(bg => bg.classList.remove('.animated-bg-text'))
}

