const icon =document.getElementById('icon');
const icon2 = document.querySelector('.fa.fa-bars');

const darktheme = document.getElementById('mode');

darktheme.addEventListener('click', () => {
    document.body.classList.toggle('theme');
})

icon.addEventListener('click', ()=>{
    document.body.classList.toggle('bouton');
    
   
        
})

icon2.addEventListener('click', (icon2) => {

    icon2.target.classList.toggle("fa-times");
    icon2.target.classList.toggle("fa fa-bars");


})

