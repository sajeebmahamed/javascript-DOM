// import '../styles/index.scss'

// // const h1 = document.getElementById('my-id')
// // h1.innerHTML = 'Sajeeb Ahamed'
// // console.log(h1);]

// let header = document.getElementsByTagName('h1')
// let para = document.getElementsByClassName('lead')
// // console.log(para);

// // let a = document.querySelector('.container')
// // let a = document.querySelectorAll('h1')
// // console.log(a);

// // let btn = document.getElementById('myBtn')
// let btn = $('#myBtn')
// let colors = ['red', 'green', 'blue', 'yello']
// let i = 0
// btn.addEventListener('click', function() {
//     let title =  $('#my-id')
//     title.innerHTML = 'Hey! Man. Whats up??'
//     title.style.backgroundColor = colors[i]

//     if(i>= colors.length) {
//         i = 0
//     }
//     else {
//         i++
//     }
// })

// function $(selector) {
//     return document.querySelector(selector)
// }

// let h1 = document.querySelector('#my-id')
// // h1.style.background = 'red'
// // h1.style.fontSize = '5rem'

// let h1Style = {
//     background: 'salmon',
//     fontSize: '30px',
//     padding: '3rem',
//     textAlign: 'center',
//     boxShadow: '10px 10px 15px #2d2d2d'
// }
// Object.assign(h1.style, h1Style)

// let pStyle = {
//     fontSize: '3rem',
//     fontWeight: 'bold',
//     color: 'green'
// }
// Object.assign($('p').style, pStyle)

// let myBtn = document.querySelector('#btn')
// console.log(myBtn);
// let myP = document.querySelector('#myP')
// console.log(myP);

// let isShown = false

// myBtn.addEventListener("click", function() {
//     if(isShown) {
//         myP.style.visibility = "hidden"
//         isShown = false
//         myBtn.innerHTML = "Show"
//     }
//     else {
//         myP.style.visibility = "visible"
//         isShown = true
//         myBtn.innerHTML = "Hide"
//     }
// })

let root = document.querySelector('#root')

let jumbotronDiv = document.createElement('div')
jumbotronDiv.className = 'jumbotron text-center'

jumbotronDiv.setAttribute('id', 'jmb')


let h1 = document.createElement('h1')
h1.className = 'display-2 py-5'
h1.innerHTML = '<strong> Hey! Man. What up!! </strong>'

jumbotronDiv.appendChild(h1)
root.appendChild(jumbotronDiv)

let nameField = document.querySelector('#nameField')
let ul = document.querySelector('#nameList')
nameField.addEventListener('keypress', function(event) {
    if(event.keyCode === 13) {
        let name = event.target.value
        createLi(ul, name)
        event.target.value = ''
    }
})
function createLi(ul, name) {
    let li = document.createElement('li')
    li.className = 'list-group-item d-flex'
    li.innerHTML = name

    let span = document.createElement('span')
    span.innerHTML = 'X'
    span.className = 'ml-auto'
    span.style.color = 'red'
    span.style.cursor = 'pointer'
    span.addEventListener('click', function() {
        ul.removeChild(li)
    })

    li.appendChild(span)
    ul.appendChild(li)
}