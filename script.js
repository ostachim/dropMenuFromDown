const menuButton = document.querySelector(".icon");


function menuUp(){
    const startAct = document.querySelectorAll(".off");
    for(i=0; i < startAct.length; i++)
    {
        startAct[i].classList.toggle("active");
    }

}

menuButton.addEventListener("click", menuUp);