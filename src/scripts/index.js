import '../styles/index.scss'

// const h1 = document.getElementById('my-id')
// h1.innerHTML = 'Sajeeb Ahamed'
// console.log(h1);]

let header = document.getElementsByTagName('h1')
let para = document.getElementsByClassName('lead')
// console.log(para);

// let a = document.querySelector('.container')
// let a = document.querySelectorAll('h1')
// console.log(a);

// let btn = document.getElementById('myBtn')
let btn = $('#myBtn')
let colors = ['red', 'green', 'blue', 'yello']
let i = 0
btn.addEventListener('click', function() {
    let title =  $('#my-id')
    title.innerHTML = 'Hey! Man. Whats up??'
    title.style.backgroundColor = colors[i]

    if(i>= colors.length) {
        i = 0
    }
    else {
        i++
    }
})

function $(selector) {
    return document.querySelector(selector)
}

