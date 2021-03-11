const navLinks = document.querySelectorAll('.nav-link');
const sidebarOpenBtn = document.querySelector('#sidebar-btn')
const sidebarCloseBtn = document.querySelector('#sidebar-close')
const sidebarContainer = document.querySelector('.sidebar-container')

// Navlink method to switch active
navLinks.forEach(link =>{
    link.addEventListener('click', (e) => {
        navLinks.forEach(navlink => navlink.classList.remove('active'))
        e.target.classList.add('active')
    })
})

/****** SIDE BAR FUNCTION *****/
const toggleContainer = () => sidebarContainer.classList.toggle('active')

// Btn click that open / close of sidebar
sidebarOpenBtn.addEventListener('click',toggleContainer)
sidebarCloseBtn.addEventListener('click', toggleContainer)
sidebarContainer.querySelectorAll('li a').forEach( link => {
    link.addEventListener('click', toggleContainer)
})

// Touch outside of sidebar container causes it to close 
window.addEventListener('touchstart', e => {
    const xPosition = e.touches[0].clientX;
    const screenWidth = screen.width;

    // only if the touch is on the regulat app area and if container is active, then remove class
    if(sidebarContainer.classList.contains('active') && xPosition < screenWidth - 180){
        sidebarContainer.classList.remove('active')
    }
})



/******  IMAGE CAROUSEL *****/
// Window is smaller than 900px
const widthMatch = window.matchMedia("(max-width: 900px)");

// get card container, cards array & buttons 
const cardContainer = document.querySelector('.card-container')
const cardsArr = document.querySelectorAll('.card')
const nextBtn = document.querySelector('.next')
const prevBtn = document.querySelector('.prev')

// declare index of card and interval 
let cardIndex = 0

// Add an interval so it runs every 2seconds
let interval = setInterval(run,3500)

function run(){
    if(widthMatch.matches){
        cardIndex++
        changeCard()
    }
}

// Change the transform property on the card 
// Check the index for edges (first and last)
function changeCard(){  
    // if index is at end of list 
    if(cardIndex > cardsArr.length - 1){
        cardIndex = 0
    } 
    // if index is negative, switch to 1st
    else if(cardIndex < 0){
        cardIndex = cardsArr.length - 1
    }

    // change the x positon of the card conmtainer
    cardContainer.style.transform = `translateX(${-cardIndex * 300}px)`
}


// event listeners for buttons 
nextBtn.addEventListener('click', () =>{
    cardIndex++
    changeCard()
})
prevBtn.addEventListener('click', () =>{
    cardIndex--
    changeCard()
})

// mm in the function arg is the matchMedia object, passed back into the function
widthMatch.addEventListener('change', function(mm) {
    cardIndex = 0
    changeCard()
});


