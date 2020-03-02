// variables
const body = document.querySelector('body');

const hambuger = document.querySelector('.hambuger__menu');

const nav = document.querySelector('.navigation');

// variables for slider
const circles = document.querySelectorAll('.circle');

const block = document.querySelectorAll('.card');

const testemonials = document.querySelector('.testimonials');





hambuger.addEventListener('click', () => {
    hambuger.classList.toggle('change');
    body.classList.toggle('change');
    nav.classList.toggle('change');
});

// fucntion checks if class exit
// if it does it removes it
const check = (arr, name) =>{
    for(let i = 0; i < arr.length; i++){
        if(arr[i].classList.contains(name)){
            arr[i].classList.remove(name);
        }
    }  
}

// loops for active classes
circles.forEach( circle => circle.addEventListener('click', () =>{
   
    check(circles, 'active');
    
    let attribute = circle.getAttribute('data-on'); // get current slide aattribute
    let currentBlock = document.querySelector(`.card[data-active ="${attribute}"]`);
        
    circle.classList.add('active'); //add active class on current slide
 
    check(block, 'isActive')
   
    currentBlock.classList.add('isActive'); //add isActive class on current card
      
}))


