var animationElements = document.querySelectorAll('.show-on-scroll')


function toggleAnimationInWindow(element){
    var rect = element.getClientRects()[0]
    var heightScreen = window.innerHeight
    
    if(!(rect.bottom < 0 || rect.top > heightScreen)){
        element.classList.add('start')
    }   else {
        element.classList.remove('start')
    }
}

window.onscroll = checkAnimation



function checkAnimation(){
    animationElements.forEach(el =>{
        toggleAnimationInWindow(el)
    })
}