


let words = document.querySelectorAll(".word")

words.forEach((word) =>{
    let letters = word.textContent.split("") 
    word.textContent="";
    letters.forEach((letter)=>{
        let span = document.createElement("span")
        span.textContent = letter
        span.className = "letter"
        word.append(span)
    })
})
 
let currentWordIndex = 0;
let maxWordIndex = words.length -1;
words[currentWordIndex].style.opacity = "1";

let changeText = ()=>{
    let currentWord = words[currentWordIndex]
    let nextWord = currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1]
    Array.from(currentWord.children).forEach((letter,i)=>{
        setTimeout(() => {
            letter.className = "letter out"
        },i* 80);
    });
nextWord.style.opacity="1";
Array.from(nextWord.children).forEach((letter,i)=>{
    letter.className = "letter behind"
    setTimeout(() => {
        letter.className ="letter in";
    },340 + i * 80);
})
currentWordIndex = currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
}
changeText()
setInterval(changeText,3000)

// circle skill/////////////////////////
const circles = document.querySelectorAll('.circle')
circles.forEach(elem=>{
    var dots = elem.getAttribute("data-dots")
    var marked = elem.getAttribute("data-percent")
    var percent = Math.floor(dots*marked/100)
    var points = "";
    var rotate = 360 / dots;


    for(let i = 0; i < dots; i++){
        points += `<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>` 
    }
    elem.innerHTML = points
    const pointsMarked = elem.querySelectorAll('.points')
    for(let i = 0; i < percent; i++){
        pointsMarked[i].classList.add('marked')
    }

})




// videdit function



// blank
let all = document.querySelector(".all")
let editing = document.querySelector(".title-editing")
let animation = document.querySelector(".title-animation")
let design = document.querySelector(".title-design")

let graph = document.querySelector("#graph")
let graph1 = document.querySelector("#graph1")
let anima = document.querySelector("#anima")
let anima1 = document.querySelector("#anima1")
let anima2= document.querySelector("#anima2")
let edit= document.querySelector("#edit")

let active = document.querySelector(".active")
let active1 = document.querySelector(".active1")
let active2 = document.querySelector(".active2")
let active3 = document.querySelector(".active3")
active.addEventListener("click", () =>{
active.style.color = "rgb(202, 10, 255)"
active1.style.color = "white"
active2.style.color = "white"
active3.style.color = "white"
})
active1.addEventListener("click", () =>{
active.style.color = "white"
active1.style.color = "rgb(202, 10, 255)"
active2.style.color = "white"
active3.style.color = "white"
})
active2.addEventListener("click", () =>{
active.style.color = "white"
active1.style.color = "white"
active2.style.color = "rgb(202, 10, 255)"
active3.style.color = "white"
})
active3.addEventListener("click", () =>{
    active.style.color = "white"
    active1.style.color = "white"
    active2.style.color = "white"
    active3.style.color = "rgb(202, 10, 255)"
})






editing.addEventListener("click", () =>{
    graph.style.display = "none"
    graph1.style.display = "none"
    anima.style.display = "none"
    edit.style.display = "block"
    anima1.style.display = "none"
    anima2.style.display = "none"
})
animation.addEventListener("click", () =>{
    graph.style.display = "none"
    graph1.style.display = "none"
    edit.style.display = "none"
    anima.style.display = "block"
    anima1.style.display = "block"
    anima2.style.display = "block"
})
design.addEventListener("click", () =>{
    graph.style.display = "block"
    graph1.style.display = "block"
    edit.style.display = "none"
    anima.style.display = "none"
    anima1.style.display = "none"
    anima2.style.display = "none"
})
all.addEventListener("click", () =>{
    graph.style.display = "block"
    edit.style.display = "block"
    graph1.style.display = "block"
    anima.style.display = "block"
    anima1.style.display = "block"
    anima2.style.display = "block"
})


// document.addEventListener("DOMContentLoaded", () => {
//     const buttons = document.querySelectorAll(".fillter-button .button");
//     const portfolioItems = document.querySelectorAll(".port-box");

//     buttons.forEach(button => {
//         button.addEventListener("click", () => {
//             const filter = button.classList[1]; // Get second class name (category)

//             portfolioItems.forEach(item => {
//                 // Check if the item's ID matches the button's class (filter category)
//                 if (filter === "all" || item.id.includes(filter)) {
//                     item.style.display = "block"; // Show matching items
//                 } else {
//                     item.style.display = "none"; // Hide others
//                 }
//             });
//         });
//     });
// });



















// blank


// active menu
let menu = document.querySelectorAll('header ul li a')
let section = document.querySelectorAll('section')

function activemenu(){
    let len = section.length
    while(--len && window.scrollY + 97 <section[len].offsetTop){}
        menu.forEach(sec => sec.classList.remove("active"));
        menu[len].classList.add("active")
}
activemenu()
window.addEventListener("scroll",activemenu)
// active menu
// sticky navbar
const header = document.querySelector("header")
window.addEventListener("scroll",function(){
    header.classList.toggle("sticky",this.window.scrollY > 50)
})
// sticky navbar
// toggle icon
let menuIcon = document.querySelector("#menu-icon")
let navlist = document.querySelector(".navlist")

menuIcon.onclick = ()=>{
    menuIcon.classList.toggle("bx-x")
    navlist.classList.toggle("open")
}
window.onscroll = ()=>{
    menuIcon.classList.remove("bx-x")
    navlist.classList.remove ("open")
}
// toggle icon
// paralax
const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show-items");
        }else{
            entry.target.classList.remove("show-items")
        }
    })
})
const scrollScale = document.querySelectorAll(".scroll-scale")
scrollScale.forEach((el)=>observer.observe(el))

const scrollBottom = document.querySelectorAll(".scroll-bottom")
scrollBottom.forEach((el)=>observer.observe(el))

const scrollTop = document.querySelectorAll(".scroll-top")
scrollTop.forEach((el)=>observer.observe(el))

// const clicked = document.querySelectorAll(".submit")
// clicked.addEventListener('click',() =>{
//     document.style.color = red
// })
    
// paralax





// ,break points.......................................................................................................send masssage
// 



const contactForm = document.querySelector('.contact-form');

let nama = document.getElementById('name');
let email = document.getElementById('email');
let subject = document.getElementById('subject');
let phone = document.getElementById('phone');
let message = document.getElementById('message');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let formData = {
        name: nama.value,
        email: email.value,
        subject: subject.value,
        phone: phone.value,
        message: message.value
    };

    let xhr = new XMLHttpRequest();
    xhr.open('POST', '/');
    xhr.setRequestHeader('Content-Type', 'application/json'); // Fixed typo
    xhr.onload = function () {
        console.log(xhr.responseText);
        if (xhr.responseText == 'success') {
            alert('Email sent');
            nama.value = '';
            email.value = '';
            subject.value = '';
            phone.value = '';
            message.value = '';
        } else {
            alert('Something went wrong');
        }
    };

    xhr.send(JSON.stringify(formData));
});