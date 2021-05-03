import imgAssets from "../img/projects/**/*.jpg";

const navLinks = document.querySelectorAll('.nav-link')
const sidebarOpenBtn = document.querySelector('#sidebar-btn')
const sidebarCloseBtn = document.querySelector('#sidebar-close')
const sidebarContainer = document.querySelector('.sidebar-container')
const sectionTitles = document.querySelectorAll('.section-title')
const sections = document.querySelectorAll('.web-section')
const projectSelectors = document.querySelectorAll('.item-selector-header button')
const projectsArr = document.querySelectorAll('.project')
const modal = document.querySelector('.modal')

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



/***** SCROLL NAVIGATION FUNCTIONALLITY  */
function isSectionOnTheTop() {
    // Grab the height and y position
    sections.forEach((el, i) => {
        const vHeight = window.innerHeight || document.documentElement.clientHeight
        const yPositionInScreen = el.getBoundingClientRect().y
        const yPercentage = yPositionInScreen / vHeight
        // active range to be 0 => 40%
        if(yPercentage >= 0 && yPercentage <= 0.40){
            navLinks.forEach(navlink => navlink.classList.remove('active'))
            document.querySelector(`.${el.id}-link`).classList.add('active')
        }
    })
}
window.addEventListener('scroll', ()=>{
    isSectionOnTheTop()
})



/*******PROJECT SELECTOR FUNCTIONALITY */
projectSelectors.forEach(btn =>{
    btn.addEventListener('click', (e) => {
        const clickedTabType = e.target.getAttribute('tab')
    
        // remove the active class from all the btns and add it to the clicked btn
        projectSelectors.forEach(navlink => navlink.classList.remove('active'))
        e.target.classList.add('active')

        projectsArr.forEach(project => {
            const projectType = project.getAttribute('type')
            // if project has matching type, then add the show class 
            if(projectType === clickedTabType){
                project.classList.add('active')
            }
            // else if type is all, add active class
            else if(clickedTabType === 'all') {
                project.classList.add('active')
            }
            // else, remove the active class
            else{
                project.classList.remove('active')
            }
        })
    })
})

/*******MODAL FUNCTIONALITY */
const modalFeed = document.querySelector('.modal .picture-feed')
const modalClose = document.querySelector('.modal .close-btn')
const modalNext = document.querySelector('.modal .next')
const modalPrev = document.querySelector('.modal .prev')
const modalPictureCounter = document.querySelector('#modal-pic-number')

let modalIndex = 0;

// Add event listener to all of the images under the projects
document.querySelectorAll('.project .project-images img').forEach(img => {
    img.addEventListener('click', e => {
        // get parent of clicked target
        const parent = e.target.parentElement

        // select the minified img element
        const minImageEl = parent.querySelector('[minVersion]')

        // extract the file name of the min file
        const fileName = minImageEl.getAttribute('minVersion')
        const assetType = minImageEl.getAttribute('assetType')

        console.log(assetType,fileName)
        console.log(imgAssets)
        console.log(imgAssets[assetType][fileName])

        // change the src of the image to the new filename 
        minImageEl.src = imgAssets[assetType][fileName]

        // move the inside of parent to the modal
        modalFeed.innerHTML = parent.innerHTML

        // inser the html for the picture counter 
        modalPictureCounter.innerHTML = `1/${parent.children.length}`

        // make the modal active 
        modal.classList.add('active')
    })
})

modalClose.addEventListener('click', ()=>{
    modal.classList.remove('active')
})

modalNext.addEventListener('click', ()=>{
    changePictureInModal(1)
})

modalPrev.addEventListener('click', ()=>{
    changePictureInModal(-1)
})

// loop each image and set active the image that has the index 
function changePictureInModal(change){
    modalIndex += change
    const modalPictures = document.querySelectorAll('.modal .picture-feed img')
    
    //If number is out of bounds, correct it 
    if(modalIndex > modalPictures.length - 1) modalIndex = 0
    if(modalIndex < 0) modalIndex = modalPictures.length - 1

    modalPictures.forEach( (img, arrindex) =>{
        if(arrindex === modalIndex){
            img.classList.add('active')
            modalPictureCounter.innerHTML = `${arrindex + 1}/${modalPictureCounter.innerHTML.split('/')[1]}`
        } else {
            img.classList.remove('active')
        }
    })
}











