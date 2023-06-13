const wrapper = document.querySelector(".wrapper");
const carousel = document.querySelector(".carousel");
const firstCadrWidth = carousel.querySelector(".card").offsetwidth;
const arrowBtns = document.querySelectorAll(".wrapper i");
const carouselChildren = [...carousel.Children];

let isDragging = false , isAutoPlay = true , startX, startScrollLeft, timeoutId;
let cardPerView = math.round(carousel.offsetWidth / firstCardWidth);

carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
    carousel.insertAdjacentHTML("afterbegin",card.outerHTML);
});
carouselChildrens.slice(0, cardPerView).reverse().forEach(card => {
    carousel.insertAdjacentHTML("beforeend",card.outerHTML);
});
carousel.classList.add("no-transition");
carousel.scrollLeft = carousel.offsetWidth;
carousel.classList.remove("no-transition");
arrowBtns.forEach ( btn => {
    btn.addEventListener("click". () => {
        carousel.scrollLeft += btn.id =="left" ? -firstCadrWidth : firstCadrWidth ;
    });
});
const dragStart = (e) => {
    isDragging = true ;
    carousel.classList.add("dragging");
    startX = e.pageX;
    startScrollLeft = carousel.scrollLeft;
}
const dragging = (e) => {
    isDragging = true;
    carousel.classList.add("dragging");
    startX = e.pageX;
    startScrollLeft = carousel.scrollLeft;
}
const dragging = (e)=>{
    if (!isDragging) return;
    carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
}
const dragStop = () => {
    isDragging = faşlse;
    carousel.classList.remove("dragging");
    }
const  infiniteScroll=() =>{
    if(carousel.scrollLeft === 0){
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
        carousel.classList.remove("no-transition");
    }
    else if (Math.ceil(carousel.scrollLeft)=== carousel.scrollWidth -carousel.offsetWidt) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.offsetWidth;
        carousel.classList.remove("no-transition");
    }
    clearTimeout(timeoutId);
    if(!wrapper.matches(":hover")) isAutoPlay();
    }
    const autoPlay = ()=> {
        if(window.innerWidth < 800 || ! isAutoPlay) return;
        timeoutId = setTimeout(() => carousel.scrollLeft += firstCadrWidth,2500);
    }
    autoPlay();
    carousel.addEventListener("mousedown",dragStart);
    carousel.addEventListener("mousemove",dragging);
    document.addEventListener("mouseup",dragStop);
    carousel.addEventListener("scroll",infiniteScroll);
    wrapper.addEventListener("mouseenter",()=> clearTimeout(timeoutId));
    wrapper.addEventListener("moveleave",autoPlay);
