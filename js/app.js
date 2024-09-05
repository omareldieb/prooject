// Getting all the sections 
const sections = document.querySelectorAll('section')
const sectionsArray = []

//looping over the sections and store their id and data-nav in an array
for(const section of sections){
    const sectionId = section.id
    const sectionData = section.dataset.nav
    sectionsArray.push({
        id: sectionId,
        data: sectionData
    })
}

const myNavContainer = document.querySelector('#navbar__list')
//looping over the array of the sections and creating the navbar elements
for(let i = 0; i < sectionsArray.length; i++){
    const myNavList = document.createElement('li')
    const myNav = document.createElement('a')
    myNav.href = `#${sectionsArray[i].id}`
    myNav.innerText = sectionsArray[i].data 
    myNav.classList.add('menu__link')
    myNavContainer.appendChild(myNavList)
    myNavList.appendChild(myNav)
}


//getting all the href elements in the navbar
const myNavBarItems = document.querySelectorAll('a')

//looping over the nav elements and adding a smooth scrolling to the sections
for(let i = 0; i < myNavBarItems.length; i++){
    myNavBarItems[i].addEventListener('click' , function(evt){
        evt.preventDefault()
        const targetId = this.getAttribute('href')
        const targetElement = document.querySelector(targetId)
        targetElement.scrollIntoView({behavior: "smooth"})

    })
}


//function for adding the active state to the section you scroll 
function addActive(){
//looping over the sections , getting the position if it in the screen and adding the active state   
    for(const section of sections){
        const sectionRect = section.getBoundingClientRect();
        if (sectionRect.top <= window.innerHeight && sectionRect.bottom >= 0) {
            section.classList.add('active');
        } else {
          section.classList.remove('active');
        }
    }
}
//adding an event listener to window to call func of adding active state when scrolling
window.addEventListener('scroll',addActive)
//getting the form and its container
const myCommentForm = document.querySelector('#comments')
const myCommentContainer = document.querySelector('#form__container') 

//adding an event listener to the form to call the func when submitng the form
myCommentContainer.addEventListener('submit',function(evt){
//stopping the default action to prevent refreshing the page
    evt.preventDefault()
//get the name , email and comment that the user wrote 
    const myName = document.getElementById('name');
    const nameValue = myName.value
    
    const email = document.getElementById('email');
    const emailValue = email.value
    
    const comment = document.getElementById('comment');
    const commentValue = comment.value

//checking if all the inputs are filled
   if(nameValue ===  "" || emailValue ===  "" || commentValue ===  ""){
    alert('Please fill out all fields')
    return;
}
//checking if the mail is valid 
    if(!emailValue.includes('@')){
        alert('check your email address')
        return;
    }

//displaying the comment of the user after the form 
    const myMessage = document.createElement('div')
    const myHr = document.createElement('hr')

    myMessage.innerHTML = `<p>${nameValue}</p>
    <p>${emailValue}</p>
    <p>${commentValue}</p>`

   myCommentContainer.appendChild(myMessage)
   myCommentContainer.appendChild(myHr)
//clearing the form after submitting
   myCommentContainer.reset()
})




