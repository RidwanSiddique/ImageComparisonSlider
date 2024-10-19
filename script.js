const image = document.querySelector(".image render-1");
const slider = document.querySelector(".slider input");
const drag = document.querySelector(".slider dragLine");

slider.oninput = () =>{
    let sliderVal = slider.ariaValueMax;
    drag.style.left = sliderVal + "%";
    image.style.width = sliderVal + "%";
}