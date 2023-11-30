let sliderimage = document.querySelector(".book-saler");
let backbtn = document.querySelector("#leftbtn");
let nextbtn = document.querySelector("#rightbtn");

sliderimage.addEventListener("wheel", (eve)=>{
    eve.preventDefault();
    sliderimage.scrollLeft += eve.deltaY;
    // sliderimage.style.scrollBehavior = "auto";
});

function pushright(){
    sliderimage.scrollLeft += 1170;
}
function pushleft(){
    sliderimage.scrollLeft -= 1170;
    // sliderimage.style.scrollBehavior = "smooth";
}

// nextbtn.addEventListener("click", ()=>{
//     nextbtn.scrollLeft += 1200;
// });

// backbtn.addEventListener("click", ()=>{
//     backbtn.scrollLeft -= 1200;
// });
