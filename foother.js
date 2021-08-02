
let btn1=document.querySelector('.show-btn-1');
let btn2=document.querySelector('.show-btn-2');
let btn3=document.querySelector('.show-btn-3');

btn1.style.display="block";
btn2.style.display="none";
btn3.style.display="none";

let showBtn1=document.querySelectorAll('.btnLocation')[0];
let showBtn2=document.querySelectorAll('.btnLocation')[1];
let showBtn3=document.querySelectorAll('.btnLocation')[2];

showBtn1.onclick=()=>{
    btn1.style.display="block";
    btn2.style.display="none";
    btn3.style.display="none"; 
};
showBtn2.onclick=()=>{
    btn2.style.display="block";
    btn1.style.display="none";
    btn3.style.display="none";
};
showBtn3.onclick=()=>{
    btn3.style.display="block";
    btn1.style.display="none";
    btn2.style.display="none";
};