const id=document.getElementById('imagen-3');
const id2=document.getElementById('texto-3');
const ro1=document.querySelector('.ro1');
const ro2=document.querySelector('.ro2');
document.addEventListener('DOMContentLoaded',()=>{
const observer=new IntersectionObserver(entries=>{
    if(entries[0].isIntersecting){
        if(id.classList.contains('animate__fadeInLeft')){
            id.classList.remove('animate__fadeInLeft')
        }
        else{id.classList.add('animate__fadeInLeft')
    }
    
    }

    else{
        if(id.classList.contains('animate__fadeInLeft')){
            id.classList.remove('animate__fadeInLeft')
        }

    }



})

const observer2=new IntersectionObserver(entries=>{
    if(entries[0].isIntersecting){
        if(id2.classList.contains('animate__fadeInRight')){
            id2.classList.remove('animate__fadeInRight')
        }
        else{id2.classList.add('animate__fadeInRight')
    }
    
    }

    else{
        if(id2.classList.contains('animate__fadeInRight')){
            id2.classList.remove('animate__fadeInRight')
        }

    }



})

const observer3=new IntersectionObserver(entries=>{
    if(entries[0].isIntersecting){
        if(ro1.classList.contains('animate__bounceIn')){
            ro1.classList.remove('animate__bounceIn')
        }
        else{ro1.classList.add('animate__bounceIn')
    }
    
    }

    else{
        if(ro1.classList.contains('animate__bounceIn')){
            ro1.classList.remove('animate__bounceIn')
        }

    }



})

const observer4=new IntersectionObserver(entries=>{
    if(entries[0].isIntersecting){
        if(ro2.classList.contains('animate__bounceIn')){
            ro2.classList.remove('animate__bounceIn')
        }
        else{ro2.classList.add('animate__bounceIn')
    }
    
    }

    else{
        if(ro2.classList.contains('animate__bounceIn')){
            ro2.classList.remove('animate__bounceIn')
        }

    }



})
observer3.observe(ro1);
observer4.observe(ro2);
observer2.observe(id2);

observer.observe(id);
    
})


const nav=document.getElementById('nav');
let ubicacionprincipal=window.pageYOffset;
window.onscroll=function(){
    console.log('hola')
let ubisecondary=window.pageYOffset;
if(ubicacionprincipal>=ubisecondary){
nav.style.top='0';
}
else{nav.style.top='-100px';}
ubicacionprincipal=ubisecondary;
}

