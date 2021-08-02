const nav =document.querySelector("#navigation");
const icon=document.querySelectorAll('.show')




function navScroll(){
  if(window.scrollY>120){
      nav.classList.add('active');
     icon[0].style.display="none"
     icon[1].style.display="block"
  }
  else{
      nav.classList.remove('active');
      icon[0].style.display="block"
     icon[1].style.display="none"
  }
}

window.addEventListener('scroll',navScroll);





// window.addEventListener('scroll', ()=>{
// if( pageYOffset>=100){
//     const elem=document.getElementsByClassName('navigation')[0];
//     elem.classList.add('active')
// }else{
//     const elem=document.getElementsByClassName('navigation')[0];
//     elem.classList.remove('active')
// }
   
// });


    














