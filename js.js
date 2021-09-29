window.addEventListener('DOMContentLoaded', () =>{

    let iconElement = document.getElementById("icon");
    let menuItem = document.querySelectorAll('.menu');

    iconElement.addEventListener('click', showMenu);
    menuItem.forEach((item) =>{
        item.addEventListener('click',(showMenu));
    })


function showMenu() {
    let menuElement = document.getElementById("menu");
    menuElement.classList.toggle("hidden");
}



//Slider
$(document).ready(function(){
	$('.slider').slick({
		arrows:true,
		dots:true,
		slidesToShow:2,
		autoplay:true,
		speed:800,
		autoplaySpeed:800,
		responsive:[
			{
				breakpoint: 768,
				settings: {
					slidesToShow:2
				}
			},
			{
				breakpoint: 550,
				settings: {
					slidesToShow:1
				}
			}
		]
	});
});

//calk
/*
result = document.querySelector('.calculating__result');
let height, weight, age, sex, ratio;

if(localStorage.getItem('sex')){
    sex = localStorage.getItem('sex');
} else {
    sex = 'female';
    localStorage.setItem('sex', 'female')
}

if(localStorage.getItem('ratio')){
    ratio = localStorage.getItem('ratio');
} else {
    ratio = 1.2;
    localStorage.setItem('ratio', 1.2);
}

function setActivLocalStoreg(parenSelector, classActiv){
 const element = document.querySelectorAll(`${parenSelector} div`);
 element.forEach(elem =>{
     elem.classList.remove(classActiv);
     if(elem.getAttribute('id') === localStorage.getItem('sex')){
         elem.classList.add(classActiv);
     }
     if(elem.getAttribute('data-activity') === localStorage.getItem('ratio')){
        elem.classList.add(classActiv);
    }
 })
}

setActivLocalStoreg('#gender',"calculating__choose-item_active");
setActivLocalStoreg('.calculating__choose_big',"calculating__choose-item_active");


function calcTotal () {
if(!sex || !height || !weight || !age || !ratio){
    result.textContent = '____';
    return;
}

if(sex === "female") {
    result.textContent = Math.round((447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age)) * (ratio));
} else
    {
        result.textContent = Math.round((88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age)) * (ratio));
    }

}
calcTotal();

function getStaticInformation(parenSelector, activeClass){
    const element = document.querySelectorAll(`${parenSelector} div`);

    element.forEach(elem=>{
        elem.addEventListener('click', (Event) =>{
            if(Event.target.getAttribute('data-activity')){
               ratio = +Event.target.getAttribute('data-activity');
               localStorage.setItem('ratio', +Event.target.getAttribute('data-activity'))
            } else{
                sex = Event.target.getAttribute('id');
                localStorage.setItem('sex', Event.target.getAttribute('id'))
            }

            element.forEach(elem => {
                elem.classList.remove(activeClass);
            });

        Event.target.classList.add(activeClass);
         calcTotal();
        });    

    })

}
getStaticInformation('#gender',"calculating__choose-item_active");
getStaticInformation('.calculating__choose_big',"calculating__choose-item_active");

function dynamicInformation (selector) {
    const input = document.querySelector(selector);

    input.addEventListener('input', () =>{
      
        if(input.value.match(/\D/g)){
            input.style.border = '1px solid red';
        } else{
            input.style.border = 'none';
        }

        switch(input.getAttribute('id')) {
         case  'height':
                height = +input.value;
                break;
        
        case    'weight':
                 weight = +input.value;
                 break;

        case    'age':
                 age = +input.value;
                 break;
        }
        calcTotal();
    })
}
dynamicInformation('#height');
dynamicInformation('#weight');
dynamicInformation('#age');

*/

//Animation
const animItems = document.querySelectorAll(`._anim-items`)
if (animItems.length > 0) {
    window.addEventListener(`scroll`, animOnScroll);

    function animOnScroll() {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffSet = offset(animItem).top;
            const animStart = 4;
            let animItemPoint = window.innerHeight - animItemHeight / animStart
            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - 2* window.innerHeight / animStart
            }
            if ((pageYOffset > animItemOffSet - animItemPoint) && pageYOffset < (animItemOffSet + animItemHeight)) {
                animItem.classList.add(`_active`)
            } else {
                if (!(animItem.classList.contains(`_anim-no-hide`))) {
                    animItem.classList.remove(`_active`)
                }
            }
        }
    }

    function offset(el) {
        const rect = el.getBoundingClientRect()
        let scrollLeft = window.pageXOffset || document.documentElement.scrollLeft
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop
        return {top: rect.top + scrollTop, left: rect.left + scrollLeft}
    }

    setTimeout(() => {
        animOnScroll()
    }, 300)
}

//Модальне вікно
 const dataModal = document.querySelectorAll('[data-modal]');
 const modal = document.querySelector('.form_call');
 const closeModal = document.querySelector('.close');
 const screenWindow = window.matchMedia("(min-width: 1024px)");

 if (screenWindow.matches){
    function closeCall (){
        modal.classList.add('hide');
        modal.classList.remove('show');
        document.body.style.overflow ='';
     }
     
     dataModal.forEach(el =>{
         el.addEventListener('click', ()=>{
             modal.classList.add('show');
             modal.classList.remove('hide');
             document.body.style.overflow ='hidden';
         })
     })
     closeModal.addEventListener('click', () =>{
        closeCall ();
     })
     window.addEventListener('click', (e)=>{
        if(e.target === modal){
            closeCall ();
        }
     })
    
 };

})

