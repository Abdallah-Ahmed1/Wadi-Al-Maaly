var borderMenuBtn = document.querySelector(".container");
navBar = document.querySelector('nav ul');
mainBody = document.querySelector('body');

/*borderMenuBtn.onclick=function(){
    borderMenuBtn.classList.toggle('change');
    navBar.classList.toggle('display');
    mainBody.classList.toggle('overflow');
}*/


function myFunction(){
    borderMenuBtn.classList.toggle('change');
    navBar.classList.toggle('display');
    mainBody.classList.toggle('overflow');
}

borderMenuBtn.addEventListener("click",myFunction);

//hide list
var liBtn = document.querySelector(".li");
function myFunction2(){
    liBtn.classList.toggle('change');
    navBar.classList.toggle('display');
    mainBody.classList.toggle('overflow');
}
liBtn.addEventListener("click",myFunction);
//




