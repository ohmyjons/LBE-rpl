const num = 5;
console.log(num)


const hello = "World";
console.log(hello)


let number = 5;
console.log(number)
number = 7
console.log(number)


// DOM (Document Object Model)
const newEl = document.createElement('div')
newEl.innerHTML = "Click"

const myCard = document.getElementById("card-one")
myCard.style.background = '#000';
myCard.style.color = '#ddd';
myCard.appendChild(newEl)


let clicked = 1;
const btnGoSmwhre = document.querySelector('.my-card a');
btnGoSmwhre.addEventListener('click', (e) => {
    e.target.innerHTML = `Clicked ${clicked}`;
    clicked++;
})

const mycard = $('.my-card')
console.log(mycard)
// const card = document.getElementsByClassName("my-card")[1];